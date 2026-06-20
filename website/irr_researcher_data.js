const IRR_RESEARCHER_HAZARDS = {
  "F002": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Foundation Footing Prep",
        "hazardDescription": "Potential for excavation cave-in or soil collapse",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Trench box, shoring, or proper sloping/benching",
        "comments": "Depth appears to exceed the 5-foot high-energy threshold for unsupported soil.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Foundation Footing Prep",
        "hazardDescription": "Fall from elevation (entering/exiting via ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Unsecured, non-industrial wooden ladder",
        "directControlsNeeded": "Engineered ladder system secured at top and bottom",
        "comments": "Falls \u2265 4' are high-energy. The current ladder is vulnerable to human error (slippage).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Foundation Footing Prep",
        "hazardDescription": "Struck by falling objects from ground level",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmet",
        "directControlsNeeded": "Physical barricades or toe boards at the perimeter",
        "comments": "Administrative controls like PPE are not Direct Controls because they don't stop the energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Foundation Footing Prep",
        "hazardDescription": "Impalement on unprotected vertical rebar",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps or bending rebar to eliminate point of contact.",
        "comments": "Falling onto vertical points is a primary SIF (Serious Injury/Fatality) precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Foundation Footing Prep",
        "hazardDescription": "Ergonomic/Manual handling with hand tools",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Manual hoe/leveling tool",
        "directControlsNeeded": "Mechanical leveling equipment",
        "comments": "Continuous manual work with heavy tools involves sustained motion energy.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 5,
        "activityType": "Manual Work",
        "hazardDescription": "Ergonomic Strain (Compacting)",
        "energyType": "Motion (Biological)",
        "directControl": "No",
        "currentControls": "Hand Tool",
        "directControlsNeeded": "Mechanical Compactor / Rotation",
        "comments": "\"Hand tool\" compacting is physically intensive but generally <500J (Low Energy). Focus is on long-term injury, not immediate fatality.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Excavation",
        "hazardDescription": "Unsafe Access / Egress",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Ladder",
        "directControlsNeeded": "Secured Ladder (tied off) + 1m extension",
        "comments": "Ladder is \"leaning.\" It must be secured (tied off) to prevent sliding and extend 1m above the landing for safe exit.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Excavation",
        "hazardDescription": "Trench Wall Collapse (Cave-in)",
        "energyType": "Gravity (Soil)",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Shoring (Trench Box) or Sloping (1.5:1)",
        "comments": "CRITICAL: Soil weighs ~1.5 tons/m\u00b3. Without shoring, the worker is in a lethal zone. PPE (Helmet) offers zero survival chance in a collapse.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Excavation",
        "hazardDescription": "Falling Debris / Spoil Slide",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmet (PPE)",
        "directControlsNeeded": "Spoil Setback >1m & Toe Boards",
        "comments": "\"Loose soil and rocks\" at the edge create a high risk of material sliding onto the worker. Helmet is a secondary control only.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Excavation",
        "hazardDescription": "Fall into Excavation",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Hard Barricades / Guardrails",
        "comments": "Open pit edges with no barriers. High risk for other workers or equipment falling in.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Foundation",
        "hazardDescription": "Working in excavated pit for foundation",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Barricade/edge protection, excavation protection (sloping/benching/shoring as per soil/ depth)",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Exposed rebars in the pit",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps, bend-cover protruding bars, clear walkway, lighting",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Using handheld tool for compaction",
        "energyType": "Mechanical, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Gloves, job rotation",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Using bare hands for removing debris from soil in pit",
        "energyType": "Biological",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Gloves",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "",
        "hazardDescription": "Wooden handle of the handheld tool is protruding towards the pit",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Store tools flat or secured (no protrusions)",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "",
        "hazardDescription": "Using improper wooden ladder for climbing up from the pit",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Proper industrial ladder/stair access",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "F009": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Foundation/ Rebar Work",
        "hazardDescription": "Potential for excavation cave-in or soil collapse",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "Vertical soil walls with no visible structural support.",
        "directControlsNeeded": "Shoring, shielding (trench box), or proper sloping/benching.",
        "comments": "Depth appears to exceed the 5-foot high-energy threshold.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Foundation/ Rebar Work",
        "hazardDescription": "Fall from elevation (entering/exiting via ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Unsecured, non-industrial wooden ladder.",
        "directControlsNeeded": "Engineered, secured ladder system or sloped ramp.",
        "comments": "Fall height \u2265 4' is considered high-energy (STKY).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Foundation/ Rebar Work",
        "hazardDescription": "Impalement on unprotected vertical rebar",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps or bending rebar to eliminate point of contact.",
        "comments": "Falling onto vertical points is a primary SIF (Serious Injury/Fatality) precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Foundation/ Rebar Work",
        "hazardDescription": "Struck by falling objects (tools/soil) from perimeter",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "PPE (Helmets and Hi-Vis vests).",
        "directControlsNeeded": "Perimeter toe boards, debris nets, or barricades.",
        "comments": "PPE is an administrative/secondary line of defense, not a Direct Control because it is vulnerable to human error.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 6,
        "activityType": "Site Condition",
        "hazardDescription": "Slips & Trips (Uneven Ground)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Clear Pathways / Housekeeping",
        "comments": "Loose \"gravel and soil\" combined with complex rebar grid creates a high probability of tripping (leading to Hazard #1).",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Manual Handling",
        "hazardDescription": "Crush Injury (Steel Handling)",
        "energyType": "Motion / Gravity",
        "directControl": "No",
        "currentControls": "Gloves / Vests",
        "directControlsNeeded": "Steel-Toe Boots / Mechanical Aid",
        "comments": "Moving heavy rebar bundles manually creates high crush risk for feet/hands.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Foundation Work",
        "hazardDescription": "Vertical Rebar Impalement",
        "energyType": "Gravity / Sharp",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar Safety Caps (Mushrooms) / Troughs",
        "comments": "CRITICAL: Vertical rebar is a lethal impalement hazard if a worker trips. \"Helmets\" provide zero protection. Caps are mandatory.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Excavation",
        "hazardDescription": "Pit Wall Collapse",
        "energyType": "Gravity (Soil)",
        "directControl": "No",
        "currentControls": "Green Fencing (Perimeter only)",
        "directControlsNeeded": "Shoring (Trench Box) or Sloping",
        "comments": "Perimeter fencing protects the public, not the workers inside. Vertical walls appear unsupported; soil weight >500J.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Access/Egress",
        "hazardDescription": "Entrapment / No Safe Exit",
        "energyType": "Motion / Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Secured Ladder / Ramp",
        "comments": "Workers are inside the rebar grid. No clear exit path (ladder/ramp) is visible for emergency evacuation.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Formwork",
        "hazardDescription": "Formwork Blowout / Collapse",
        "energyType": "Gravity / Pressure",
        "directControl": "Yes",
        "currentControls": "Metal Clamps, Support Pipes",
        "directControlsNeeded": "Diagonal Bracing / Tie-rods",
        "comments": "Red panels are heavy. Clamps are visible, but bracing must be verified against wind/concrete pressure.",
        "success": 1,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Foundation",
        "hazardDescription": "Working inside deep excavated pit",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets, Hi-Vis vests",
        "directControlsNeeded": "Excavation protection (sloping/benching/shoring); edge barricading",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Unprotected excavation edges (fall into pit)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rigid barricades; edge protection",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Exposed vertical rebars (impalement hazard)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps / impalement protection",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Improper access/egress to excavation (ladder/stair not visible)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Properly secured ladder; stair access",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "",
        "hazardDescription": "Workers moving over dense rebar mat inside pit",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Helmets, Hi-Vis vests",
        "directControlsNeeded": "Temporary walking platforms; rebar covers",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "F014": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Concrete Pouring",
        "hazardDescription": "High-pressure concrete hose burst or \"whip\"",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "Manual hand-positioning by multiple workers.",
        "directControlsNeeded": "Hose whiplash arrestors or mechanical placement arm.",
        "comments": "Pressure lines are \"STKY\" hazards; manual intervention is vulnerable to error.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Fall into excavation/trench (height \u2265 4')",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personal Protective Equipment (helmets).",
        "directControlsNeeded": "Perimeter guardrails or hard physical barricades.",
        "comments": "PPE is not a Direct Control as it does not stop the fall energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Excavation cave-in or soil collapse",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None. Vertical soil walls are unsupported.",
        "directControlsNeeded": "Shoring, shielding (trench box), or sloping/benching.",
        "comments": "Surcharge loading from the crowd at the edge increases collapse probability.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Mobile equipment contact (concrete pump/delivery)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Hi-visibility vests and helmets.",
        "directControlsNeeded": "Physical exclusion zones or engineered barriers.",
        "comments": "High worker density near active pump increases risk of high-energy contact.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Struck by falling tools/material from perimeter",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets (PPE).",
        "directControlsNeeded": "Perimeter toe boards or debris nets.",
        "comments": "Gravity energy from objects falling into the trench can exceed 1500J.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 5,
        "activityType": "Excavation / Concrete Work",
        "hazardDescription": "Concrete Burns / Dermatitis",
        "energyType": "Chemical",
        "directControl": "Yes",
        "currentControls": "Gloves, Boots",
        "directControlsNeeded": "Full Skin Coverage / Wash Station",
        "comments": "Wet concrete is alkaline (pH 12-13). Causes chemical burns. Current PPE (gloves/boots) is acceptable if sealed.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Excavation / Concrete Work",
        "hazardDescription": "Trench/Pit Wall Collapse",
        "energyType": "Gravity (Soil)",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Shoring / Trench Box / Benching",
        "comments": "CRITICAL: Deep pit with soil piles at edge (surcharge). No shoring visible. Immediate burial risk. Soil weight > 500J.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Excavation / Concrete Work",
        "hazardDescription": "Impalement on Vertical Rebar",
        "energyType": "Gravity / Sharp",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar Safety Caps (Steel-Reinforced)",
        "comments": "Vertical rebar cage is uncapped. Tripping into this grid is fatal. Helmets do not protect against impalement.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Excavation / Concrete Work",
        "hazardDescription": "Unsecured Ladder",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Ladder (Leaning)",
        "directControlsNeeded": "Secured (Tied-off) Ladder",
        "comments": "Ladder is merely 'leaning' on soil wall. It must be tied off and extend 1m above the landing to prevent slipping/trapping.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Excavation / Concrete Work",
        "hazardDescription": "Fall into Excavation (Public)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Green Mesh Fencing",
        "directControlsNeeded": "Hard Guardrails / Hoarding",
        "comments": "Green mesh is a visual screen, not a physical barrier. It will not stop an 'onlooker' from falling into a deep pit.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Excavation / Concrete Work",
        "hazardDescription": "Formwork Blowout (Bursting)",
        "energyType": "Pressure / Gravity",
        "directControl": "No",
        "currentControls": "Metal Clamps, Support Pipes",
        "directControlsNeeded": "Engineered Bracing / Tie-rods",
        "comments": "Liquid concrete exerts high hydrostatic pressure. If pour rate is too fast, clamps fail. Blowout is a high-energy event.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Foundation",
        "hazardDescription": "Workers inside deep excavation without engineered support",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets, Hi-Vis vests",
        "directControlsNeeded": "Engineered shoring/benching",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Unprotected excavation edges (fall into pit)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rigid barricading; edge protection",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Exposed vertical rebars (impalement risk)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps / impalement protection",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Improper access/egress into excavation",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Secured ladder/stair access",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "F024": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Potential for excavation cave-in or soil collapse",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible. Vertical soil walls are unsupported.",
        "directControlsNeeded": "Shoring, shielding (trench box), or proper sloping/benching.",
        "comments": "Surcharge loading from workers and equipment at the edge increases collapse probability.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Fall into excavation/trench (height \u2265 4')",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "PPE (helmets and hi-vis vests).",
        "directControlsNeeded": "Perimeter guardrails or hard physical barricades.",
        "comments": "PPE is an administrative control and not a Direct Control as it does not stop the fall.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Concrete Pouring",
        "hazardDescription": "High-pressure concrete hose burst or \"whip\"",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "Manual hand-positioning by workers.",
        "directControlsNeeded": "Hose whiplash arrestors or mechanical placement arm.",
        "comments": "High-pressure lines are \"STKY\" hazards; manual intervention is vulnerable to error.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Inadequate lighting for night operations",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Existing site illumination.",
        "directControlsNeeded": "High-intensity localized task lighting.",
        "comments": "Poor visibility increases the probability of human error during high-energy tasks.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Struck by moving equipment or delivery vehicles",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Hi-visibility vests and helmets.",
        "directControlsNeeded": "Physical exclusion zones or engineered barriers.",
        "comments": "Limited visibility at night increases risk of high-energy contact with machinery.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 6,
        "activityType": "Night Pour",
        "hazardDescription": "Noise (Confined Space)",
        "energyType": "Sound",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Ear Plugs",
        "comments": "Vibrators in a pit amplify noise >85dB. No hearing protection visible.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Night Pour",
        "hazardDescription": "Trip Hazard (Darkness)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Lighting",
        "directControlsNeeded": "100 Lux Light",
        "comments": "Rebar grid is hard to see. Lighting appears spotty. High trip risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Night Pour",
        "hazardDescription": "Concrete Burns",
        "energyType": "Chemical",
        "directControl": "Yes",
        "currentControls": "Boots/Gloves",
        "directControlsNeeded": "Wash Station",
        "comments": "PASS: Low Energy. Workers wearing gumboots/gloves is standard and effective.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Night Pour",
        "hazardDescription": "Impalement (Uncapped Rebar)",
        "energyType": "Gravity / Sharp",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Rebar Caps",
        "comments": "CRITICAL FAIL: Night shadows + uncapped vertical rebar = certain fatality if tripped.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Night Pour",
        "hazardDescription": "Excavation Wall Collapse",
        "energyType": "Gravity (Soil)",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Shoring",
        "comments": "CRITICAL FAIL: Deep pit, night work, no shoring visible. Soil weight >500J.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Night Pour",
        "hazardDescription": "Electrocution (Wet/Dark)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "GFCI / Elevated Cables",
        "comments": "Wet concrete + night lighting cables on ground. High risk of ground fault.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Foundation",
        "hazardDescription": "Working inside excavation during night with limited visibility",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets, Hi-Vis vests",
        "directControlsNeeded": "Adequate lighting; engineered excavation support",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Unprotected excavation edges at night",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rigid barricades; illuminated edge markers",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Exposed rebars during wet concreting",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Slips/falls on wet concrete surface inside pit",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Temporary platforms; surface control",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "",
        "hazardDescription": "Poor access/egress under low-light conditions",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Proper stairs/ladder with lighting and handholds",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "F027": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Formwork & Rebar",
        "hazardDescription": "Excavation cave-in or soil collapse",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible; vertical soil walls are unsupported",
        "directControlsNeeded": "Trench box, shoring, or proper sloping/benching",
        "comments": "Depth appears to exceed 5' threshold where pressure reaches ~200 psf.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Formwork & Rebar",
        "hazardDescription": "Fall into excavation from perimeter",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "PPE (helmets) only",
        "directControlsNeeded": "Perimeter guardrails or hard physical barricades",
        "comments": "Fall height \u2265 4' is high-energy; rim workers have no fall protection.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Formwork & Rebar",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None observed; rebar is uncapped",
        "directControlsNeeded": "Rebar caps or bending rebar over",
        "comments": "Falling onto unprotected points is a life-threatening (STKY) condition.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Formwork & Rebar",
        "hazardDescription": "Struck by falling objects from ground level",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "PPE (Helmets and Hi-Vis vests)",
        "directControlsNeeded": "Perimeter toe boards or debris nets",
        "comments": "PPE is not a Direct Control as it is vulnerable to human error.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Formwork & Rebar",
        "hazardDescription": "Mobile equipment contact (concrete pump)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Hi-visibility vests only",
        "directControlsNeeded": "Physical exclusion zones or engineered barriers",
        "comments": "High density of observers near edges increases high-energy contact risk.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Formwork & Rebar",
        "hazardDescription": "Surcharge loading on excavation walls",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Shoring or shielding",
        "comments": "Crowds at the edge add pressure, increasing collapse probability.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 5,
        "activityType": "Prep Work",
        "hazardDescription": "Silica Dust",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Water Spray",
        "comments": "Dry soil piles + wind = respirable silica. Long term health risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Prep Work",
        "hazardDescription": "Hand Crush/Pinch",
        "energyType": "Motion",
        "directControl": "Yes",
        "currentControls": "Gloves",
        "directControlsNeeded": "Awareness",
        "comments": "PASS: Low Energy. Handling formwork with gloves is controlled.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Prep Work",
        "hazardDescription": "Fall from Edge",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Green Mesh",
        "directControlsNeeded": "Hard Guardrails",
        "comments": "CRITICAL FAIL: Mesh is visual only. Supervisors at edge risk falling >2m.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Prep Work",
        "hazardDescription": "Surcharge Load (Collapse)",
        "energyType": "Gravity (Soil)",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Setback >1m",
        "comments": "CRITICAL FAIL: Soil piles at edge push walls in. Active structural threat.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Prep Work",
        "hazardDescription": "Suspended Load (Boom)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Exclusion Zone",
        "comments": "Concrete pump boom overhead. Hydraulic failure drops >500J load.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Foundation",
        "hazardDescription": "Persons standing close to excavation edge",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Edge barricading; exclusion zone for non-workers",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Workers inside excavation without protective system",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets, Hi-Vis vests",
        "directControlsNeeded": "Shoring/benching",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Exposed column starter bars",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar impalement caps",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Movement of workers over uneven excavation base",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Level working platforms",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "F037": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Curing / Finishing",
        "hazardDescription": "Excavation cave-in or soil collapse",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible; vertical soil walls are unsupported.",
        "directControlsNeeded": "Trench box, shoring, or proper sloping/benching.",
        "comments": "Depth appears to exceed 5' threshold where soil pressure reaches ~200 psf.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Curing / Finishing",
        "hazardDescription": "Fall into deep excavation/pit",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers are sitting and standing at the unguarded edge.",
        "directControlsNeeded": "Perimeter guardrails or hard physical barricades.",
        "comments": "Fall height \u2265 4' exceeds the high-energy threshold for a gravity hazard.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Curing / Finishing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Rebar in the lower pit is uncapped and exposed.",
        "directControlsNeeded": "Rebar caps or bending rebar over to eliminate the point.",
        "comments": "Falling onto unprotected points from any height is a high-energy SIF condition.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Curing / Finishing",
        "hazardDescription": "Struck by falling objects from ground level",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "PPE (helmets) only.",
        "directControlsNeeded": "Perimeter toe boards or debris nets.",
        "comments": "PPE is not a Direct Control because it is vulnerable to human error.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Curing / Finishing",
        "hazardDescription": "Surcharge loading on excavation walls",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "Workers and tools are positioned at the immediate rim.",
        "directControlsNeeded": "Shoring or shielding systems.",
        "comments": "Static weight at the edge increases the pressure energy and likelihood of collapse.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 4,
        "activityType": "Curing",
        "hazardDescription": "Biological (Mosquitoes)",
        "energyType": "Biological",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Drainage",
        "comments": "Stagnant water breeds disease vectors (Dengue). Health hazard.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Curing",
        "hazardDescription": "Nail Puncture",
        "energyType": "Sharp",
        "directControl": "Yes",
        "currentControls": "Boots",
        "directControlsNeeded": "De-nailing",
        "comments": "PASS: Low Energy. Safety boots protect against standard nails in wood.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Curing",
        "hazardDescription": "Slips/Falls",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Boots",
        "directControlsNeeded": "Housekeeping",
        "comments": "PASS: Low Energy. Boots with tread provide traction on wet concrete.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Curing",
        "hazardDescription": "Electrocution (Water)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "De-energize",
        "comments": "CRITICAL FAIL: Standing water + nearby power tools = death trap.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Curing",
        "hazardDescription": "Impalement (Slip)",
        "energyType": "Gravity / Sharp",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Rebar Caps",
        "comments": "Slippery wet slab next to uncapped rebar. One slip = impalement.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Foundation",
        "hazardDescription": "Working inside water-logged excavation",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets, Hi-Vis vests",
        "directControlsNeeded": "Dewatering system; soil stability assessment",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Collapse risk due to saturated soil",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Engineered shoring; continuous monitoring",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Slip/fall into water-filled pit",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Barricading; safe access platforms",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Exposed rebars near water-filled footing",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps; restricted movement zones",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "F038": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Concrete Placement",
        "hazardDescription": "Excavation cave-in (unsupported vertical soil)",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Trench box, shoring, or proper sloping/benching.",
        "comments": "Vertical soil walls exceed the 5' high-energy threshold without structural support.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Concrete Placement",
        "hazardDescription": "Fall into excavation/pit (height \u2265 4')",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel sitting/standing at the unguarded edge.",
        "directControlsNeeded": "Perimeter guardrails or hard physical barricades.",
        "comments": "Fall height exceeds 4', categorizing it as high-energy \"STKY\".",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Concrete Placement",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Rebar in lower pits is unprotected.",
        "directControlsNeeded": "Rebar caps or bending rebar over.",
        "comments": "Falling onto unprotected sharp points is a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Concrete Placement",
        "hazardDescription": "Struck by falling objects from ground level",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "PPE (helmets).",
        "directControlsNeeded": "Perimeter toe boards or debris nets.",
        "comments": "PPE is an administrative control and does not qualify as a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Concrete Placement",
        "hazardDescription": "Surcharge loading on excavation walls",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "High density of workers at the immediate rim.",
        "directControlsNeeded": "Shoring or shielding systems.",
        "comments": "Static weight at the edge increases soil pressure and the likelihood of collapse.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Concrete Placement",
        "hazardDescription": "Presence of water in excavation",
        "energyType": "Biological",
        "directControl": "No",
        "currentControls": "None.",
        "directControlsNeeded": "Water removal system (pumping)/Mask.",
        "comments": "Standing water can obscure hazards and, if contaminated, poses biological risks.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Active Pour",
        "hazardDescription": "Eye Injury (Splatter)",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Safety Glasses",
        "comments": "Concrete splatter is caustic. No eye protection visible.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Active Pour",
        "hazardDescription": "Ergonomic Strain",
        "energyType": "Motion (Bio)",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Rotation",
        "comments": "Heavy hose manipulation = back injury risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Active Pour",
        "hazardDescription": "Ankle Twist (Rebar)",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Boots",
        "directControlsNeeded": "Planking",
        "comments": "PASS: Low Energy. High-ankle boots prevent twist injuries on mesh.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Active Pour",
        "hazardDescription": "Struck by Chute",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Manual",
        "directControlsNeeded": "Mech. Arm",
        "comments": "FAIL: High Energy. Concrete surge can whip hose. Manual holding is unsafe.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Active Pour",
        "hazardDescription": "Formwork Blowout",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Bracing Check",
        "comments": "PASS: High Energy Control required.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Foundation",
        "hazardDescription": "Manual concrete pouring inside deep excavation",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets, Hi-Vis vests",
        "directControlsNeeded": "Engineered excavation support; access control",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Workers balancing on formwork edges",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Temporary working platforms; guardrails",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Exposed rebars during concrete placement",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar impalement protection",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Congested manual handling inside pit",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Helmets, Hi-Vis vests",
        "directControlsNeeded": "Work zoning; limit personnel; sequencing",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "",
        "hazardDescription": "Unsafe access/egress while carrying loads",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Proper stair/ladder access system",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "F046": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Compacting / Footing Prep",
        "hazardDescription": "Excavation cave-in (unsupported soil walls)",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Trench box, shoring, or proper sloping/benching.",
        "comments": "Vertical soil walls are unsupported; depth appears to reach the high-energy threshold where pressure is ~200 psf.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Compacting / Footing Prep",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible; rebar is uncapped.",
        "directControlsNeeded": "Rebar caps or bending rebar over.",
        "comments": "Falling onto unprotected sharp points from any height is a primary Serious Injury or Fatality (SIF) precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Compacting / Footing Prep",
        "hazardDescription": "Struck by falling objects from ground level",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible (worker not wearing a helmet).",
        "directControlsNeeded": "Perimeter toe boards or physical barricades.",
        "comments": "Gravity energy from soil or tools falling from the perimeter can exceed 1500J.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Compacting / Footing Prep",
        "hazardDescription": "Ergonomic / Manual handling with heavy tools",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Manual tamping tool used without PPE.",
        "directControlsNeeded": "Mechanical compacting equipment.",
        "comments": "Sustained manual labor with heavy tools involves continuous motion energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Compacting / Footing Prep",
        "hazardDescription": "Presence of water in excavation",
        "energyType": "Biological",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Water removal system (pumping)/Mask.",
        "comments": "Standing water can weaken soil walls, increasing hydrostatic pressure and the risk of a \"STKY\" collapse.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Compaction",
        "hazardDescription": "Hearing Loss",
        "energyType": "Sound",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Ear Muffs",
        "comments": "Noise reverberates in pit >90dB. No protection.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Compaction",
        "hazardDescription": "HAVS (Vibration)",
        "energyType": "Motion",
        "directControl": "Yes",
        "currentControls": "Gloves",
        "directControlsNeeded": "Rotation",
        "comments": "PASS: Low Energy. Gloves reduce vibration transmission (partial success).",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Compaction",
        "hazardDescription": "Flying Debris",
        "energyType": "Motion",
        "directControl": "Yes",
        "currentControls": "Boots/Pants",
        "directControlsNeeded": "Face Shield",
        "comments": "PASS: Low Energy. Clothing protects legs from flying stones.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Compaction",
        "hazardDescription": "Vibration Collapse",
        "energyType": "Gravity (Soil)",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Shoring",
        "comments": "CRITICAL FAIL: Tamper vibration triggers wall failure. Death trap.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Compaction",
        "hazardDescription": "CO Poisoning",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Ventilation",
        "comments": "Gas tamper in deep pit = CO accumulation. Silent killer.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Foundation",
        "hazardDescription": "Worker inside excavation without edge protection",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rigid barricading at excavation edges; controlled access",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Exposed vertical rebars near walking path",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar impalement caps; exclusion zone around starter bars",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Uneven gravel base causing loss of balance",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Temporary level working platform; defined walkway",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Lone worker without supervision inside pit",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Permit-to-work; spotter/supervisor presence",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "F064": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Coating / Finishing",
        "hazardDescription": "Structural collapse of overhead concrete",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Engineered temporary shoring or bracing.",
        "comments": "The worker is positioned directly beneath a heavy concrete structure; any failure would release gravitational energy far exceeding 500 ft-lbs.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Coating / Finishing",
        "hazardDescription": "Chemical exposure to toxic coatings",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "Bare hands/feet; no respiratory protection.",
        "directControlsNeeded": "Appropriate chemical-resistant PPE (gloves, footwear, mask).",
        "comments": "Direct contact with hazardous chemical substances (e.g., resins, solvents) poses a life-threatening health risk.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Coating / Finishing",
        "hazardDescription": "Struck by falling objects from overhead",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None (worker is not wearing a helmet).",
        "directControlsNeeded": "Hard hat (PPE) or physical debris overhead shielding.",
        "comments": "Tools or materials falling from the structure above can easily surpass high-energy thresholds.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Coating / Finishing",
        "hazardDescription": "Ergonomic / Repetitive motion in confined space",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Manual application with roller and brush.",
        "directControlsNeeded": "Mechanical application tools or ergonomic work positioning.",
        "comments": "Sustained manual labor in a restricted, hunched position involves continuous motion energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Coating / Finishing",
        "hazardDescription": "Excavation cave-in (rim proximity)",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "Vertical soil walls visible in background are unsupported.",
        "directControlsNeeded": "Trench box, shoring, or proper sloping.",
        "comments": "The worker is near unsupported soil walls that may exceed the 5' depth threshold for high-energy pressure.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 2,
        "activityType": "Waterproofing",
        "hazardDescription": "Chemical Inhalation (VOCs)",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Respirator / Ventilation",
        "comments": "FAIL: \"Green liquid\" waterproofing often contains solvents. Crouching restricts airflow, increasing concentration. No mask described.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Waterproofing",
        "hazardDescription": "Head Impact (Low Clearance)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None described",
        "directControlsNeeded": "Hard Hat (Helmet)",
        "comments": "FAIL: Working in restricted height. Description does not mention a helmet. High risk of scalp laceration/concussion.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Waterproofing",
        "hazardDescription": "Ergonomic Strain (Static)",
        "energyType": "Motion (Bio)",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Rotation / Knee Pads",
        "comments": "FAIL: Sustained crouching restricts blood flow. Long-term musculoskeletal injury risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Waterproofing",
        "hazardDescription": "Structural Collapse (Crush)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Shoring / Props",
        "comments": "CRITICAL FAIL: Working beneath a heavy concrete beam/footing. If soil undercuts or support fails, crush injury is fatal (>500J).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Waterproofing",
        "hazardDescription": "Excavation Cave-in",
        "energyType": "Gravity (Soil)",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Shoring / Sloping",
        "comments": "CRITICAL FAIL: \"Excavation edges near.\" If the worker is in a pit >1.2m to access this beam, unshored walls are a death trap.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Foundation",
        "hazardDescription": "Working beneath heavy concrete member",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Load verification; exclusion zone under structure",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Restricted headroom causing loss of balance",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Controlled access; adequate clearance design",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Chemical coating applied in confined space",
        "energyType": "Chemical (high-severity exposure)",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Ventilation; material substitution; controlled application method",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "F075": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Concrete Cutting",
        "hazardDescription": "High-speed rotating saw blade",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Partial blade guard observed.",
        "directControlsNeeded": "Fully engineered, interlocked machine guarding.",
        "comments": "All heavy rotating equipment typically exceeds the high-energy threshold. The existing guard may not prevent contact if a worker slips or makes an error.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Concrete Cutting",
        "hazardDescription": "Struck by projectile (blade failure or concrete fragments)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None observed.",
        "directControlsNeeded": "High-impact containment shield or exclusion zone.",
        "comments": "Fragments expelled from high-speed equipment can easily exceed 1500 J.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Concrete Cutting",
        "hazardDescription": "Inhalation of silica dust",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "Water used for dust suppression (partial).",
        "directControlsNeeded": "Integrated HEPA vacuum system or verified water-fed blade system.",
        "comments": "Toxic substances posing life-threatening health risks are high-energy hazards.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Concrete Cutting",
        "hazardDescription": "Mobile equipment tracking (proximity to workers)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None observed.",
        "directControlsNeeded": "Physical exclusion zones or hard barricades.",
        "comments": "The equipment in motion near workers on foot is a high-energy hazard.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Concrete Cutting",
        "hazardDescription": "Contact with live electrical source (cords/equipment)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None observed.",
        "directControlsNeeded": "GFCIs, inspected/protected cords, or locked-out source.",
        "comments": "Electricity \u2265 50 Volts is sufficient to cause a SIF.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Concrete Cutting",
        "hazardDescription": "Inadequate lighting for night operation",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Site illumination.",
        "directControlsNeeded": "High-intensity task lighting.",
        "comments": "Poor visibility acts as a hazard multiplier by increasing the probability of human error.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Joint Cutting",
        "hazardDescription": "Noise Exposure (>100dB)",
        "energyType": "Sound",
        "directControl": "No",
        "currentControls": "None described",
        "directControlsNeeded": "Hearing Protection",
        "comments": "FAIL: Concrete sawing generates >100dB. No ear defenders described. Permanent hearing damage risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Joint Cutting",
        "hazardDescription": "Night Visibility (Trip)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Artificial Light",
        "directControlsNeeded": "100 Lux Area Lighting",
        "comments": "FAIL: Night op. Description implies spot lighting, but surrounding \"site background\" darkness creates trip hazards for the second worker.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Joint Cutting",
        "hazardDescription": "Silica Dust Exposure",
        "energyType": "Chemical",
        "directControl": "Yes",
        "currentControls": "Water Suppression",
        "directControlsNeeded": "Continuous Water Feed",
        "comments": "PASS: Low Energy. \"Water is being used\" is the correct engineering control for Silica dust. Effective capture.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Joint Cutting",
        "hazardDescription": "Slips on Slurry",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "None visible",
        "directControlsNeeded": "Wash down / Boots",
        "comments": "FAIL: Wet slurry is slippery, but standard site boots provide adequate traction.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 6,
        "activityType": "Joint Cutting",
        "hazardDescription": "Blade Pinch / Kickback",
        "energyType": "Motion (Mech)",
        "directControl": "No",
        "currentControls": "Manual Op",
        "directControlsNeeded": "Anti-Kickback Brake",
        "comments": "FAIL: High Energy. If the blade pinches in the concrete, the machine can kick back violently. Operator position is critical.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Joint Cutting",
        "hazardDescription": "Rotating Blade Contact",
        "energyType": "Motion (Mech)",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Machine Guard (Std)",
        "comments": "FAIL: High Energy. Floor saws typically have built-in steel guards. Assuming guard is in place, hazard is controlled.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Foundation",
        "hazardDescription": "Contact with rotating cutting blade",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Fixed blade guarding; interlock system",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Loss of control of powered cutting machine",
        "energyType": "Mechanical, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Operator training; machine stability controls",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Electrical energy from powered equipment",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "ELCB/RCD; proper earthing; cable management",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF001": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Suspended load (falling or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "None effective. Workers in proximity to the load path.",
        "directControlsNeeded": "Physical exclusion zone or tag lines (if load is non-spinning).",
        "comments": "A suspended load involves both gravity (potential fall) and lateral motion. Mass of the concrete column exceeds high-energy limits.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Mechanical failure of rigging (cable tension)",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "None observed.",
        "directControlsNeeded": "Rigging inspection and engineered lifting points.",
        "comments": "Computing mechanical energy requires estimating tension and stiffness. Failure of a cable under tension is a Serious Injury or Fatality (SIF) precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Struck by mobile equipment (crane/truck)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "High-visibility vest.",
        "directControlsNeeded": "Physical barricades or engineered exclusion zones.",
        "comments": "Mobile equipment in motion exceeds high-energy thresholds. PPE (vests) are not Direct Controls as they are vulnerable to human error.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Fall from elevation (scaffold access)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Partial green screening/mesh.",
        "directControlsNeeded": "Engineered guardrail system with top-rails and mid-rails.",
        "comments": "Fall height from the scaffold deck to ground level appears to exceed the 4' high-energy threshold.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Contact with overhead power lines",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Verified de-energization or non-conductive barriers.",
        "comments": "Proximity of crane boom to lines (if present) requires direct control. Voltage \u2265 50V is a life-threatening hazard.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 6,
        "activityType": "Crane Lifting",
        "hazardDescription": "Pinch Points (Hand)",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Gloves (Assumed)",
        "directControlsNeeded": "No-Touch Tools",
        "comments": "Manual interaction with heavy precast creates crush points for fingers/hands.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Crane Lifting",
        "hazardDescription": "Suspended Load (Drop Zone)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Exclusion Zone / Barricades",
        "comments": "CRITICAL: Workers standing 'below' the load. If rigging fails, fatality is certain. Violation of Drop Zone.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Crane Lifting",
        "hazardDescription": "Load Swing Impact",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Manual Guiding",
        "directControlsNeeded": "Tag Lines (3m+ length)",
        "comments": "FAIL: Workers guiding by hand (implied 'below'). Risk of being crushed if load swings.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Crane Lifting",
        "hazardDescription": "Stacking Instability",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Chocks / Dunnage",
        "comments": "Precast beams stacked on ground. If not chocked on uneven ground, they can roll/topple (>1 ton).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Crane Lifting",
        "hazardDescription": "Crane Outrigger Failure",
        "energyType": "Gravity / Pressure",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Outrigger Pads / Mats",
        "comments": "Crane on site soil. Risk of ground bearing failure leading to crane tip-over.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Crane Lifting",
        "hazardDescription": "Overhead Power Lines",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Lookout / 3m Clearance",
        "comments": "Trees/Buildings nearby imply potential hidden power lines. Electrocution risk for boom.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Suspended precast column overhead",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Lift plan; exclusion zone; tag lines",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Failure of lifting gear or rigging",
        "energyType": "Gravity, Mechanical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Certified lifting accessories; inspection regime",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Worker proximity to suspended load",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Physical barricading; controlled access",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF003": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Working at Height / Rigging",
        "hazardDescription": "Fall from elevation (scaffold platform)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Fall harness worn by worker on scaffold.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, toe board).",
        "comments": "Measured from the platform to the ground, the fall height exceeds the 4' high-energy threshold. A harness is not a direct control here as it is not tied off.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Working at Height / Rigging",
        "hazardDescription": "Struck by falling objects from platform",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level wearing helmets.",
        "directControlsNeeded": "Physical debris nets or secure toe boards on the scaffold.",
        "comments": "Gravity energy from dropped tools or materials at this height can exceed 1500 J. PPE (helmets) does not stop the energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Working at Height / Rigging",
        "hazardDescription": "Structural collapse of unstable scaffold",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible; scaffold base and bracing appear informal.",
        "directControlsNeeded": "Verified engineered scaffold design and stable mudsills.",
        "comments": "Total mass of the scaffold and workers represents a significant gravitational energy source that would be fatal if released.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Working at Height / Rigging",
        "hazardDescription": "Impalement on vertical rebar/objects",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Uncapped vertical elements at ground level.",
        "directControlsNeeded": "Rebar caps or physical covers over sharp protrusions.",
        "comments": "Workers at height are positioned directly above unprotected sharp points; a fall would constitute a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Working at Height / Rigging",
        "hazardDescription": "Suspended load (crane proximity)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Worker on scaffold is manually guiding/touching the column.",
        "directControlsNeeded": "Physical exclusion zone or use of tag lines.",
        "comments": "A suspended load involves both gravity and lateral motion energy. Manual intervention is highly vulnerable to human error.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 5,
        "activityType": "Structural Prep",
        "hazardDescription": "Trip Hazards (Housekeeping)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Clear Pathways",
        "comments": "Tools/gear on slab create trip hazards in a congested area.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 6,
        "activityType": "Structural Prep",
        "hazardDescription": "Manual Handling",
        "energyType": "Motion",
        "directControl": "Yes",
        "currentControls": "Gloves",
        "directControlsNeeded": "Team Lift",
        "comments": "PASS: Lifting braces/tools is low energy, controlled by PPE/Training.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Structural Prep",
        "hazardDescription": "Fall from Slab Edge",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Guardrails / Warning Line",
        "comments": "Workers on slab. If near edge without protection, fall risk >2m.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Structural Prep",
        "hazardDescription": "Falling Objects (Tools)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets",
        "directControlsNeeded": "Toe Boards / Tethers",
        "comments": "Workers preparing tools at height. Risk of dropping on others. Helmets are secondary.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Structural Prep",
        "hazardDescription": "Column Stability",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Engineering Check",
        "comments": "FAIL",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Structural Prep",
        "hazardDescription": "Scaffold Collapse",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Scaffold Structure",
        "directControlsNeeded": "Tags / Base Plates",
        "comments": "Scaffold erected. Must verify base plates, ties, and 'Green Tag' status.",
        "success": 1,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Working at height on incomplete scaffold",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Guardrails, mid-rails, toe boards",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Unguarded platform edges",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Full edge protection system",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Falling objects onto workers below",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Toe boards; debris netting; exclusion zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Inadequate access to scaffold",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Proper ladder/stair access",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF005": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Drilling at Height",
        "hazardDescription": "Fall from elevation (leading edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Full-body harness worn by worker.",
        "directControlsNeeded": "Engineered guardrail system or verified tie-off point.",
        "comments": "Fall height from the concrete ledge to ground appears to exceed 4'. The harness is not a Direct Control as it is not tied off.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Drilling at Height",
        "hazardDescription": "Bit bind or drill kickback",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Handheld operation.",
        "directControlsNeeded": "Engineered machine guarding or internal torque slip-clutch.",
        "comments": "Heavy rotating equipment typically exceeds high-energy thresholds. Handheld operation is vulnerable to human error if the bit binds.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Drilling at Height",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None observed; rebar is uncapped.",
        "directControlsNeeded": "Rebar caps or bending rebar over to eliminate points.",
        "comments": "Falling onto unprotected sharp points from height is a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Drilling at Height",
        "hazardDescription": "Struck by falling objects (drill/material)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level wearing helmets.",
        "directControlsNeeded": "Tool lanyards or perimeter debris netting.",
        "comments": "Gravity energy from a dropped drill at this height can exceed 500 ft-lbs. PPE (helmets) is not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Drilling at Height",
        "hazardDescription": "Continuous noise from drilling machine",
        "energyType": "Sound",
        "directControl": "No",
        "currentControls": "None visible (worker not wearing ear protection).",
        "directControlsNeeded": "Hearing protection (PPE) or sound-dampened equipment.",
        "comments": "While typically \"low energy,\" sound is a documented energy source on the Energy Wheel. It acts as a hazard multiplier by masking other safety warnings.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Drilling at Height",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Power cord visible.",
        "directControlsNeeded": "GFCI protection and inspected, undamaged cords.",
        "comments": "Electricity \u2265 50 Volts is sufficient to result in a Serious Injury or Fatality (SIF).",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 1,
        "activityType": "Drilling",
        "hazardDescription": "Silica Dust Exposure",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "HEPA Vacuum / Wet Drill",
        "comments": "CRITICAL FAIL: \"Dust is visible\". Respirable silica is a Class 1 Carcinogen. Mask is not enough.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Drilling",
        "hazardDescription": "Noise (>100dB)",
        "energyType": "Sound",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Ear Muffs / Plugs",
        "comments": "Electric hammer drill generates >100dB. Hearing damage risk without protection.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 6,
        "activityType": "Drilling",
        "hazardDescription": "Eye Injury (Chips)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Safety Glasses",
        "comments": "Drilling concrete creates flying projectiles. Eye protection required.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 7,
        "activityType": "Drilling",
        "hazardDescription": "Hand-Arm Vibration",
        "energyType": "Motion",
        "directControl": "Yes",
        "currentControls": "Gloves",
        "directControlsNeeded": "Rotation",
        "comments": "PASS: Gloves reduce vibration transmission. Low energy acute risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Drilling",
        "hazardDescription": "Electrical Shock",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "GFCI / Cord Check",
        "comments": "Power tool usage. Cord damage or lack of GFCI can lead to lethal shock.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Drilling",
        "hazardDescription": "Fall from Height",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harness",
        "directControlsNeeded": "Anchor Point",
        "comments": "Worker wearing harness. USELESS unless clipped to a valid anchor point (min 5000lbs).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Drilling",
        "hazardDescription": "Structural Collapse",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Adjustable Props",
        "directControlsNeeded": "Prop Securement",
        "comments": "PASS: Blue props supporting column. Essential control for structural modification.",
        "success": 1,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Working at height near open edge while operating tool (fall from elevation)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmet, Hi-Vis; harness visible (tie-off not verifiable)",
        "directControlsNeeded": "Positive edge protection (guardrail/mid-rail/toe board) or verified fall-arrest (anchored lifeline + lanyard); controlled work zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Protruding rebars at work level (impalement if trip/fall)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps/impalement protection; exclusion buffer around protruding bars",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Powered drilling/chipping tool (kickback/loss of control causing fall/strike)",
        "energyType": "Mechanical, Motion",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Tool inspection, stable stance/positioning, two-hand control, safe set-down area; keep operator away from edge",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Portable electric tool and leads at work area (shock risk)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "RCD/ELCB, proper earthing, cable protection/management, dry connectors",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF006": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Precast Landing",
        "hazardDescription": "Suspended load (swinging or falling)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Worker in close proximity guiding the load by hand.",
        "directControlsNeeded": "Physical exclusion zone or high-capacity tag lines.",
        "comments": "The mass of the concrete beam represents massive gravitational potential energy; manual guidance is a high-risk SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Precast Landing",
        "hazardDescription": "Mechanical failure of rigging components",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Single-point lift observed.",
        "directControlsNeeded": "Dual-redundant rigging or verified engineered lift plan.",
        "comments": "Rigging tension involves significant mechanical energy. A single component failure would result in an immediate high-energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Precast Landing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Multiple vertical rebar points are completely unprotected.",
        "directControlsNeeded": "Rebar caps or physical covers over all vertical protrusions.",
        "comments": "The landing zone is surrounded by unprotected \"spears.\" Any trip or fall in this area is a life-threatening (STKY) condition.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Precast Landing",
        "hazardDescription": "Struck by mobile equipment (crane/truck)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "High-visibility vest (PPE).",
        "directControlsNeeded": "Physical barricades or hard exclusion zones.",
        "comments": "PPE is an administrative control. It does not stop the motion energy of machinery from contacting a human.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Precast Landing",
        "hazardDescription": "Suspended load (swinging or falling)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Worker in close proximity guiding the load by hand.",
        "directControlsNeeded": "Physical exclusion zone or high-capacity tag lines.",
        "comments": "The mass of the concrete beam represents massive gravitational potential energy; manual guidance is a high-risk SIF precursor.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 2,
        "activityType": "Precast Install",
        "hazardDescription": "Trip on Debris",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Housekeeping",
        "comments": "FAIL: \"Debris scattered\" + moving backwards with rope = High trip risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 6,
        "activityType": "Precast Install",
        "hazardDescription": "Foot Injury (Drop)",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Safety Boots",
        "directControlsNeeded": "Steel Toe Caps",
        "comments": "PASS: Workers likely wearing boots. Protects against small drops/scrapes.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Precast Install",
        "hazardDescription": "Impalement (Rebar)",
        "energyType": "Sharp / Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar Caps",
        "comments": "FAIL: \"Protruding rebar\" in adjacent beams. Tripping on debris onto rebar is fatal.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Precast Install",
        "hazardDescription": "Suspended Load Failure",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rigging Inspection",
        "comments": "Tilting load puts unique stress on rigging. Edge protection for straps needed.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Precast Install",
        "hazardDescription": "Crush / Pinch Point",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "No-Touch Policy",
        "comments": "FAIL: Workers using ropes to align load. Keeps hands out of 'Crush Zone'.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Precast Install",
        "hazardDescription": "Load Swing (Tilting)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Clearance Zone",
        "comments": "Tilting changes center of gravity. Swing risk. Ropes help control.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Workers inside the drop/swing zone of suspended/tilting precast unit (struck-by/crush)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Helmets/Hi-Vis",
        "directControlsNeeded": "Hard exclusion zone under/around load; spotter; controlled access; no hands on load rule",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Rigging/connection failure during lift (load drop)",
        "energyType": "Gravity, Mechanical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Approved lift plan, certified rigging, pre-lift inspection, correct sling angles, rated shackles/hooks, competent rigger",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Pinch/crush points while positioning panel (hands/body caught between panel and ground/structure)",
        "energyType": "Motion, Mechanical",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Tag lines / push-pull tools; stand-off positioning; set-down blocks; engineered guides",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Protruding rebars adjacent to lifting/positioning area (impalement during slip/trip or load movement)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps; keep access path clear; segregate rebar zone from lift zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF014": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Suspended load (falling or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Worker in proximity using a handheld tag line.",
        "directControlsNeeded": "Physical exclusion zone (hard barricades) preventing entry under load path.",
        "comments": "The multi-ton concrete column represents massive potential energy. Manual control via tag line is vulnerable to human error and sudden load shifts.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Mechanical failure of rigging/crane components",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Single-point crane lift.",
        "directControlsNeeded": "Dual-redundant rigging or verified engineered lift plan with physical barriers.",
        "comments": "Tension in rigging lines involves significant mechanical energy. A single failure would result in an immediate, high-energy catastrophic release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Struck by mobile equipment (crane)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "High-visibility vest (PPE).",
        "directControlsNeeded": "Physical exclusion zones or hard barricades around the crane swing radius.",
        "comments": "Mobile equipment in motion exceeds high-energy thresholds. PPE is an administrative control and does not stop energy transfer.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Fall from elevation (unguarded leading edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker standing near the edge of a scaffold/platform.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, toe board).",
        "comments": "Fall height from the platform to the ground appears to exceed the 4' high-energy threshold for a \"STKY\" gravity hazard.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Contact with overhead power lines",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Verified de-energization or non-conductive physical barriers.",
        "comments": "Crane boom operation near trees/structures suggests a risk of contact with overhead utilities (\u2265 50V).",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 6,
        "activityType": "High Reach Lift",
        "hazardDescription": "Entanglement (Rope)",
        "energyType": "Motion",
        "directControl": "Yes",
        "currentControls": "Gloves",
        "directControlsNeeded": "Rope Handling Training",
        "comments": "PASS: Worker managing tag line. Risk of rope burn/entanglement handled by gloves/technique.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "High Reach Lift",
        "hazardDescription": "Fall from Slab Edge",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Guardrails / Restraint",
        "comments": "CRITICAL FAIL: Worker on slab guiding load. Proximity to edge >10m requires hard barrier.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "High Reach Lift",
        "hazardDescription": "Blind Lift Communication",
        "energyType": "Sound / visual",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Radio / Banksman",
        "comments": "High lift may obscure operator view. Radio contact essential. If manual signals only -> Fail.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "High Reach Lift",
        "hazardDescription": "Dropped Object (Wide Area)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Exclusion Zone Extended",
        "comments": "Drop from high height scatters debris widely. Exclusion zone must be large.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "High Reach Lift",
        "hazardDescription": "Crane Tipping",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Ground Bearing Check",
        "comments": "High boom extension = large moment arm. Ground stability critical.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "High Reach Lift",
        "hazardDescription": "Wind Load (High Lift)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Wind Speed Monitor",
        "comments": "FAIL: Tag line in use. Wind force increases with height. Crane limit <20mph.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Suspended precast column overhead (drop potential)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets/Hi-Vis",
        "directControlsNeeded": "Lift plan, certified rigging, pre-lift checks, defined drop zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Load swing/rotation (struck-by) affecting workers and nearby scaffold/edge",
        "energyType": "Motion, Gravity",
        "directControl": "No",
        "currentControls": "Tag line visible (if present) not clearly controlled",
        "directControlsNeeded": "Tag lines controlled by trained rigger, dedicated signalman, wind limits, controlled slewing",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Worker positioned near roof/edge during lift operations (fall from elevation)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Partial railing visible (not continuous/verified)",
        "directControlsNeeded": "Continuous edge protection or verified fall-arrest (anchored lifeline) along work path",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Crush/pinch during landing/aligning column to base/seat",
        "energyType": "Motion, Mechanical",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Hands-free positioning (tag lines/guides), stand-off zones, alignment tools; pre-set guides/stops",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF022": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Work at Height / Drilling",
        "hazardDescription": "Fall from elevation (scaffold platform)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Full-body harness worn by worker on scaffold.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, toe board).",
        "comments": "Fall height \u2265 4' exceeds the high-energy threshold. The harness is not a direct control as it is not tied off.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Work at Height / Drilling",
        "hazardDescription": "Contact with rotating drill components",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Handheld drilling operation.",
        "directControlsNeeded": "Engineered machine guarding or internal torque slip-clutch.",
        "comments": "Heavy rotating equipment typically exceeds high-energy thresholds. Handheld operation is vulnerable to bit binding/kickback.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Work at Height / Drilling",
        "hazardDescription": "Struck by falling tools/material from scaffold",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level wearing helmets.",
        "directControlsNeeded": "Physical debris netting or secured toe boards.",
        "comments": "Gravity energy from a dropped drill or material at this height can exceed 500 ft-lbs. PPE (helmets) is not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Work at Height / Drilling",
        "hazardDescription": "Continuous noise from drilling machine",
        "energyType": "Sound",
        "directControl": "No",
        "currentControls": "None visible (worker not wearing ear protection).",
        "directControlsNeeded": "Hearing protection (PPE) or sound-dampened equipment.",
        "comments": "While usually \"low energy,\" sound acts as a multiplier by masking other safety warnings.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Work at Height / Drilling",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Power cords visible on the work surface.",
        "directControlsNeeded": "GFCI protection and inspected, undamaged cords.",
        "comments": "Electricity \u2265 50 Volts is sufficient to cause a SIF.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Work at Height / Drilling",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Unprotected rebar in the vicinity.",
        "directControlsNeeded": "Rebar caps or physical covers over all protrusions.",
        "comments": "Falling onto sharp points is a primary SIF condition.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Column Erection",
        "hazardDescription": "Silica Dust (Drilling)",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "HEPA Vac / Water",
        "comments": "FAIL: Worker \"using power drill.\" Concrete dust is visible/implied. Respirable silica hazard is uncontrolled.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Column Erection",
        "hazardDescription": "Fall from Roof Edge",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Hard Guardrails / Restraint",
        "comments": "CRITICAL FAIL: Workers \"on a roof slab.\" No parapet or rails mentioned. A slip at the edge is fatal (>10m fall).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Column Erection",
        "hazardDescription": "Dropped Object (Tools)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Scaffold",
        "directControlsNeeded": "Toe Boards / Tethers",
        "comments": "FAIL: Worker on scaffold using tools. If a drill drops on the supervisor below, it exceeds 500J impact energy.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Column Erection",
        "hazardDescription": "Column Instability",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Verify Bolts/Pins",
        "comments": "FAIL: \"Blue steel braces fixed.\" This is the correct engineering control to prevent the 5-ton column from falling.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Work at height near perimeter/open edge (fall from elevation)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harnesses visible; some railing present",
        "directControlsNeeded": "Continuous perimeter guardrail + toe board or verified fall-arrest (anchored lifeline) for all exposed workers",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Scaffold tower platform (fall risk if incomplete decking/rails or unsafe access)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Tower rails visible",
        "directControlsNeeded": "Ensure full decking, internal access ladder, ties/anchors as required, inspection tag; keep gate/rails closed",
        "comments": "",
        "success": 1,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Protruding rebars at column top/near work zone (impalement if fall or stumble)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps/impalement protection; restrict access around starter bars",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Falling objects from elevated work area (tools/materials to lower level)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Toe boards, tool lanyards, debris netting; exclusion zone below",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "",
        "hazardDescription": "Powered tools and temporary leads on platform (shock hazard at height)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "RCD/ELCB, protected/managed leads, inspection, dry connections",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF025": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Column Installation",
        "hazardDescription": "Fall from elevation (scaffold and ledge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Full-body harness worn by worker on scaffold.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, toe board).",
        "comments": "Fall height from the working platform to the ground exceeds the 4' high-energy threshold. The harness is not a direct control as it is not tied off to an engineered anchor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Column Installation",
        "hazardDescription": "Suspended load (swinging or falling)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Worker in close proximity to the suspended rigging/column.",
        "directControlsNeeded": "Physical exclusion zone or high-capacity tag lines.",
        "comments": "A suspended load involves significant potential and kinetic energy. Manual contact or close proximity without a physical barrier is a SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Column Installation",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None observed; rebar is uncapped.",
        "directControlsNeeded": "Rebar caps or physical covers over all vertical protrusions.",
        "comments": "Workers at height are positioned directly above unprotected sharp points; a fall would constitute a primary \"STKY\" condition.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Column Installation",
        "hazardDescription": "Struck by falling objects from platform",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level wearing helmets.",
        "directControlsNeeded": "Physical debris netting or secured toe boards on the scaffold.",
        "comments": "Gravity energy from dropped tools or materials at this height can exceed 500 ft-lbs. PPE (helmets) is an administrative control and not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Column Installation",
        "hazardDescription": "Structural instability of scaffold/column",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary diagonal bracing (blue poles).",
        "directControlsNeeded": "Verified engineered shoring and scaffold design.",
        "comments": "The total mass of the concrete column and scaffold represents a massive gravitational energy source if structural failure occurs.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 1,
        "activityType": "Alignment Work",
        "hazardDescription": "Fall from Slab Edge",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Restraint Lanyard",
        "comments": "CRITICAL FAIL: Worker \"near the slab edge\" working at the base. \"Near\" is the Kill Zone. Zero barriers described.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Alignment Work",
        "hazardDescription": "Suspended Load (Alignment)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Manual Guiding",
        "directControlsNeeded": "Tag Line / Hands-Free",
        "comments": "FAIL: \"Guiding the column face.\" Hands on the load = Amputation risk if the column swings or drops.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Alignment Work",
        "hazardDescription": "Prop Failure (Kick-out)",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Anchor Check",
        "comments": "FAIL: \"Blue push-pull props\" are present. Essential to prevent column toppling during alignment.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Alignment Work",
        "hazardDescription": "Scaffold Fall Risk",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Scaffold Structure",
        "directControlsNeeded": "Guardrails / Gate",
        "comments": "PASS: Scaffold provides a platform. Assuming standard rails are installed, this is safer than a ladder.",
        "success": 1,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Worker on scaffold at height (fall from platform)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Guardrails visible; PPE",
        "directControlsNeeded": "Maintain full decking, guardrails/mid-rails/toe boards, safe access; scaffold inspection tag",
        "comments": "",
        "success": 1,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Work positioning outside scaffold envelope while reaching column/rebar area (fall potential despite rails)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harness visible (tie-off not verifiable)",
        "directControlsNeeded": "Verified fall-arrest (anchored lifeline) for reach-out tasks; reposition scaffold closer; maintain 3-point stance",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Uncapped protruding rebars at column top (impalement if fall/strike)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps/impalement protection; exclusion buffer",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Falling objects from scaffold (tools/materials) to level below",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Toe boards, tool lanyards, debris netting; exclusion zone below",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF043": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Column Finishing",
        "hazardDescription": "Fall from elevation (leaning ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker wearing a harness, tied off to the column.",
        "directControlsNeeded": "Engineered work platform or secured, industrial scaffold.",
        "comments": "Standing on a leaning ladder at height is a high-energy gravity hazard. While tied off, the fall distance and potential for hitting the structure still present SIF exposure.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Column Finishing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Exposed rebar directly below the ladder base.",
        "directControlsNeeded": "Rebar caps or physical covers over all protrusions.",
        "comments": "A fall from the ladder results in a high-energy impalement risk on the uncapped rebar below.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Column Finishing",
        "hazardDescription": "Struck by falling tools/material from height",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Tool lanyards or a hard exclusion zone below.",
        "comments": "Gravity energy from objects falling from the top of the column exceeds the high-energy threshold.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Column Finishing",
        "hazardDescription": "Structural collapse of recent installation",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary bracing visible.",
        "directControlsNeeded": "Structural engineering verification of column stability.",
        "comments": "The worker is applying load to a recently placed column; any failure releases massive gravitational energy.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 4,
        "activityType": "Finishing / Grouting",
        "hazardDescription": "Cement Dermatitis",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None described",
        "directControlsNeeded": "Nitrile Gloves",
        "comments": "FAIL: Working with \"cement mortar/patching.\" Wet cement burns skin. Specific gloves required.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Finishing / Grouting",
        "hazardDescription": "Fall from Height (Edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Safety Tape",
        "directControlsNeeded": "Hard Barrier / Platform Rail",
        "comments": "CRITICAL FAIL: \"Safety tape stretched across.\" Tape is a visual warning, NOT a physical barrier. It will not stop a fall.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Finishing / Grouting",
        "hazardDescription": "Falling Object (Mortar)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Containment / Netting",
        "comments": "FAIL: \"Bowl of mortar on slab surface\" (presumably near edge). If kicked off, it becomes a lethal projectile to those below.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Finishing / Grouting",
        "hazardDescription": "Platform Stability",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Ladder Platform",
        "directControlsNeeded": "Engineered Anchor",
        "comments": "FAIL: \"Ladder platform attached to edge.\" Makeshift attachments often fail. Must be an engineered cantilever system.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Worker positioned on ladder at height \u2013 fall from ladder due to instability or overreach",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Ladder used; helmet worn",
        "directControlsNeeded": "Proper working platform or scaffold, ladder tied/secured, maintain three-point contact, exclusion zone below",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Tools/materials handled at height \u2013 falling object striking persons below",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Tool lanyards, toe boards, barricaded drop zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF050": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Precast Installation",
        "hazardDescription": "Suspended load (swinging or falling)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Workers in close proximity beneath and beside the panel.",
        "directControlsNeeded": "Physical exclusion zone (hard barricades) beneath load path.",
        "comments": "The multi-ton wall panel represents massive gravitational and kinetic energy. Manual guidance is a high-exposure SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Precast Installation",
        "hazardDescription": "Structural instability of unbraced panel",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary diagonal blue bracing poles.",
        "directControlsNeeded": "Verified engineered shoring/bracing plan with redundant supports.",
        "comments": "Until permanently fixed, the panel's stability relies on temporary bracing. Failure would release unsurvivable gravitational energy.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Precast Installation",
        "hazardDescription": "Fall from elevation (leading edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Scaffold present but lacks complete guarding; worker nearby.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, toe board).",
        "comments": "Work surface appears to be \u2265 4' above ground level. Fall protection is administrative (harnesses) rather than a Direct Control (guardrails).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Precast Installation",
        "hazardDescription": "Struck by falling tools/material from height",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at base wearing helmets (PPE).",
        "directControlsNeeded": "Physical debris netting or secured toe boards on scaffold.",
        "comments": "Gravity energy from dropped heavy tools at this height can exceed 1500 J. PPE does not stop the energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Precast Installation",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Exposed rebar visible at the top of columns.",
        "directControlsNeeded": "Rebar caps or physical covers over all vertical protrusions.",
        "comments": "Workers at height or near edges are positioned above unprotected sharp points.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Precast Installation",
        "hazardDescription": "Mechanical failure of rigging/crane",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Lift cables under tension.",
        "directControlsNeeded": "Dual-redundant rigging or engineered lift plan with barricaded zones.",
        "comments": "High tension in crane lines constitutes a significant mechanical energy source susceptible to catastrophic release.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 1,
        "activityType": "Wall Panel Install",
        "hazardDescription": "Crush Zone (Pinch Point)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Tape Line",
        "directControlsNeeded": "Hands-Off Tools",
        "comments": "FAIL: \"Guiding and measuring.\" Measuring puts hands between the 5-ton panel and the column. Crushing is instant.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Wall Panel Install",
        "hazardDescription": "Suspended Load Drop",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Lifting Cables",
        "directControlsNeeded": "Drop Zone Control",
        "comments": "FAIL: \"Large precast panel.\" If cables snap, the energy release is massive. Are workers measuring under the tilt?",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Wall Panel Install",
        "hazardDescription": "Adjacent Column Stability",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "None visible",
        "directControlsNeeded": "Engineering Check",
        "comments": "Fail: Critical control: The new panel relies on these columns being stable.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Large precast wall panel standing vertically \u2013 collapse or overturning risk",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary supports visible",
        "directControlsNeeded": "Engineered temporary bracing, verified load paths, restricted access zone",
        "comments": "",
        "success": 1,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Failure of temporary bracing under load causing sudden wall movement",
        "energyType": "Stored Mechanical",
        "directControl": "No",
        "currentControls": "Bracing present (capacity not verifiable)",
        "directControlsNeeded": "Certified bracing system, torque-checked connections, inspection sign-off",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF065": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Panel Finishing",
        "hazardDescription": "Fall from elevation (scaffold platform)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker on scaffold wearing a harness.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail).",
        "comments": "Fall height \u2265 4' is high-energy. Harness is not a direct control as it is not tied off.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Panel Finishing",
        "hazardDescription": "Fall from elevation (leaning ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Unsecured metal ladder.",
        "directControlsNeeded": "Secured, industrial work platform.",
        "comments": "Use of leaning ladders for high-intensity work like drilling involves high gravity energy risk.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Panel Finishing",
        "hazardDescription": "Contact with rotating drill components",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Handheld drilling.",
        "directControlsNeeded": "Drill torque slip-clutch or engineered stand.",
        "comments": "Mechanical energy from bit bind/kickback exceeds high-energy thresholds.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Panel Finishing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None; rebar uncapped.",
        "directControlsNeeded": "Rebar caps or physical covers.",
        "comments": "Falling onto sharp points from height is a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Panel Finishing",
        "hazardDescription": "Continuous noise from drilling",
        "energyType": "Sound",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Hearing protection (PPE).",
        "comments": "Sound masks other safety warnings, acting as a hazard multiplier.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 2,
        "activityType": "Inspection",
        "hazardDescription": "Trip Hazards",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Housekeeping",
        "comments": "FAIL: \"Tools, braces, materials spread across slab.\" High trip risk for inspectors looking up at connections.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Inspection",
        "hazardDescription": "Head Injury (Obstruction)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None described",
        "directControlsNeeded": "Helmet",
        "comments": "FAIL: \"Inspecting connections near beam-column.\" Head impact risk on low beams/braces.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Inspection",
        "hazardDescription": "Unsecured Ladder",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Leaning Ladder",
        "directControlsNeeded": "Tied-off / Footed",
        "comments": "FAIL: \"Ladder leaning against wall.\" The #1 cause of construction falls. It must be secured (tied) at the top.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Inspection",
        "hazardDescription": "Fall from Scaffold (Upper)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Tag System",
        "comments": "FAIL: Scaffold is erected for \"upper level finishing.\" Assuming it is complete/tagged.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Worker on scaffold platform \u2013 fall from height",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Guardrails present; PPE worn",
        "directControlsNeeded": "Full decking, toe boards, scaffold inspection tag, controlled access",
        "comments": "",
        "success": 1,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Ladder access within structure \u2013 ladder slip or fall",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Ladder present",
        "directControlsNeeded": "Secured ladder, correct angle, handhold extension, alternate access platform",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Tools/materials on scaffold \u2013 falling objects to lower level",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Toe boards, debris netting, tool lanyards, exclusion zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF076": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Bracing Adjustment",
        "hazardDescription": "Structural instability of unbraced panel",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Manual adjustment of blue bracing poles.",
        "directControlsNeeded": "Verified engineered bracing plan with redundant supports.",
        "comments": "Mass of the concrete panel represents massive gravitational energy if bracing fails during adjustment.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Bracing Adjustment",
        "hazardDescription": "Tripping over loose bracing/cables",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Multiple poles and ropes on the ground.",
        "directControlsNeeded": "Organized work area; exclusion zones for trip hazards.",
        "comments": "Clutter in high-activity zones increases probability of a fall into high-energy structures.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Bracing Adjustment",
        "hazardDescription": "Struck by falling tools/material from height",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at base wearing helmets.",
        "directControlsNeeded": "Physical debris netting or tool lanyards.",
        "comments": "Gravity energy from objects falling from the top of the panel exceeds 1500 J.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Bracing Adjustment",
        "hazardDescription": "Pinch points in mechanical bracing",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Manual handling of heavy metal poles.",
        "directControlsNeeded": "Protective guarding or mechanical assist tools.",
        "comments": "Mechanical energy in bracing adjustments can result in severe crush injuries.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Panel Alignment",
        "hazardDescription": "Head Injury (Obstruction)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None described",
        "directControlsNeeded": "Helmet / Pad",
        "comments": "FAIL: \"Steel beams embedded in wall opening\" protrude. High risk of head strike while focusing on lower props.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Panel Alignment",
        "hazardDescription": "Trip Hazard",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Housekeeping",
        "comments": "FAIL: \"Tools, ropes, grout bags\" on slab. Cluttered workspace near heavy panels causes trips -> falls.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Panel Alignment",
        "hazardDescription": "Crush (Pinch Point)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "No-Touch Tools",
        "comments": "FAIL: Adjusting props manually creates a pinch point between the heavy steel prop and the wall. Finger amputation risk.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Panel Alignment",
        "hazardDescription": "Wall Instability",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "None visible",
        "directControlsNeeded": "Anchor Check",
        "comments": "FAIL: Blue props are the correct engineering control. Assuming anchors to slab are torque-verified.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Manual handling of long steel bracing members \u2013 sudden swing or drop",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "PPE worn",
        "directControlsNeeded": "Mechanical handling aids, controlled lift plan, tag lines",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Bracing under compression/tension \u2013 sudden release of stored energy",
        "energyType": "Stored Mechanical",
        "directControl": "No",
        "currentControls": "None verifiable",
        "directControlsNeeded": "Load-rated bracing, controlled tightening sequence, exclusion zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF083": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Suspended load (falling or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Workers in close proximity to the beam path.",
        "directControlsNeeded": "Physical exclusion zone (hard barricades) beneath load path.",
        "comments": "Multi-ton concrete beam represents massive gravitational energy. Manual guidance by workers is a high-risk SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Mechanical failure of rigging components",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Single-point crane lift; tag lines used manually.",
        "directControlsNeeded": "Dual-redundant rigging or verified engineered lift plan.",
        "comments": "High tension in rigging involve significant mechanical energy; failure would cause an immediate high-energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Struck by mobile equipment (crane)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "High-visibility vests and hard hats (PPE).",
        "directControlsNeeded": "Physical barricades around crane swing radius and outriggers.",
        "comments": "Mobile equipment in motion exceeds high-energy thresholds. PPE is an administrative control and not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Fall into excavation (rim proximity)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "PPE only (Helmets).",
        "directControlsNeeded": "Perimeter guardrails or hard physical barricades.",
        "comments": "Workers near the crane and beam at the excavation rim have no physical barrier against falls \u2265 4'.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Contact with overhead power lines",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Verified de-energization or non-conductive barriers.",
        "comments": "Proximity of crane boom to trees and nearby buildings indicates risk of contact with overhead utilities (\u2265 50V).",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Crane Lift",
        "hazardDescription": "Impalement (Ground)",
        "energyType": "Sharp / Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar Caps",
        "comments": "FAIL: \"Protruding reinforcement bars\" on ground beams. If a tag-line holder trips, they fall onto spikes.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Crane Lift",
        "hazardDescription": "Crane Tipping",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Ground Bearing Check",
        "comments": "FAIL: Mobile crane operation. Standard lift plan/outrigger usage assumed for \"Success\" unless visible lean.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Crane Lift",
        "hazardDescription": "Suspended Load Drop",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Barricades",
        "comments": "FAIL: \"Supervisors stand at a safe distance.\" Isolation from the Drop Zone is the primary control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Crane Lift",
        "hazardDescription": "Load Swing",
        "energyType": "Motion",
        "directControl": "Yes",
        "currentControls": "Tag Lines",
        "directControlsNeeded": "Gloves",
        "comments": "PASS: Workers using ropes (tag lines) to control motion. Keeps bodies away from the \"Crush Zone.\"",
        "success": 1,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Suspended precast beam \u2013 rigging or lifting failure",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Crane and slings visible",
        "directControlsNeeded": "Certified rigging, lift plan, load testing, exclusion zone",
        "comments": "",
        "success": 1,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Swinging suspended load during crane movement",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Tag line visible",
        "directControlsNeeded": "Controlled tag lines, wind monitoring, trained signalman",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Exposed rebars on lifted element \u2013 impalement risk if struck or load shifts",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps / impalement protection, maintain clear drop zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF086": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Structural Finishing",
        "hazardDescription": "Fall from elevation (leading edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Full-body harness worn by worker.",
        "directControlsNeeded": "Engineered guardrail system or verified, redundant tie-off point.",
        "comments": "Fall height from the concrete beam to the ground exceeds the 4' high-energy threshold. The harness is not a Direct Control as it is not tied off to an engineered anchor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Structural Finishing",
        "hazardDescription": "Struck by suspended load overhead",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "None. Concrete beam is suspended directly over workers.",
        "directControlsNeeded": "Physical exclusion zone; loads must never be suspended over personnel.",
        "comments": "A massive gravitational energy source is positioned directly above the workers' heads; any rigging failure would be catastrophic.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Structural Finishing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None observed; rebar is uncapped and exposed.",
        "directControlsNeeded": "Rebar caps or physical covers over all vertical protrusions.",
        "comments": "Workers are positioned directly above unprotected sharp points; a fall would constitute a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Structural Finishing",
        "hazardDescription": "Struck by falling tools (sledgehammer)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level wearing helmets (PPE).",
        "directControlsNeeded": "Tool lanyards or a hard-barricaded exclusion zone below.",
        "comments": "Gravity energy from a dropped sledgehammer at this height exceeds 500 ft-lbs. PPE is an administrative control and not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Structural Finishing",
        "hazardDescription": "Mechanical energy from manual hammering",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "High-intensity manual labor with a sledgehammer.",
        "directControlsNeeded": "Ergonomic mechanical tools or assisted lifting/striking equipment.",
        "comments": "Repeated high-force manual strikes involve significant kinetic energy transfer and ergonomic strain.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Work at Height",
        "hazardDescription": "Eye Injury (Chips)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None described",
        "directControlsNeeded": "Safety Glasses",
        "comments": "FAIL: \"Using a hammer to adjust.\" Steel-on-concrete or steel-on-steel creates high-velocity flying chips.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Work at Height",
        "hazardDescription": "Struck by Suspended Load",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Lookout / Comms",
        "comments": "CRITICAL FAIL: \"Precast beam hangs nearby.\" Working next to a live load while focusing on hammering is a blind-spot hazard.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Work at Height",
        "hazardDescription": "Dropped Object (Hammer)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Hand Grip",
        "directControlsNeeded": "Tool Tether",
        "comments": "FAIL: Using a hammer at height. If dropped, it becomes a lethal projectile to those below. No tether described.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Work at Height",
        "hazardDescription": "Fall from Beam",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "None",
        "directControlsNeeded": "100% Tie-off",
        "comments": "FAIL: Critical: Anchor point must hold 5000 lbs.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Workers working on an unprotected edge at height (fall from height to lower level)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets; at least one harness worn (tie-off not verifiable)",
        "directControlsNeeded": "Provide edge protection (guardrail/mid-rail/toe board) or install verified fall-arrest (approved anchor + lifeline + 100% tie-off); define safe working zone away from edge",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Workers positioned directly beneath/adjacent to a suspended precast member/overhead load (struck-by/crush if load swings/drops)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible for exclusion; PPE",
        "directControlsNeeded": "Enforce no work under suspended load; establish exclusion zone/barricading; use tag lines and controlled lift plan; competent lifting supervision",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Uncapped protruding rebars at edge/top (impalement if fall or loss of balance)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Install rebar caps/impalement protection (mushroom caps or timber/cover) and maintain setback from exposed steel near edges",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Tools/materials handled at height with open edge (falling objects striking persons below)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Helmets; no toe board visible",
        "directControlsNeeded": "Provide toe boards/debris netting, tool lanyards, and barricaded drop zone below; controlled tool handling/housekeeping",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF109": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Scaffold Erection",
        "hazardDescription": "Fall from elevation (unguarded platform)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Full-body harness worn; worker passing scaffold components upward.",
        "directControlsNeeded": "Engineered guardrail system and secured access platforms.",
        "comments": "Height of the scaffold exceeds the 4' SIF precursor threshold. The activity requires physical exertion at the edge without a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Scaffold Erection",
        "hazardDescription": "Struck by falling objects (scaffold tubes/planks)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level wearing helmets (PPE).",
        "directControlsNeeded": "Physical debris netting or hard-barricaded exclusion zone below.",
        "comments": "Gravity energy from a dropped scaffold component at this height can exceed 500 ft-lbs. PPE does not stop the energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Scaffold Erection",
        "hazardDescription": "Structural collapse of unstable scaffold",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Partially erected structure.",
        "directControlsNeeded": "Verified engineered scaffold design and periodic inspection.",
        "comments": "The mass of the scaffold and workers represents a significant gravitational energy source that would be fatal if released.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Scaffold Erection",
        "hazardDescription": "Impalement on vertical scaffold tubes",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Exposed upward-facing tubes.",
        "directControlsNeeded": "Tube caps or protective covers.",
        "comments": "Falling onto unprotected tubes from any height is a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 1,
        "activityType": "Cleaning/Finishing",
        "hazardDescription": "Slips (Wet Scaffold)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Anti-Slip Deck",
        "comments": "FAIL: \"Washing/cleaning concrete.\" Wet scaffold decks are treacherous. High slip risk at height.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Cleaning/Finishing",
        "hazardDescription": "Chemical Exposure",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None described",
        "directControlsNeeded": "PPE / MSDS",
        "comments": "FAIL: Cleaning agents (acids/solvents) often used for concrete. Inhalation/skin risk if no PPE used.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Cleaning/Finishing",
        "hazardDescription": "Falling Debris (Water/Grout)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Toe Boards / Netting",
        "comments": "FAIL: Washing creates runoff/debris falling to lower levels. Risk to workers below.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Cleaning/Finishing",
        "hazardDescription": "Fall from Height",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Guardrails",
        "comments": "PASS: Multi-level scaffold provides a safe platform (vs. ladder).",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Worker positioned on/near scaffold outer edge and climbing/leaning outside safe platform envelope (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets; harness not clearly verified/tied",
        "directControlsNeeded": "Ensure full platform decking and guardrails/mid-rails/toe boards on all open sides; safe internal access (ladder/stair); verified tie-off if guardrails cannot be provided",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Potential incomplete/uneven scaffold decking and gaps between planks (fall-through to lower levels)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "No full decking confirmation visible",
        "directControlsNeeded": "Maintain fully decked platform with secured planks; prohibit standing on braces/ledgers; scaffold inspection tag and daily checks",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Workers below/within the drop zone while work is ongoing at scaffold height (struck-by falling tools/materials)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Helmets; no exclusion visible",
        "directControlsNeeded": "Establish exclusion zone below; provide toe boards, debris netting, tool lanyards; controlled lifting/handing of materials",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Scaffold stability not verifiable (risk of collapse due to inadequate ties/bracing/foundation) leading to multi-person fall/crush",
        "energyType": "Gravity, Mechanical",
        "directControl": "No",
        "currentControls": "No tie-ins/inspection tag visible",
        "directControlsNeeded": "Ensure engineered scaffold with base plates/sole boards, adequate bracing and ties to structure, load limits, and competent inspection/tagging",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF111": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Structural Finishing",
        "hazardDescription": "Fall from elevation (leading edge/scaffold)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Full-body harnesses worn; one worker using a horizontal lifeline.",
        "directControlsNeeded": "Engineered guardrail system (top-rail and mid-rail).",
        "comments": "Fall height from the platform/ledge to the ground exceeds the 4' high-energy threshold. Harnesses are administrative and vulnerable to human error (e.g., improper hook-up).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Structural Finishing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None observed; rebar at the top of the wall is uncapped.",
        "directControlsNeeded": "Rebar caps or physical covers over all protrusions.",
        "comments": "Workers are positioned directly adjacent to unprotected sharp points; any slip or fall is a life-threatening \"STKY\" condition.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Structural Finishing",
        "hazardDescription": "Struck by falling tools (chisel/hammer)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level wearing helmets (PPE).",
        "directControlsNeeded": "Tool lanyards or physical debris netting.",
        "comments": "Gravity energy from a dropped heavy tool from this height can exceed 500 ft-lbs. PPE is not a Direct Control as it doesn't stop the energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Structural Finishing",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Electric drill/tool resting on the scaffold.",
        "directControlsNeeded": "GFCI protection and inspected, undamaged cords.",
        "comments": "Electricity \u2265 50 Volts is a high-energy hazard. Cords on metal scaffolds increase the risk of a lethal path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Structural Finishing",
        "hazardDescription": "Mechanical energy from manual striking",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Manual use of a chisel and hammer.",
        "directControlsNeeded": "Ergonomic mechanical tools.",
        "comments": "High-intensity manual striking involves continuous kinetic energy transfer and significant ergonomic strain.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Inspection",
        "hazardDescription": "Hand Impalement (Rebar)",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "Gloves (Assumed)",
        "directControlsNeeded": "Rebar Caps",
        "comments": "FAIL: Checking \"protruding reinforcement bars.\" High risk of hand laceration/puncture if he slips.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Inspection",
        "hazardDescription": "Dropped Objects (Tools)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Toe Boards / Tethers",
        "comments": "CRITICAL FAIL: \"Tools lie on scaffold deck.\" Vibration or a kick sends them over the edge. Lethal to ground crew.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Inspection",
        "hazardDescription": "Scaffold Overload",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "None visible",
        "directControlsNeeded": "Load Rating Check",
        "comments": "FAIL: Three workers + tools on one bay. Assuming Heavy Duty rating, this is acceptable.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Inspection",
        "hazardDescription": "Pinch Point (Alignment)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Manual String Line",
        "directControlsNeeded": "Gloves",
        "comments": "PASS: Using a string line is Low Energy. Pinch risk is minimal compared to heavy lifting.",
        "success": 0,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Work on scaffold platform with open sides (no visible guardrails) creating fall-from-height risk",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Helmets; one worker appears in harness (tie-off not verifiable)",
        "directControlsNeeded": "Install guardrails/mid-rails/toe boards on all open sides; provide verified fall-arrest if rails cannot be installed; ensure safe access",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Work positioning near the platform edge while reaching/working on wall/rebar area (loss of balance \u2192 fall)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harness visible (anchor not confirmed)",
        "directControlsNeeded": "Reposition scaffold to keep work within platform envelope; 100% verified tie-off for reach tasks; maintain clear standing area (no edge-standing)",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Uncapped protruding rebars at/near working level (impalement if fall/strike)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Provide rebar caps/impalement protection and maintain setback from exposed steel",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "",
        "hazardDescription": "Power tool/tools placed on platform edge (dropped-object hazard to persons below)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Tool observed on platform; PPE",
        "directControlsNeeded": "Use tool lanyards, keep tools away from edges, provide toe boards, and implement drop-zone barricading below",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF113": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Structural Finishing",
        "hazardDescription": "Fall from elevation (leading edge/scaffold)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Full-body harnesses worn; leaning ladder in use.",
        "directControlsNeeded": "Engineered guardrail system (top-rail and mid-rail).",
        "comments": "Fall height from the concrete ledge to ground exceeds the 4' threshold. Ladders and harnesses (un-tied) are not Direct Controls.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Structural Finishing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None observed; rebar at the top of the wall is uncapped.",
        "directControlsNeeded": "Rebar caps or physical covers over all protrusions.",
        "comments": "Workers are actively moving across and leaning over unprotected sharp points; a slip or fall is a life-threatening \"STKY\" condition.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Structural Finishing",
        "hazardDescription": "Struck by falling objects (hand tools/material)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level wearing helmets (PPE).",
        "directControlsNeeded": "Tool lanyards or physical debris netting.",
        "comments": "Gravity energy from a dropped tool from this height can exceed 1500 J. PPE is an administrative strategy and not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Structural Finishing",
        "hazardDescription": "Mechanical energy from manual striking/prying",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Manual use of a prying bar and hammers.",
        "directControlsNeeded": "Ergonomic mechanical tools or assisted prying equipment.",
        "comments": "High-intensity manual striking involves continuous kinetic energy transfer and significant ergonomic strain.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Structural Finishing",
        "hazardDescription": "Structural instability of recent installation",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Verified engineered shoring and bracing design.",
        "comments": "The worker is applying load to a recently placed concrete section; any structural failure would release massive gravitational energy.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Wall Alignment",
        "hazardDescription": "Overexertion (Reaching)",
        "energyType": "Motion (Bio)",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Work Platform / Step",
        "comments": "FAIL: Reaching over the edge to check alignment. Center of gravity shifts, increasing fall risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Wall Alignment",
        "hazardDescription": "Pinch Point (Bar)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Awareness",
        "comments": "FAIL: Low Energy. Levering a wall panel creates pinch points, but gloves/technique mitigate this.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Wall Alignment",
        "hazardDescription": "Pinch Point (Bar/Wall)",
        "energyType": "Motion",
        "directControl": "Yes",
        "currentControls": "Gloves",
        "directControlsNeeded": "Placement Awareness",
        "comments": "PASS: Levering heavy panels creates crush points. Gloves mitigate minor injuries.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Wall Alignment",
        "hazardDescription": "Dropped Object (Tool)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Hand Grip",
        "directControlsNeeded": "Tool Tether",
        "comments": "FAIL: Using a \"long metal bar\" at the edge. If dropped, it's a spear missile to anyone below. No tether visible.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Wall Alignment",
        "hazardDescription": "Dropped Object (Pry Bar)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Hand Grip",
        "directControlsNeeded": "Tool Tether / Lanyard",
        "comments": "FAIL: Worker using a 'long metal bar' at the edge. If dropped, it penetrates helmets below.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Wall Alignment",
        "hazardDescription": "Scaffold Overloading",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Load limit signage",
        "comments": "Multiple workers on one bay. Verify load rating (Light vs Heavy Duty).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Wall Alignment",
        "hazardDescription": "Swing Fall (Pendulum)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Lifeline",
        "directControlsNeeded": "Anchor overhead",
        "comments": "If lifeline is 'stretched along edge', a fall creates a pendulum swing, smashing worker into structure.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Wall Alignment",
        "hazardDescription": "Fall from Height (Edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Lifeline + Harness",
        "directControlsNeeded": "Hard Guardrails",
        "comments": "FAIL: A lifeline arrests a fall; it doesn't prevent it. If a worker forgets to clip in, they die. Hard rails are the required Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Wall Alignment",
        "hazardDescription": "Fall from Height (Edge Work)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Lifeline + Harness",
        "directControlsNeeded": "Hard Guardrails",
        "comments": "CRITICAL FAIL: Reliance on fall arrest (lifeline) instead of fall prevention (rails). Human error = death.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Wall Alignment",
        "hazardDescription": "Scaffold Stability",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Scaffold Structure",
        "directControlsNeeded": "Tag Check",
        "comments": "PASS: Workers are on a scaffold. Assuming it is tagged/inspected, this provides a safe platform.",
        "success": 1,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Worker stepping/climbing on wall edge with significant drop (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harness worn by some workers (tie-off not verifiable); helmets",
        "directControlsNeeded": "Provide edge protection or verified fall-arrest (approved anchors + lifeline); designate safe access/working method to avoid climbing on edges",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Lifeline/anchorage appears to be an improvised strap/line across work area (anchor failure \u2192 uncontrolled fall)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harness present; strap/line visible",
        "directControlsNeeded": "Use certified anchorage points or engineered horizontal lifeline with rated components; ensure correct connector use and tensioning; competent fall-protection plan",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Protruding rebars around work zone at height (impalement if fall or slip)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Install rebar caps/cover boards and maintain clearance; keep travel paths away from exposed rebar",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF117": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Manual Handling / Pouring",
        "hazardDescription": "Fall from elevation (leading edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker wearing a full-body harness.",
        "directControlsNeeded": "Engineered guardrail system or verified tie-off point.",
        "comments": "Fall height from the concrete ledge to the ground appears to be \u2265 4'. Harness is an administrative control and is not tied off.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Manual Handling / Pouring",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None; rebar is uncapped and exposed.",
        "directControlsNeeded": "Rebar caps or physical covers over all protrusions.",
        "comments": "Workers are leaning over and standing directly above sharp vertical points; a slip or fall is a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Manual Handling / Pouring",
        "hazardDescription": "Struck by falling objects (concrete bucket)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level wearing helmets.",
        "directControlsNeeded": "Tool/bucket lanyards or a hard-barricaded exclusion zone.",
        "comments": "Gravity energy from a dropped heavy concrete bucket at this height can exceed 500 ft-lbs. PPE does not stop the energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Manual Handling / Pouring",
        "hazardDescription": "Ergonomic strain from manual concrete lifting",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Manual bucket-by-bucket pouring.",
        "directControlsNeeded": "Mechanical concrete pump or bucket/crane system.",
        "comments": "Repeated high-intensity manual lifting involves significant kinetic energy and high probability of long-term musculoskeletal injury.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Manual Handling / Pouring",
        "hazardDescription": "Structural instability of recent installation",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Verified engineered shoring and bracing design.",
        "comments": "Workers are applying additional weight/load to a recently placed concrete section; failure would release massive gravitational energy.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 1,
        "activityType": "Grouting",
        "hazardDescription": "Chemical Burn (Cement)",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None described",
        "directControlsNeeded": "Nitrile Gloves / Face Shield",
        "comments": "FAIL: Pouring mortar from a bucket. Splash risk to eyes/skin. Cement is caustic (pH 12).",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Grouting",
        "hazardDescription": "Manual Handling (Bucket)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Manual",
        "directControlsNeeded": "Smaller Loads",
        "comments": "FAIL: Repetitive lifting of heavy mortar buckets overhead/at shoulder height. High shoulder strain risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Grouting Joint",
        "hazardDescription": "Chemical Burn (Cement Splash)",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Face Shield / Goggles",
        "comments": "FAIL: Pouring mortar from shoulder height. Splash to eyes is highly probable. Cement pH 12 causes blindness.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Grouting Joint",
        "hazardDescription": "Ergonomic Strain (Shoulder)",
        "energyType": "Motion (Bio)",
        "directControl": "No",
        "currentControls": "Manual Pour",
        "directControlsNeeded": "Funnel / Pump",
        "comments": "FAIL: Repetitive overhead/shoulder pouring of heavy buckets causes rotator cuff injury.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Grouting Joint",
        "hazardDescription": "Dermatitis (Skin Contact)",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Nitrile Gloves / Sleeves",
        "comments": "FAIL: Cement contact with skin causes hexavalent chromium sensitization.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Grouting",
        "hazardDescription": "Impalement (Rebar)",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar Caps",
        "comments": "CRITICAL FAIL: \"Exposed reinforcement bars visible.\" Working above them while pouring. A slip = impalement.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Grouting",
        "hazardDescription": "Falling Object (Bucket)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Hand Grip",
        "directControlsNeeded": "Restraint",
        "comments": "FAIL: If the worker slips, the heavy bucket falls. Risk to the \"support worker\" below.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Grouting Joint",
        "hazardDescription": "Impalement (Rebar)",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar Caps",
        "comments": "CRITICAL FAIL: Working above exposed rebar. A slip while holding a heavy bucket is fatal.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Grouting Joint",
        "hazardDescription": "Dropped Load (Bucket)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Hand Grip",
        "directControlsNeeded": "Exclusion Zone",
        "comments": "FAIL: If top worker slips, 20kg bucket hits the 'support worker' below.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": []
  },
  "FF151": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "External Finishing",
        "hazardDescription": "Fall from elevation (unguarded scaffold)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers wearing harnesses on multiple scaffold levels.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, toe board).",
        "comments": "Scaffold levels exceed the 4' high-energy threshold. Harnesses are administrative and vulnerable to human error (e.g., improper tie-off).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "External Finishing",
        "hazardDescription": "Struck by falling objects from platform",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level near the base.",
        "directControlsNeeded": "Physical debris netting or hard-barricaded exclusion zone.",
        "comments": "Gravity energy from dropped finishing tools or buckets at this height can exceed 500 ft-lbs. PPE (helmets) is not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "External Finishing",
        "hazardDescription": "Structural instability of scaffold structure",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Informal base/bracing visible near the tree.",
        "directControlsNeeded": "Verified engineered scaffold design and stable mudsills.",
        "comments": "Total mass of the scaffold and multiple workers represents a significant gravitational energy source if structural failure occurs.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "External Finishing",
        "hazardDescription": "Contact with live electrical source (lighting)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Temporary light fixture attached to metal scaffold.",
        "directControlsNeeded": "GFCI protection and inspected, undamaged cords.",
        "comments": "Electricity \u2265 50 Volts on a conductive metal structure is a high-energy lethal hazard.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "External Finishing",
        "hazardDescription": "Contact with mobile equipment or vehicles",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Work area open to personnel traffic.",
        "directControlsNeeded": "Physical exclusion zones or hard barricades.",
        "comments": "Workers at ground level are exposed to potential motion energy from nearby site traffic.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 4,
        "activityType": "Fa\u00e7ade Finishing",
        "hazardDescription": "Silica/Dust Inhalation",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Masks / Wet Method",
        "comments": "FAIL: \"Surface preparation\" often involves grinding/sanding. Silica dust risk is high.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Fa\u00e7ade Finishing",
        "hazardDescription": "Silica Dust Inhalation",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Masks / Wet Prep",
        "comments": "FAIL: Surface prep (grinding/cleaning) generates respirable silica. No respiratory protection described.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Fa\u00e7ade Finishing",
        "hazardDescription": "Fire Hazard (Paper)",
        "energyType": "Thermal",
        "directControl": "No",
        "currentControls": "Newspapers",
        "directControlsNeeded": "FR Sheeting",
        "comments": "FAIL: \"Newspapers taped to openings.\" Highly flammable in a construction zone (sparks/cigarettes). Use Fire Retardant plastic.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Fa\u00e7ade Finishing",
        "hazardDescription": "Falling Debris",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Debris Netting",
        "comments": "FAIL: Surface prep creates debris. No netting mentioned to catch falling mortar/tools.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Fa\u00e7ade Finishing",
        "hazardDescription": "Fire Hazard (Combustibles)",
        "energyType": "Thermal",
        "directControl": "No",
        "currentControls": "Newspapers",
        "directControlsNeeded": "FR Sheeting",
        "comments": "CRITICAL FAIL: Newspapers taped to wall. Highly flammable fuel source on a construction site.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Fa\u00e7ade Finishing",
        "hazardDescription": "Falling Debris (Gaps)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Debris Netting / Mesh",
        "comments": "FAIL: Finishing debris falling through scaffold gaps to levels below.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Fa\u00e7ade Finishing",
        "hazardDescription": "Wind Load Failure",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Tie-in Check",
        "comments": "Sheeting (even paper) increases wind sail area. Scaffold ties must be verified.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Fa\u00e7ade Finishing",
        "hazardDescription": "Fall from Scaffold",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Toe Boards",
        "comments": "FAIL: Large system scaffold typically includes rails. Platform safety assumed acceptable.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Fa\u00e7ade Finishing",
        "hazardDescription": "Fall from Scaffold",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Scaffold / Rails",
        "directControlsNeeded": "Toe Boards",
        "comments": "PASS: Large system scaffold typically includes rails. \"Success\" assumed for platform safety.",
        "success": 1,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Workers on multi-level scaffold at height (fall from platform due to loss of balance or misstep)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Scaffold structure; PPE (helmets, vests)",
        "directControlsNeeded": "Fully decked platforms, complete guardrails (top/mid/toe), internal ladder access, scaffold inspection & tagging",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Falling objects (tools/materials) from upper scaffold levels onto persons below",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Toe boards, debris netting, tool lanyards; barricaded exclusion zone below scaffold",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Unauthorized persons standing beneath active scaffold work zone",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Hard barricading and access control below scaffold; warning signage",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF167": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Pre-pour Survey",
        "hazardDescription": "Fall from elevation (unguarded leading edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Warning line/perimeter rope visible in the background.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, toe board).",
        "comments": "Perimeter rope is an administrative control and does not provide physical fall prevention for high-energy gravity hazards.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Pre-pour Survey",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Numerous vertical rebar \"hooks\" and starters are uncapped.",
        "directControlsNeeded": "Rebar caps or physical covers over all vertical protrusions.",
        "comments": "Workers walking on the grid are exposed to high-energy impalement risks if a trip or fall occurs.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Pre-pour Survey",
        "hazardDescription": "Contact with live electrical source (hand tools)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Electric angle grinder and cords resting on the metal rebar grid.",
        "directControlsNeeded": "GFCI protection and inspected, undamaged cords.",
        "comments": "Electricity \u2265 50 Volts on a conductive metal grid creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Pre-pour Survey",
        "hazardDescription": "Structural collapse of deck",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary shoring/formwork beneath the grid.",
        "directControlsNeeded": "Verified engineered shoring design and pre-pour load inspection.",
        "comments": "The weight of the rebar and multiple personnel represents massive gravitational energy reliant on temporary supports.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Pre-pour Survey",
        "hazardDescription": "Tripping over deck clutter/uneven surfaces",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Tools, buckets, and survey equipment scattered on the grid.",
        "directControlsNeeded": "Organized work area and designated paths.",
        "comments": "Clutter on a rebar grid increases the probability of a trip-initiated fall into high-energy hazards.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 1,
        "activityType": "Slab Survey",
        "hazardDescription": "Trip Hazard (Mesh)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Walkways / Housekeeping",
        "comments": "CRITICAL FAIL: Walking on rebar mesh is hard enough. \"Tools, cables, materials scattered\" makes it a minefield.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Slab Survey",
        "hazardDescription": "Instrument Damage/Trip",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Tripod",
        "directControlsNeeded": "Visibility Cone",
        "comments": "FAIL: Tripod legs in a mesh grid are a trip hazard for others.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Slab Survey",
        "hazardDescription": "Impalement (Spacer)",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Flat-top Spacers",
        "comments": "FAIL: Falling onto a hard plastic/concrete spacer block can cause puncture wounds.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Slab Survey",
        "hazardDescription": "Trip Hazard (Mesh Minefield)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Designated Walkways",
        "comments": "CRITICAL FAIL: Walking on mesh is hazardous. Adding 'scattered cables' makes it a trap.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Slab Survey",
        "hazardDescription": "Instrument Trip/Tip",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Tripod",
        "directControlsNeeded": "Stable Platform",
        "comments": "FAIL: Tripod legs on rebar mesh are unstable. Risk of tipping instrument or impaling a falling worker.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Slab Survey",
        "hazardDescription": "Impalement (Spacers)",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Flat-top Spacers",
        "comments": "FAIL: Hard plastic spacers are sharp. Falling onto them causes puncture wounds.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 6,
        "activityType": "Slab Survey",
        "hazardDescription": "Sun Glare / UV",
        "energyType": "Radiation",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Sunglasses / Shade",
        "comments": "Surveying on a reflective slab causes eye strain/UV damage.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Slab Survey",
        "hazardDescription": "Ankle Twist (Rebar)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Designated Path",
        "comments": "FAIL: Low Energy. High-ankle boots are the standard control for walking on mesh.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Slab Survey",
        "hazardDescription": "Ankle Twist",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Path Clearing",
        "comments": "FAIL: High-ankle boots mitigate the twist risk on mesh.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Slab Survey",
        "hazardDescription": "Electrical Shock (Cables)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Cable Management / Hooks",
        "comments": "Cables lying on steel mesh. If insulation is cut by rebar -> Electrified deck.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Workers walking on dense, uncapped rebar mesh (trip/fall leading to impalement)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Temporary walking platforms, rebar caps/impalement protection; defined walk paths",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Electrical tool and cable lying on rebar mat (electric shock if insulation damaged)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "RCD/ELCB protection, cable management off rebar; use of rubber mats",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Multiple personnel working near slab edge with minimal edge protection (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Tape barricade",
        "directControlsNeeded": "Rigid edge protection/guardrails or fall-restraint systems; defined safe setback distance",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF176": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Concrete Pouring",
        "hazardDescription": "High-pressure hose burst or whiplash",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "Workers manually positioning the concrete hose.",
        "directControlsNeeded": "Hose whiplash arrestors and secondary safety cables.",
        "comments": "Pressure energy in concrete lines is a primary \"STKY\" hazard. Manual handling is vulnerable to sudden energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Fall from elevation (leading edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Perimeter caution/warning line rope.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, toe board).",
        "comments": "Caution ropes are administrative controls. They do not provide physical fall prevention for high-energy gravity hazards.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Struck by mobile equipment (pump boom)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Personnel near the hose discharge point.",
        "directControlsNeeded": "Physical exclusion zone or hard-barricaded \"red zone.\"",
        "comments": "The motion energy of a concrete boom and hose can easily exceed 1500 J if a failure or sudden shift occurs.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Limited visibility / Poor lighting",
        "energyType": "Other",
        "directControl": "No",
        "currentControls": "Single high-intensity floodlight fixture.",
        "directControlsNeeded": "Redundant, multi-directional lighting to eliminate shadows.",
        "comments": "Night work acts as a hazard multiplier by reducing the visual recognition of high-energy precursors like trip hazards.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Temporary lighting cables resting on the wet rebar grid.",
        "directControlsNeeded": "GFCI protection and elevated/secured cord management.",
        "comments": "Electricity \u2265 50 Volts on a conductive metal grid saturated with wet concrete creates a lethal path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Concrete Pouring",
        "hazardDescription": "Tripping over deck clutter / rebar",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Scattered tools and uneven surfaces on the wet grid.",
        "directControlsNeeded": "Designated clear pathways and organized work deck.",
        "comments": "Tripping on a wet, congested deck increases the probability of a fall into other high-energy hazards.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 4,
        "activityType": "Night Concreting",
        "hazardDescription": "Fatigue / Awareness",
        "energyType": "Biological",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Supervision / Rotation",
        "comments": "FAIL: Night shift reduces alertness. High risk of errors near the edge or machinery.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Night Concreting",
        "hazardDescription": "Fatigue / Error",
        "energyType": "Biological",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Supervision / Breaks",
        "comments": "FAIL: Night shift = lower alertness. Higher risk of misjudging edges or machinery movement.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Night Concreting",
        "hazardDescription": "Glare Blindness",
        "energyType": "Radiation",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Light Positioning",
        "comments": "FAIL: Floodlights aimed at eye level blind workers/drivers. Lights must be high and angled down.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 6,
        "activityType": "Night Concreting",
        "hazardDescription": "Noise (Pump/Vibrator)",
        "energyType": "Sound",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Hearing Protection",
        "comments": "Concrete pumps and vibrators >95dB. Night amplifies perceived noise.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Night Concreting",
        "hazardDescription": "Chemical Burn (Legs)",
        "energyType": "Chemical",
        "directControl": "Yes",
        "currentControls": "Gumboots",
        "directControlsNeeded": "Taped Tops",
        "comments": "PASS: \"Workers wear gumboots.\" This is the correct PPE for wading in wet concrete.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Night Concreting",
        "hazardDescription": "Concrete Burns (Legs)",
        "energyType": "Chemical",
        "directControl": "Yes",
        "currentControls": "None visible",
        "directControlsNeeded": "Taped Tops",
        "comments": "FAIL: Workers wearing gumboots. Correct PPE for wading.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Night Concreting",
        "hazardDescription": "Concrete Pipe Whip",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Whip Check / Anchor",
        "comments": "CRITICAL FAIL: \"Delivery pipe visible.\" Concrete creates high pressure pulsing. If the pipe bursts/whips, it kills.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Night Concreting",
        "hazardDescription": "Concrete Pipe Whip",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Whip Check / Anchor",
        "comments": "CRITICAL FAIL: Concrete under pressure. If pipe bursts, it whips violently. Safety cable required.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Night Concreting",
        "hazardDescription": "Trip Hazard (Visibility)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Floodlights",
        "directControlsNeeded": "100 Lux / Glare Free",
        "comments": "FAIL: Night work. Shadows hide the rebar mesh and pipes. \"Floodlights\" often create blinding glare zones.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Night Concreting",
        "hazardDescription": "Trip Hazard (Shadows)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Floodlights",
        "directControlsNeeded": "Diffused Lighting",
        "comments": "FAIL: Floodlights create harsh shadows. Rebar mesh/pipes become invisible trip hazards.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Night-time slab concreting with limited illumination at edges (misstep leading to fall)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary lighting",
        "directControlsNeeded": "Uniform, sufficient lighting, illuminated edge markers; guardrails or fall-restraint",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Workers standing close to active concrete discharge hose (hose whip/struck-by)",
        "energyType": "Mechanical, Stored Energy",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Hose restraint/whip-check, controlled discharge zone; trained signalman",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Wet concrete surface causing slip leading to fall into rebar or slab edge",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Anti-slip walkways, defined access routes; limit personnel on pour surface",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF180": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Night Deck Pour",
        "hazardDescription": "High-pressure concrete hose burst/whip",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "Manual positioning of the hose by workers.",
        "directControlsNeeded": "Hose whiplash arrestors and safety cables.",
        "comments": "Concrete line pressure is a primary \"STKY\" hazard. Manual handling cannot mitigate a sudden energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Night Deck Pour",
        "hazardDescription": "Fall from elevation (leading edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Perimeter caution/warning line rope.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail).",
        "comments": "Caution ropes are administrative and provide no physical prevention against a high-energy gravity fall.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Night Deck Pour",
        "hazardDescription": "Struck by mobile equipment (pump boom)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Personnel standing near discharge point.",
        "directControlsNeeded": "Physical exclusion zone or hard barricades.",
        "comments": "The kinetic energy of a shifting pump boom/hose exceeds 500 ft-lbs. PPE (vests/helmets) is not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Night Deck Pour",
        "hazardDescription": "Limited visibility / Shadows",
        "energyType": "Other",
        "directControl": "No",
        "currentControls": "Single high-intensity floodlight.",
        "directControlsNeeded": "Redundant, multi-directional lighting.",
        "comments": "Night conditions act as a hazard multiplier by masking high-energy precursors like trip hazards or edge proximity.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Night Deck Pour",
        "hazardDescription": "Contact with live electricity",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Temporary lighting cables on wet rebar grid.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "50 Volts or greater on a conductive metal grid saturated with wet concrete creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Night Deck Pour",
        "hazardDescription": "Tripping over deck clutter / rebar",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Scattered tools and uneven surfaces on wet grid.",
        "directControlsNeeded": "Designated clear pathways and organized work deck.",
        "comments": "A trip on a wet, congested deck increases the probability of a fall into other high-energy zones.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 5,
        "activityType": "Night Pour",
        "hazardDescription": "Lighting Glare",
        "energyType": "Radiation",
        "directControl": "No",
        "currentControls": "Floodlights",
        "directControlsNeeded": "Shielded Fixtures",
        "comments": "FAIL: Floodlights can blind operators or drivers; shielded fixtures are required.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 6,
        "activityType": "Night Pour",
        "hazardDescription": "Fatigue Error",
        "energyType": "Biological",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Shift Rotation",
        "comments": "FAIL: Night shift increases human error; requires a dedicated shift rotation plan.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Night Pour",
        "hazardDescription": "Chemical Burn (Legs)",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Taped Tops",
        "comments": "Control is not effective; ensure boot tops are taped to prevent slurry entry.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Night Pour",
        "hazardDescription": "Fall from Edge (Night)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Lifeline + Tape",
        "directControlsNeeded": "Hard Guardrails",
        "comments": "CRITICAL FAIL: Barricade tape is only a visual warning; night work requires hard guardrails.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Night Pour",
        "hazardDescription": "Concrete Pipe Burst",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Whip Check Cable",
        "comments": "CRITICAL FAIL: Concrete delivery pipes lack \"whip-check\" cables, risking lethal hose movement.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Night Pour",
        "hazardDescription": "Trip Hazard (Shadows)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Floodlights",
        "directControlsNeeded": "100 Lux / Diffused",
        "comments": "CRITICAL FAIL: Harsh shadows from high-intensity floodlights hide trip hazards on the mesh.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Supervisors/workers standing on wet slab near rebar mesh (slip \u2192 impalement risk)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Rebar caps, controlled access; temporary cover boards",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Concrete hose laid across walking path (trip and hose movement)",
        "energyType": "Motion, Stored Energy",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Route hose away from walk paths, secure hose; designate exclusion zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF198": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Drilling at Height",
        "hazardDescription": "Fall from elevation (leading edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers wearing full-body harnesses.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail).",
        "comments": "Height from the platform/ledge to the ground exceeds the 4' high-energy threshold. Harnesses are not tied off to an engineered anchor point.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Drilling at Height",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Numerous vertical rebar starters are uncapped.",
        "directControlsNeeded": "Rebar caps or physical covers over all protrusions.",
        "comments": "Any slip or fall initiated by the drilling activity presents a primary high-energy impalement hazard on the uncapped rebar.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Drilling at Height",
        "hazardDescription": "Bit bind or drill kickback",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Handheld drilling operation.",
        "directControlsNeeded": "Internal torque slip-clutch or engineered drill stand.",
        "comments": "Heavy rotating equipment involves high mechanical energy. A sudden bind can result in a high-torque release, leading to a fall or wrist injury.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Drilling at Height",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Electric cord visible on the wet/congested surface.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "Electricity \u2265 50 Volts on a conductive surface near vertical rebar creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Drilling at Height",
        "hazardDescription": "Struck by falling objects (drill/tools)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level (unseen) wearing helmets.",
        "directControlsNeeded": "Tool lanyards or a hard-barricaded exclusion zone.",
        "comments": "Gravity energy from a dropped drill at this height exceeds 1500J. PPE (helmets) is an administrative control, not a Direct Control.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 5,
        "activityType": "Rebar Fixing",
        "hazardDescription": "Hand-Arm Vibration",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Anti-vibe Gloves",
        "comments": "FAIL: Long-term drilling causes vibration damage; requires anti-vibe gloves and rotation.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 6,
        "activityType": "Rebar Fixing",
        "hazardDescription": "Puncture (Tying Wire)",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Nitrile Gloves",
        "comments": "FAIL: Handling wire and bars causes deep punctures; nitrile-coated gloves are required.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Rebar Fixing",
        "hazardDescription": "Drill Kickback @ Height",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Hand Grip",
        "directControlsNeeded": "Anti-Kickback Clutch",
        "comments": "FAIL: High-torque reactions can throw a worker off the scaffold; anti-kickback tools required.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Rebar Fixing",
        "hazardDescription": "Dropped Tool (Drill)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Hand Grip",
        "directControlsNeeded": "Tool Tether",
        "comments": "FAIL: Working with hand tools at height risks lethal energy if dropped; tool tethers mandatory.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Rebar Fixing",
        "hazardDescription": "Impale (Starter Bars)",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Rebar Safety Caps",
        "comments": "CRITICAL FAIL: Fall onto unprotected vertical rebar is a zero-survival scenario.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Rebar Fixing",
        "hazardDescription": "Fall from Scaffold",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "tie",
        "directControlsNeeded": "100% Tie-off",
        "comments": "Control is not effective; maintain 100% tie-off protocol at all times.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Worker kneeling at slab edge with protruding uncapped rebars (fall/impalement)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Rebar caps/impalement protection; install edge protection or maintain safe setback",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Use of power tool close to edge and rebars (loss of balance due to reaction force)",
        "energyType": "Mechanical, Gravity",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Work positioning restraint, stable working platform; avoid forceful tool use at edge",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Lifeline/rope tied to scaffold member without verified anchorage strength",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harness worn",
        "directControlsNeeded": "Certified anchor point with documented load capacity; independent lifeline",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF208": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Suspended load (falling or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Worker in proximity using a manual tag line to guide the beam.",
        "directControlsNeeded": "Physical exclusion zone (hard barricades) beneath and around the load path.",
        "comments": "The multi-ton precast beam represents massive potential energy. Manual tag lines are a behavioral control and cannot prevent high-energy contact if the load shifts.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Struck by mobile equipment (crane outriggers/swing)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Personnel near active crane outriggers and swing radius; wearing PPE.",
        "directControlsNeeded": "Physical barricades or hard exclusionary fencing around the entire crane swing radius.",
        "comments": "Motion energy from heavy machinery far exceeds high-energy thresholds. PPE (vests/helmets) is an administrative strategy and not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Fall from elevation (scaffold access)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker visible on upper scaffold levels during the lift.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, toe board).",
        "comments": "Height of the scaffold exceeds the 4' SIF precursor threshold. Safety currently relies on human performance/balance rather than physical barriers.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Mechanical failure of rigging components",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Single-point crane lift with cables under high tension.",
        "directControlsNeeded": "Dual-redundant rigging or a verified engineered lift plan with physical separation.",
        "comments": "High tension in crane rigging involve significant mechanical energy; a single failure results in an immediate high-energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Struck by falling objects (rigging/tools)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level beneath active work areas.",
        "directControlsNeeded": "Tool lanyards or a hard-barricaded exclusion zone below the scaffold/lift.",
        "comments": "Gravity energy from a dropped component from this height exceeds 1500J. PPE is not a Direct Control.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 4,
        "activityType": "Crane Lift",
        "hazardDescription": "Debris Trip Hazard",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Housekeeping",
        "comments": "FAIL: Cluttered ground areas near moving loads increase trip-and-crush risks.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Crane Lift",
        "hazardDescription": "Ground Bearing Failure",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Paved Road",
        "directControlsNeeded": "Outrigger Pads/Mats",
        "comments": "CRITICAL FAIL: Pavement may hide voids; outriggers require large timber mats for support.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Crane Lift",
        "hazardDescription": "Struck by Site Vehicle",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Paved Road",
        "directControlsNeeded": "Traffic Management",
        "comments": "FAIL: Operating on access roads requires physical segregation and a dedicated spotter.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 6,
        "activityType": "Crane Lift",
        "hazardDescription": "Hydraulic Injection",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Inspection Routine",
        "comments": "FAIL: High-pressure hydraulic leaks are lethal; regular inspection routine is vital.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Crane Lift",
        "hazardDescription": "Dropped Object (Fa\u00e7ade)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Debris Netting",
        "comments": "Control is effective; scaffolding provides protection against falling debris.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Crane Lift",
        "hazardDescription": "Suspended Load Swing",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Gloves",
        "comments": "Control is not effective; tag lines keep workers away from the immediate load path.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Suspended precast beam lifted by crane with workers in close proximity (struck-by / crushing)",
        "energyType": "Gravity, Mechanical",
        "directControl": "No",
        "currentControls": "Tag line used; helmets worn",
        "directControlsNeeded": "Exclusion zone, no personnel under load; controlled tag lines; lift plan & signalman; crane-load path control",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Workers guiding load manually near edge of scaffold/building (fall + struck-by combined)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Guardrails at scaffold edge",
        "directControlsNeeded": "Hands-free guiding tools, maintain distance; full perimeter edge protection; task-specific briefing",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF212": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Precast Landing",
        "hazardDescription": "Suspended load (crush or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Workers guiding a multi-ton beam by hand while standing on a platform.",
        "directControlsNeeded": "Physical exclusion zone or automated guidance systems.",
        "comments": "The beam represents massive potential energy. Manual guidance at this close range is a high-exposure SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Precast Landing",
        "hazardDescription": "Fall from elevation (unguarded platform)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Perimeter guardrail is incomplete or non-compliant (missing mid-rail/toe board).",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, toe board).",
        "comments": "Height from the working level to ground exceeds the 4' threshold. Workers are leaned over the edge.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Precast Landing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Numerous vertical rebar starters are uncapped in the landing zone.",
        "directControlsNeeded": "Rebar caps or physical covers over all protrusions.",
        "comments": "Any slip or fall during the high-exertion landing phase presents a primary impalement hazard.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Precast Landing",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Electric cord for a hand tool (drill) is draped over the beam and metal grid.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "Electricity \u2265 50 Volts on a conductive metal surface creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Precast Landing",
        "hazardDescription": "Mechanical energy from rotating tools",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Worker using a handheld drill/driver to secure the beam.",
        "directControlsNeeded": "Internal torque slip-clutch or engineered drill stand.",
        "comments": "Mechanical energy from bit bind or kickback can result in a loss of balance and subsequent fall.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Beam Fixing",
        "hazardDescription": "Silica Dust (Drilling)",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "HEPA Vac / Water",
        "comments": "FAIL: Concrete drilling generates respirable silica; requires HEPA vac or water at source.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Beam Fixing",
        "hazardDescription": "Crush (Pinch Point)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Manual Steadying",
        "directControlsNeeded": "No-Touch Guide Sticks",
        "comments": "CRITICAL FAIL: Manual steadying of a 5-ton beam is a fatal error; guide poles required.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Beam Fixing",
        "hazardDescription": "Structural Eccentricity",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Supervision",
        "directControlsNeeded": "Temp Support Plan",
        "comments": "FAIL: Beams held at one end risk torsion; requires an engineered temporary support plan.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Beam Fixing",
        "hazardDescription": "Dropped Drill Bit",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Catch Netting",
        "comments": "FAIL: Snapping drill bits at height become projectiles; requires catch netting.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Beam Fixing",
        "hazardDescription": "Fall from Height",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Scaffolding",
        "directControlsNeeded": "Gap Inspection",
        "comments": "Control is effective; ensure frequent gap inspections on the scaffold deck.",
        "success": 1,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Worker drilling/anchoring under suspended beam (crushing if load shifts or drops)",
        "energyType": "Gravity, Mechanical",
        "directControl": "No",
        "currentControls": "Helmets; informal positioning",
        "directControlsNeeded": "Positive load securing before work; no work under suspended load; engineered temporary supports",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Head and upper body directly below beam soffit during drilling (head strike)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Hands-free supports, safe clearance; prohibit body placement under beam; defined safe zones",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF213": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Precast Landing",
        "hazardDescription": "Fall from elevation (leading edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker kneeling near the edge with a harness.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail).",
        "comments": "Height from the wet concrete deck to the ground exceeds the 4' high-energy threshold. The harness is not tied off.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Precast Landing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Rebar starters are exposed and uncapped.",
        "directControlsNeeded": "Rebar caps or physical covers over all protrusions.",
        "comments": "The worker is kneeling and reaching directly over uncapped rebar. A slip on the wet surface presents a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Precast Landing",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Electric hand tool (drill) in use on a wet surface.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "Using corded electric tools (\u2265 50V) on a standing water/wet concrete surface creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Precast Landing",
        "hazardDescription": "Struck by suspended load (swinging beam)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Worker in the \"line of fire\" during beam placement.",
        "directControlsNeeded": "Physical exclusion zone or automated positioning.",
        "comments": "A multi-ton precast beam is being landed in close proximity to workers. Any rigging failure or sudden shift involves energy far exceeding 1500J.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Precast Landing",
        "hazardDescription": "Slip/Trip on wet, cluttered deck",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Standing water and loose materials on the grid.",
        "directControlsNeeded": "Water removal (squeegee) and organized work area.",
        "comments": "Standing water acts as a hazard multiplier by increasing the probability of a fall into other high-energy zones.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 1,
        "activityType": "Grouting",
        "hazardDescription": "Chemical Burn (Grout)",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "Cloths",
        "directControlsNeeded": "Nitrile Gloves",
        "comments": "FAIL: Alkaline grout causes deep burns; using wet cloths in-hand is extremely hazardous.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 2,
        "activityType": "Grouting",
        "hazardDescription": "Eye Injury (Splash)",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Safety Goggles",
        "comments": "FAIL: Grouting at face level risks caustic splashes; safety goggles are mandatory.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Grouting",
        "hazardDescription": "Nail Puncture",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "Cloths",
        "directControlsNeeded": "De-nailing Program",
        "comments": "FAIL: Stripped formwork nearby often has protruding nails; requires de-nailing program.",
        "success": 0,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Wet, water-logged slab surface at height causing slip and fall from edge",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Safety helmets; boots",
        "directControlsNeeded": "Surface drainage, anti-slip decking; barricade edges; stop work until surface dry",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Protruding uncapped rebars near work edge (impalement in case of fall)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps / impalement protection; exclusion buffer at edges",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF214": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Suspended load (crush/swing)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Multiple workers guiding the beam with their hands.",
        "directControlsNeeded": "Physical exclusion zone or mechanical positioning.",
        "comments": "Multi-ton beam represents massive potential energy. Manual contact during placement is a high-risk SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Fall from elevation (unguarded edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers standing on a wet deck with no guardrails.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail).",
        "comments": "Fall height to the ground exceeds the 4' threshold. Wet conditions act as a hazard multiplier for slips.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Impalement on vertical rebar",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Uncapped rebar starters present on the landing ledge.",
        "directControlsNeeded": "Rebar caps or physical covers over all protrusions.",
        "comments": "Any slip while guiding the beam presents a primary impalement hazard on uncapped vertical steel.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Contact with live electricity",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Electric hand tools and cords on the wet concrete deck.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "Corded tools (\u2265 50V) on a conductive, wet surface create a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Standing water on work surface",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Significant standing water visible on the concrete.",
        "directControlsNeeded": "Water removal (pumping/squeegeeing).",
        "comments": "Standing water increases the probability of human error (slips) and heightens electrical conductivity risks.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Beam Positioning",
        "hazardDescription": "Slips on Curing Water",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Gumboots",
        "directControlsNeeded": "Squeegee / Clean-up",
        "comments": "PASS: Standard PPE manages low-energy slip risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Beam Positioning",
        "hazardDescription": "Crush (Pinch Point)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Manual Guiding",
        "directControlsNeeded": "Guide Poles / Tag Lines",
        "comments": "CRITICAL FAIL: Workers manually guiding beam ends. If the crane jerks, hands are crushed instantly.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Beam Positioning",
        "hazardDescription": "Center Point Rigging Failure",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Single Sling",
        "directControlsNeeded": "Two-Point Slings",
        "comments": "FAIL: A single center lift is unstable. If the beam tilts, it creates a massive \"lever\" force against workers.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Beam Positioning",
        "hazardDescription": "Edge Fall (Guide Worker)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Partial Edge Protection",
        "directControlsNeeded": "Hard Guardrails",
        "comments": "FAIL: Focused on alignment, workers ignore proximity to the roof edge. \"Temporary\" protection must be rigid.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Multiple workers stabilising beam at edge without verified fall-arrest anchorage",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harness worn by some workers",
        "directControlsNeeded": "Verified anchor points, double lanyards; engineered edge protection; limit number of workers at edge",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Uncontrolled beam swing during final positioning (struck-by / pinch)",
        "energyType": "Mechanical, Gravity",
        "directControl": "No",
        "currentControls": "Manual holding only",
        "directControlsNeeded": "Tag lines both ends, slow-speed final placement; competent rigger supervision",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF216": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Deck Finishing",
        "hazardDescription": "Impalement on vertical rebar",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers leaning over uncapped rebar starters.",
        "directControlsNeeded": "Rebar caps or physical covers.",
        "comments": "A fall or slip onto sharp vertical steel is a primary high-energy \"STKY\" (Stuff That Kills You) condition.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Deck Finishing",
        "hazardDescription": "Falling objects (tools/materials)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Personnel at ground level (PPE only).",
        "directControlsNeeded": "Tool lanyards or hard-barricaded exclusion zone.",
        "comments": "Gravity energy from dropped items at this height exceeds 1500J.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Deck Finishing",
        "hazardDescription": "Slip/Trip on wet/cluttered surface",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Standing water and loose grid materials.",
        "directControlsNeeded": "Water removal and organized deck pathways.",
        "comments": "Multiplier: Increases the probability of a fall into other high-energy zones.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 2,
        "activityType": "Joint Adjustment",
        "hazardDescription": "Lifeline Entanglement",
        "energyType": "Motion",
        "directControl": "Yes",
        "currentControls": "Lifelines",
        "directControlsNeeded": "Shorter Lanyard",
        "comments": "PASS: Lifelines prevent a fatal drop during the struggle of alignment.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Joint Adjustment",
        "hazardDescription": "Amputation (Body Force)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Manual Pushing",
        "directControlsNeeded": "Alignment Pins / Jacks",
        "comments": "CRITICAL FAIL: Pushing a multi-ton beam with body weight. High risk of pinning worker against the column.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Joint Adjustment",
        "hazardDescription": "Suspended Load Drop (Sling)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Green Slings",
        "directControlsNeeded": "Sling Protection (Sleeves)",
        "comments": "FAIL: Steel beams have sharp edges. Lifting with soft green slings without edge protection risks a cut/snap.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Joint Adjustment",
        "hazardDescription": "Falling Tools (Drilling)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Hand Grip",
        "directControlsNeeded": "Tool Tethers",
        "comments": "FAIL: Working at height with hand tools. A dropped drill hits with lethal energy (>500J).",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Joint Adjustment",
        "hazardDescription": "Scaffold Stability (Vibration)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Base Plates / Ties",
        "comments": "FAIL: Assuming the scaffold is tied to the column, it provides a stable work deck.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Worker stepping across scaffold gap while handling load (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Partial decking",
        "directControlsNeeded": "Fully decked platforms, secured planks; defined access routes",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Body positioned between scaffold standards and moving load (crush / pinch)",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Hands-free positioning tools, exclusion from pinch points; controlled sequencing of work",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "FF236": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Suspended load (swinging or falling)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Multiple workers in close proximity guiding the beam by hand.",
        "directControlsNeeded": "Physical exclusion zone or mechanical positioning.",
        "comments": "Multi-ton beam represents massive potential energy; manual contact is a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Fall from elevation (unguarded long edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers standing near the open edge; no physical barriers.",
        "directControlsNeeded": "Engineered guardrail system (top-rail and mid-rail).",
        "comments": "Height of the roof deck exceeds the 4' high-energy fall threshold.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Struck by mobile equipment (crane)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "High-visibility vests and helmets (PPE).",
        "directControlsNeeded": "Physical barricades around the crane swing radius.",
        "comments": "Kinetic energy of the crane exceeds 1500J; PPE is an administrative control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Slip/Trip multiplier on wet grid",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Standing water and loose materials on the deck.",
        "directControlsNeeded": "Water removal and organized work pathways.",
        "comments": "Standing water increases the probability of a fall into high-energy zones.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Full-Span Lift",
        "hazardDescription": "Tag Line Entanglement",
        "energyType": "Motion",
        "directControl": "Yes",
        "currentControls": "Tag Lines",
        "directControlsNeeded": "Gloves",
        "comments": "PASS: Tag lines are being used. Worker handles are the correct distance from the load.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Full-Span Lift",
        "hazardDescription": "Load Snag (Trees)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Tree Pruning / Clear Zone",
        "comments": "CRITICAL FAIL: Trees in the lift path can snag a 15m beam, causing \"shock loading\" to the crane boom.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Full-Span Lift",
        "hazardDescription": "Unprotected Edge Fall",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Hard Guardrails",
        "comments": "FAIL: Workers \"positioned along slab edge.\" Zero physical fall protection in the focus of the lift.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Full-Span Lift",
        "hazardDescription": "Dropped Object (Large Area)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Exclusion Zone",
        "comments": "FAIL: A drop from this height scatters debris widely. No ground-level barricades mentioned.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "First Floor",
        "hazardDescription": "Workers positioned directly under suspended precast beam during crane lift (strike/crush fatality)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Crane used; PPE visible",
        "directControlsNeeded": "Exclusion zone below suspended load, tag-line controlled guidance, lift plan enforcement",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Unprotected roof edge during lifting operation (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary guardrail tape",
        "directControlsNeeded": "Engineered edge protection (guardrails/mid-rails/toe boards) or certified lifeline system",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Uncapped protruding rebars at slab edge (impalement risk if fall)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps / impalement protection; edge buffer zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF004": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Suspended load (falling or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Workers standing in the immediate \"line of fire\" beneath and beside the beam.",
        "directControlsNeeded": "Physical exclusion zone (hard barricades) around the lift radius.",
        "comments": "A multi-ton precast beam is being hoisted from a truck; manual guidance by workers is a high-risk SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Struck by mobile equipment (crane outriggers)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Personnel in close proximity to active outriggers; wearing PPE.",
        "directControlsNeeded": "Physical barricades or hard exclusionary fencing around crane setup.",
        "comments": "Motion energy from heavy machinery far exceeds high-energy thresholds. PPE is an administrative control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Numerous uncapped rebar starters in the foreground work area.",
        "directControlsNeeded": "Rebar caps or physical covers over all vertical protrusions.",
        "comments": "Workers moving near the lift path are exposed to high-energy impalement if a trip or fall occurs.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Mechanical failure of rigging components",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Single-point crane hook connection.",
        "directControlsNeeded": "Dual-redundant rigging or verified engineered lift plan.",
        "comments": "High tension in rigging involve significant mechanical energy; failure results in an immediate high-energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Contact with overhead power lines",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Verified de-energization or non-conductive barriers.",
        "comments": "Proximity of the crane boom to the nearby building and trees indicates a high risk for overhead utility contact (\u2265 50V).",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 1,
        "activityType": "Lift Coordination",
        "hazardDescription": "Ground Bearing Failure",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Deployed Outriggers",
        "directControlsNeeded": "Outrigger Mats",
        "comments": "FAIL: Outriggers deployed on soil/paving. High point loads risk \"punching through.\" Mats required.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Lift Coordination",
        "hazardDescription": "Impalement (Starter Bars)",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Rebar Safety Caps",
        "comments": "CRITICAL FAIL: Workers holding a meeting near exposed vertical starter bars. A trip = impalement.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Lift Coordination",
        "hazardDescription": "Struck by Beam (Ground)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Timber Dunnage/Chocks",
        "comments": "FAIL: Beam placed on ground. If on a slight incline without chocks, it can roll/topple.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Lift Coordination",
        "hazardDescription": "Communication Gap",
        "energyType": "Sound",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Standard Hand Signals",
        "comments": "FAIL: Alignment of supervisors and engineers before the lift is a critical admin control.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Ground Floor",
        "hazardDescription": "Workers inside crane swing radius near suspended hook and load (struck-by)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Signalman present",
        "directControlsNeeded": "Barricaded lifting zone, dedicated banksman, no-entry policy during lift",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Uncapped vertical rebars around lifting area (impalement if trip/fall)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps / temporary covers, housekeeping controls",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF008": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Column Installation",
        "hazardDescription": "Structural instability of vertical columns",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary diagonal bracing poles (blue).",
        "directControlsNeeded": "Engineered shoring/bracing verification.",
        "comments": "Columns under construction represent significant potential energy; temporary bracing is not a verified Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Column Installation",
        "hazardDescription": "Struck by mobile equipment (crane/pump)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "High-visibility PPE and helmets.",
        "directControlsNeeded": "Physical barricades around equipment swing radius.",
        "comments": "Mobile machinery kinetic energy far exceeds 1500J; PPE is administrative and not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Column Installation",
        "hazardDescription": "Fall from elevation (ladder/formwork)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker on ladder finishing column head.",
        "directControlsNeeded": "Secured industrial platform with guardrails.",
        "comments": "Working from an unsecured ladder at height represents a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Column Installation",
        "hazardDescription": "Limited visibility / Shadows",
        "energyType": "Other",
        "directControl": "No",
        "currentControls": "Single high-intensity floodlight fixture.",
        "directControlsNeeded": "Redundant, multi-directional lighting setup.",
        "comments": "Night conditions act as a hazard multiplier by masking other high-energy precursors.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Column Installation",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Temporary power cables on the ground.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "Exposed cables on a conductive construction surface create a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 2,
        "activityType": "Night Survey",
        "hazardDescription": "Trip (Night Blindness)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Lighting",
        "directControlsNeeded": "Area Clearing",
        "comments": "FAIL: Surveyors focused on instrument eye-piece. Tripod legs and debris are \"invisible\" trip hazards.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Night Survey",
        "hazardDescription": "Electrocution (Temp Lights)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Temp Lighting",
        "directControlsNeeded": "GFCI / Elevated Cables",
        "comments": "FAIL: Night construction often uses damaged/wet cables. High electrocution risk for surveyors.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Night Survey",
        "hazardDescription": "Column Collapse",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "None visible",
        "directControlsNeeded": "Prop Anchor Check",
        "comments": "FAIL: Props are in place. These must remain until the grout in the joint reaches design strength.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Ground Floor",
        "hazardDescription": "Work at height at slab edge during night concreting (fall due to visibility loss)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Barricade tape; lighting present",
        "directControlsNeeded": "Rigid edge protection, continuous guardrails; light uniformity check",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Slippery wet concrete surface causing slip \u2192 fall from height",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Gumboots worn",
        "directControlsNeeded": "Defined walkways, anti-slip mats, edge protection prioritized",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Concrete pump hose movement under pressure (hose whip / impact)",
        "energyType": "Pressure, Motion",
        "directControl": "No",
        "currentControls": "Manual handling by workers",
        "directControlsNeeded": "Hose restraints, controlled discharge zone, trained pump operator coordination",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF045": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Structural Finishing",
        "hazardDescription": "Fall from elevation (ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker on an extension ladder; another worker holding the base.",
        "directControlsNeeded": "Secured industrial platform or mobile scaffold with guardrails.",
        "comments": "Fall height from the upper rung to the concrete deck exceeds the 4' high-energy threshold. Manual base-holding is not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Structural Finishing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Uncapped rebar starters visible near the base of the ladder.",
        "directControlsNeeded": "Protective rebar caps or physical covers.",
        "comments": "Any slip or ladder failure presents a primary high-energy impalement risk from gravity energy.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Structural Finishing",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Temporary power cords running across the concrete deck.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "Electricity \u2265 50 Volts on a construction surface near metal ladders creates a lethal path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Structural Finishing",
        "hazardDescription": "Struck by mobile equipment (crane)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Personnel in the vicinity of an active crane setup.",
        "directControlsNeeded": "Physical barricades around the crane swing radius.",
        "comments": "The kinetic energy of mobile machinery far exceeds high-energy thresholds; PPE is an administrative control.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 4,
        "activityType": "Access/Rigging",
        "hazardDescription": "Pinch Point (Anchor Plate)",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Manual Handling",
        "directControlsNeeded": "Alignment Pins",
        "comments": "Fingers between the sling shackle and the steel anchor plate.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Access/Rigging",
        "hazardDescription": "Lateral Ladder Displacement",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Footed by worker",
        "directControlsNeeded": "Tie-off / Stabilizer",
        "comments": "Logic: A footer cannot stop the top of the ladder from sliding sideways on smooth concrete.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Access/Rigging",
        "hazardDescription": "Center of Gravity Shift",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harness (Unclipped)",
        "directControlsNeeded": "Vertical Lifeline",
        "comments": "Worker reaching out to handle a sling while on a ladder shifts their COG outside the rails.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Access/Rigging",
        "hazardDescription": "Sling Shear (Concrete Edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Soft Slings",
        "directControlsNeeded": "Sling Protectors",
        "comments": "Concrete corners act as a shear edge under load.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Ground Floor",
        "hazardDescription": "Improvised ladder access to height without tie-off (fall from ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Co-worker holding ladder",
        "directControlsNeeded": "Secured ladder, proper angle, top & bottom tie-off, fall-arrest where required",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Working at height near beam edge without collective protection",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harness visible (tie-off unclear)",
        "directControlsNeeded": "Verified anchorage, horizontal lifeline, edge protection",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF048": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Suspended load (falling or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Worker standing on the trailer bed in the \"line of fire\" next to the load.",
        "directControlsNeeded": "Physical exclusion zone (hard barricades) around the trailer and lift path.",
        "comments": "The multi-ton green spreader beam and load represent massive potential energy; manual proximity is a high-risk SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Struck by mobile equipment (crane swing)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Personnel standing near the trailer and active crane boom.",
        "directControlsNeeded": "Physical barricades around the crane's entire swing radius.",
        "comments": "Kinetic energy of the crane exceeds 500 ft-lbs; PPE (vests/helmets) is an administrative control and not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Fall from elevation (trailer bed)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker on the trailer bed without fall protection.",
        "directControlsNeeded": "Temporary guardrail system or mobile work platform.",
        "comments": "While the height of the trailer may be borderline for high-energy, a fall onto the cluttered ground increases the SIF probability.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Mechanical failure of rigging/tension",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Slings under high tension during the lift.",
        "directControlsNeeded": "Dual-redundant rigging or verified engineered lift plan.",
        "comments": "Tension in rigging involves massive stored energy; failure results in immediate high-energy release.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Heavy Lifting / Rigging",
        "hazardDescription": "Contact with overhead power lines",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible.",
        "directControlsNeeded": "Verified de-energization or non-conductive barriers.",
        "comments": "The high-reaching crane boom near trees and buildings creates a lethal risk for overhead utility contact (\u2265 50V).",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 4,
        "activityType": "Unloading",
        "hazardDescription": "Trips on Dunnage",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Tag Lines",
        "directControlsNeeded": "Housekeeping",
        "comments": "PASS: Tag lines keep workers away from the beam, mitigating the trip-and-crush risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Unloading",
        "hazardDescription": "Line of Fire (Trailer Bed)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Exclusion Zone",
        "comments": "CRITICAL: Standing on a trailer under a load. No escape path if a component fails.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Unloading",
        "hazardDescription": "Asymmetric Load (Imbalance)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Manual Adjustment",
        "directControlsNeeded": "Dual-Point Slings",
        "comments": "Steel beams are slick. A single-point lift risks the beam sliding out of the sling.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Unloading",
        "hazardDescription": "Sling Cut (Steel Flange)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Soft Slings",
        "directControlsNeeded": "Sling Sleeves",
        "comments": "Steel beam edges are sharp. High probability of sling failure under tension.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Ground Floor",
        "hazardDescription": "Workers standing on trailer bed during crane lift (fall or struck-by)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "PPE worn",
        "directControlsNeeded": "No personnel on load platform during lifting, exclusion zone enforcement",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Manual guiding of suspended steel beam (swing/crush hazard)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Hand guiding observed",
        "directControlsNeeded": "Tag lines only, no body positioning under/near load",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Stored energy in lifting slings and rigging (snap-back if failure)",
        "energyType": "Tension",
        "directControl": "No",
        "currentControls": "Certified crane visible",
        "directControlsNeeded": "Rigging inspection, rated slings, controlled stand-off distance",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF055": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Rigging",
        "hazardDescription": "Suspended load (crush or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Worker crouched on trailer directly beneath the spreader beam.",
        "directControlsNeeded": "Physical exclusion zone (hard barricades).",
        "comments": "The rigger is positioned in a critical \"line of fire\" beneath a massive potential energy source.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Rigging",
        "hazardDescription": "Mechanical failure of rigging/tension",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Single-point crane hook with synthetic and wire slings.",
        "directControlsNeeded": "Dual-redundant rigging or verified engineered lift plan.",
        "comments": "Safety is dependent on the mechanical integrity of a single lift point with no backup capacity.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Rigging",
        "hazardDescription": "Struck by mobile equipment (crane)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Personnel at ground level near active crane outriggers.",
        "directControlsNeeded": "Physical barricades around the crane swing radius.",
        "comments": "Kinetic energy of the crane exceeds 1500J; PPE is administrative and does not stop energy transfer.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Rigging",
        "hazardDescription": "Limited visibility / Shadowing",
        "energyType": "Other",
        "directControl": "No",
        "currentControls": "Ambient evening light; no dedicated floodlighting observed.",
        "directControlsNeeded": "High-intensity, multi-directional work site lighting.",
        "comments": "Transitioning light acts as a multiplier, reducing the visual recognition of \"STKY\" precursors.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Heavy Rigging",
        "hazardDescription": "Fall from elevation (trailer bed)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker crouching on a flatbed trailer without fall protection.",
        "directControlsNeeded": "Temporary guardrail system or mobile platform.",
        "comments": "Slips or loss of balance during rigging could result in a fall into high-energy impalement zones.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 1,
        "activityType": "Rigging Check",
        "hazardDescription": "Fatal Crush (Under Load)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Zero-Go Zone",
        "comments": "CRITICAL: Worker crouching under the beam. 0% survivability if a component fails.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Rigging Check",
        "hazardDescription": "Stored Energy (Sling Snap)",
        "energyType": "Elastic",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Sling Guard",
        "comments": "If a taut sling snaps, the \"snap-back\" energy is lethal to anyone within 5m.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Rigging Check",
        "hazardDescription": "Pinch Point (Sling Seating)",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Manual Check",
        "directControlsNeeded": "No-Touch Tools",
        "comments": "Checking sling tension with hands. If the load settles, fingers are amputated.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Ground Floor",
        "hazardDescription": "Worker on trailer bed directly beneath partially suspended steel beam during crane lift (crush/strike fatality)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Crane and slings in use; PPE",
        "directControlsNeeded": "No personnel on trailer during lift, exclusion zone, controlled rigging sequence",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Stored energy in lifting slings and wire ropes under tension (snap-back if failure)",
        "energyType": "Tension",
        "directControl": "No",
        "currentControls": "Slings attached",
        "directControlsNeeded": "Certified rigging, pre-lift inspection, stand-off distance from tensioned lines",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF069": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Structural Finishing",
        "hazardDescription": "Fall from elevation (ladder/formwork)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Multiple workers on extension ladders; one worker on top of formwork.",
        "directControlsNeeded": "Secured industrial platform or mobile scaffold with guardrails.",
        "comments": "Fall height to the concrete deck exceeds the 4' high-energy threshold. Harnesses are worn but not anchored.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Structural Finishing",
        "hazardDescription": "Structural instability / Formwork collapse",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary diagonal bracing poles (blue) supporting the wall.",
        "directControlsNeeded": "Engineered shoring system and verified bracing plan.",
        "comments": "The wet concrete being poured adds significant weight/pressure; temporary bracing is not a verified Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Structural Finishing",
        "hazardDescription": "Manual handling of high-mass material",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Workers manually passing and pouring concrete buckets at height.",
        "directControlsNeeded": "Concrete pump or mechanical hoist system.",
        "comments": "Manual bucket pours at height increase the probability of a balance-loss and subsequent high-energy fall.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Structural Finishing",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Temporary power cords running near the base of metal ladders.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "50V or greater on a conductive construction surface near metal ladders creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Grouting",
        "hazardDescription": "Alkaline Eye Burn",
        "energyType": "Chemical",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Sealed Goggles",
        "comments": "Mortar splash during overhead application is highly caustic (pH 12+).",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Grouting",
        "hazardDescription": "Dropped Object (20kg Bucket)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Hand Grip",
        "directControlsNeeded": "Toe Boards / Netting",
        "comments": "A bucket of grout (approx. 20kg) falling from 3m hits with ~600J. Lethal.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Grouting",
        "hazardDescription": "3-Point Contact Failure",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Leaning Ladder",
        "directControlsNeeded": "Scaffold Tower",
        "comments": "Grouting is two-handed work. Ladder is only for access, not work.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Grouting",
        "hazardDescription": "Wall Topple (Wind/Load)",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Anchor Check",
        "comments": "PASS: Bracing is in place to resist wind/load energy.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Accessing elevated work area using ladder",
        "hazardDescription": "Ladder used as primary access at height without secure tie-off (fall from ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Co-worker support only",
        "directControlsNeeded": "Secured ladder (top & bottom) or engineered access platform",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Worker leaning outside ladder envelope while handling materials (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harness worn (tie-off unclear)",
        "directControlsNeeded": "Verified anchorage, fall-arrest system, reposition ladder/platform",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF070": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Structural Finishing",
        "hazardDescription": "Fall from elevation (unguarded edge/ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers standing on narrow wall and ladder; harnesses worn but not anchored.",
        "directControlsNeeded": "Secured industrial platform or mobile scaffold with guardrails.",
        "comments": "Fall height from the wall top to the concrete deck exceeds the 4' high-energy threshold.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Structural Finishing",
        "hazardDescription": "Manual handling of heavy concrete buckets",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Worker manually swinging a concrete bucket while perched on a ladder.",
        "directControlsNeeded": "Concrete pump or mechanical hoist system.",
        "comments": "High-exertion manual tasks at height increase the probability of balance loss and a high-energy fall.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Structural Finishing",
        "hazardDescription": "Structural instability / Formwork failure",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary diagonal bracing poles (blue) supporting the wall.",
        "directControlsNeeded": "Engineered shoring system and verified bracing plan.",
        "comments": "Bracing is an administrative setup; it lacks the capacity of a verified engineered safeguard.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Structural Finishing",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Temporary power lines running near metal ladders.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "Electricity \u2265 50 Volts on a construction surface near metal ladders creates a lethal path.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 2,
        "activityType": "Surface Finish",
        "hazardDescription": "Vegetation Entanglement",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Site Clearing",
        "comments": "Branches snagging a worker's harness or legs, causing a stumble at height.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Surface Finish",
        "hazardDescription": "Puncture (Rebar)",
        "energyType": "Sharp",
        "directControl": "Yes",
        "currentControls": "Coverings",
        "directControlsNeeded": "Rebar Safety Caps",
        "comments": "PASS: Rebar is covered, reducing minor puncture risks.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Surface Finish",
        "hazardDescription": "Leading Edge Fall",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Safety Harness",
        "directControlsNeeded": "Horizontal Lifeline",
        "comments": "FAIL: Fall arrest system is active on the beam surface.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Ground Floor",
        "hazardDescription": "Unprotected edge at height during manual handling (fall from structure)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rigid edge protection or certified lifeline with continuous tie-off",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Uncapped protruding rebars at edge (impalement if fall)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps / impalement protection, edge buffer",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF075": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Structural Finishing",
        "hazardDescription": "Fall from elevation (unguarded roof deck)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers on the upper deck with harnesses; no physical perimeter barriers.",
        "directControlsNeeded": "Engineered guardrail system (top-rail and mid-rail).",
        "comments": "Height of the roof deck exceeds the 4' high-energy fall threshold. Harnesses are worn but anchoring is not visible.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Structural Finishing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Exposed, uncapped rebar starters present on the working deck.",
        "directControlsNeeded": "Protective rebar caps or physical covers.",
        "comments": "Any slip or fall initiated by night-work conditions presents a primary high-energy impalement hazard.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Structural Finishing",
        "hazardDescription": "Limited visibility / Shadows",
        "energyType": "Other",
        "directControl": "No",
        "currentControls": "High-intensity floodlighting at the deck level.",
        "directControlsNeeded": "Redundant, multi-directional lighting to eliminate deep shadows.",
        "comments": "Point-source lighting creates shadows that can mask high-energy precursors like trip hazards or edge proximity.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Structural Finishing",
        "hazardDescription": "Fall from elevation (scaffold access)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Mobile scaffold tower visible below the work deck.",
        "directControlsNeeded": "OSHA-compliant guardrails and secured access platforms.",
        "comments": "Scaffolding without complete enclosure systems relies on human performance rather than physical \"capacity\".",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 5,
        "activityType": "Structural Finishing",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Power cables for floodlights running across the metal/concrete deck.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "Electricity \u2265 50 Volts on a conductive construction surface creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 2,
        "activityType": "Night Edge Work",
        "hazardDescription": "Lighting Glare/Shadows",
        "energyType": "Radiation",
        "directControl": "No",
        "currentControls": "Floodlights",
        "directControlsNeeded": "Diffused Tower Lights",
        "comments": "Harsh shadows hide the exact edge position. Glare can blind the worker upright.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 4,
        "activityType": "Night Edge Work",
        "hazardDescription": "Fatigue (Night Shift)",
        "energyType": "Biological",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Supervision / Rotation",
        "comments": "Human error probability increases at night, specifically regarding \"unclipping\" from lines.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Night Edge Work",
        "hazardDescription": "Leading Edge Fall",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Lifeline + Harness",
        "directControlsNeeded": "Hard Guardrails",
        "comments": "CRITICAL FAIL: Night work + edge work. Lifelines are fall arrest, not prevention. Hard rails are the only direct control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Night Edge Work",
        "hazardDescription": "Dropped Object (Fixture)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Tool Tethers / Toe Boards",
        "comments": "Handling fixtures at edge. A drop onto scaffolding below exceeds 500J.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Ground Floor",
        "hazardDescription": "Working at height near slab edge during night operation (reduced depth perception \u2192 fall)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary lighting",
        "directControlsNeeded": "Engineered guardrails, uniform task lighting, edge delineation",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Suspended rope/chain below workers at edge (fall leading to swing or secondary strike)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Rope visible",
        "directControlsNeeded": "Controlled lowering system, exclusion below, no loose hanging loads",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF089": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Structural Finishing",
        "hazardDescription": "Fall from elevation (unguarded roof deck)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers on the deck edge; harnesses worn with long vertical lifelines.",
        "directControlsNeeded": "Engineered guardrail system (top-rail and mid-rail).",
        "comments": "Fall height to the ground exceeds the 4' high-energy threshold. Lifelines appear to have excessive slack, increasing fall distance.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Structural Finishing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Numerous exposed, uncapped rebar starters at the working edge.",
        "directControlsNeeded": "Protective rebar caps or physical covers over all protrusions.",
        "comments": "Any slip or fall during manual work presents a primary high-energy impalement hazard.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Structural Finishing",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Power tool cord running directly across the concrete surface.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "Electricity \u2265 50 Volts on a conductive construction surface creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Structural Finishing",
        "hazardDescription": "Falling objects (tools/debris)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker at ground level (visible in background) beneath the edge.",
        "directControlsNeeded": "Tool lanyards or a hard-barricaded exclusion zone below.",
        "comments": "Gravity energy from dropped items at this height exceeds the 500 ft-lb SIF threshold.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Reinforcement",
        "hazardDescription": "Hand Puncture/Cut",
        "energyType": "Sharp",
        "directControl": "Yes",
        "currentControls": "Safety Gloves",
        "directControlsNeeded": "Cut-Resistant Gloves",
        "comments": "PASS: Standard PPE manages low-energy cuts from tying wire/rebars.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Reinforcement",
        "hazardDescription": "Fall from Corner",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Lifeline + Harness",
        "directControlsNeeded": "Hard Guardrails",
        "comments": "CRITICAL FAIL: Three workers at a corner. Lifelines create a \"Pendulum\" risk if a corner fall occurs.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Reinforcement",
        "hazardDescription": "Impalement (Starter Bar)",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Rebar Safety Caps",
        "comments": "Workers bending near exposed rebars. A slip during inspection leads to impalement.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Reinforcement",
        "hazardDescription": "Dropped Tool (Fixing)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Lanyards for Tools",
        "comments": "High Energy. A dropped plier or wrench from the edge is lethal to those below.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Ground Floor",
        "hazardDescription": "Multiple workers clustered at slab edge without collective protection (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harnesses visible (tie-off unclear)",
        "directControlsNeeded": "Collective edge protection preferred; verified lifeline if used",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Dense, uncapped vertical rebars at edge (impalement risk in fall or slip)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps / impalement covers, restricted access zone",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF095": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Structural Finishing",
        "hazardDescription": "Fall from elevation (unguarded roof edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers on the leading edge; harnesses worn with long, slack vertical lifelines.",
        "directControlsNeeded": "Engineered guardrail system (top-rail and mid-rail).",
        "comments": "Fall height to the ground level exceeds the 4' high-energy threshold. Slack in lines increases the potential free-fall distance.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Structural Finishing",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Uncapped rebar starters visible at the edge of the working surface.",
        "directControlsNeeded": "Protective rebar caps or physical covers.",
        "comments": "Any slip or fall during manual work presents a primary high-energy impalement risk.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Structural Finishing",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Blue electrical power tool cord running across the concrete surface near workers.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "Electricity \u2265 50 Volts on a conductive construction surface creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Structural Finishing",
        "hazardDescription": "Struck by falling objects (tools/debris)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers at ground level (visible in background) beneath active edge work.",
        "directControlsNeeded": "Tool lanyards or a hard-barricaded exclusion zone below the work area.",
        "comments": "Gravity energy from dropped items at this height exceeds 1500J. PPE (helmets) is an administrative control.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 2,
        "activityType": "Edge Connection",
        "hazardDescription": "Vegetation Snag",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Tree Pruning",
        "comments": "Trees close to edge can snag gear or startle workers, triggering a stumble.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Edge Connection",
        "hazardDescription": "Swing Fall (Pendulum)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Lifelines",
        "directControlsNeeded": "Rigid Rail / Overhead Anchor",
        "comments": "FAIL: Anchoring to a lifeline at a corner. A fall causes a swing into the adjacent building fa\u00e7ade.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Edge Connection",
        "hazardDescription": "Structural Instability",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Engineering Verification",
        "comments": "Connection work at corners is structurally critical. Failure here is high-energy collapse.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Ground Floor",
        "hazardDescription": "Workers positioned at unprotected slab edge during rebar/concrete-related activity (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Harnesses worn (tie-off not verifiable)",
        "directControlsNeeded": "Collective edge protection (guardrails) or verified lifeline with anchorage",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Uncapped protruding rebars at slab edge creating impalement risk in event of slip/fall",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Rebar caps / impalement protection and restricted edge access",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "GF099": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Concreting",
        "hazardDescription": "High-pressure hose burst/whip",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "Manual handling of the concrete pump hose by multiple workers.",
        "directControlsNeeded": "Hose whiplash arrestors (whip-checks) and mechanical hose positioning.",
        "comments": "Pressure energy in a concrete pump can cause lethal whiplash if a coupling fails or a blockage clears suddenly.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Concreting",
        "hazardDescription": "Fall from elevation (unguarded perimeter)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Perimeter caution rope visible; workers moving near edge.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail).",
        "comments": "Height of the deck exceeds 4'. Caution rope is an administrative control and does not physically stop a fall.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Concreting",
        "hazardDescription": "Limited visibility / Shadowing",
        "energyType": "Other",
        "directControl": "No",
        "currentControls": "High-intensity floodlighting behind the workers.",
        "directControlsNeeded": "Redundant, multi-directional lighting to eliminate deep shadows.",
        "comments": "Backlighting creates deep shadows in the work area, masking trip hazards on the rebar grid.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Concreting",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Power tool cords running across a wet, conductive rebar grid.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "50V or greater on wet concrete/rebar creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 2,
        "activityType": "Night Concreting",
        "hazardDescription": "Fall through Mesh",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Walkways / Planking",
        "comments": "Walking on \"dense reinforcement mesh\" while handling a heavy hose. High trip/twist risk.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 5,
        "activityType": "Night Concreting",
        "hazardDescription": "Noise Exposure",
        "energyType": "Sound",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Hearing Protection",
        "comments": "Pump noise + night resonance. Permanent hearing damage risk (>85dB).",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 3,
        "activityType": "Night Concreting",
        "hazardDescription": "Chemical Burn (Legs)",
        "energyType": "Chemical",
        "directControl": "Yes",
        "currentControls": "Rubber Safety Boots",
        "directControlsNeeded": "Taped Boot Tops",
        "comments": "PASS: Rubber boots protect against wet concrete (pH 12).",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Night Concreting",
        "hazardDescription": "Pump Hose Whip",
        "energyType": "Pressure",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Whip Check / Safety Cable",
        "comments": "CRITICAL FAIL: Concrete pumping creates high pressure. If the hose snaps or surges, it whips with lethal force.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Night Concreting",
        "hazardDescription": "Edge Fall (Pump Op)",
        "energyType": "Gravity",
        "directControl": "Yes",
        "currentControls": "Guardrails",
        "directControlsNeeded": "Toe Boards",
        "comments": "PASS: Guardrails are visible. This is a solid Engineering Control for the perimeter.",
        "success": 1,
        "exposure": 0
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "Ground Floor",
        "hazardDescription": "Working at height during night operation with open edges (reduced visibility \u2192 fall)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary lighting",
        "directControlsNeeded": "Rigid edge protection, uniform illumination, edge demarcation",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Concrete pump pipeline under pressure near workers (hose whip / sudden release)",
        "energyType": "Pressure, Motion",
        "directControl": "No",
        "currentControls": "Pump line supported manually",
        "directControlsNeeded": "Mechanical restraint of pipeline, exclusion zone, pressure-release procedure",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "M002": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Suspended load (falling or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Multiple workers manually guiding and holding the wall panel.",
        "directControlsNeeded": "Physical exclusion zone (hard barricades).",
        "comments": "The multi-ton precast wall panel represents massive potential energy; manual contact is a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Fall from elevation (ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker standing on the top rungs of a step ladder to unhook the load.",
        "directControlsNeeded": "Secured industrial platform or mobile scaffold with guardrails.",
        "comments": "Working from the top of an unsecured ladder while managing a heavy load is a high-energy fall risk.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Struck by mobile equipment (crane swing)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Personnel in close proximity to the crane block and active boom.",
        "directControlsNeeded": "Physical barricades around the crane swing radius.",
        "comments": "Kinetic energy of the crane exceeds 500 ft-lbs; PPE is an administrative control and not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Impalement on vertical rebar starters",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Uncapped rebar starters present on the concrete slab near workers.",
        "directControlsNeeded": "Protective rebar caps or physical covers.",
        "comments": "Any trip or ladder failure presents a primary high-energy impalement risk from gravity energy.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 1,
        "activityType": "Wall Erection",
        "hazardDescription": "Crush (Manual Align)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Hand Stabilization",
        "directControlsNeeded": "Tag Lines / Guide Poles",
        "comments": "CRITICAL FAIL: \"Stabilize the panel by hand.\" If the crane swings or drops, hands are crushed against the slab/prop.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Wall Erection",
        "hazardDescription": "Ladder Instability",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Leaning Ladder",
        "directControlsNeeded": "Scaffold / AWP",
        "comments": "FAIL: Worker on ladder guiding a moving hook. Ladder + moving load = high fall risk.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Wall Erection",
        "hazardDescription": "Impale (Anchor Bolts)",
        "energyType": "Sharp",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Rebar Caps",
        "comments": "\"Anchor bolts protruding\" on slab. Tripping hazard for ground crew.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Wall Erection",
        "hazardDescription": "Panel Topple (Wind)",
        "energyType": "Pressure",
        "directControl": "Yes",
        "currentControls": "None",
        "directControlsNeeded": "Anchor Check",
        "comments": "FAIL: Temporary props are installed. Essential for stability before grouting.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "PPVC Module",
        "hazardDescription": "Worker on ladder directly under crane hook and suspended load (struck-by/crush)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "No access below suspended load, engineered access platform instead of ladder",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Ladder used as work platform while handling suspended element (fall from ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Co-worker support",
        "directControlsNeeded": "Secured ladder prohibited for lifting work; use MEWP or scaffold",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "M009": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Suspended load (falling or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Multiple workers standing in the immediate \"line of fire\" beneath and beside the panel.",
        "directControlsNeeded": "Physical exclusion zone (hard barricades) around the lift radius.",
        "comments": "The large horizontal precast panel represents massive potential energy; proximity during the lift is a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Mechanical failure of rigging components",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Load supported by four synthetic slings at a single crane hook.",
        "directControlsNeeded": "Dual-redundant rigging or verified engineered lift plan.",
        "comments": "Safety is dependent on the mechanical integrity of a single lift point with no backup capacity.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Struck by mobile equipment (crane swing)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Caution tape used as a perimeter; workers are inside the zone.",
        "directControlsNeeded": "Physical, hard barricades around the crane swing radius.",
        "comments": "Caution tape is an administrative control and does not physically manage high-energy motion.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Heavy Lifting",
        "hazardDescription": "Fall from elevation (unguarded slab edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers standing near the edge of the elevated slab.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail).",
        "comments": "The slab height exceeds the 4' high-energy fall threshold.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 2,
        "activityType": "Slab Lifting",
        "hazardDescription": "Load Drop (Sling)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Red Fabric Slings",
        "directControlsNeeded": "Corner Protectors",
        "comments": "FAIL: Fabric slings on concrete edges. High risk of cutting without protection sleeves.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Slab Lifting",
        "hazardDescription": "Pinch Point (Landing)",
        "energyType": "Mechanical",
        "directControl": "No",
        "currentControls": "Hand Signals",
        "directControlsNeeded": "Alignment Blocks",
        "comments": "PASS: \"Alignment blocks visible.\" Pre-placed blocks prevent hand crushing during landing.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Slab Lifting",
        "hazardDescription": "Exclusion Zone Breach",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Hard Barriers",
        "comments": "FAIL: \"Barricade tape defines exclusion zone.\" Acceptable for temporary lifts if enforced.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 1,
        "activityType": "Slab Lifting",
        "hazardDescription": "Line of Fire (Swing)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Tag Lines",
        "directControlsNeeded": "Spotter",
        "comments": "FAIL: Workers \"stand at safe distances\" using tag lines. Good separation from the load.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "PPVC Module",
        "hazardDescription": "Multiple workers within fall zone of suspended precast panel during positioning",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Tag lines used",
        "directControlsNeeded": "Full exclusion zone, remote guiding, no manual holding of load",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Stored energy in lifting slings and shackles under tension (snap-back if failure)",
        "energyType": "Tension",
        "directControl": "No",
        "currentControls": "Certified slings visible",
        "directControlsNeeded": "Stand-off distance, rigging inspection, controlled load path",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "M013": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Wall Installation",
        "hazardDescription": "Fall from elevation (A-frame ladder)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Two workers standing on the upper steps of a ladder.",
        "directControlsNeeded": "Secured industrial platform or mobile scaffold with guardrails.",
        "comments": "Working from an unsecured ladder at height is a primary SIF precursor. Fall energy to the slab exceeds 500 ft-lbs.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Wall Installation",
        "hazardDescription": "Structural instability of wall panel",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary diagonal blue bracing; worker leaning against the panel.",
        "directControlsNeeded": "Engineered shoring verification and permanent anchors.",
        "comments": "While braced, the panel represents massive potential energy if the connection or single-point brace fails.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Wall Installation",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Power cord for a tool running across the concrete slab.",
        "directControlsNeeded": "GFCI protection and elevated cord management.",
        "comments": "50V or greater on a conductive construction surface creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Wall Installation",
        "hazardDescription": "Falling objects (tools at height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Handheld tools in use on the ladder; no tool lanyards.",
        "directControlsNeeded": "Tool lanyards or a hard-barricaded exclusion zone below.",
        "comments": "Items dropped from this height onto workers below involve energy exceeding the SIF threshold.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "High Adjustment",
        "hazardDescription": "Trip Hazard (Cables)",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Cable Hooks",
        "comments": "\"Electrical cables and tools lie on slab.\" Trip hazard near the ladder base.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "High Adjustment",
        "hazardDescription": "Fall from Ladder",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Leaning Ladder",
        "directControlsNeeded": "Scaffold Tower",
        "comments": "FAIL: Two workers on one ladder adjusting rigging. Exceeds ladder capacity and stability limits.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "High Adjustment",
        "hazardDescription": "Dropped Object (Tool)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Tool Tethers",
        "comments": "Tools used at height to release slings. Drop hazard to supervisor below.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "High Adjustment",
        "hazardDescription": "Line of Fire (Supervisor)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Clear Zone",
        "comments": "Supervisor standing directly below the rigging operation.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "PPVC Module",
        "hazardDescription": "Ladder used for overhead installation without fall protection (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Proper access system (scaffold/MEWP) or secured ladder with fall arrest",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Worker positioned beneath overhead manual handling activity (falling object strike)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None visible",
        "directControlsNeeded": "Exclusion zone below, tool/material restraint",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "M017": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Wall Installation",
        "hazardDescription": "Suspended load (falling or swinging)",
        "energyType": "Gravity / Motion",
        "directControl": "No",
        "currentControls": "Multiple workers manually guiding the wall panel into place.",
        "directControlsNeeded": "Physical exclusion zone (hard barricades).",
        "comments": "The multi-ton precast panel represents massive potential energy; manual guidance is a primary SIF precursor.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Wall Installation",
        "hazardDescription": "Structural instability of wall panel",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary diagonal blue bracing; panel still attached to crane.",
        "directControlsNeeded": "Engineered shoring verification and permanent anchors.",
        "comments": "While bracing is being installed, the panel relies on the crane and temporary poles; neither is a verified Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Wall Installation",
        "hazardDescription": "Struck by mobile equipment (crane swing)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Personnel in close proximity to the crane block and active outriggers.",
        "directControlsNeeded": "Physical barricades around the crane swing radius.",
        "comments": "Kinetic energy of the crane exceeds 500 ft-lbs; PPE is an administrative control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Wall Installation",
        "hazardDescription": "Fall from elevation (unguarded slab edge)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers standing near the edge of the elevated slab.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail).",
        "comments": "Slab height exceeds the 4' high-energy fall threshold; no perimeter protection is present.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [
      {
        "hazardNo": 3,
        "activityType": "Manual Alignment",
        "hazardDescription": "Prop Trip Hazard",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Diagonal Props",
        "directControlsNeeded": "Visibility Tape",
        "comments": "Diagonal props create a \"head strike\" and \"trip\" zone.",
        "success": 0,
        "exposure": 0
      },
      {
        "hazardNo": 1,
        "activityType": "Manual Alignment",
        "hazardDescription": "Amputation (Pinch)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "\"Controlled Force\"",
        "directControlsNeeded": "Pry Bars / Jacks",
        "comments": "CRITICAL FAIL: \"Apply controlled force by hand.\" Hands between a 5-ton panel and the slab is a fatal error.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Manual Alignment",
        "hazardDescription": "Crane Shock Load",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Smooth Op",
        "comments": "Manual pushing while crane holds load can cause \"stick-slip\" shock loading on the rigging.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Manual Alignment",
        "hazardDescription": "Foot Crush",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None",
        "directControlsNeeded": "Metatarsal Guards",
        "comments": "FAIL: Safety boots offer some protection, but keeping feet out of the drop zone is better.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "PPVC Module",
        "hazardDescription": "Workers manually guiding and stabilising a vertically suspended precast wall panel within the fall/swing radius (crush or strike-by fatality)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Tag lines used; PPE",
        "directControlsNeeded": "Full exclusion zone, remote guiding using tag lines only; no body contact with suspended load",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Standing beneath crane boom and suspended load path during positioning of the precast panel",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Crane in operation",
        "directControlsNeeded": "Defined lifting corridor, no personnel under suspended load; lift supervisor enforcement",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Potential loss of stability or toppling of panel before final restraint during landing/alignment",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Temporary supports not visible",
        "directControlsNeeded": "Immediate mechanical restraint, pre-installed braces; hands-off final positioning",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "M027": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Material Handling",
        "hazardDescription": "Fall from elevation (truck bed/rails)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Worker standing on narrow truck side rails to secure a load.",
        "directControlsNeeded": "Mobile work platform or secured ladder system.",
        "comments": "Fall height from the truck rail to the ground represents a primary high-energy fall risk.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Material Handling",
        "hazardDescription": "Struck by falling object (unsecured load)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers standing near a large, tarped, unsecured vertical load.",
        "directControlsNeeded": "Engineered load securement or exclusion zone.",
        "comments": "Large vertical load under tarp involves massive potential energy if it shifts during securement.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Material Handling",
        "hazardDescription": "Struck by mobile equipment (vehicle movement)",
        "energyType": "Motion",
        "directControl": "No",
        "currentControls": "Personnel standing in close proximity to a transport vehicle.",
        "directControlsNeeded": "Physical barricades or established exclusion zone around vehicle.",
        "comments": "Kinetic energy of a transport vehicle far exceeds 500 ft-lbs. PPE is administrative and not a Direct Control.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Material Handling",
        "hazardDescription": "Contact with live overhead power source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "None visible in immediate vicinity.",
        "directControlsNeeded": "Non-conductive barriers or verified utility clearance.",
        "comments": "High-profile loads being secured near trees/buildings increase risk of overhead utility contact (\u2265 50V).",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "PPVC Module",
        "hazardDescription": "Worker working at height on truck side rails/bed without edge protection while securing tarpaulin-covered load (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Fall-prevention system or guarded access platform; prohibit climbing on truck loads",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Loss of balance due to unstable footing while pulling/handling tarpaulin and ropes on truck bed (fall from height)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "Ropes used for tying",
        "directControlsNeeded": "Ground-based tarpaulin system or mechanical covering method; no manual pulling from height",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Falling objects from truck bed height (tarpaulin, ropes, tools) striking persons below",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "None evident",
        "directControlsNeeded": "Exclusion zone around truck, controlled drop-free securing method",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  },
  "M042": {
    "RA": [
      {
        "hazardNo": 1,
        "activityType": "Interior Finishing",
        "hazardDescription": "Fall from elevation (scaffold platform)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers standing on a scaffold platform without guardrails.",
        "directControlsNeeded": "Engineered guardrail system (top-rail, mid-rail, and toe-boards).",
        "comments": "Fall height from the scaffold to the concrete floor represents a high-energy \"STKY\" hazard. No fall arrest systems are visible.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "Interior Finishing",
        "hazardDescription": "Struck by falling objects (ceiling panels/tools)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Workers standing directly beneath active overhead panel installation.",
        "directControlsNeeded": "Hard-barricaded exclusion zone or overhead protection (debris netting).",
        "comments": "Gravity energy from a dropped ceiling panel or heavy power tool at this height exceeds 500 ft-lbs. PPE (helmets) is on the scaffold, not the worker.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "Interior Finishing",
        "hazardDescription": "Contact with live electrical source",
        "energyType": "Electrical",
        "directControl": "No",
        "currentControls": "Use of corded electric drills/tools near metal framing.",
        "directControlsNeeded": "GFCI protection and verified tool/cord insulation.",
        "comments": "Using power tools (\u2265 50V) on conductive metal scaffold/framing creates a lethal high-energy path.",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 4,
        "activityType": "Interior Finishing",
        "hazardDescription": "Collapse of temporary structure (scaffold)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Scaffold appears to be on uneven ground with unsecured footing.",
        "directControlsNeeded": "Level, mud-silled, and cross-braced scaffold base.",
        "comments": "Structural failure of the scaffold under the weight of two workers involves massive potential energy release.",
        "success": 0,
        "exposure": 1
      }
    ],
    "RP": [],
    "RS": [
      {
        "hazardNo": 1,
        "activityType": "PPVC Module",
        "hazardDescription": "Worker standing on incomplete scaffold platform without full decking or guardrails while reaching overhead (fall from height)",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "Scaffold structure present",
        "directControlsNeeded": "Fully decked platform, top/mid guardrails and toe boards; scaffold inspection and tagging",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 2,
        "activityType": "",
        "hazardDescription": "Overreaching while handling ceiling board overhead from scaffold edge, leading to loss of balance and fall",
        "energyType": "Gravity",
        "directControl": "No",
        "currentControls": "PPE only",
        "directControlsNeeded": "Correct working platform height, reposition scaffold; eliminate overreach",
        "comments": "",
        "success": 0,
        "exposure": 1
      },
      {
        "hazardNo": 3,
        "activityType": "",
        "hazardDescription": "Persons working directly below overhead installation activity (falling board/material strike)",
        "energyType": "Gravity, Motion",
        "directControl": "No",
        "currentControls": "None evident",
        "directControlsNeeded": "Exclusion zone below workface, overhead protection and material-securing controls",
        "comments": "",
        "success": 0,
        "exposure": 1
      }
    ]
  }
};
