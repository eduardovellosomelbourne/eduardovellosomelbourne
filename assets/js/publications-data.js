/* ================================================================
   PUBLICATIONS DATA
   Add new entries at the top of the relevant year block.
   Fields:
     year    – integer
     type    – "conference" | "journal"
     title   – full paper title
     authors – Last, Last, … (last-name list)
     venue   – short venue string shown on screen
     url     – direct link to paper (or null)
     tags    – array of tag slugs (see list below)
     award   – "best-paper" | "honourable-mention" | null
   Tags:
     xr, ai, xai, eye-tracking, gestures, embodied,
     cscw, sensing, mobile, education, methodology, tangible,
     wearable, interaction-techniques, voice, accessibility
   ================================================================ */

var PUBLICATIONS_DATA = [

  /* ── 2026 ──────────────────────────────────────────────────── */

  { year:2026, type:"conference",
    title:"Systemic Futures: Integrating Critical Speculation and Systemic Design Pragmatism",
    authors:"Wong, Paxton, Pook, Howe, Grønbæk, Johal, Velloso, Vetere",
    venue:"DIS '26", url:"https://dl.acm.org/doi/10.1145/3800645.3812901",
    tags:["xr","methodology"], award:"honourable-mention" },

  { year:2026, type:"conference",
    title:"Reclaiming Productivity: Critical Perspectives on Speculative Futures in the Architecture, Engineering, and Construction Industry",
    authors:"Wong, Dillon, Johal, Velloso, Howe, Vetere",
    venue:"CHIWORK '26", url:"https://doi.org/10.1145/3808045.3808064",
    tags:["cscw"] },

  { year:2026, type:"journal",
    title:"A Probabilistic Approach to Understanding User Preferences for Adaptive Placement of AR Interfaces in Different Physical Environments",
    authors:"Zhou, Vera Soto, Bai, Parent, Todi, Jonker, Velloso",
    venue:"TVCG", url:"https://doi.ieeecomputersociety.org/10.1109/TVCG.2026.3667949",
    tags:["xr","interaction-techniques"] },

  { year:2026, type:"conference",
    title:"Is That You or The Machine? Translating Sociocultural Norms Across Distributed Spaces in Blended Realities",
    authors:"Wong, Leiva, Velloso",
    venue:"CHI '26", url:"https://dl.acm.org/doi/10.1145/3772318.3790545",
    tags:["xr","cscw"] },

  { year:2026, type:"conference",
    title:"Narratives and Perspectives: How AI Summaries Steer Users' Opinions and Engagement on Social Media",
    authors:"Govers, Sew, Velloso, Kostakos, Goncalves",
    venue:"CHI '26", url:"https://dl.acm.org/doi/10.1145/3772318.3790945",
    tags:["ai","cscw"], award:"best-paper" },

  { year:2026, type:"conference",
    title:"Restoration, Exploration and Transformation: How Youth Engage Character.AI for Fun, Feels and Finding themselves",
    authors:"Blake, Carter, Velloso",
    venue:"CHI '26", url:"https://dl.acm.org/doi/full/10.1145/3772318.3790508",
    tags:["ai"], award:"honourable-mention" },

  { year:2026, type:"conference",
    title:"Better Assumptions, Stronger Conclusions: The Case for Ordinal Regression in HCI",
    authors:"Syiem, Velloso",
    venue:"CHI '26", url:"https://dl.acm.org/doi/10.1145/3772318.3790821",
    tags:["methodology"] },

  { year:2026, type:"conference",
    title:"Sensemaking in Multi-Agent LLM Interfaces: How Users Interpret Transparency and Trustworthiness Cues",
    authors:"Pareek, Govers, Kollerup, Wong, Velloso, Goncalves",
    venue:"CHI '26", url:"https://dl.acm.org/doi/10.1145/3772318.3791157",
    tags:["ai","xai"] },

  { year:2026, type:"conference",
    title:"One Body, Two Minds: Alternating VR Perspective During Remote Teleoperation of Supernumerary Limbs",
    authors:"Zhou, Huang, Wijaya, Cheng, Lindlbauer, Velloso, Bianchi, Sarsenbayeva, Withana",
    venue:"CHI '26", url:"https://dl.acm.org/doi/10.1145/3772318.3791433",
    tags:["xr"] },

  { year:2026, type:"conference",
    title:"Gaze and Speech in Multimodal Human-Computer Interaction: A Scoping Review",
    authors:"Khan, Weidner, Rhee, Abdrabou, Bianchi, Velloso, Gellersen, Newn",
    venue:"CHI '26", url:"https://doi.org/10.1145/3772318.3791662",
    tags:["eye-tracking","voice","methodology"] },

  /* ── 2025 ──────────────────────────────────────────────────── */

  { year:2025, type:"journal",
    title:"Feeds of Distrust: Investigating how AI-Powered News Chatbots Shape User Trust and Perceptions",
    authors:"Govers, Pareek, Velloso, Goncalves",
    venue:"TiiS", url:"https://dl.acm.org/doi/10.1145/3722227",
    tags:["ai","cscw"] },

  { year:2025, type:"journal",
    title:"I Can't Join, But I Will Send My Agent: Stand-in Enhanced Asynchronous Meetings (SEAM)",
    authors:"Bai, Grønbæk, Irlitti, Knibbe, Velloso",
    venue:"IMWUT", url:"https://dl.acm.org/doi/10.1145/3770659",
    tags:["xr","ai","cscw"] },

  { year:2025, type:"journal",
    title:"Estimating the Effects of Ambient Noise on Mixed Reality Interaction",
    authors:"Li, Peng, Velloso, Withana, Minamizawa, Sarsenbayeva",
    venue:"IMWUT", url:"https://dl.acm.org/doi/10.1145/3770715",
    tags:["xr"] },

  { year:2025, type:"journal",
    title:"An Actionability Assessment Tool for Enhancing Algorithmic Recourse in Explainable AI",
    authors:"Singh, Miller, Sonenberg, Velloso, Vetere, Howe",
    venue:"IEEE ToHMS", url:"https://ieeexplore.ieee.org/document/11082361/",
    tags:["ai","xai"] },

  { year:2025, type:"journal",
    title:"Pause for success: Harnessing interaction delay and target selection difficulty in VR hands-on learning environments",
    authors:"Khorasani, Hsu, Guan, Goncalves, Irlitti, Knibbe, Velloso",
    venue:"C&E:XR", url:"https://www.sciencedirect.com/science/article/pii/S294967802500011X",
    tags:["xr","education"] },

  { year:2025, type:"journal",
    title:"Should we use the NASA-TLX in HCI? A review of theoretical and methodological issues around Mental Workload Measurement",
    authors:"Babaei, Dingler, Tag, Velloso",
    venue:"IJHCS", url:"https://www.sciencedirect.com/science/article/pii/S1071581925000722",
    tags:["methodology"] },

  { year:2025, type:"journal",
    title:"Object Selection and Manipulation in VR Headsets: Research Challenges, Solutions, and Success Measurements",
    authors:"Yu, Dingler, Velloso, Goncalves",
    venue:"ACM Computing Surveys", url:"https://dl.acm.org/doi/10.1145/3706417",
    tags:["xr","interaction-techniques"] },

  { year:2025, type:"journal",
    title:"Diametrically opposed attributes? Review process preferences and priorities when contesting algorithmic decisions",
    authors:"Lyons, Miller, Velloso",
    venue:"CSCW", url:"https://dl.acm.org/doi/10.1145/3757468",
    tags:["ai","xai","cscw"] },

  { year:2025, type:"conference",
    title:"Weight-Induced Consumed Endurance (WICE): A Model to Quantify Shoulder Fatigue with Weighted Objects",
    authors:"Li, Velloso, Withana, Sarsenbayeva",
    venue:"UIST '25", url:"https://dl.acm.org/doi/10.1145/3746059.3747745",
    tags:["embodied","wearable"] },

  { year:2025, type:"conference",
    title:"Are Measures of Children's Parasocial Relationships Ready for Conversational AI?",
    authors:"Blake, Carter, Velloso",
    venue:"FAccT '25", url:"https://dl.acm.org/doi/10.1145/3715275.3732075",
    tags:["ai"] },

  { year:2025, type:"conference",
    title:"Theorising in HCI using Causal Models",
    authors:"Velloso, Hornbaek",
    venue:"CHI '25", url:"https://dl.acm.org/doi/10.1145/3706598.3713789",
    tags:["methodology"], award:"honourable-mention" },

  { year:2025, type:"conference",
    title:"Estimating the Effects of Encumbrance and Walking on Mixed Reality Interaction",
    authors:"Li, Velloso, Withana, Sarsenbayeva",
    venue:"CHI '25", url:"https://dl.acm.org/doi/full/10.1145/3706598.3713492",
    tags:["xr"], award:"honourable-mention" },

  { year:2025, type:"conference",
    title:"“It’s Not the AI’s Fault Because It Relies Purely on Data”: How Causal Attributions of AI Decisions Shape Trust in AI Systems",
    authors:"Pareek, Schombs, Velloso, Goncalves",
    venue:"CHI '25", url:"https://dl.acm.org/doi/full/10.1145/3706598.3713468",
    tags:["ai","xai"], award:"honourable-mention" },

  { year:2025, type:"conference",
    title:"Responsibility Attribution in Human Interactions with Everyday AI Systems",
    authors:"Brailsford, Vetere, Velloso",
    venue:"CHI '25", url:"https://dl.acm.org/doi/10.1145/3706598.3713126",
    tags:["ai","xai"], award:"honourable-mention" },

  { year:2025, type:"conference",
    title:"How your Physical Environment Affects Spatial Presence in Virtual Reality",
    authors:"van Gemert, Knibbe, Velloso",
    venue:"CHI '25", url:"https://dl.acm.org/doi/10.1145/3706598.3714114",
    tags:["xr"] },

  { year:2025, type:"conference",
    title:"Spatial Heterogeneity in Distributed Mixed Reality Collaboration",
    authors:"Wong, Genay, Gronbaek, Velloso",
    venue:"CHI '25", url:"https://dl.acm.org/doi/full/10.1145/3706598.3714033",
    tags:["xr","cscw"] },

  /* ── 2024 ──────────────────────────────────────────────────── */

  { year:2024, type:"journal",
    title:"Addressing attentional issues in augmented reality with adaptive agents: Possibilities and challenges",
    authors:"Syiem, Kelly, Dingler, Goncalves, Velloso",
    venue:"IJHCS", url:"https://www.sciencedirect.com/science/article/pii/S1071581924001083",
    tags:["xr","ai"] },

  { year:2024, type:"journal",
    title:"A toolkit for localisation queries",
    authors:"Marini, Goncalves, Velloso, Jurdak, Kostakos",
    venue:"Pervasive and Mobile Computing", url:"https://www.sciencedirect.com/science/article/pii/S1574119224000725",
    tags:["mobile"] },

  { year:2024, type:"journal",
    title:"Effect of Explanation Conceptualisations on Trust in AI-assisted Credibility Assessment",
    authors:"Pareek, van Berkel, Velloso, Goncalves",
    venue:"CSCW", url:"https://saumyapareek.com/papers/cscw2024a.pdf",
    tags:["ai","xai","cscw"] },

  { year:2024, type:"conference",
    title:"Stuet: Dual Stewart Platforms for Pinch Grasping Objects in VR",
    authors:"Kelesbekov, Marini, Bai, Johal, Velloso, Knibbe",
    venue:"ISMAR '24", url:"https://www.computer.org/csdl/proceedings-article/ismar/2024/164700a309/22eZZ2itXyw",
    tags:["xr","interaction-techniques"] },

  { year:2024, type:"conference",
    title:"The Jamais Vu Effect: Understanding the Fragile Illusion of Co-presence in Mixed Reality",
    authors:"Wong, Gronbaek, Velloso",
    venue:"DIS '24", url:"https://dl.acm.org/doi/10.1145/3643834.3661574",
    tags:["xr","cscw"], award:"honourable-mention" },

  { year:2024, type:"conference",
    title:"Trust Development and Repair in AI-Assisted Decision-Making during Complementary Expertise",
    authors:"Pareek, Velloso, Goncalves",
    venue:"FAccT '24", url:"https://dl.acm.org/doi/10.1145/3630106.3658924",
    tags:["ai","xai"] },

  { year:2024, type:"conference",
    title:"Augmented Reality at Zoo Exhibits: A Design Framework for Enhancing the Zoo Experience",
    authors:"Syiem, Webber, Kelly, Zhou, Goncalves, Velloso",
    venue:"CHI '24", url:"https://dl.acm.org/doi/10.1145/3613904.3642015",
    tags:["xr"] },

  { year:2024, type:"conference",
    title:"The effects of generative AI on design fixation and divergent thinking",
    authors:"Wadinambiarachchi, Kelly, Pareek, Zhou, Velloso",
    venue:"CHI '24", url:"https://dl.acm.org/doi/10.1145/3613904.3642919",
    tags:["ai"] },

  { year:2024, type:"conference",
    title:"Blended Whiteboard: Physicality and reconfigurability in remote mixed reality collaboration",
    authors:"Gronbaek, Sanchez Esquivel, Leiva, Velloso, Gellersen, Pfeuffer",
    venue:"CHI '24", url:"https://dl.acm.org/doi/10.1145/3613904.3642293",
    tags:["xr","cscw"], award:"honourable-mention" },

  { year:2024, type:"conference",
    title:"AI-driven mediation strategies for audience depolarisation in online debates",
    authors:"Govers, Velloso, Kostakos, Goncalves",
    venue:"CHI '24", url:"https://dl.acm.org/doi/10.1145/3613904.3642322",
    tags:["ai","cscw"] },

  { year:2024, type:"conference",
    title:"Practice-informed patterns for organising large groups in distributed mixed reality collaboration",
    authors:"Wong, Sanchez Esquivel, Leiva, Gronbaek, Velloso",
    venue:"CHI '24", url:"https://dl.acm.org/doi/10.1145/3613904.3642502",
    tags:["xr","cscw"] },

  { year:2024, type:"conference",
    title:"Exploring the association between moral foundations and judgements of AI behaviour",
    authors:"Brailsford, Vetere, Velloso",
    venue:"CHI '24", url:"https://dl.acm.org/doi/10.1145/3613904.3642712",
    tags:["ai","xai"] },

  /* ── 2023 ──────────────────────────────────────────────────── */

  { year:2023, type:"journal",
    title:"Reflected Reality: Augmented Reality through the Mirror",
    authors:"Zhou, Syiem, Li, Goncalves, Velloso",
    venue:"IMWUT", url:"https://dl.acm.org/doi/abs/10.1145/3631431",
    tags:["xr"] },

  { year:2023, type:"journal",
    title:"Deciphering the Impact of Interactivity on Embodied Learning in VR",
    authors:"Khorasani, Syiem, Nawaz, Knibbe, Velloso",
    venue:"C&E:XR", url:"https://www.sciencedirect.com/science/article/pii/S2949678023000314",
    tags:["xr","education","embodied"] },

  { year:2023, type:"journal",
    title:"Directive Explanations for Actionable Explainability in Machine Learning Applications",
    authors:"Singh, Miller, Lyons, Sonenberg, Velloso, Vetere, Howe, Dourish",
    venue:"TiiS", url:"https://dl.acm.org/doi/10.1145/3579363",
    tags:["ai","xai"] },

  { year:2023, type:"journal",
    title:"Mapping 20 years of accessibility research in HCI: A co-word analysis",
    authors:"Sarsenbayeva, van Berkel, Hettiachchi, Tag, Velloso, Goncalves, Kostakos",
    venue:"IJHCS", url:"https://www.sciencedirect.com/science/article/pii/S1071581923000241",
    tags:["accessibility","methodology"] },

  { year:2023, type:"journal",
    title:"Methodological Standards in Accessibility Research on Motor Impairments: A Survey",
    authors:"Sarsenbayeva, van Berkel, Velloso, Goncalves, Kostakos",
    venue:"ACM Computing Surveys", url:"https://dl.acm.org/doi/abs/10.1145/3543509",
    tags:["accessibility","methodology"] },

  { year:2023, type:"conference",
    title:"An Empirical Evaluation of Educational Data Mining Techniques in Dynamic VR Applications",
    authors:"Khorasani, Nawaz, Syiem, Wei, Pardos, Knibbe, Velloso",
    venue:"OzCHI '23", url:"https://dl.acm.org/doi/abs/10.1145/3638380.3638387",
    tags:["xr","education"] },

  { year:2023, type:"conference",
    title:"Algorithmic Decisions, Desire for Control, and the Preference for Human Review over Algorithmic Review",
    authors:"Lyons, Miller, Velloso",
    venue:"FAccT '23", url:"https://dl.acm.org/doi/fullHtml/10.1145/3593013.3594041",
    tags:["ai","xai"] },

  { year:2023, type:"conference",
    title:"Volumetric Mixed Reality Telepresence for Real-time Cross Modality Collaboration",
    authors:"Irlitti, Latifoglu, Zhou, Reinoso, Hoang, Velloso, Vetere",
    venue:"CHI '23", url:"https://dl.acm.org/doi/abs/10.1145/3544548.3581277",
    tags:["xr","cscw"] },

  { year:2023, type:"conference",
    title:"Partially Blended Realities: Aligning Dissimilar Spaces for Distributed Mixed Reality Meetings",
    authors:"Gronbaek, Pfeuffer, Velloso, Astrup, Pedersen, Kjaer, Leiva, Gellersen",
    venue:"CHI '23", url:"https://dl.acm.org/doi/abs/10.1145/3544548.3581515",
    tags:["xr","cscw"] },

  { year:2023, type:"conference",
    title:"Modeling Temporal Target Selection: A Perspective from Its Spatial Correspondence",
    authors:"Yu, Syiem, Irlitti, Dingler, Velloso, Goncalves",
    venue:"CHI '23", url:"https://dl.acm.org/doi/abs/10.1145/3544548.3581011",
    tags:["interaction-techniques"] },

  { year:2023, type:"conference",
    title:"Here and Now: Creating Improvisational Dance Movements with a Mixed Reality Mirror",
    authors:"Zhou, Grebel, Irlitti, Minaai, Goncalves, Velloso",
    venue:"CHI '23", url:"https://dl.acm.org/doi/abs/10.1145/3544548.3580666",
    tags:["xr","embodied"] },

  /* ── 2022 ──────────────────────────────────────────────────── */

  { year:2022, type:"journal",
    title:"The Relative Contribution of Verbal Complexity to Second Language Video Lectures Difficulty Assessment",
    authors:"Alghamdi, Gruba, Velloso",
    venue:"The Modern Language Journal", url:"https://onlinelibrary.wiley.com/doi/full/10.1111/modl.12773",
    tags:["education"] },

  { year:2022, type:"journal",
    title:"Shape-sphere: A metric space for analysing time series by their shape",
    authors:"Kowsar, Moshtaghi, Velloso, Bezdek, Kulik, Leckie",
    venue:"Information Sciences", url:"https://www.sciencedirect.com/science/article/pii/S0020025521009154",
    tags:["sensing"] },

  { year:2022, type:"journal",
    title:"The use of lexical complexity for assessing difficulty in instructional videos",
    authors:"Alghamdi, Gruba, Masrai, Velloso",
    venue:"Language Learning & Technology", url:"https://www.lltjournal.org/item/10125-73524/",
    tags:["education"] },

  { year:2022, type:"conference",
    title:"Blending On-Body and Mid-Air Interaction in Virtual Reality",
    authors:"Yu, Zhou, Dingler, Velloso, Goncalves",
    venue:"ISMAR '22", url:"https://www.difeng.me/papers/22_BodyOn.pdf",
    tags:["xr","interaction-techniques","gestures"] },

  { year:2022, type:"conference",
    title:"Movement Guidance using a Mixed Reality Mirror",
    authors:"Zhou, Irlitti, Yu, Goncalves, Velloso",
    venue:"DIS '22", url:"https://dl.acm.org/doi/10.1145/3532106.3533466",
    tags:["xr","embodied"] },

  { year:2022, type:"conference",
    title:"Integrating Gaze and Speech for Enabling Implicit Interactions",
    authors:"Khan, Newn, Bailey, Velloso",
    venue:"CHI '22", url:"https://www.researchgate.net/profile/Joshua-Newn/publication/359453492_Integrating_Gaze_and_Speech_for_Enabling_Implicit_Interactions/links/623d84db7931cc7ccff57e04/Integrating-Gaze-and-Speech-for-Enabling-Implicit-Interactions.pdf",
    tags:["eye-tracking","voice"] },

  { year:2022, type:"conference",
    title:"What's the appeal? Perceptions of review processes for algorithmic decisions",
    authors:"Lyons, Wijenayake, Miller, Velloso",
    venue:"CHI '22", url:"https://dl.acm.org/doi/10.1145/3491102.3517606",
    tags:["ai","xai"] },

  { year:2022, type:"conference",
    title:"To Type or to speak? The effect of input modality on text understanding during note-taking",
    authors:"Khan, Nawaz, Newn, Kelly, Lodge, Bailey, Velloso",
    venue:"CHI '22", url:"https://www.researchgate.net/profile/Joshua-Newn/publication/359453404_To_type_or_to_speak_The_effect_of_input_modality_on_text_understanding_during_note-taking/links/623d85e82d8ea42c14a3cb4f/To-type-or-to-speak-The-effect-of-input-modality-on-text-understanding-during-note-taking.pdf",
    tags:["voice","interaction-techniques"] },

  /* ── 2021 ──────────────────────────────────────────────────── */

  { year:2021, type:"journal",
    title:"GAVIN: Gaze-Assisted Voice-based Implicit Notetaking",
    authors:"Khan, Newn, Kelly, Srivastava, Bailey, Velloso",
    venue:"TOCHI", url:"https://dl.acm.org/doi/10.1145/3453988",
    tags:["eye-tracking","voice"] },

  { year:2021, type:"journal",
    title:"Conceptualising Contestability: Perspectives on Contesting Algorithmic Decisions",
    authors:"Lyons, Miller, Velloso",
    venue:"CSCW", url:"https://dl.acm.org/doi/10.1145/3449180",
    tags:["ai","xai","cscw"] },

  { year:2021, type:"conference",
    title:"A Probabilistic Interpretation of Motion Correlation Selection Techniques",
    authors:"Velloso, Morimoto",
    venue:"CHI '21", url:"https://dl.acm.org/doi/10.1145/3411764.3445184",
    tags:["interaction-techniques","eye-tracking"] },

  { year:2021, type:"conference",
    title:"Impact of Task on Attentional Tunneling in Handheld Augmented Reality",
    authors:"Syiem, Kelly, Goncalves, Velloso, Dingler",
    venue:"CHI '21", url:"https://dl.acm.org/doi/10.1145/3411764.3445580",
    tags:["xr"], award:"best-paper" },

  { year:2021, type:"conference",
    title:"Dance and Choreography in HCI: A Two-Decade Retrospective",
    authors:"Zhou, Chua, Knibbe, Goncalves, Velloso",
    venue:"CHI '21", url:"https://dl.acm.org/doi/10.1145/3411764.3445804",
    tags:["embodied","methodology"], award:"honourable-mention" },

  { year:2021, type:"conference",
    title:"Gaze-Supported 3D Object Manipulation in Virtual Reality",
    authors:"Yu, Lu, Shi, Liang, Dingler, Velloso, Goncalves",
    venue:"CHI '21", url:"https://dl.acm.org/doi/10.1145/3411764.3445343",
    tags:["xr","eye-tracking"] },

  { year:2021, type:"conference",
    title:"A Critique of Electrodermal Activity Practices at CHI",
    authors:"Babaei, Tag, Dingler, Velloso",
    venue:"CHI '21", url:"https://dl.acm.org/doi/10.1145/3411764.3445370",
    tags:["methodology"], award:"honourable-mention" },

  { year:2021, type:"conference",
    title:"Are you with me? Measurement of Learners' Video-Watching Attention with Eye Tracking",
    authors:"Srivastava, Nawaz, Newn, Lodge, Velloso, Erfani, Gasevic, Bailey",
    venue:"LAK '21", url:"https://dl.acm.org/doi/10.1145/3448139.3448148",
    tags:["eye-tracking","education"] },

  { year:2021, type:"conference",
    title:"Designing a tangible device for re-framing unproductivity",
    authors:"Sirera, Velloso",
    venue:"INTERACT '21", url:"https://link.springer.com/chapter/10.1007/978-3-030-85610-6_29",
    tags:["tangible"] },

  /* ── 2020 ──────────────────────────────────────────────────── */

  { year:2020, type:"journal",
    title:"An Online Unsupervised Dynamic Window Method to Track Repeating Patterns from Sensor Data",
    authors:"Kowsar, Moshtaghi, Velloso, Leckie, Kulik",
    venue:"IEEE Trans. Cybernetics", url:"https://ieeexplore.ieee.org/document/9257079",
    tags:["sensing","wearable"] },

  { year:2020, type:"journal",
    title:"Measuring Mobility and Room Occupancy in Clinical Settings: System Development and Implementation",
    authors:"Marini, Tag, Goncalves, Velloso, Jurdak, McCarthy, Shearer, Kostakos",
    venue:"JMIR mHealth", url:"https://mhealth.jmir.org/2020/10/e19874/",
    tags:["sensing","mobile"] },

  { year:2020, type:"journal",
    title:"Fully-Occluded Target Selection in Virtual Reality",
    authors:"Yu, Zhou, Newn, Dingler, Velloso, Goncalves",
    venue:"IEEE TVCG", url:"https://ieeexplore.ieee.org/document/9207831",
    tags:["xr","interaction-techniques"] },

  { year:2020, type:"journal",
    title:"Eyes-free Target Acquisition During Walking in Immersive Mixed Reality",
    authors:"Zhou, Yu, Reinoso, Newn, Goncalves, Velloso",
    venue:"IEEE TVCG", url:"https://ieeexplore.ieee.org/document/9199575",
    tags:["xr","interaction-techniques"] },

  { year:2020, type:"journal",
    title:"Demand-Driven Transparency for Monitoring Intelligent Agents",
    authors:"Vered, Howe, Miller, Sonenberg, Velloso",
    venue:"IEEE Trans. Human-Machine Systems", url:"https://ieeexplore.ieee.org/document/9097427",
    tags:["ai","xai"] },

  { year:2020, type:"journal",
    title:"Combining gaze and AI planning for online human intention recognition",
    authors:"Singh, Miller, Newn, Velloso, Vetere, Sonenberg",
    venue:"Artificial Intelligence", url:"https://www.sciencedirect.com/science/article/pii/S0004370218307628",
    tags:["ai","eye-tracking"] },

  { year:2020, type:"journal",
    title:"A Survey of Context Simulation for Testing Mobile Context-Aware Applications",
    authors:"Luo, Goncalves, Velloso, Kostakos",
    venue:"ACM Computing Surveys", url:"https://dl.acm.org/doi/10.1145/3372788",
    tags:["mobile","methodology"] },

  { year:2020, type:"journal",
    title:"Overcoming Compliance Bias in Self-Report Studies: A Cross-Study Analysis",
    authors:"van Berkel, Goncalves, Hosio, Sarsenbayeva, Velloso, Kostakos",
    venue:"IJHCS", url:"https://www.sciencedirect.com/science/article/pii/S1071581919301211",
    tags:["methodology"] },

  { year:2020, type:"conference",
    title:"Faces of Focus: A study on the facial cues of attentional states",
    authors:"Babaei, Srivastava, Newn, Zhou, Dingler, Velloso",
    venue:"CHI '20", url:"https://dl.acm.org/doi/10.1145/3313831.3376566",
    tags:["sensing"] },

  { year:2020, type:"conference",
    title:"Investigating Immersive Virtual Reality as an Educational Tool for Quantum Computing",
    authors:"Zable, Hollenberg, Velloso, Goncalves",
    venue:"VRST '20", url:"https://dl.acm.org/doi/10.1145/3385956.3418957",
    tags:["xr","education"] },

  { year:2020, type:"conference",
    title:"Enhancing Visitor Experience or Hindering Docent Roles: Attentional Issues in Multi-Modal Augmented Reality Settings",
    authors:"Syiem, Kelly, Velloso, Goncalves, Dingler",
    venue:"ISMAR '20", url:"https://minerva-access.unimelb.edu.au/bitstream/handle/11343/253876/Rewild_ISMAR20202.pdf?sequence=2&isAllowed=y",
    tags:["xr"] },

  { year:2020, type:"conference",
    title:"Engaging participants during selection studies in virtual reality",
    authors:"Yu, Zhou, Tag, Dingler, Velloso, Goncalves",
    venue:"IEEE VR '20", url:"https://ieeexplore.ieee.org/document/9089537",
    tags:["xr","methodology"] },

  { year:2020, type:"conference",
    title:"Exploring the usage of thermal imaging for understanding video lecture designs and students' experiences",
    authors:"Srivastava, Nawaz, Lodge, Velloso, Erfani, Bailey",
    venue:"LAK '20", url:"https://dl.acm.org/doi/10.1145/3375462.3375514",
    tags:["sensing","education"] },

  /* ── 2019 ──────────────────────────────────────────────────── */

  { year:2019, type:"journal",
    title:"Classifying Attention Types with Thermal Imaging and Eye Tracking",
    authors:"Abdelrahman, Khan, Newn, Velloso, Safwat, Bailey, Bulling, Vetere, Schmidt",
    venue:"IMWUT", url:"https://dl.acm.org/doi/10.1145/3351227",
    tags:["eye-tracking","sensing"] },

  { year:2019, type:"journal",
    title:"CamTest: A Laboratory Testbed for Camera-Based Mobile Sensing Applications",
    authors:"Luo, Xu, Dong, Goncalves, Velloso, Kostakos",
    venue:"Pervasive and Mobile Computing", url:"https://www.sciencedirect.com/science/article/pii/S1574119218303675",
    tags:["mobile","sensing"] },

  { year:2019, type:"journal",
    title:"Measuring the Effects of Stress on Mobile Interaction",
    authors:"Sarsenbayeva, van Berkel, Hettiachchi, Jiang, Dingler, Velloso, Kostakos, Goncalves",
    venue:"IMWUT", url:"https://dl.acm.org/doi/10.1145/3314411",
    tags:["mobile"] },

  { year:2019, type:"journal",
    title:"Energy-Efficient Prediction of Smartphone Unlocking",
    authors:"Luo, Visuri, Klakegg, van Berkel, Sarsenbayeva, Mottonen, Goncalves, Anagnostopoulos, Ferreira, Flores, Velloso, Kostakos",
    venue:"Personal and Ubiquitous Computing", url:"https://dl.acm.org/doi/10.1007/s00779-018-01190-0",
    tags:["mobile"] },

  { year:2019, type:"journal",
    title:"Multimodal data as a means to understand the learning experience",
    authors:"Giannakos, Sharma, Pappas, Kostakos, Velloso",
    venue:"International Journal of Information Management", url:"https://www.sciencedirect.com/science/article/pii/S0268401218312751",
    tags:["education","sensing"] },

  { year:2019, type:"conference",
    title:"Biometric Mirror: Exploring Values and Attitudes towards Facial Analysis and Automated Decision-Making",
    authors:"Wouters, Kelly, Velloso, Wolf, Ferdous, Newn, Joukhadar, Vetere",
    venue:"DIS '19", url:"https://dl.acm.org/doi/10.1145/3322276.3322304",
    tags:["ai","sensing"] },

  { year:2019, type:"conference",
    title:"Designing Interactions with Intention-Aware Gaze-Enabled Artificial Agents",
    authors:"Newn, Singh, Allison, Madumal, Velloso, Vetere",
    venue:"INTERACT '19", url:"https://link.springer.com/chapter/10.1007/978-3-030-29384-0_17",
    tags:["ai","eye-tracking"] },

  { year:2019, type:"conference",
    title:"Continuous Evaluation of Video Lectures from Real-Time Difficulty Self-Report",
    authors:"Srivastava, Velloso, Lodge, Erfani, Bailey",
    venue:"CHI '19", url:"https://dl.acm.org/doi/10.1145/3290605.3300816",
    tags:["education"] },

  { year:2019, type:"conference",
    title:"A Tale of Two Perspectives: A Conceptual Framework of User Expectations and Experiences of Instructional Fitness Apps",
    authors:"Aladwan, Kelly, Baker, Velloso",
    venue:"CHI '19", url:"https://dl.acm.org/doi/10.1145/3290605.3300624",
    tags:["mobile","education"], award:"best-paper" },

  { year:2019, type:"conference",
    title:"SpinalLog: Visuo-Haptic Feedback in Musculoskeletal Manipulation Training",
    authors:"Chacon, Velloso, Hoang, Wolf",
    venue:"TEI '19", url:"https://dl.acm.org/doi/10.1145/3294109.3295626",
    tags:["tangible","embodied","education"], award:"best-paper" },

  /* ── 2018 ──────────────────────────────────────────────────── */

  { year:2018, type:"journal",
    title:"Combining Low and Mid-Level Gaze Features for Desktop Activity Recognition",
    authors:"Srivastava, Newn, Velloso",
    venue:"IMWUT", url:"https://dl.acm.org/doi/10.1145/3287067",
    tags:["eye-tracking","sensing"] },

  { year:2018, type:"journal",
    title:"Effect of Distinct Ambient Noise Types on Mobile Interaction",
    authors:"Sarsenbayeva, van Berkel, Velloso, Kostakos, Goncalves",
    venue:"IMWUT", url:"https://dl.acm.org/doi/10.1145/3214285",
    tags:["mobile"] },

  { year:2018, type:"conference",
    title:"Combining Planning with Gaze for Online Human Intention Recognition",
    authors:"Singh, Miller, Newn, Sonenberg, Velloso, Vetere",
    venue:"AAMAS '18", url:"https://dl.acm.org/doi/10.5555/3237383.3237457",
    tags:["ai","eye-tracking"] },

  { year:2018, type:"conference",
    title:"Circular Orbits Detection for Gaze Interaction Using 2D Correlation and Profile Matching Algorithms",
    authors:"Velloso, Coutinho, Kurauchi, Morimoto",
    venue:"ETRA '18", url:"https://dl.acm.org/doi/10.1145/3204493.3204524",
    tags:["eye-tracking","interaction-techniques"], award:"honourable-mention" },

  { year:2018, type:"conference",
    title:"Looks Can Be Deceiving: Using Gaze Visualisation to Predict and Mislead Opponents in Strategic Gameplay",
    authors:"Newn, Allison, Velloso, Vetere",
    venue:"CHI '18", url:"https://dl.acm.org/doi/10.1145/3173574.3173835",
    tags:["eye-tracking","cscw"] },

  /* ── 2017 ──────────────────────────────────────────────────── */

  { year:2017, type:"journal",
    title:"Cognitive Heat: Exploring the Usage of Thermal Imaging to Unobtrusively Estimate Cognitive Load",
    authors:"Abdelrahman, Velloso, Dingler, Schmidt, Vetere",
    venue:"IMWUT", url:"https://dl.acm.org/doi/10.1145/3130898",
    tags:["sensing"] },

  { year:2017, type:"journal",
    title:"Motion Correlation: Selecting Objects by Matching Their Movement",
    authors:"Velloso, Carter, Newn, Esteves, Clarke, Gellersen",
    venue:"TOCHI", url:"https://dl.acm.org/doi/10.1145/3064937",
    tags:["interaction-techniques"], award:"best-paper" },

  { year:2017, type:"conference",
    title:"Only forward?: toward understanding human visual behaviour when examining search results",
    authors:"Buchanan, McKay, Velloso, Moffat, Turpin, Scholer",
    venue:"OzCHI '17", url:"https://dl.acm.org/doi/10.1145/3152771.3156165",
    tags:["eye-tracking"] },

  { year:2017, type:"conference",
    title:"GazeGrip: improving mobile device accessibility with gaze & grip interaction",
    authors:"Zhou, Velloso",
    venue:"OzCHI '17", url:"https://dl.acm.org/doi/10.1145/3152771.3156159",
    tags:["eye-tracking","accessibility","mobile"], award:"honourable-mention" },

  { year:2017, type:"conference",
    title:"Evaluating Real-Time Gaze Representations to Infer Intentions in Competitive Turn-Based Strategy Games",
    authors:"Newn, Velloso, Allison, Abdelrahman, Vetere",
    venue:"CHI PLAY '17", url:"https://dl.acm.org/doi/10.1145/3116595.3116624",
    tags:["eye-tracking","cscw"] },

  /* ── 2016 ──────────────────────────────────────────────────── */

  { year:2016, type:"conference",
    title:"Detecting unseen anomalies in weight training exercises",
    authors:"Kowsar, Moshtaghi, Velloso, Kulik, Leckie",
    venue:"OzCHI '16", url:"https://dl.acm.org/doi/10.1145/3010915.3010941",
    tags:["sensing","wearable","embodied"] },

  { year:2016, type:"conference",
    title:"Public DisPLAY: social games on interactive public screens",
    authors:"Cox, Carter, Velloso",
    venue:"OzCHI '16", url:"https://dl.acm.org/doi/10.1145/3010915.3010917",
    tags:["cscw"] },

  { year:2016, type:"conference",
    title:"Multimodal Segmentation on a Large Interactive Tabletop: Extending Interaction on Horizontal Surfaces with Gaze",
    authors:"Newn, Velloso, Carter, Vetere",
    venue:"ISS '16", url:"https://dl.acm.org/doi/10.1145/2992154.2992179",
    tags:["eye-tracking","gestures","interaction-techniques"] },

  { year:2016, type:"conference",
    title:"The Emergence of EyePlay: A Survey of Eye Interaction in Games",
    authors:"Velloso, Carter",
    venue:"CHI PLAY '16", url:"https://dl.acm.org/doi/10.1145/2967934.2968084",
    tags:["eye-tracking","methodology"] },

  { year:2016, type:"conference",
    title:"TraceMatch: a computer vision technique for user input by tracing of animated controls",
    authors:"Clarke, Bellino, Esteves, Velloso, Gellersen",
    venue:"UbiComp '16", url:"https://dl.acm.org/doi/10.1145/2971648.2971714",
    tags:["interaction-techniques","sensing"] },

  { year:2016, type:"conference",
    title:"AmbiGaze: Direct Control of Ambient Devices by Gaze",
    authors:"Velloso, Wirth, Weichel, Esteves, Gellersen",
    venue:"DIS '16", url:"https://dl.acm.org/doi/10.1145/2901790.2901867",
    tags:["eye-tracking","interaction-techniques"] },

  { year:2016, type:"conference",
    title:"PathSync: Multi-User Gestural Interaction with Touchless Rhythmic Path Mimicry",
    authors:"Carter, Velloso, Downs, Sellen, O'Hara, Vetere",
    venue:"CHI '16", url:"https://dl.acm.org/doi/10.1145/2858036.2858284",
    tags:["gestures","cscw"] },

  /* ── 2015 ──────────────────────────────────────────────────── */

  { year:2015, type:"journal",
    title:"The Feet in Human–Computer Interaction: A Survey of Foot-Based Interaction",
    authors:"Velloso, Schmidt, Alexander, Gellersen, Bulling",
    venue:"ACM Computing Surveys", url:"https://dl.acm.org/doi/10.1145/2816455",
    tags:["embodied","interaction-techniques"] },

  { year:2015, type:"conference",
    title:"An Empirical Investigation of Gaze Selection in Mid-Air Gestural 3D Manipulation",
    authors:"Velloso, Turner, Alexander, Bulling, Gellersen",
    venue:"INTERACT '15", url:"https://link.springer.com/chapter/10.1007/978-3-319-22668-2_25",
    tags:["eye-tracking","gestures"] },

  { year:2015, type:"conference",
    title:"Interactions Under the Desk: A Characterisation of Foot Movements for Input in a Seated Position",
    authors:"Velloso, Alexander, Bulling, Gellersen",
    venue:"INTERACT '15", url:"https://link.springer.com/chapter/10.1007/978-3-319-22701-6_29",
    tags:["embodied","interaction-techniques"] },

  { year:2015, type:"conference",
    title:"Remote Gaze and Gesture Tracking on the Microsoft Kinect: Investigating the Role of Feedback",
    authors:"Carter, Newn, Velloso, Vetere",
    venue:"OzCHI '15", url:"https://dl.acm.org/doi/10.1145/2838739.2838778",
    tags:["eye-tracking","gestures"] },

  { year:2015, type:"conference",
    title:"Orbits: Gaze Interaction for Smart Watches using Smooth Pursuit Eye Movements",
    authors:"Esteves, Velloso, Bulling, Gellersen",
    venue:"UIST '15", url:"https://dl.acm.org/doi/10.1145/2807442.2807499",
    tags:["eye-tracking","wearable"], award:"best-paper" },

  { year:2015, type:"conference",
    title:"Gaze-Supported Gaming: MAGIC Techniques for First Person Shooters",
    authors:"Velloso, Fleming, Alexander, Gellersen",
    venue:"CHI PLAY '15", url:"https://dl.acm.org/doi/10.1145/2793107.2793137",
    tags:["eye-tracking","interaction-techniques"] },

  { year:2015, type:"conference",
    title:"Arcade+: A Platform for Public Deployment and Evaluation of Multi-Modal Games",
    authors:"Velloso, Oechsner, Sachmann, Wirth, Gellersen",
    venue:"CHI PLAY '15", url:"https://dl.acm.org/doi/10.1145/2793107.2793145",
    tags:["sensing"] },

  { year:2015, type:"conference",
    title:"Substitutional Reality: Using the Physical Environment to Design Virtual Reality Experiences",
    authors:"Simeone, Velloso, Gellersen",
    venue:"CHI '15", url:"https://dl.acm.org/doi/10.1145/2702123.2702389",
    tags:["xr"] },

  /* ── 2014 ──────────────────────────────────────────────────── */

  { year:2014, type:"conference",
    title:"An Empirical Characterization of Touch-Gesture Input-Force on Mobile Devices",
    authors:"Taher, Alexander, Hardy, Velloso",
    venue:"ITS '14", url:"https://dl.acm.org/doi/10.1145/2669485.2669515",
    tags:["mobile","gestures","interaction-techniques"] },

  { year:2014, type:"conference",
    title:"Feet Movement in Desktop 3D Interaction",
    authors:"Simeone, Velloso, Gellersen",
    venue:"3DUI '14", url:"http://www.scc.lancs.ac.uk/~alexandj/pdf/3DUI_FeetMovement.pdf",
    tags:["embodied","interaction-techniques"] },

  /* ── 2013 ──────────────────────────────────────────────────── */

  { year:2013, type:"conference",
    title:"AutoBAP: Automatic Coding of Body Action and Posture Units from Wearable Sensors",
    authors:"Velloso, Bulling, Gellersen",
    venue:"ACII '13", url:"https://dl.acm.org/doi/10.1109/ACII.2013.29",
    tags:["sensing","wearable","embodied"] },

  { year:2013, type:"conference",
    title:"MotionMA: motion modelling and analysis by demonstration",
    authors:"Velloso, Bulling, Gellersen",
    venue:"CHI '13", url:"https://dl.acm.org/doi/10.1145/2470654.2466171",
    tags:["embodied","gestures","sensing"] },

  { year:2013, type:"conference",
    title:"Qualitative activity recognition of weight lifting exercises",
    authors:"Velloso, Bulling, Gellersen, Ugulino, Fuks",
    venue:"AH '13", url:"https://dl.acm.org/doi/10.1145/2459236.2459256",
    tags:["sensing","wearable","embodied"] },

  /* ── 2012 ──────────────────────────────────────────────────── */

  { year:2012, type:"conference",
    title:"Wearable computing: accelerometers' data classification of body postures and movements",
    authors:"Ugulino, Cardador, Vega, Velloso, Milidiu, Fuks",
    venue:"SBIA '12", url:"https://link.springer.com/chapter/10.1007%2F978-3-642-34459-6_6",
    tags:["sensing","wearable","embodied"] },

  { year:2012, type:"conference",
    title:"Virtual Caregiver: A System for Supporting Collaboration in Elderly Monitoring",
    authors:"Ugulino, Ferreira, Velloso, Fuks",
    venue:"SBSC '12", url:"https://ieeexplore.ieee.org/document/6391729",
    tags:["cscw","accessibility"] }

];
