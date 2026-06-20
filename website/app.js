/* ═══════════════════════════════════════════════════════════════
   HECA Dashboard — Interactive Application (Light Theme)
   Dual Analysis: IRR (55 images) + Main Dataset (320 images)
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── IRR Image ID Set (from data.js) ─── */
  const IRR_IDS = new Set((HECA_DATA.irrImageIds || []).map(id => id.toUpperCase()));

  const state = {
    activeAnalysis: 'irr', // 'irr' or 'main'
    allImages: [],
    filteredImages: [],
    currentPage: 1,
    perPage: 24,
    currentView: 'gallery',
    activeStage: '',
    searchQuery: '',
    filterEnergy: '',
    filterSeverity: '',
    filterControl: '',
    sortField: 'imageId',
    sortDir: 'asc',
    modalImageIndex: -1,
    tableCurrentPage: 1,
    tablePerPage: 30,
    fullTablePage: 1,
    fullTablePerPage: 40,
    fullSortField: 'imageId',
    fullSortDir: 'asc',
  };

  /* ─── Chart references for cleanup ─── */
  let chartInstances = {};

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function getEnergyClass(energy) {
    // Handle compound types like "Gravity / Motion", "Motion (Biological)"
    const raw = (energy || '').trim().toLowerCase();
    const e = raw.split('/')[0].split('(')[0].split(',')[0].trim();
    const map = {
      gravity: 'energy-gravity', 'gravity ': 'energy-gravity',
      mechanical: 'energy-mechanical', electrical: 'energy-electrical',
      motion: 'energy-motion', pressure: 'energy-pressure',
      temperature: 'energy-temperature', thermal: 'energy-temperature',
      chemical: 'energy-chemical', biological: 'energy-biological',
      sound: 'energy-sound', sharp: 'energy-mechanical',
      radiation: 'energy-temperature', elastic: 'energy-mechanical',
    };
    return map[e] || 'energy-gravity';
  }

  function getStageClass(stage) {
    return `stage-${(stage || '').toLowerCase().replace(/\s+/g, '-')}`;
  }

  function getImageHazards(imageId) {
    return getActiveHazards().filter(h => h.imageId.toUpperCase() === imageId.toUpperCase());
  }

  /* ─── Subset Helpers ─── */
  function isIrrImage(imgId) {
    return IRR_IDS.has(imgId.toUpperCase());
  }

  function getActiveImages() {
    // For main (320-image) analysis: return ALL images in the images block.
    // images{} now contains ONLY the 320 main-dataset images.
    // For IRR (55-image) analysis: filter to only irrImageIds.
    if (state.activeAnalysis === 'irr') {
      return Object.values(HECA_DATA.images)
        .filter(img => isIrrImage(img.id))
        .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
    }
    return Object.values(HECA_DATA.images)
      .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  }

  function getActiveHazards() {
    // Same logic: IRR filters by irrImageIds, main returns everything.
    if (state.activeAnalysis === 'irr') {
      return HECA_DATA.hazards.filter(h => isIrrImage(h.imageId));
    }
    return HECA_DATA.hazards;
  }

  function getActiveStats() {
    return state.activeAnalysis === 'irr' ? HECA_DATA.irrStatistics : HECA_DATA.mainStatistics;
  }

  /* ─── Init ─── */
  function init() {
    switchAnalysis('irr');
    populateHeroStats();
    renderGraphs();
    bindEvents();
    setupNavScroll();
  }

  function rebuildForAnalysis() {
    state.allImages = getActiveImages();
    state.currentPage = 1;
    state.tableCurrentPage = 1;
    state.fullTablePage = 1;
    state.activeStage = '';
    state.searchQuery = '';
    state.filterEnergy = '';
    state.filterSeverity = '';
    state.filterControl = '';
    state.currentView = 'gallery';

    // Reset filter UI
    $('#searchInput').value = '';
    $('#filterEnergy').value = '';
    $('#filterSeverity').value = '';
    $('#filterControl').value = '';
    $('#viewGallery').classList.add('active');
    $('#viewTable').classList.remove('active');
    $('#galleryGrid').style.display = '';
    $('#pagination').style.display = '';
    $('#dataTableView').style.display = 'none';

    populateFilters();
    renderKPIs();
    renderStageTabs();
    applyFilters();
    renderCharts();
    renderFullDataTable();
    renderAnalysisBanner();
    updateSectionTitles();

    // Analysis 1: Gallery + Comparison + IRR Charts
    // Analysis 2: Overview + Gallery + Analytics + Full Data
    if (state.activeAnalysis === 'irr') {
      $('#irrComparison').style.display = '';
      $('#overview').style.display = 'none';
      $('#gallery').style.display = '';
      $('#analytics').style.display = 'none';
      $('#data-section').style.display = 'none';
      $$('#analysisContent > .section-divider').forEach(el => el.style.display = 'none');
      renderIRRComparison();
      renderIRRCharts();
    } else {
      $('#irrComparison').style.display = 'none';
      $('#overview').style.display = '';
      $('#gallery').style.display = '';
      $('#analytics').style.display = '';
      $('#data-section').style.display = '';
      $$('#analysisContent > .section-divider').forEach(el => el.style.display = '');
    }

    // Fade-in animation
    const content = $('#analysisContent');
    content.classList.remove('analysis-fade-enter');
    void content.offsetWidth; // force reflow
    content.classList.add('analysis-fade-enter');
  }

  function switchAnalysis(analysis) {
    state.activeAnalysis = analysis;

    // Update selector cards
    const irrCard = $('#selectIRR');
    const mainCard = $('#selectMain');
    if (analysis === 'irr') {
      irrCard.classList.add('active');
      mainCard.classList.remove('active');
    } else {
      mainCard.classList.add('active');
      irrCard.classList.remove('active');
    }

    rebuildForAnalysis();
  }

  function renderAnalysisBanner() {
    const banner = $('#analysisBanner');
    const icon = $('#bannerIcon');
    const title = $('#bannerTitle');
    const subtitle = $('#bannerSubtitle');

    banner.classList.remove('irr-theme', 'main-theme');

    if (state.activeAnalysis === 'irr') {
      banner.classList.add('irr-theme');
      icon.textContent = 'A1';
      title.innerHTML = 'Analysis 1: Comparison Study';
      subtitle.textContent = '55 images \u00B7 3 Researchers \u00B7 Inter-Rater Comparison';
    } else {
      banner.classList.add('main-theme');
      icon.textContent = 'A2';
      title.innerHTML = 'Analysis 2: Main Dataset';
      subtitle.textContent = '320 images · Two Researchers · Main Study';
    }
  }

  function updateSectionTitles() {
    const stats = getActiveStats();
    const n = stats.totalImages;

    if (state.activeAnalysis === 'irr') {
      $('#galleryTitle').textContent = 'Image Gallery: Comparison Study';
      $('#gallerySubtitle').textContent = `Browse and analyze ${n} images reviewed by all 3 researchers`;
    } else {
      $('#overviewTitle').textContent = 'Main Dataset Overview';
      $('#overviewSubtitle').textContent = `Key safety metrics across ${n} construction site images`;
      $('#galleryTitle').textContent = 'Image Gallery: Main Dataset';
      $('#gallerySubtitle').textContent = `Browse and analyze ${n} images with hazard data`;
      $('#analyticsTitle').textContent = 'Analytics: Main Dataset';
      $('#analyticsSubtitle').textContent = `Hazard distributions and safety performance metrics (${n} images)`;
      $('#dataTitle').textContent = 'Main Dataset: Complete Hazard Data';
      $('#dataSubtitle').textContent = `All hazard observations across ${n} images`;
    }
  }

  /* ─── Hero Stats ─── */
  function populateHeroStats() {
    const s = HECA_DATA.mainStatistics;
    $('#heroImages').textContent  = s.totalImages.toLocaleString();
    $('#heroHazards').textContent  = s.totalHazards.toLocaleString();
    $('#heroHighEnergy').textContent = s.highEnergy.toLocaleString();
    // Safety Score = direct controls present / high-energy hazards * 100
    const safetyScore = s.highEnergy > 0
      ? (Math.round((s.totalSuccess / s.highEnergy) * 10000) / 100).toFixed(2)
      : '0.00';
    $('#heroScore').textContent = safetyScore + '%';
  }

  /* ─── KPIs ─── */
  function renderKPIs() {
    const s = getActiveStats();
    animateNumber($('#kpiImages'), s.totalImages);
    animateNumber($('#kpiHazards'), s.totalHazards);
    animateNumber($('#kpiHighEnergy'), s.highEnergy);

    // Safety Score = direct controls present / high-energy hazards * 100
    const safetyScore = s.highEnergy > 0
      ? (Math.round((s.totalSuccess / s.highEnergy) * 10000) / 100).toFixed(2)
      : '0.00';
    $('#kpiHecaScore').textContent = safetyScore + '%';

    // DC Rate = totalSuccess / (totalSuccess + totalExposure)
    const total = s.totalSuccess + s.totalExposure;
    const dcRate = total > 0 ? ((s.totalSuccess / total) * 100).toFixed(1) : '0.0';
    $('#kpiDirectControl').textContent = dcRate + '%';
  }

  function animateNumber(el, target) {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 35));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current.toLocaleString();
    }, 30);
  }

  /* ─── Filters ─── */
  function populateFilters() {
    const sel = $('#filterEnergy');
    // Clear existing (keep the first "All" option)
    while (sel.options.length > 1) sel.remove(1);
    const hazards = getActiveHazards();
    const types = [...new Set(hazards.map(h => h.energyType).filter(Boolean))].sort();
    types.forEach(et => {
      const opt = document.createElement('option');
      opt.value = et; opt.textContent = et;
      sel.appendChild(opt);
    });
  }

  function applyFilters() {
    const q = state.searchQuery.toLowerCase();

    state.filteredImages = state.allImages.filter(img => {
      if (state.activeStage && img.stage !== state.activeStage) return false;

      const hazards = getImageHazards(img.id);
      if (state.filterEnergy && !hazards.some(h => h.energyType.trim().toLowerCase() === state.filterEnergy.toLowerCase())) return false;
      if (state.filterSeverity && !hazards.some(h => h.severity === state.filterSeverity)) return false;
      if (state.filterControl && !hazards.some(h => h.directControl.toLowerCase() === state.filterControl.toLowerCase())) return false;

      if (q) {
        const idMatch = img.id.toLowerCase().includes(q);
        const hazardMatch = hazards.some(h =>
          h.hazardDescription.toLowerCase().includes(q) ||
          h.activityType.toLowerCase().includes(q) ||
          h.energyType.toLowerCase().includes(q) ||
          h.comments.toLowerCase().includes(q)
        );
        if (!idMatch && !hazardMatch) return false;
      }
      return true;
    });

    state.currentPage = 1;
    state.tableCurrentPage = 1;

    if (state.currentView === 'gallery') {
      renderGallery(); renderPagination();
    } else {
      renderDataTable(); renderTablePagination();
    }

    $('#filterCount').textContent = `${state.filteredImages.length} of ${state.allImages.length} images`;

    const noRes = $('#noResults'), grid = $('#galleryGrid');
    if (state.filteredImages.length === 0 && state.currentView === 'gallery') {
      noRes.style.display = 'block'; grid.style.display = 'none';
    } else {
      noRes.style.display = 'none'; grid.style.display = '';
    }
  }

  /* ─── Stage Tabs ─── */
  function renderStageTabs() {
    const container = $('#stageTabs');
    // Clear all tabs except the first "All Stages"
    while (container.children.length > 1) container.removeChild(container.lastChild);
    $('#countAll').textContent = state.allImages.length;
    // Reset active state
    container.children[0].classList.add('active');

    const stages = HECA_DATA.lifecycleStages;
    stages.forEach(stage => {
      const count = state.allImages.filter(i => i.stage === stage).length;
      if (count === 0) return; // skip empty stages for this subset
      const btn = document.createElement('button');
      btn.className = 'stage-tab'; btn.dataset.stage = stage;
      btn.innerHTML = `${stage} <span class="count">${count}</span>`;
      container.appendChild(btn);
    });
  }

  /* ─── Gallery ─── */
  function renderGallery() {
    const grid = $('#galleryGrid');
    const start = (state.currentPage - 1) * state.perPage;
    const pageImages = state.filteredImages.slice(start, start + state.perPage);
    grid.innerHTML = '';

    pageImages.forEach((img, idx) => {
      const hazards = getImageHazards(img.id);
      const highCount = hazards.filter(h => h.severity === 'High').length;
      const card = document.createElement('div');
      card.className = 'image-card fade-in';
      card.style.animationDelay = `${idx * 0.02}s`;
      card.dataset.imageId = img.id;

      const hasFile = !img.noFile && img.thumb_path;
      const thumbContent = hasFile
        ? `<img src="${img.thumb_path}" alt="${img.id}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.querySelector('.no-file-badge') && (this.parentElement.querySelector('.no-file-badge').style.display='flex')">`
        : `<div class="no-file-badge">No image file</div>`;

      card.innerHTML = `
        <div class="image-card-thumb">
          ${thumbContent}
          <div class="image-card-overlay"><span>View analysis</span></div>
        </div>
        <div class="image-card-body">
          <div class="image-card-header">
            <span class="image-card-id">${img.id}</span>
            <span class="image-card-stage ${getStageClass(img.stage)}">${img.stage}</span>
          </div>
          <div class="image-card-meta">
            <span class="meta-chip"><span class="dot-indicator dot-hazard"></span>${hazards.length} hazards</span>
            <span class="meta-chip"><span class="dot-indicator dot-high"></span>${highCount} high-energy</span>
            ${img.hasExposure ? '<span class="meta-chip"><span class="dot-indicator dot-exposure"></span>Exposure</span>' : ''}
          </div>
        </div>`;

      card.addEventListener('click', () => {
        const globalIdx = state.filteredImages.findIndex(i => i.id === img.id);
        openImageModal(globalIdx);
      });
      grid.appendChild(card);
    });
  }

  /* ─── Pagination ─── */
  function renderPagination() {
    const container = $('#pagination');
    const totalPages = Math.ceil(state.filteredImages.length / state.perPage);
    container.innerHTML = '';
    if (totalPages <= 1) return;

    container.appendChild(createPageBtn('\u2190 Prev', state.currentPage > 1, () => {
      state.currentPage--; renderGallery(); renderPagination(); scrollToSection('gallery');
    }));

    getPageNumbers(state.currentPage, totalPages).forEach(p => {
      if (p === '...') {
        const el = document.createElement('span'); el.className = 'page-info'; el.textContent = '\u2026';
        container.appendChild(el);
      } else {
        const btn = createPageBtn(p, true, () => {
          state.currentPage = p; renderGallery(); renderPagination(); scrollToSection('gallery');
        });
        if (p === state.currentPage) btn.classList.add('active');
        container.appendChild(btn);
      }
    });

    container.appendChild(createPageBtn('Next \u2192', state.currentPage < totalPages, () => {
      state.currentPage++; renderGallery(); renderPagination(); scrollToSection('gallery');
    }));
  }

  function createPageBtn(text, enabled, onClick) {
    const btn = document.createElement('button');
    btn.className = 'page-btn'; btn.textContent = text; btn.disabled = !enabled;
    if (enabled) btn.addEventListener('click', onClick);
    return btn;
  }

  function getPageNumbers(current, total) {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, 4, '...', total];
    if (current >= total - 2) return [1, '...', total - 3, total - 2, total - 1, total];
    return [1, '...', current - 1, current, current + 1, '...', total];
  }

  /* ─── Inline Data Table ─── */
  function renderDataTable() {
    const tbody = $('#dataTableBody');
    const imageIds = new Set(state.filteredImages.map(i => i.id.toUpperCase()));
    const filteredHazards = getActiveHazards().filter(h => imageIds.has(h.imageId.toUpperCase()));

    filteredHazards.sort((a, b) => {
      let va = a[state.sortField] || '', vb = b[state.sortField] || '';
      if (typeof va === 'string') va = va.toLowerCase();
      if (typeof vb === 'string') vb = vb.toLowerCase();
      if (va < vb) return state.sortDir === 'asc' ? -1 : 1;
      if (va > vb) return state.sortDir === 'asc' ? 1 : -1;
      return 0;
    });

    const start = (state.tableCurrentPage - 1) * state.tablePerPage;
    const page = filteredHazards.slice(start, start + state.tablePerPage);
    tbody.innerHTML = '';
    page.forEach(h => {
      const tr = document.createElement('tr');
      tr.addEventListener('click', () => {
        const idx = state.filteredImages.findIndex(i => i.id.toUpperCase() === h.imageId.toUpperCase());
        if (idx >= 0) openImageModal(idx);
      });
      tr.innerHTML = buildHazardRow(h);
      tbody.appendChild(tr);
    });
    state._totalTableRows = filteredHazards.length;
    renderTablePagination();
  }

  function renderTablePagination() {
    const container = $('#tablePagination');
    const total = state._totalTableRows || 0;
    const totalPages = Math.ceil(total / state.tablePerPage);
    container.innerHTML = '';
    if (totalPages <= 1) return;
    container.appendChild(createPageBtn('\u2190 Prev', state.tableCurrentPage > 1, () => { state.tableCurrentPage--; renderDataTable(); }));
    const info = document.createElement('span'); info.className = 'page-info';
    info.textContent = `Page ${state.tableCurrentPage} of ${totalPages} (${total} rows)`;
    container.appendChild(info);
    container.appendChild(createPageBtn('Next \u2192', state.tableCurrentPage < totalPages, () => { state.tableCurrentPage++; renderDataTable(); }));
  }

  /* ─── Full Data Table ─── */
  function renderFullDataTable() {
    const tbody = $('#fullDataTableBody');
    const allHazards = [...getActiveHazards()];

    allHazards.sort((a, b) => {
      let va = a[state.fullSortField] || '', vb = b[state.fullSortField] || '';
      if (typeof va === 'string') va = va.toLowerCase();
      if (typeof vb === 'string') vb = vb.toLowerCase();
      if (va < vb) return state.fullSortDir === 'asc' ? -1 : 1;
      if (va > vb) return state.fullSortDir === 'asc' ? 1 : -1;
      return 0;
    });

    const start = (state.fullTablePage - 1) * state.fullTablePerPage;
    const page = allHazards.slice(start, start + state.fullTablePerPage);
    tbody.innerHTML = '';
    page.forEach(h => {
      const tr = document.createElement('tr');
      tr.addEventListener('click', () => {
        const idx = state.allImages.findIndex(i => i.id.toUpperCase() === h.imageId.toUpperCase());
        if (idx >= 0) {
          state.filteredImages = state.allImages;
          openImageModal(idx);
        }
      });
      tr.innerHTML = buildHazardRow(h);
      tbody.appendChild(tr);
    });

    const container = $('#fullTablePagination');
    const totalPages = Math.ceil(allHazards.length / state.fullTablePerPage);
    container.innerHTML = '';
    if (totalPages <= 1) return;
    container.appendChild(createPageBtn('\u2190 Prev', state.fullTablePage > 1, () => { state.fullTablePage--; renderFullDataTable(); scrollToSection('data-section'); }));
    const info = document.createElement('span'); info.className = 'page-info';
    info.textContent = `Page ${state.fullTablePage} of ${totalPages} (${allHazards.length} rows)`;
    container.appendChild(info);
    container.appendChild(createPageBtn('Next \u2192', state.fullTablePage < totalPages, () => { state.fullTablePage++; renderFullDataTable(); scrollToSection('data-section'); }));
  }

  function buildHazardRow(h) {
    return `
      <td><strong>${h.imageId}</strong></td>
      <td>${h.activityType}</td>
      <td>${h.hazardNo}</td>
      <td>${h.hazardDescription}</td>
      <td><span class="energy-badge ${getEnergyClass(h.energyType)}">${h.energyType}</span></td>
      <td><span class="${h.directControl.toLowerCase() === 'yes' ? 'control-yes' : 'control-no'}">${h.directControl}</span></td>
      <td><span class="severity-badge ${h.severity === 'High' ? 'severity-high' : 'severity-low'}">${h.severity}</span></td>
      <td>${h.success || 0}</td>
      <td>${h.exposure || 0}</td>`;
  }

  /* ─── IRR Researcher Comparison ─── */
  function renderIRRComparison() {
    const irrData = HECA_DATA.irrData;
    const ids = HECA_DATA.irrImageIds;

    // Compute aggregates per researcher
    const researchers = [
      { key: 'RA', name: 'Researcher A', color: '#ef4444' },
      { key: 'RP', name: 'Researcher B', color: '#3b82f6' },
      { key: 'RS', name: 'Researcher C (RS)', color: '#8b5cf6' },
    ];

    const aggs = researchers.map(r => {
      let totalH = 0, totalS = 0, totalE = 0;
      ids.forEach(id => {
        const d = irrData[id];
        if (!d) return;
        totalH += d[`hazards_${r.key}`];
        totalS += d[`success_${r.key}`];
        totalE += d[`exposure_${r.key}`];
      });
      const totalObs = totalS + totalE;
      return {
        ...r,
        totalHazards: totalH,
        totalSuccess: totalS,
        totalExposure: totalE,
        hecaScore: totalObs > 0 ? ((totalS / totalObs) * 100).toFixed(2) : '0.00',
        avgHazards: (totalH / ids.length).toFixed(1),
      };
    });

    // Render summary cards
    const cardsContainer = $('#irrSummaryCards');
    cardsContainer.innerHTML = '';
    aggs.forEach(a => {
      const card = document.createElement('div');
      card.className = 'irr-researcher-card';
      card.innerHTML = `
        <div class="irr-card-label">${a.key}</div>
        <div class="irr-card-name">${a.name}</div>
        <div class="irr-card-stats">
          <div class="irr-card-stat">
            <span class="irr-card-stat-label">Total Hazards</span>
            <span class="irr-card-stat-value">${a.totalHazards}</span>
          </div>
          <div class="irr-card-stat">
            <span class="irr-card-stat-label">Avg Hazards/Image</span>
            <span class="irr-card-stat-value">${a.avgHazards}</span>
          </div>
          <div class="irr-card-stat">
            <span class="irr-card-stat-label">Total Success</span>
            <span class="irr-card-stat-value">${a.totalSuccess}</span>
          </div>
          <div class="irr-card-stat">
            <span class="irr-card-stat-label">Total Exposure</span>
            <span class="irr-card-stat-value">${a.totalExposure}</span>
          </div>
          <div class="irr-card-stat">
            <span class="irr-card-stat-label">HECA Score</span>
            <span class="irr-card-stat-value">${a.hecaScore}%</span>
          </div>
        </div>`;
      cardsContainer.appendChild(card);
    });

    // Removed comparison table rendering
  }

  /* ─── IRR Comparison Charts ─── */
  let irrChartInstances = {};

  function renderIRRCharts() {
    // Destroy previous IRR chart instances
    Object.values(irrChartInstances).forEach(c => c.destroy());
    irrChartInstances = {};

    const irrData = HECA_DATA.irrData;
    const ids = HECA_DATA.irrImageIds;

    Chart.defaults.color = '#6b7280';
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 12;

    const researcherColors = {
      RA: { bg: '#ef4444', border: '#dc2626' },
      RP: { bg: '#3b82f6', border: '#2563eb' },
      RS: { bg: '#8b5cf6', border: '#7c3aed' },
    };

    // Reset canvases
    ['irrChartHazards', 'irrChartHecaScores', 'irrChartTotalHazards', 'irrChartSuccessExposure'].forEach(id => {
      const canvas = $(`#${id}`);
      if (!canvas) return;
      const newCanvas = document.createElement('canvas');
      newCanvas.id = id;
      canvas.replaceWith(newCanvas);
    });

    // 1. Hazards per Image by Researcher (grouped bar)
    irrChartInstances.hazards = new Chart($('#irrChartHazards'), {
      type: 'bar',
      data: {
        labels: ids,
        datasets: [
          { label: 'Researcher A (RA)', data: ids.map(id => irrData[id]?.hazards_RA || 0), backgroundColor: researcherColors.RA.bg, borderRadius: 4, barPercentage: 0.8 },
          { label: 'Researcher B (RP)', data: ids.map(id => irrData[id]?.hazards_RP || 0), backgroundColor: researcherColors.RP.bg, borderRadius: 4, barPercentage: 0.8 },
          { label: 'Researcher C (RS)', data: ids.map(id => irrData[id]?.hazards_RS || 0), backgroundColor: researcherColors.RS.bg, borderRadius: 4, barPercentage: 0.8 },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { padding: 16 } },
          tooltip: { backgroundColor: '#1e293b', padding: 12, cornerRadius: 8 },
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 9 }, maxRotation: 90, minRotation: 45 } },
          y: { grid: { color: '#f3f4f6' }, beginAtZero: true, title: { display: true, text: 'Hazard Count' } },
        },
      },
    });

    // 2. HECA Score per Image by Researcher (line chart)
    // Compute HECA score per image: success / (success + exposure) * 100
    function computeHecaPerImage(key) {
      return ids.map(id => {
        const d = irrData[id];
        if (!d) return 0;
        const s = d[`success_${key}`] || 0;
        const e = d[`exposure_${key}`] || 0;
        return (s + e) > 0 ? parseFloat(((s / (s + e)) * 100).toFixed(1)) : 0;
      });
    }
    irrChartInstances.hecaScores = new Chart($('#irrChartHecaScores'), {
      type: 'line',
      data: {
        labels: ids,
        datasets: [
          { label: 'Researcher A (RA)', data: computeHecaPerImage('RA'), borderColor: researcherColors.RA.bg, backgroundColor: researcherColors.RA.bg + '33', fill: false, tension: 0.3, pointRadius: 3 },
          { label: 'Researcher B (RP)', data: computeHecaPerImage('RP'), borderColor: researcherColors.RP.bg, backgroundColor: researcherColors.RP.bg + '33', fill: false, tension: 0.3, pointRadius: 3 },
          { label: 'Researcher C (RS)', data: computeHecaPerImage('RS'), borderColor: researcherColors.RS.bg, backgroundColor: researcherColors.RS.bg + '33', fill: false, tension: 0.3, pointRadius: 3 },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { padding: 16 } },
          tooltip: { backgroundColor: '#1e293b', padding: 12, cornerRadius: 8, callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}%` } },
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 9 }, maxRotation: 90, minRotation: 45 } },
          y: { grid: { color: '#f3f4f6' }, beginAtZero: true, max: 100, title: { display: true, text: 'HECA Score %' }, ticks: { callback: v => v + '%' } },
        },
      },
    });

    // 3. Total Hazards by Researcher (bar)
    const totals = ['RA', 'RP', 'RS'].map(key => {
      let total = 0;
      ids.forEach(id => { total += irrData[id]?.[`hazards_${key}`] || 0; });
      return total;
    });
    irrChartInstances.totalHazards = new Chart($('#irrChartTotalHazards'), {
      type: 'bar',
      data: {
        labels: ['Researcher A (RA)', 'Researcher B (RP)', 'Researcher C (RS)'],
        datasets: [{
          label: 'Total Hazards',
          data: totals,
          backgroundColor: [researcherColors.RA.bg, researcherColors.RP.bg, researcherColors.RS.bg],
          borderRadius: 8, barPercentage: 0.5,
        }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false }, tooltip: { backgroundColor: '#1e293b', padding: 12, cornerRadius: 8 } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 12, weight: 500 } } },
          y: { grid: { color: '#f3f4f6' }, beginAtZero: true, title: { display: true, text: 'Total Hazards' } },
        },
      },
    });

    // 4. Success vs Exposure by Researcher (stacked bar)
    const successTotals = ['RA', 'RP', 'RS'].map(key => {
      let total = 0;
      ids.forEach(id => { total += irrData[id]?.[`success_${key}`] || 0; });
      return total;
    });
    const exposureTotals = ['RA', 'RP', 'RS'].map(key => {
      let total = 0;
      ids.forEach(id => { total += irrData[id]?.[`exposure_${key}`] || 0; });
      return total;
    });
    irrChartInstances.successExposure = new Chart($('#irrChartSuccessExposure'), {
      type: 'bar',
      data: {
        labels: ['Researcher A (RA)', 'Researcher B (RP)', 'Researcher C (RS)'],
        datasets: [
          { label: 'Success (DC Present)', data: successTotals, backgroundColor: '#22c55e', borderRadius: 6, barPercentage: 0.5 },
          { label: 'Exposure (No DC)', data: exposureTotals, backgroundColor: '#ef4444', borderRadius: 6, barPercentage: 0.5 },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { padding: 16 } },
          tooltip: { backgroundColor: '#1e293b', padding: 12, cornerRadius: 8 },
        },
        scales: {
          x: { grid: { display: false }, stacked: true, ticks: { font: { size: 12, weight: 500 } } },
          y: { grid: { color: '#f3f4f6' }, stacked: true, beginAtZero: true, title: { display: true, text: 'Count' } },
        },
      },
    });
  }

  /* ─── Image Modal ─── */
  let currentModalResearcher = 'all'; // 'all', 'RA', 'RP', 'RS'

  function openImageModal(index) {
    state.modalImageIndex = index;
    const img = state.filteredImages[index];
    if (!img) return;

    $('#modalTitle').textContent = img.id;
    const stageBadge = $('#modalStage');
    stageBadge.textContent = img.stage;
    stageBadge.className = `image-card-stage ${getStageClass(img.stage)}`;

    const modalImg = $('#modalImage');
    if (img.noFile || !img.original_path) {
      modalImg.src = '';
      modalImg.alt = 'Image file not available';
      modalImg.style.minHeight = '200px';
      modalImg.style.background = '#f4f6f9';
    } else {
      modalImg.src = img.original_path;
      modalImg.alt = `Construction site image ${img.id}`;
      modalImg.style.minHeight = '';
      modalImg.style.background = '';
    }

    const isIRR = state.activeAnalysis === 'irr';
    const tabsEl = $('#researcherTabs');
    const researcherCol = $('#modalColResearcher');
    const titleEl = $('#analysisSectionTitle');

    if (isIRR && typeof IRR_RESEARCHER_HAZARDS !== 'undefined') {
      tabsEl.style.display = 'flex';
      researcherCol.style.display = '';
      titleEl.textContent = 'Comparative HECA Analysis';
      currentModalResearcher = 'RA';
      // Reset tab active state — default to first researcher (RA)
      $$('.researcher-tab').forEach(t => t.classList.remove('active'));
      $('.researcher-tab[data-researcher="RA"]').classList.add('active');
      renderModalIRRTable(img.id, 'RA');
    } else {
      tabsEl.style.display = 'none';
      researcherCol.style.display = 'none';
      titleEl.textContent = 'HECA Analysis';
      renderModalMainTable(img.id);
    }

    $('#imageModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function renderModalMainTable(imageId) {
    const hazards = getImageHazards(imageId);
    const tbody = $('#modalTableBody');
    tbody.innerHTML = '';
    hazards.forEach(h => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${h.hazardNo}</td>
        <td>${h.activityType}</td>
        <td style="max-width:200px">${h.hazardDescription}</td>
        <td><span class="energy-badge ${getEnergyClass(h.energyType)}">${h.energyType}</span></td>
        <td><span class="${h.directControl.toLowerCase() === 'yes' ? 'control-yes' : 'control-no'}">${h.directControl}</span></td>
        <td style="max-width:180px">${h.currentControls}</td>
        <td style="max-width:180px">${h.directControlsNeeded}</td>
        <td style="max-width:180px">${h.comments}</td>
        <td>${h.success || 0}</td>
        <td>${h.exposure || 0}</td>`;
      tbody.appendChild(tr);
    });
  }

  function renderModalIRRTable(imageId, researcherKey) {
    const tbody = $('#modalTableBody');
    tbody.innerHTML = '';

    const imgData = IRR_RESEARCHER_HAZARDS[imageId];
    if (!imgData) return;

    const researcherName = { RA: 'Researcher A (RA)', RP: 'Researcher B (RP)', RS: 'Researcher C (RS)' }[researcherKey] || researcherKey;
    const hazards = imgData[researcherKey] || [];

    hazards.forEach(h => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
          <td><span class="researcher-badge researcher-badge-${researcherKey}">${researcherKey}</span></td>
          <td>${h.hazardNo}</td>
          <td>${h.activityType}</td>
          <td style="max-width:200px">${h.hazardDescription}</td>
          <td><span class="energy-badge ${getEnergyClass(h.energyType)}">${h.energyType}</span></td>
          <td><span class="${h.directControl.toLowerCase() === 'yes' ? 'control-yes' : 'control-no'}">${h.directControl}</span></td>
          <td style="max-width:180px">${h.currentControls}</td>
          <td style="max-width:180px">${h.directControlsNeeded}</td>
          <td style="max-width:180px">${h.comments || ''}</td>
          <td>${h.success || 0}</td>
          <td>${h.exposure || 0}</td>`;
      tbody.appendChild(tr);
    });
  }

  function closeImageModal() {
    $('#imageModal').classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigateModal(dir) {
    const idx = state.modalImageIndex + dir;
    if (idx >= 0 && idx < state.filteredImages.length) openImageModal(idx);
  }

  /* ─── Charts (Light Theme) ─── */
  function renderCharts() {
    // Destroy previous instances
    Object.values(chartInstances).forEach(c => c.destroy());
    chartInstances = {};

    const stats = getActiveStats();
    Chart.defaults.color = '#6b7280';
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.plugins.legend.labels.usePointStyle = true;

    const energyLabels = Object.keys(stats.energyDistribution);
    const energyValues = Object.values(stats.energyDistribution);
    const colorMap = {
      Gravity: '#ef4444', 'Gravity ': '#ef4444', Mechanical: '#f97316',
      Electrical: '#eab308', Motion: '#22c55e', Pressure: '#3b82f6',
      Temperature: '#ec4899', Chemical: '#8b5cf6', Biological: '#14b8a6', Sound: '#a855f7',
    };
    const energyColors = energyLabels.map(l => colorMap[l] || '#f59e0b');

    // Reset canvases
    ['chartEnergy', 'chartStage', 'chartHeca', 'chartControl'].forEach(id => {
      const canvas = $(`#${id}`);
      const parent = canvas.parentElement;
      const newCanvas = document.createElement('canvas');
      newCanvas.id = id;
      canvas.replaceWith(newCanvas);
    });

    chartInstances.energy = new Chart($('#chartEnergy'), {
      type: 'doughnut',
      data: {
        labels: energyLabels.map(l => l.trim()),
        datasets: [{ data: energyValues, backgroundColor: energyColors, borderWidth: 2, borderColor: '#ffffff', hoverOffset: 8 }],
      },
      options: {
        responsive: true, cutout: '58%',
        plugins: {
          legend: { position: 'right', labels: { padding: 16, font: { size: 12 } } },
          tooltip: { backgroundColor: '#1e293b', titleColor: '#fff', bodyColor: '#e5e7eb', padding: 12, cornerRadius: 8, bodyFont: { size: 12 } },
        },
      },
    });

    const stageLabels = Object.keys(stats.stageStats);
    chartInstances.stage = new Chart($('#chartStage'), {
      type: 'bar',
      data: {
        labels: stageLabels,
        datasets: [
          { label: 'Total Hazards', data: stageLabels.map(s => stats.stageStats[s].hazardCount), backgroundColor: '#f59e0b', borderRadius: 6, barPercentage: 0.6 },
          { label: 'High-Energy', data: stageLabels.map(s => stats.stageStats[s].highEnergy), backgroundColor: '#ef4444', borderRadius: 6, barPercentage: 0.6 },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { padding: 16 } }, tooltip: { backgroundColor: '#1e293b', padding: 12, cornerRadius: 8 } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 11, weight: 500 } } },
          y: { grid: { color: '#f3f4f6' }, border: { dash: [4, 4] }, beginAtZero: true, ticks: { font: { size: 11 } } },
        },
      },
    });

    const hecaScores = stageLabels.map(s => stats.stageStats[s].hecaScore);
    chartInstances.heca = new Chart($('#chartHeca'), {
      type: 'bar',
      data: {
        labels: stageLabels,
        datasets: [{
          label: 'Exposure Rate %',
          data: hecaScores,
          backgroundColor: hecaScores.map(v => v > 50 ? '#ef4444' : '#22c55e'),
          borderRadius: 6, barPercentage: 0.5,
        }],
      },
      options: {
        indexAxis: 'y', responsive: true,
        plugins: { legend: { display: false }, tooltip: { backgroundColor: '#1e293b', padding: 12, cornerRadius: 8 } },
        scales: {
          x: { grid: { color: '#f3f4f6' }, max: 100, ticks: { callback: v => v + '%', font: { size: 11 } } },
          y: { grid: { display: false }, ticks: { font: { size: 12, weight: 500 } } },
        },
      },
    });

    const activeHazards = getActiveHazards();
    const dcYes = activeHazards.filter(h => h.directControl.toLowerCase() === 'yes').length;
    const dcNo = activeHazards.filter(h => h.directControl.toLowerCase() === 'no').length;
    chartInstances.control = new Chart($('#chartControl'), {
      type: 'pie',
      data: {
        labels: ['Direct Control Present', 'No Direct Control'],
        datasets: [{ data: [dcYes, dcNo], backgroundColor: ['#22c55e', '#ef4444'], borderWidth: 2, borderColor: '#ffffff', hoverOffset: 8 }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { padding: 16, font: { size: 12 } } },
          tooltip: { backgroundColor: '#1e293b', padding: 12, cornerRadius: 8 },
        },
      },
    });
  }

  /* ─── Research Graphs ─── */
  function renderGraphs() {
    const container = $('#graphsGrid');
    HECA_DATA.graphs.forEach((gPath, i) => {
      const card = document.createElement('div');
      card.className = 'graph-card fade-in';
      card.style.animationDelay = `${i * 0.04}s`;
      card.innerHTML = `<img src="${gPath}" alt="Figure ${i + 1}" loading="lazy"><div class="graph-card-label">Figure ${i + 1}</div>`;
      card.addEventListener('click', () => {
        $('#graphModalImage').src = gPath;
        $('#graphModalTitle').textContent = `Figure ${i + 1}`;
        $('#graphModal').classList.add('open');
        document.body.style.overflow = 'hidden';
      });
      container.appendChild(card);
    });
  }

  /* ─── Events ─── */
  function bindEvents() {
    // Analysis selector
    $('#selectIRR').addEventListener('click', () => switchAnalysis('irr'));
    $('#selectMain').addEventListener('click', () => switchAnalysis('main'));

    let searchTimeout;
    $('#searchInput').addEventListener('input', e => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => { state.searchQuery = e.target.value; applyFilters(); }, 200);
    });

    $('#filterEnergy').addEventListener('change', e => { state.filterEnergy = e.target.value; applyFilters(); });
    $('#filterSeverity').addEventListener('change', e => { state.filterSeverity = e.target.value; applyFilters(); });
    $('#filterControl').addEventListener('change', e => { state.filterControl = e.target.value; applyFilters(); });

    $('#clearFilters').addEventListener('click', () => {
      state.searchQuery = ''; state.activeStage = '';
      state.filterEnergy = ''; state.filterSeverity = ''; state.filterControl = '';
      $('#searchInput').value = ''; $('#filterEnergy').value = '';
      $('#filterSeverity').value = ''; $('#filterControl').value = '';
      $$('.stage-tab').forEach(t => t.classList.remove('active'));
      $$('.stage-tab')[0].classList.add('active');
      applyFilters();
    });

    $('#stageTabs').addEventListener('click', e => {
      const tab = e.target.closest('.stage-tab');
      if (!tab) return;
      $$('.stage-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeStage = tab.dataset.stage;
      applyFilters();
    });

    $('#viewGallery').addEventListener('click', () => {
      state.currentView = 'gallery';
      $('#viewGallery').classList.add('active'); $('#viewTable').classList.remove('active');
      $('#galleryGrid').style.display = ''; $('#pagination').style.display = '';
      $('#dataTableView').style.display = 'none';
      applyFilters();
    });
    $('#viewTable').addEventListener('click', () => {
      state.currentView = 'table';
      $('#viewTable').classList.add('active'); $('#viewGallery').classList.remove('active');
      $('#galleryGrid').style.display = 'none'; $('#pagination').style.display = 'none';
      $('#noResults').style.display = 'none'; $('#dataTableView').style.display = '';
      applyFilters();
    });

    // Inline table sorting
    $$('#dataTable th[data-sort]').forEach(th => {
      th.addEventListener('click', () => {
        const field = th.dataset.sort;
        if (state.sortField === field) state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
        else { state.sortField = field; state.sortDir = 'asc'; }
        $$('#dataTable th').forEach(t => t.classList.remove('sorted'));
        th.classList.add('sorted');
        th.querySelector('.sort-icon').textContent = state.sortDir === 'asc' ? '\u2191' : '\u2193';
        renderDataTable();
      });
    });

    // Full table sorting
    $$('#fullDataTable th[data-sort]').forEach(th => {
      th.addEventListener('click', () => {
        const field = th.dataset.sort;
        if (state.fullSortField === field) state.fullSortDir = state.fullSortDir === 'asc' ? 'desc' : 'asc';
        else { state.fullSortField = field; state.fullSortDir = 'asc'; }
        $$('#fullDataTable th').forEach(t => t.classList.remove('sorted'));
        th.classList.add('sorted');
        th.querySelector('.sort-icon').textContent = state.fullSortDir === 'asc' ? '\u2191' : '\u2193';
        state.fullTablePage = 1;
        renderFullDataTable();
      });
    });

    // Modal events
    $('#modalClose').addEventListener('click', closeImageModal);
    $('#imageModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeImageModal(); });
    $('#modalPrev').addEventListener('click', () => navigateModal(-1));
    $('#modalNext').addEventListener('click', () => navigateModal(1));

    // Researcher tabs in modal
    $$('.researcher-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const researcher = tab.dataset.researcher;
        currentModalResearcher = researcher;
        $$('.researcher-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const img = state.filteredImages[state.modalImageIndex];
        if (img) renderModalIRRTable(img.id, researcher);
      });
    });

    $('#graphModalClose').addEventListener('click', () => { $('#graphModal').classList.remove('open'); document.body.style.overflow = ''; });
    $('#graphModal').addEventListener('click', e => { if (e.target === e.currentTarget) { $('#graphModal').classList.remove('open'); document.body.style.overflow = ''; } });

    // Keyboard
    document.addEventListener('keydown', e => {
      if ($('#imageModal').classList.contains('open')) {
        if (e.key === 'Escape') closeImageModal();
        if (e.key === 'ArrowLeft') navigateModal(-1);
        if (e.key === 'ArrowRight') navigateModal(1);
      }
      if ($('#graphModal').classList.contains('open') && e.key === 'Escape') {
        $('#graphModal').classList.remove('open'); document.body.style.overflow = '';
      }
    });

    // Nav links
    $$('.nav-links a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        scrollToSection(a.getAttribute('href').slice(1));
        $$('.nav-links a').forEach(l => l.classList.remove('active'));
        a.classList.add('active');
      });
    });
  }

  /* ─── Nav Scroll ─── */
  function setupNavScroll() {
    const nav = $('#topNav');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

    const sections = ['hero', 'analysis-selector', 'gallery', 'analytics', 'data-section'];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$('.nav-links a').forEach(l => l.classList.remove('active'));
          const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    }, { threshold: 0.15, rootMargin: '-60px 0px 0px 0px' });

    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Boot
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
