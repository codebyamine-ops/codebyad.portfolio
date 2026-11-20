let currentLang = 'en';

const translations = {
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navAi: "Ask AI",
    navContact: "Contact",
    badge: "Available for Creative & Tech Projects",
    heroGreeting: "Hello, I'm <span class='accent-orange'>codebyad</span>",
    heroHeadline: "Crafting the digital. Engineering the experience..",
    heroSub: "Passionate about full-stack development, creative interfaces, and building digital products where design meets functionality.",
    ctaWork: "Explore Projects",
    ctaContact: "Let's Talk",
    metricYears: "Years Freelance",
    metricLang: "Bilingual",
    storyKicker: "01 / ABOUT AMINE DKYAR",
    storyMainTitle: "Code, design, calm energy, and <span>real life</span>.",
    pic1Caption: "01 / Who I Am • Amine Dkyar (22)",
    ch1Tag: "01 — IDENTITY & FREELANCE CRAFT",
    ch1Title: "Hey, I'm Amine Dkyar — 22, building digital reputation for businesses.",
    ch1Body1: "I'm a 22-year-old full-stack developer and web designer who started freelancing three years ago. I help businesses build a strong, trustworthy digital reputation through fast web applications, modern interfaces, and clear brand presence.",
    ch1Body2: "By nature, I'm calm under pressure and genuinely love learning new skills—whether it's mastering a new framework, refining UI details, or diving into a good book.",
    statAge: "Years Old",
    statExp: "Freelance Dev & Design",
    statRole: "& Continuous Learner",
    pic2Caption: "02 / Gym • Consistency & Strength",
    ch2Tag: "02 — DISCIPLINE & FOCUS",
    ch2Title: "Training the body to keep the mind sharp.",
    ch2Body: "The gym is where I build daily discipline. Showing up consistently, tracking progress, and pushing past limits translates directly into how I approach full-stack development and design—steady, patient, and committed to long-term results.",
    pic3Caption: "03 / Football • Teamwork & Instinct",
    ch3Tag: "03 — ENERGY & TEAMWORK",
    ch3Title: "Fast decisions, vision on the pitch, and team spirit.",
    ch3Body: "Football keeps my competitive energy alive. Reading the game, staying calm with the ball, and communicating with teammates mirrors how I collaborate with clients—understanding the whole picture before making the right move.",
    pic4Caption: "04 / Traveling • New Horizons",
    ch4Tag: "04 — CURIOSITY & INSPIRATION",
    ch4Title: "Exploring new places to fuel fresh creative ideas.",
    ch4Body: "Traveling—alongside reading—feeds my curiosity. Stepping into new environments, observing different aesthetics, and meeting new people helps me bring fresh, original perspectives into every digital brand and interface I craft.",
    projectsKicker: "02 / SELECTED WORK",
    projectsTitle: "Featured <span>Projects</span>",
    filterAll: "All",
    filterWeb: "Web & UI",
    filterTech: "Full-Stack & Tech",
    tag1: "Web & UI",
    p1Title: "Brand & Experience 01",
    p1Desc: "Modern digital storefront engineered to boost trust, speed, and client conversions.",
    p1Stack: "UI/UX • Motion • Responsive",
    p1Metric: "+45% Engagement",
    tag2: "Full-Stack & Tech",
    p2Title: "Interactive Platform 02",
    p2Desc: "Turning complex technical workflows into clean, fast, and intuitive web tools.",
    p2Stack: "Full-Stack • Interactive • Scalable",
    p2Metric: "Fast & Scalable",
    tag3: "Digital Reputation",
    p3Title: "Business Presence 03",
    p3Desc: "High-contrast visual system helping growing businesses stand out with authority.",
    p3Stack: "Identity • Landing System • EN/FR",
    p3Metric: "Clear Positioning",
    viewProject: "Explore Details →",
    worldKicker: "02.5 / TECH STACK GLOBE",
    worldTitle: "Dev <span>World</span>",
    worldHint: "Scroll or drag the globe to orbit through languages & tools",
    activeNodeLabel: "ACTIVE SIGNAL",
    labKicker: "02.6 / INTERACTIVE LAB",
    labTitle: "Live <span>Experiments</span>",
    labSub: "Don't just read specs—test real interactive modules, 3D math, and automation pipelines directly in your browser.",
    lab3dBtn: "Boost Spin ⚡",
    lab1Title: "3D Spatial Geometry Engine",
    lab1Desc: "Real-time 3D vertex projection and perspective rotation rendered natively at 60fps without heavy external overhead.",
    labMagBtn: "Hover & Click Me",
    lab2Title: "Magnetic & Kinetic Micro-UI",
    lab2Desc: "Physics-inspired cursor attraction and tactile state feedback engineered to make interfaces feel alive and responsive.",
    labFlowBtn: "Simulate Flow ▶",
    lab3Title: "Zero-Friction Workflow Pipeline",
    lab3Desc: "End-to-end event automation turning user actions into instant calendar invites and synced schedules.",
    growthKicker: "02.7 / SEARCH & LOCAL GROWTH",
    growthTitle: "Google Business & <span>Ads Marketing</span>",
    growthSub: "Visibility where high-intent buyers already search—combining local Google Business optimization with targeted Google Ads and landing pages that convert.",
    gbpTag: "GOOGLE BUSINESS PROFILE",
    gbpMetric: "Local Maps & Trust",
    gbpTitle: "Own Local Search & Map Results",
    gbpDesc: "Complete profile setup, service categories, location relevance, photo polish, and review workflows so nearby clients find you first and call or book with confidence.",
    gbpB1: "Accurate business info, hours, services & local coverage",
    gbpB2: "Consistent brand visuals & trust signals that stand out on Maps",
    gbpB3: "Direct link to your site, WhatsApp & rendez-vous booking",
    adsTag: "GOOGLE ADS & CONVERSION",
    adsMetric: "High-Intent Traffic",
    adsTitle: "Turn Search Demand Into Real Inquiries",
    adsDesc: "Structured search campaigns, sharp ad copy, negative keyword filtering, and dedicated landing pages engineered so paid clicks land on fast, clear pages—not leaks.",
    adsB1: "Intent-focused keywords & geo-targeted campaign structure",
    adsB2: "High-converting landing pages paired with your brand identity",
    adsB3: "Lead & booking tracking to measure real return, not vanity clicks",
    tabGbp: "Google Business",
    tabAds: "Google Ads",
    valKicker: "02.8 / CLIENT IMPACT & ROI",
    valTitle: "Your Problem. Our Solution. <span>Real Growth</span>.",
    valSub: "How CODEBYAD helps businesses build digital reputation, attract more clients, and turn attention into revenue.",
    probBadge: "YOUR PROBLEM",
    probTitle: "Losing clients before the conversation even starts",
    prob1: "Slow, outdated, or confusing websites that make visitors leave early",
    prob2: "Weak online reputation—prospects don't see proof, clarity, or authority",
    prob3: "Disconnected tools and friction when trying to book, ask, or buy",
    prob4: "Wasted ad clicks or referrals landing on pages that don't convert",
    solBadge: "OUR SOLUTION",
    solTitle: "High-trust web products built to convert",
    sol1: "Fast, modern full-stack & UI design that establishes instant credibility",
    sol2: "Clear positioning, case proof, and bilingual (EN/FR) reach for wider markets",
    sol3: "Smooth user journeys, interactive flows, and frictionless contact paths",
    sol4: "Scalable architecture that grows with your campaigns and client demand",
    roi1Title: "More Clients",
    roi1Desc: "Clearer messaging, stronger first impressions, and effortless calls-to-action turn curious visitors and referrals into real inquiries.",
    roi2Title: "Higher Conversion & Trust",
    roi2Desc: "A sharp digital reputation lowers buyer hesitation—when people trust your brand online, they say yes faster and ask for fewer discounts.",
    roi3Title: "Stronger Financial Return",
    roi3Desc: "More qualified leads + better close rates + saved manual hours mean more revenue coming in and less money leaked through a weak online presence.",
    tableTitle: "Typical Rollout & Momentum: Day 1 vs. Day 30",
    tableNote: "Illustrative milestone framework",
    legendDay1: "Day 1 (Kickoff & Foundation)",
    legendDay30: "Day 30 (Live & Generating Momentum)",
    colArea: "Dimension",
    colDay1: "Day 1 (Kickoff & Foundation)",
    colDay30: "Day 30 (Live & Generating Momentum)",
    rowRep: "Digital Reputation",
    d1Rep: "Audit of current presence, positioning & brand gaps",
    d30Rep: "Polished, credible online brand with clear proof & positioning",
    rowWeb: "Web & Tech Stack",
    d1Web: "Architecture plan, UX structure & core build setup",
    d30Web: "Live, fast, responsive experience tested across devices",
    rowClients: "Client Acquisition",
    d1Clients: "Targeted visitor journey & clear lead capture mapped",
    d30Clients: "Consistent inbound inquiries & smoother sales conversations",
    rowMoney: "Financial Impact",
    d1Money: "Costly bottlenecks identified & quick wins prioritized",
    d30Money: "Higher lead-to-client potential & stronger revenue leverage",
    regKicker: "02.9 / SERVICE ZONES & COVERAGE",
    regTitle: "Regions Where I <span>Deliver</span>",
    regSub: "Select a city or region to scan the map and zoom deep into local collaboration & digital impact.",
    deepDiveBtn: "Go Deep Inside ⤢",
    lblFocus: "Primary Focus",
    lblMode: "Collaboration",
    lblInside: "Inside This Hub",
    deepContactCta: "Work With Me Here →",
    bookTitle: "Book a Rendez-Vous",
    bookSub: "Fill in your details and choose your preferred day. Submitting syncs to your calendar and generates an Apple Calendar (.ics) event.",
    lblFirstName: "Prénom / First Name",
    lblLastName: "Nom / Last Name",
    lblEmail: "Email",
    lblPhone: "Phone Number",
    lblDate: "Preferred Day",
    lblTime: "Preferred Time",
    lblNotes: "Project / Topic (Optional)",
    btnAppleCal: "Add to Apple Calendar (.ics)",
    aiKicker: "03 / INTERACTIVE ASSISTANT",
    aiTitle: "Ask <span>Amine AI</span>",
    aiSub: "Tap a quick question or type your own to learn more about my work, skills, and availability.",
    aiWelcome: "Hey! 👋 I'm Amine's virtual assistant. Ask me anything about my projects, skills, or how we can work together!",
    qSkills: "⚡ What are your main skills?",
    qProjects: "🚀 Tell me about your projects",
    qAvailable: "📅 Are you available for work?",
    qContact: "📩 How can I contact you?",
    aiPlaceholder: "Ask something about Amine...",
    contactKicker: "04 / CONTACT",
    footerTitle: "Let's build something memorable together."
  },
  fr: {
    navAbout: "À propos",
    navProjects: "Projets",
    navAi: "IA",
    navContact: "Contact",
    badge: "Disponible pour projets créatifs & tech",
    heroGreeting: "Bonjour, je suis <span class='accent-orange'>codebyad</span>.",
    heroHeadline: "Façonner le numérique. Concevoir l'expérience.",
    heroSub: "Passionné par le développement full-stack, les interfaces créatives et la conception de produits digitaux où le design rencontre la fonctionnalité.",
    ctaWork: "Découvrir les projets",
    ctaContact: "Me contacter",
    metricYears: "Ans Freelance",
    metricLang: "Bilingue",
    storyKicker: "01 / À PROPOS D'AMINE DKYAR",
    storyMainTitle: "Code, design, calme intérieur et <span>vraie vie</span>.",
    pic1Caption: "01 / Qui je suis • Amine Dkyar (22 ans)",
    ch1Tag: "01 — IDENTITÉ & SAVOIR-FAIRE",
    ch1Title: "Salut, je suis Amine Dkyar — 22 ans, je bâtis la réputation digitale des entreprises.",
    ch1Body1: "Je suis développeur full-stack et web designer de 22 ans, actif en freelance depuis trois ans. J'aide les entreprises à construire une réputation numérique solide et crédible grâce à des applications rapides, des interfaces modernes et une identité claire.",
    ch1Body2: "De nature calme face à la pression, j'adore apprendre de nouvelles compétences — qu'il s'agisse d'un nouveau framework, de design UI ou d'un bon livre.",
    statAge: "Ans",
    statExp: "Freelance Dev & Design",
    statRole: "& Apprentissage Continu",
    pic2Caption: "02 / Musculation • Régularité & Force",
    ch2Tag: "02 — DISCIPLINE & CONCENTRATION",
    ch2Title: "Entraîner le corps pour garder l'esprit vif.",
    ch2Body: "La salle de sport est l'endroit où je forge ma discipline quotidienne. La régularité et le dépassement de soi se reflètent directement dans ma façon de coder et concevoir : avec patience, rigueur et vision long terme.",
    pic3Caption: "03 / Football • Esprit d'équipe & Instinct",
    ch3Tag: "03 — ÉNERGIE & COLLECTIF",
    ch3Title: "Décisions rapides, vision du jeu et esprit d'équipe.",
    ch3Body: "Le football entretient mon énergie compétitive. Lire le jeu, garder son calme balle au pied et communiquer avec l'équipe reflète ma manière de collaborer avec mes clients.",
    pic4Caption: "04 / Voyages • Nouveaux Horizons",
    ch4Tag: "04 — CURIOSITÉ & INSPIRATION",
    ch4Title: "Explorer de nouveaux lieux pour nourrir ma créativité.",
    ch4Body: "Les voyages — tout comme la lecture — nourrissent ma curiosité. Découvrir de nouveaux environnements et cultures m'aide à apporter des idées fraîches et originales à chaque projet digital.",
    projectsKicker: "02 / SÉLECTION",
    projectsTitle: "Projets <span>Phares</span>",
    filterAll: "Tous",
    filterWeb: "Web & UI",
    filterTech: "Full-Stack & Tech",
    tag1: "Web & UI",
    p1Title: "Marque & Expérience 01",
    p1Desc: "Vitrine digitale moderne conçue pour renforcer la confiance, la vitesse et la conversion.",
    p1Stack: "UI/UX • Motion • Responsive",
    p1Metric: "+45% Engagement",
    tag2: "Full-Stack & Tech",
    p2Title: "Plateforme Interactive 02",
    p2Desc: "Transformer des processus techniques complexes en outils web clairs et rapides.",
    p2Stack: "Full-Stack • Interactif • Évolutif",
    p2Metric: "Rapide & Évolutif",
    tag3: "Réputation Digitale",
    p3Title: "Présence Business 03",
    p3Desc: "Système visuel contrasté aidant les entreprises à s'imposer avec crédibilité.",
    p3Stack: "Identité • Landing • EN/FR",
    p3Metric: "Positionnement Clair",
    viewProject: "Voir les détails →",
    worldKicker: "02.5 / GLOBE TECH & STACK",
    worldTitle: "Monde <span>Dev</span>",
    worldHint: "Scrollez ou faites glisser le globe pour explorer les langages & outils",
    activeNodeLabel: "SIGNAL ACTIF",
    labKicker: "02.6 / LABORATOIRE INTERACTIF",
    labTitle: "Expériences <span>Live</span>",
    labSub: "Testez directement dans votre navigateur des modules interactifs, de la 3D temps réel et des flux automatisés.",
    lab3dBtn: "Accélérer ⚡",
    lab1Title: "Moteur Géométrique 3D",
    lab1Desc: "Projection de sommets 3D et rotation en perspective rendues nativement à 60fps sans surcharge externe.",
    labMagBtn: "Survolez & Cliquez",
    lab2Title: "Micro-UI Magnétique & Cinétique",
    lab2Desc: "Attraction au curseur et retours tactiles conçus pour rendre chaque interface vivante et réactive.",
    labFlowBtn: "Simuler le Flux ▶",
    lab3Title: "Pipeline Automatisé Sans Friction",
    lab3Desc: "Automatisation de bout en bout transformant une action utilisateur en événement synchronisé.",
    growthKicker: "02.7 / VISIBILITÉ & ACQUISITION GOOGLE",
    growthTitle: "Google Business & <span>Ads Marketing</span>",
    growthSub: "Soyez visible là où les clients cherchent activement : optimisation Google Business Profile, campagnes Google Ads ciblées et pages pensées pour convertir.",
    gbpTag: "GOOGLE BUSINESS PROFILE",
    gbpMetric: "Maps & Crédibilité Locale",
    gbpTitle: "Dominez la Recherche Locale & Google Maps",
    gbpDesc: "Configuration complète, catégories pertinentes, zones d'intervention, visuels soignés et parcours d'avis pour que les clients proches vous trouvent et vous contactent facilement.",
    gbpB1: "Infos exactes, horaires, services & zones couvertes",
    gbpB2: "Identité visuelle cohérente et signaux de confiance sur Maps",
    gbpB3: "Accès direct vers votre site, WhatsApp et prise de rendez-vous",
    adsTag: "GOOGLE ADS & CONVERSION",
    adsMetric: "Trafic À Forte Intention",
    adsTitle: "Transformez la Recherche en Demandes Réelles",
    adsDesc: "Campagnes structurées, annonces percutantes, mots-clés à exclure et pages d'atterrissage rapides pour éviter le budget perdu et maximiser les contacts qualifiés.",
    adsB1: "Mots-clés ciblés et structure par zone géographique",
    adsB2: "Pages d'atterrissage alignées sur votre image et votre offre",
    adsB3: "Suivi des leads et rendez-vous pour piloter le vrai retour sur investissement",
    tabGbp: "Google Business",
    tabAds: "Google Ads",
    valKicker: "02.8 / IMPACT CLIENT & ROI",
    valTitle: "Votre Problème. Notre Solution. <span>Croissance Réelle</span>.",
    valSub: "Comment CODEBYAD aide les entreprises à bâtir leur réputation digitale, attirer plus de clients et transformer l'attention en chiffre d'affaires.",
    probBadge: "VOTRE PROBLÈME",
    probTitle: "Perdre des clients avant même le premier échange",
    prob1: "Sites lents, datés ou confus qui font repartir les visiteurs trop tôt",
    prob2: "Réputation digitale faible : manque de clarté, de preuves et de crédibilité",
    prob3: "Parcours complexes ou freins au moment de contacter, réserver ou acheter",
    prob4: "Clics ou recommandations qui n'aboutissent pas faute de page convaincante",
    solBadge: "NOTRE SOLUTION",
    solTitle: "Des produits web crédibles conçus pour convertir",
    sol1: "Développement full-stack & UI rapides qui inspirent confiance immédiatement",
    sol2: "Positionnement clair, preuves concrètes et portée bilingue (EN/FR)",
    sol3: "Parcours fluides, interactions soignées et prise de contact sans friction",
    sol4: "Architecture évolutive pensée pour accompagner votre croissance",
    roi1Title: "Plus de Clients",
    roi1Desc: "Un message clair, une première impression forte et des appels à l'action visibles transforment les visiteurs et recommandations en demandes concrètes.",
    roi2Title: "Plus de Confiance & Conversion",
    roi2Desc: "Une réputation digitale solide réduit les hésitations : quand un prospect fait confiance en ligne, il décide plus vite et négocie moins.",
    roi3Title: "Meilleur Retour Financier",
    roi3Desc: "Plus de prospects qualifiés + un meilleur taux de conclusion + du temps gagné = plus de revenus et moins d'opportunités perdues en route.",
    tableTitle: "Progression & Impact : Jour 1 vs. Jour 30",
    tableNote: "Repère indicatif de déploiement",
    legendDay1: "Jour 1 (Lancement & Bases)",
    legendDay30: "Jour 30 (En ligne & Dynamique)",
    colArea: "Axe",
    colDay1: "Jour 1 (Lancement & Bases)",
    colDay30: "Jour 30 (En Ligne & Dynamique)",
    rowRep: "Réputation Digitale",
    d1Rep: "Diagnostic de l'existant, du positionnement et des points à renforcer",
    d30Rep: "Image digitale soignée, crédible et alignée avec votre valeur",
    rowWeb: "Web & Stack Technique",
    d1Web: "Cadrage technique, structure UX et mise en place des fondations",
    d30Web: "Expérience en ligne, rapide et responsive testée sur tous écrans",
    rowClients: "Acquisition Clients",
    d1Clients: "Parcours visiteur et points de conversion structurés",
    d30Clients: "Demandes entrantes plus régulières et échanges commerciaux facilités",
    rowMoney: "Impact Financier",
    d1Money: "Identification des freins coûteux et priorisation des gains rapides",
    d30Money: "Meilleur potentiel de conversion et levier de revenus renforcé",
    regKicker: "02.9 / ZONES D'INTERVENTION",
    regTitle: "Régions Où J'<span>Interviens</span>",
    regSub: "Sélectionnez une ville ou région pour scanner la carte et zoomer au cœur de la collaboration locale.",
    deepDiveBtn: "Zoomer Dans la Ville ⤢",
    lblFocus: "Focus Principal",
    lblMode: "Collaboration",
    lblInside: "Au Cœur de la Ville",
    deepContactCta: "Prendre Rendez-Vous Ici →",
    bookTitle: "Prendre Rendez-Vous",
    bookSub: "Renseignez vos informations et le jour souhaité. La validation synchronise le calendrier et génère un fichier Apple Calendar (.ics).",
    lblFirstName: "Prénom",
    lblLastName: "Nom",
    lblEmail: "Email",
    lblPhone: "Numéro de téléphone",
    lblDate: "Jour souhaité",
    lblTime: "Heure souhaitée",
    lblNotes: "Projet / Sujet (Optionnel)",
    btnAppleCal: "Ajouter à Apple Calendar (.ics)",
    aiKicker: "03 / ASSISTANT INTERACTIF",
    aiTitle: "Demandez à <span>Amine IA</span>",
    aiSub: "Choisissez une question rapide ou écrivez la vôtre pour en savoir plus sur mon travail et mes compétences.",
    aiWelcome: "Salut ! 👋 Je suis l'assistant virtuel d'Amine. Posez-moi vos questions sur ses projets, compétences ou disponibilités !",
    qSkills: "⚡ Quelles sont tes compétences ?",
    qProjects: "🚀 Parle-moi de tes projets",
    qAvailable: "📅 Es-tu disponible ?",
    qContact: "📩 Comment te contacter ?",
    aiPlaceholder: "Posez une question sur Amine...",
    contactKicker: "04 / CONTACT",
    footerTitle: "Construisons quelque chose de mémorable ensemble."
  }
};

// AI Knowledge Base
const aiAnswers = {
  en: {
    skills: "Amine Dkyar (22) is a full-stack developer and web designer with 3+ years of freelance experience, helping businesses build strong digital reputations through clean UI/UX, modern web apps, and fast learning.",
    projects: "His recent work spans interactive web platforms, digital prototypes, and high-contrast visual identities. Scroll up to the Featured Projects section to explore them!",
    available: "Yes! Amine is currently open to freelance collaborations, creative & tech projects, and new opportunities.",
    contact: "You can reach Amine directly at codebyamine@gmail.com or connect via the links in the footer below.",
    fallback: "Great question! Amine blends calm problem-solving, full-stack development, and web design. For specific details or collaborations, reach out at codebyamine@gmail.com."
  },
  fr: {
    skills: "Amine Dkyar (22 ans) est développeur full-stack et web designer avec plus de 3 ans d'expérience en freelance, aidant les entreprises à bâtir une réputation digitale solide grâce à des interfaces modernes et des applications web.",
    projects: "Ses projets récents couvrent des plateformes web interactives, des prototypes numériques et des identités visuelles modernes. Consultez la section Projets Phares juste au-dessus !",
    available: "Oui ! Amine est actuellement disponible pour des collaborations freelance, des projets créatifs & tech, ou de nouvelles opportunités.",
    contact: "Vous pouvez contacter Amine directement par e-mail à codebyamine@gmail.com ou via les liens en bas de page.",
    fallback: "Excellente question ! Amine allie calme, développement full-stack et web design. Pour en discuter, écrivez-lui à codebyamine@gmail.com."
  }
};

// Project Case Details (EN / FR)
const projectDetails = {
  en: {
    p1: {
      tag: "WEB & UI • 01",
      title: "Brand & Experience 01",
      summary: "Designed and built to turn first-time visitors into confident clients through clear structure and responsive motion.",
      challengeLabel: "The Challenge",
      challenge: "An outdated web presence made the business look smaller than its actual quality and caused visitors to bounce early.",
      solutionLabel: "What I Built",
      solution: "A high-contrast, fast-loading web experience with guided sections, smooth transitions, and clear call-to-action flows.",
      highlightsLabel: "Key Highlights",
      highlights: [
        "Clear value proposition above the fold",
        "Smooth micro-interactions without clutter",
        "Mobile-first responsive layout"
      ],
      stack: ["Full-Stack Web", "UI/UX Design", "Animations", "Performance"],
      cta: "Start a Similar Project"
    },
    p2: {
      tag: "FULL-STACK & TECH • 02",
      title: "Interactive Platform 02",
      summary: "An interactive digital product combining clean front-end controls with structured back-end logic.",
      challengeLabel: "The Challenge",
      challenge: "Complex data and multi-step actions felt confusing and slow for everyday users.",
      solutionLabel: "What I Built",
      solution: "A modular web application with intuitive states, instant feedback, and organized workflows.",
      highlightsLabel: "Key Highlights",
      highlights: [
        "Streamlined user flow from input to result",
        "Clean component structure & maintainable code",
        "Built for speed and clarity"
      ],
      stack: ["Full-Stack", "Interactive UI", "Architecture", "Responsive"],
      cta: "Build Something Like This"
    },
    p3: {
      tag: "DIGITAL REPUTATION • 03",
      title: "Business Presence 03",
      summary: "A focused digital identity crafted to build credibility and position a business as a reliable choice.",
      challengeLabel: "The Challenge",
      challenge: "Strong real-world service quality wasn't reflected online, making it harder to stand out from competitors.",
      solutionLabel: "What I Built",
      solution: "A cohesive brand narrative, structured proof points, and frictionless contact paths.",
      highlightsLabel: "Key Highlights",
      highlights: [
        "Credibility-focused storytelling & layout",
        "Bilingual-ready structure (EN / FR)",
        "Direct conversion paths for clients"
      ],
      stack: ["Web Design", "Brand Positioning", "Front-End", "EN / FR"],
      cta: "Upgrade Your Presence"
    }
  },
  fr: {
    p1: {
      tag: "WEB & UI • 01",
      title: "Marque & Expérience 01",
      summary: "Conçu pour transformer les visiteurs en clients convaincus grâce à une structure claire et des animations fluides.",
      challengeLabel: "Le Défi",
      challenge: "Une présence en ligne datée ne reflétait pas la vraie qualité de l'activité et freinait la prise de contact.",
      solutionLabel: "Ce Que J'ai Réalisé",
      solution: "Une expérience web rapide, moderne et contrastée avec des parcours fluides et des appels à l'action clairs.",
      highlightsLabel: "Points Clés",
      highlights: [
        "Message principal clair dès les premières secondes",
        "Animations fluides sans surcharge visuelle",
        "Expérience adaptée mobile et desktop"
      ],
      stack: ["Full-Stack Web", "Design UI/UX", "Animations", "Performance"],
      cta: "Lancer un Projet Similaire"
    },
    p2: {
      tag: "FULL-STACK & TECH • 02",
      title: "Plateforme Interactive 02",
      summary: "Un produit numérique interactif alliant interface intuitive et logique technique structurée.",
      challengeLabel: "Le Défi",
      challenge: "Des étapes multiples et des informations techniques rendaient l'utilisation lente et peu lisible.",
      solutionLabel: "Ce Que J'ai Réalisé",
      solution: "Une application web claire avec retours visuels immédiats et organisation pensée pour l'utilisateur.",
      highlightsLabel: "Points Clés",
      highlights: [
        "Parcours simplifié de bout en bout",
        "Code propre et évolutif",
        "Rapidité et lisibilité au premier plan"
      ],
      stack: ["Full-Stack", "UI Interactive", "Architecture", "Responsive"],
      cta: "Créer un Produit Similaire"
    },
    p3: {
      tag: "RÉPUTATION DIGITALE • 03",
      title: "Présence Business 03",
      summary: "Une identité numérique pensée pour renforcer la crédibilité et démarquer l'entreprise sur son marché.",
      challengeLabel: "Le Défi",
      challenge: "Le savoir-faire terrain n'était pas assez visible en ligne face à la concurrence.",
      solutionLabel: "Ce Que J'ai Réalisé",
      solution: "Une mise en valeur structurée, des repères rassurants et un contact direct sans friction.",
      highlightsLabel: "Points Clés",
      highlights: [
        "Mise en avant de la crédibilité et des preuves",
        "Structure prête pour le bilingue (EN / FR)",
        "Accès direct au contact et aux demandes"
      ],
      stack: ["Web Design", "Positionnement", "Front-End", "EN / FR"],
      cta: "Booster Votre Présence"
    }
  }
};

// Language Toggle Logic
const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.getAttribute('data-lang');

    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[currentLang][key]) {
        el.placeholder = translations[currentLang][key];
      }
    });

    if (typeof updateSpotlight === 'function') {
      updateSpotlight(activeLangIndex, false);
    }
    if (typeof renderGrowthPreview === 'function') {
      renderGrowthPreview(activeGrowthChannel);
    }
    if (typeof buildCityControls === 'function' && typeof renderCityInspector === 'function') {
      buildCityControls();
      renderCityInspector(activeCityIndex, isDeepZoomed);
    }
  });
});

// Chat Assistant Logic
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const promptChips = document.querySelectorAll('.prompt-chip');

function appendMessage(text, sender) {
  if (!chatMessages) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = `msg ${sender === 'user' ? 'user-msg' : 'bot-msg'}`;

  if (sender === 'bot') {
    msgDiv.innerHTML = `
      <div class="msg-avatar">AD<span>.</span></div>
      <div class="msg-bubble">${text}</div>
    `;
  } else {
    msgDiv.innerHTML = `<div class="msg-bubble">${text}</div>`;
  }

  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(queryText, presetKey = null) {
  const answers = aiAnswers[currentLang];
  if (presetKey && answers[presetKey]) return answers[presetKey];

  const q = queryText.toLowerCase();
  if (q.includes('skill') || q.includes('compétence') || q.includes('do') || q.includes('tech') || q.includes('stack')) return answers.skills;
  if (q.includes('project') || q.includes('projet') || q.includes('work') || q.includes('portfolio')) return answers.projects;
  if (q.includes('availab') || q.includes('hire') || q.includes('disponib') || q.includes('job') || q.includes('freelance')) return answers.available;
  if (q.includes('contact') || q.includes('email') || q.includes('mail') || q.includes('reach')) return answers.contact;

  return answers.fallback;
}

function handleConversation(questionText, presetKey = null) {
  appendMessage(questionText, 'user');

  if (!chatMessages) return;
  const typingDiv = document.createElement('div');
  typingDiv.className = 'msg bot-msg';
  typingDiv.innerHTML = `
    <div class="msg-avatar">AD<span>.</span></div>
    <div class="msg-bubble">...</div>
  `;
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    typingDiv.remove();
    const reply = getBotReply(questionText, presetKey);
    appendMessage(reply, 'bot');
  }, 550);
}

promptChips.forEach(chip => {
  chip.addEventListener('click', () => {
    const key = chip.getAttribute('data-q');
    const text = chip.textContent.replace(/^[^\w\sÀ-ÿ]+\s*/, '');
    handleConversation(text, key);
  });
});

if (chatForm && userInput) {
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;
    userInput.value = '';
    handleConversation(text);
  });
}

// Project Category Filter Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');

    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    projectCards.forEach((card) => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.classList.remove('is-hidden');
        card.classList.add('is-visible');
      } else {
        card.classList.add('is-hidden');
      }
    });
  });
});

// Sliding Project Case Drawer Logic
const projectDrawer = document.getElementById('projectDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const drawerCta = document.getElementById('drawerCta');

function openProjectDrawer(projectKey) {
  const data = projectDetails[currentLang]?.[projectKey];
  if (!data || !projectDrawer || !drawerBackdrop) return;

  document.getElementById('drawerTag').textContent = data.tag;
  document.getElementById('drawerTitle').textContent = data.title;
  document.getElementById('drawerSummary').textContent = data.summary;
  document.getElementById('drawerChallengeLabel').textContent = data.challengeLabel;
  document.getElementById('drawerChallenge').textContent = data.challenge;
  document.getElementById('drawerSolutionLabel').textContent = data.solutionLabel;
  document.getElementById('drawerSolution').textContent = data.solution;
  document.getElementById('drawerHighlightsLabel').textContent = data.highlightsLabel;
  if (drawerCta) drawerCta.textContent = data.cta;

  const listEl = document.getElementById('drawerHighlights');
  if (listEl) {
    listEl.innerHTML = data.highlights.map((item) => `<li>${item}</li>`).join('');
  }

  const stackEl = document.getElementById('drawerStack');
  if (stackEl) {
    stackEl.innerHTML = data.stack.map((tech) => `<span class="skill-chip">${tech}</span>`).join('');
  }

  projectDrawer.classList.add('open');
  drawerBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectDrawer() {
  if (!projectDrawer || !drawerBackdrop) return;
  projectDrawer.classList.remove('open');
  drawerBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.open-drawer-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openProjectDrawer(btn.getAttribute('data-project'));
  });
});

projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    openProjectDrawer(card.getAttribute('data-project'));
  });
});

if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeProjectDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeProjectDrawer);
if (drawerCta) drawerCta.addEventListener('click', closeProjectDrawer);

// Scroll Reveal Animation Logic
const revealElements = document.querySelectorAll('.reveal-on-scroll');

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  }
);

revealElements.forEach((el) => scrollObserver.observe(el));

// Interactive 3D Tilt on Hero Core Card
const tiltCard = document.getElementById('tiltCard');

if (tiltCard) {
  tiltCard.addEventListener('mousemove', (e) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    tiltCard.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tiltCard.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  });
}

// Interactive AD Background Tilt & Shift
const adBgMark = document.getElementById('adBgMark');

if (adBgMark) {
  window.addEventListener('mousemove', (e) => {
    const normX = (e.clientX / window.innerWidth) - 0.5;
    const normY = (e.clientY / window.innerHeight) - 0.5;

    const moveX = normX * 28;
    const moveY = normY * 22;
    const rotY = normX * 14;
    const rotX = -normY * 12;

    adBgMark.style.transform = `perspective(1000px) translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });

  window.addEventListener('mouseleave', () => {
    adBgMark.style.transform = 'perspective(1000px) translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg)';
  });
}

// ================= DEV KNOWLEDGE WORLD (16 TECHS + GLOBE + FLASH) =================
const devLanguages = [
  {
    id: 'html',
    name: 'HTML5',
    short: 'HTML',
    color: '#ff5500',
    roleEn: 'Semantic markup, accessibility & clean web structure',
    roleFr: 'Structure sémantique, accessibilité & architecture web',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#ff5500" stroke-width="2"><path d="M4 3h16l-1.5 16L12 21l-6.5-2L4 3z"/><path d="M8 8h8l-.4 4H8.4l.3 3.5L12 16.5l3.3-1 .2-2"/></svg>`
  },
  {
    id: 'css',
    name: 'CSS3',
    short: 'CSS',
    color: '#00d2ff',
    roleEn: 'Modern layouts, gradients, responsive UI & animations',
    roleFr: 'Layouts modernes, dégradés, responsive & animations',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2"><path d="M4 3h16l-1.5 16L12 21l-6.5-2L4 3z"/><path d="M8.5 8h7l-.5 3.5h-6l.3 3 2.7 1 2.7-1 .2-2"/></svg>`
  },
  {
    id: 'js',
    name: 'JavaScript',
    short: 'JS',
    color: '#ffb800',
    roleEn: 'Interactive interfaces, state logic & dynamic web apps',
    roleFr: 'Interfaces interactives, logique & applications dynamiques',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffb800" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M10 11v5a2 2 0 0 1-4 0"/><path d="M14 15.5c.5.7 1.2 1 2.1 1 1.1 0 1.9-.6 1.9-1.5 0-2-4-1.2-4-3.5 0-.9.8-1.5 1.9-1.5.8 0 1.5.3 1.9.9"/></svg>`
  },
  {
    id: 'python',
    name: 'Python',
    short: 'PY',
    color: '#38bdf8',
    roleEn: 'Automation, backend logic, data & AI workflows',
    roleFr: 'Automatisation, back-end, données & workflows IA',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><path d="M12 3c-3.5 0-4 1.6-4 3.5V9h6v1H6.5C4.5 10 3 11.4 3 14s1.5 4 3.5 4H8v-2.5C8 14 9.2 13 11 13h4c1.7 0 3-1.2 3-2.8V6.5C18 4.4 16 3 12 3z"/><circle cx="9.5" cy="5.8" r="1" fill="#38bdf8"/><path d="M12 21c3.5 0 4-1.6 4-3.5V15h-6v-1h7.5c2 0 3.5-1.4 3.5-4s-1.5-4-3.5-4H16v2.5c0 1.5-1.2 2.5-3 2.5H9c-1.7 0-3 1.2-3 2.8v3.7C6 19.6 8 21 12 21z"/><circle cx="14.5" cy="18.2" r="1" fill="#38bdf8"/></svg>`
  },
  {
    id: 'php',
    name: 'PHP',
    short: 'PHP',
    color: '#a78bfa',
    roleEn: 'Server-side web apps, CMS integrations & dynamic backends',
    roleFr: 'Applications web côté serveur, CMS & back-ends dynamiques',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M7.5 10.5h2c.8 0 1.3.5 1.3 1.2s-.5 1.2-1.3 1.2h-2v2.1m0-4.5v4.5m6.2-4.5h2c.8 0 1.3.5 1.3 1.2s-.5 1.2-1.3 1.2h-2v2.1m0-4.5v4.5"/></svg>`
  },
  {
    id: 'cpp',
    name: 'C++',
    short: 'C++',
    color: '#60a5fa',
    roleEn: 'High-performance logic, algorithms, systems & embedded/3D math',
    roleFr: 'Performance, algorithmes, logique système & calcul avancé',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><path d="M11 8.5A4.5 4.5 0 1 0 11 15.5"/><path d="M15 10v4m-2-2h4"/><path d="M20 10v4m-2-2h4"/></svg>`
  },
  {
    id: 'ts',
    name: 'TypeScript',
    short: 'TS',
    color: '#3b82f6',
    roleEn: 'Typed code, scalable architecture & fewer runtime bugs',
    roleFr: 'Code typé, architecture fiable & maintenance facilitée',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 11h6"/><path d="M10 11v6"/><path d="M15 16.2c.4.5 1 .8 1.8.8 1 0 1.7-.5 1.7-1.3 0-1.8-3.5-1-3.5-3 0-.8.7-1.3 1.6-1.3.7 0 1.3.3 1.6.8"/></svg>`
  },
  {
    id: 'react',
    name: 'React / UI',
    short: 'REACT',
    color: '#22d3ee',
    roleEn: 'Component-driven front-ends & smooth visual systems',
    roleFr: 'Interfaces à composants & systèmes visuels fluides',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.8"><circle cx="12" cy="12" r="2.2"/><ellipse cx="12" cy="12" rx="9" ry="3.8"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)"/></svg>`
  },
  {
    id: 'flutter',
    name: 'Flutter',
    short: 'FLUT',
    color: '#38bdf8',
    roleEn: 'Cross-platform mobile apps with crisp native-feeling UI',
    roleFr: 'Applications mobiles multiplateformes & UI fluide',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><path d="M14.5 3L5 12.5l3.5 3.5L21.5 3h-7z"/><path d="M11 14l3.5 3.5L21.5 11h-7L11 14z"/><path d="M11 14l3.5 7h7l-7-7h-3.5z"/></svg>`
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    short: 'TW',
    color: '#2dd4bf',
    roleEn: 'Rapid utility-first styling & consistent design tokens',
    roleFr: 'Styling rapide utility-first & design system cohérent',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="2"><path d="M12 7.5c-2.2 0-3.6 1.1-4.2 3.3.8-1.1 1.8-1.5 3-1.2.7.2 1.2.7 1.7 1.2.9.9 1.9 2 4.1 2 2.2 0 3.6-1.1 4.2-3.3-.8 1.1-1.8 1.5-3 1.2-.7-.2-1.2-.7-1.7-1.2-.9-.9-1.9-2-4.1-2z"/><path d="M7.8 13.2c-2.2 0-3.6 1.1-4.2 3.3.8-1.1 1.8-1.5 3-1.2.7.2 1.2.7 1.7 1.2.9.9 1.9 2 4.1 2 2.2 0 3.6-1.1 4.2-3.3-.8 1.1-1.8 1.5-3 1.2-.7-.2-1.2-.7-1.7-1.2-.9-.9-1.9-2-4.1-2z"/></svg>`
  },
  {
    id: 'docker',
    name: 'Docker',
    short: 'DKR',
    color: '#0ea5e9',
    roleEn: 'Containerized environments, reproducible builds & deployment',
    roleFr: 'Environnements conteneurisés, builds fiables & déploiement',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2"><path d="M3 13h15c1.5 0 2.5-.8 3-2-1-.3-2-.2-2.8.4-.2-1.2-1-2-2.2-2.2v2.8H6V8.5h3V6h3v2.5h3V11H3v2z"/><path d="M4 15.5c2 2.5 5.5 3.5 9.5 3.5 4.2 0 7-1.8 8-4.5"/></svg>`
  },
  {
    id: 'node',
    name: 'Node.js',
    short: 'NODE',
    color: '#4ade80',
    roleEn: 'Scalable JavaScript backends, APIs & real-time services',
    roleFr: 'Back-ends JavaScript évolutifs, APIs & services temps réel',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><path d="M12 2.5l8 4.6v9.8l-8 4.6-8-4.6V7.1l8-4.6z"/><path d="M9.5 14.5v-5l5 5v-5"/></svg>`
  },
  {
    id: 'sql',
    name: 'SQL & APIs',
    short: 'DB',
    color: '#fb923c',
    roleEn: 'Relational data modeling, REST/APIs & server flows',
    roleFr: 'Modélisation de données, APIs & logique serveur',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fb923c" stroke-width="2"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>`
  },
  {
    id: 'firebase',
    name: 'Firebase',
    short: 'FB',
    color: '#fbbf24',
    roleEn: 'Auth, real-time databases, hosting & rapid app backends',
    roleFr: 'Authentification, base temps réel, hébergement & back-end rapide',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><path d="M5 18L7.5 4.5 12 11l4.5-4.5L19 18l-7 3.5L5 18z"/></svg>`
  },
  {
    id: 'git',
    name: 'Git & Tooling',
    short: 'GIT',
    color: '#f43f5e',
    roleEn: 'Version control, branching workflows & clean collaboration',
    roleFr: 'Gestion de versions, branches propres & collaboration',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2"><circle cx="12" cy="5" r="2.5"/><circle cx="12" cy="19" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M12 7.5v9"/><path d="M12 12h3.5"/></svg>`
  },
  {
    id: 'linux',
    name: 'Linux & CLI',
    short: 'CLI',
    color: '#ff5500',
    roleEn: 'Terminal workflows, scripting, servers & dev productivity',
    roleFr: 'Ligne de commande, scripts, serveurs & productivité dev',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#ff5500" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 9l3 3-3 3"/><path d="M12 15h5"/></svg>`
  }
];

const globeOrbit = document.getElementById('globeOrbit');
const worldStage = document.getElementById('worldStage');
const worldFlash = document.getElementById('worldFlash');
const langQuickStrip = document.getElementById('langQuickStrip');
const activeLangIcon = document.getElementById('activeLangIcon');
const activeLangName = document.getElementById('activeLangName');
const activeLangRole = document.getElementById('activeLangRole');

let globeAngle = 0;
let activeLangIndex = 0;
let isDraggingGlobe = false;
let dragStartX = 0;
let startGlobeAngle = 0;

function triggerSmallFlash() {
  if (!worldFlash) return;
  worldFlash.classList.remove('is-flashing');
  void worldFlash.offsetWidth;
  worldFlash.classList.add('is-flashing');
}

function renderGlobeNodes() {
  if (!globeOrbit || !langQuickStrip) return;
  const total = devLanguages.length;
  const radius = globeOrbit.clientWidth ? globeOrbit.clientWidth * 0.42 : 145;

  globeOrbit.innerHTML = '';
  langQuickStrip.innerHTML = '';

  devLanguages.forEach((lang, idx) => {
    const angleDeg = (360 / total) * idx;
    const rad = (angleDeg * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    const nodeBtn = document.createElement('button');
    nodeBtn.type = 'button';
    nodeBtn.className = `lang-node ${idx === activeLangIndex ? 'is-active' : ''}`;
    nodeBtn.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    nodeBtn.innerHTML = `${lang.svg}<span>${lang.short}</span>`;
    nodeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      focusLanguage(idx);
    });
    globeOrbit.appendChild(nodeBtn);

    const pillBtn = document.createElement('button');
    pillBtn.type = 'button';
    pillBtn.className = `lang-pill-btn ${idx === activeLangIndex ? 'is-active' : ''}`;
    pillBtn.textContent = lang.name;
    pillBtn.addEventListener('click', () => focusLanguage(idx));
    langQuickStrip.appendChild(pillBtn);
  });
}

function updateSpotlight(idx, withFlash = true) {
  const lang = devLanguages[idx];
  if (!lang) return;

  activeLangIndex = idx;
  if (activeLangIcon) activeLangIcon.innerHTML = lang.svg;
  if (activeLangName) activeLangName.textContent = lang.name;
  if (activeLangRole) {
    activeLangRole.textContent = currentLang === 'fr' ? lang.roleFr : lang.roleEn;
  }

  document.querySelectorAll('.lang-node').forEach((n, i) => {
    n.classList.toggle('is-active', i === idx);
  });

  document.querySelectorAll('.lang-pill-btn').forEach((p, i) => {
    p.classList.toggle('is-active', i === idx);
  });

  if (withFlash) triggerSmallFlash();
}

function setGlobeRotation(newAngle) {
  globeAngle = newAngle;
  if (globeOrbit) {
    globeOrbit.style.transform = `rotate(${globeAngle}deg)`;
  }

  const total = devLanguages.length;
  const step = 360 / total;
  const normalized = (((-globeAngle) % 360) + 360) % 360;
  const closestIdx = Math.round(normalized / step) % total;

  if (closestIdx !== activeLangIndex) {
    updateSpotlight(closestIdx, true);
  }
}

function focusLanguage(idx) {
  const total = devLanguages.length;
  const step = 360 / total;
  setGlobeRotation(-idx * step);
}

if (globeOrbit) {
  renderGlobeNodes();
  updateSpotlight(0, false);

  window.addEventListener(
    'scroll',
    () => {
      setGlobeRotation(window.scrollY * 0.14);
    },
    { passive: true }
  );

  if (worldStage) {
    worldStage.addEventListener('mousedown', (e) => {
      isDraggingGlobe = true;
      dragStartX = e.clientX;
      startGlobeAngle = globeAngle;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDraggingGlobe) return;
      const deltaX = e.clientX - dragStartX;
      setGlobeRotation(startGlobeAngle + deltaX * 0.55);
    });

    window.addEventListener('mouseup', () => {
      isDraggingGlobe = false;
    });

    worldStage.addEventListener(
      'touchstart',
      (e) => {
        isDraggingGlobe = true;
        dragStartX = e.touches[0].clientX;
        startGlobeAngle = globeAngle;
      },
      { passive: true }
    );

    worldStage.addEventListener(
      'touchmove',
      (e) => {
        if (!isDraggingGlobe) return;
        const deltaX = e.touches[0].clientX - dragStartX;
        setGlobeRotation(startGlobeAngle + deltaX * 0.55);
      },
      { passive: true }
    );

    worldStage.addEventListener('touchend', () => {
      isDraggingGlobe = false;
    });
  }

  window.addEventListener('resize', () => {
    renderGlobeNodes();
    setGlobeRotation(globeAngle);
  });
}

// ================= INTERACTIVE LAB / LIVE DEMOS =================
(function initInteractiveLab() {
  const canvas = document.getElementById('lab3dCanvas');
  const modeBtn = document.getElementById('lab3dModeBtn');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let rotX = 0.4;
    let rotY = 0.6;
    let spinSpeed = 0.012;
    let isBoosted = false;

    const vertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1,  1], [1, -1,  1], [1, 1,  1], [-1, 1,  1],
      [0, -1.55, 0], [0, 1.55, 0]
    ];

    const edges = [
      [0,1],[1,2],[2,3],[3,0],
      [4,5],[5,6],[6,7],[7,4],
      [0,4],[1,5],[2,6],[3,7],
      [8,0],[8,1],[8,4],[8,5],
      [9,2],[9,3],[9,6],[9,7]
    ];

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, rect.width * dpr);
      canvas.height = Math.max(1, rect.height * dpr);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      rotY += nx * 0.08;
      rotX += ny * 0.08;
    });

    if (modeBtn) {
      modeBtn.addEventListener('click', () => {
        isBoosted = !isBoosted;
        spinSpeed = isBoosted ? 0.045 : 0.012;
      });
    }

    function draw3D() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      rotY += spinSpeed;
      rotX += spinSpeed * 0.45;

      const scale = Math.min(w, h) * 0.24;
      const projected = vertices.map(([x, y, z]) => {
        const cy = Math.cos(rotY), sy = Math.sin(rotY);
        const x1 = x * cy - z * sy;
        const z1 = x * sy + z * cy;

        const cx = Math.cos(rotX), sx = Math.sin(rotX);
        const y2 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;

        const fov = 3.6 / (3.6 + z2);
        return [w / 2 + x1 * scale * fov, h / 2 + y2 * scale * fov];
      });

      ctx.strokeStyle = isBoosted ? '#ff884d' : '#ff5500';
      ctx.lineWidth = 1.6;
      edges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(projected[a][0], projected[a][1]);
        ctx.lineTo(projected[b][0], projected[b][1]);
        ctx.stroke();
      });

      ctx.fillStyle = '#ffffff';
      projected.forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(px, py, 2.6, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw3D);
    }
    draw3D();
  }

  const magZone = document.getElementById('labMagneticZone');
  const magBtn = document.getElementById('magneticDemoBtn');
  const clickCounter = document.getElementById('labClickCounter');
  const uiStatus = document.getElementById('labUiStatus');
  let clicks = 0;

  if (magZone && magBtn) {
    magZone.addEventListener('mousemove', (e) => {
      const rect = magZone.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.28;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.28;
      magBtn.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      if (uiStatus) uiStatus.textContent = 'TRACKING';
    });

    magZone.addEventListener('mouseleave', () => {
      magBtn.style.transform = 'translate3d(0, 0, 0)';
      if (uiStatus) uiStatus.textContent = 'IDLE';
    });

    magBtn.addEventListener('click', () => {
      clicks += 1;
      if (clickCounter) {
        clickCounter.textContent = `${clicks} ${clicks === 1 ? 'trigger' : 'triggers'}`;
      }
      if (uiStatus) uiStatus.textContent = 'FIRED ⚡';
      magBtn.classList.add('is-pulsing');
      setTimeout(() => magBtn.classList.remove('is-pulsing'), 260);
    });
  }

  const runFlowBtn = document.getElementById('labRunFlowBtn');
  const terminal = document.getElementById('flowTerminal');
  const nodes = [
    document.getElementById('flowNode1'),
    document.getElementById('flowNode2'),
    document.getElementById('flowNode3')
  ];

  if (runFlowBtn && terminal && nodes.every(Boolean)) {
    let running = false;
    runFlowBtn.addEventListener('click', () => {
      if (running) return;
      running = true;
      nodes.forEach((n) => n.classList.remove('active'));

      nodes[0].classList.add('active');
      terminal.textContent = '1/3 Payload captured: { city: "Casablanca", slot: "11:00" }';

      setTimeout(() => {
        nodes[1].classList.add('active');
        terminal.textContent = '2/3 POST → Apps Script Webhook (200 OK)';
      }, 650);

      setTimeout(() => {
        nodes[2].classList.add('active');
        terminal.textContent = '3/3 Synced to Google Calendar + .ics ready ✓';
        running = false;
      }, 1350);
    });
  }
})();

// ================= GOOGLE BUSINESS & ADS CHANNEL PREVIEW =================
const growthChannelData = {
  gbp: {
    en: {
      kicker: "LOCAL DISCOVERY & CREDIBILITY",
      heading: "Google Business Profile Optimization",
      copy: "When someone searches for your service nearby, a complete, active profile paired with a fast website builds immediate trust before they even click.",
      s1Val: "Maps + Search",
      s1Lbl: "Local Visibility",
      s2Val: "Direct Actions",
      s2Lbl: "Call • Site • Book"
    },
    fr: {
      kicker: "VISIBILITÉ LOCALE & CRÉDIBILITÉ",
      heading: "Optimisation Google Business Profile",
      copy: "Lorsqu'un client cherche votre activité à proximité, une fiche complète et soignée reliée à un site rapide inspire confiance dès la première seconde.",
      s1Val: "Maps + Recherche",
      s1Lbl: "Présence Locale",
      s2Val: "Accès Direct",
      s2Lbl: "Appel • Site • RDV"
    }
  },
  ads: {
    en: {
      kicker: "PAID ACQUISITION & LANDING ALIGNMENT",
      heading: "Google Ads & Conversion Funnels",
      copy: "Running ads to a slow or confusing page burns budget. Pairing targeted search ads with clear messaging and easy booking turns clicks into conversations.",
      s1Val: "Targeted Intent",
      s1Lbl: "Search & Geo Focus",
      s2Val: "Clean Funnel",
      s2Lbl: "Ad → Page → Lead"
    },
    fr: {
      kicker: "ACQUISITION PAYANTE & CONVERSION",
      heading: "Campagnes Google Ads & Parcours Clairs",
      copy: "Envoyer du trafic payant vers une page lente ou floue fait perdre du budget. Allier annonces ciblées, clarté et prise de contact simple transforme les clics en clients.",
      s1Val: "Intention Ciblée",
      s1Lbl: "Mots-Clés & Zones",
      s2Val: "Parcours Fluide",
      s2Lbl: "Pub → Page → Lead"
    }
  }
};

let activeGrowthChannel = 'gbp';

function renderGrowthPreview(channel = activeGrowthChannel) {
  activeGrowthChannel = channel;
  const info = growthChannelData[channel]?.[currentLang];
  if (!info) return;

  const kickerEl = document.getElementById('growthPreviewKicker');
  const headingEl = document.getElementById('growthPreviewHeading');
  const copyEl = document.getElementById('growthPreviewCopy');
  const s1ValEl = document.getElementById('growthStat1Val');
  const s1LblEl = document.getElementById('growthStat1Lbl');
  const s2ValEl = document.getElementById('growthStat2Val');
  const s2LblEl = document.getElementById('growthStat2Lbl');

  if (kickerEl) kickerEl.textContent = info.kicker;
  if (headingEl) headingEl.textContent = info.heading;
  if (copyEl) copyEl.textContent = info.copy;
  if (s1ValEl) s1ValEl.textContent = info.s1Val;
  if (s1LblEl) s1LblEl.textContent = info.s1Lbl;
  if (s2ValEl) s2ValEl.textContent = info.s2Val;
  if (s2LblEl) s2LblEl.textContent = info.s2Lbl;

  document.querySelectorAll('.growth-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.getAttribute('data-channel') === channel);
  });
}

document.querySelectorAll('.growth-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    renderGrowthPreview(tab.getAttribute('data-channel'));
  });
});

renderGrowthPreview('gbp');

// ================= ANIMATION BARRES GRAPHIQUE JOUR 1 VS JOUR 30 =================
const momentumChart = document.getElementById('momentumChart');

if (momentumChart) {
  const chartRows = momentumChart.querySelectorAll('.chart-metric-row');

  const chartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          chartRows.forEach((row, index) => {
            const d1Val = row.getAttribute('data-d1') || '20';
            const d30Val = row.getAttribute('data-d30') || '85';
            const bar1 = row.querySelector('.bar-day1');
            const bar30 = row.querySelector('.bar-day30');

            setTimeout(() => {
              if (bar1) bar1.style.width = `${d1Val}%`;
              if (bar30) bar30.style.width = `${d30Val}%`;
            }, index * 140);
          });

          chartObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  chartObserver.observe(momentumChart);
}

// ================= REGIONS & CITIES DEEP-DIVE MAP =================
const moroccoCities = [
  {
    id: 'casablanca',
    nameEn: 'Casablanca',
    nameFr: 'Casablanca',
    regionEn: 'CASABLANCA-SETTAT',
    regionFr: 'CASABLANCA-SETTAT',
    coords: '33.5731° N, 7.5898° W',
    xPercent: 34,
    yPercent: 48,
    focusEn: 'Web Apps, UI & Brand Authority',
    focusFr: 'Web Apps, UI & Crédibilité Marque',
    modeEn: 'On-Site, Hybrid & Remote',
    modeFr: 'Présentiel, Hybride & À distance',
    taglineEn: 'Fast-moving businesses, digital storefronts & high-conversion interfaces.',
    taglineFr: 'Entreprises dynamiques, vitrines digitales & interfaces orientées conversion.',
    insideEn: 'In Casablanca, businesses compete for attention every second. I help companies stand out with fast full-stack builds, sharp visual identity, and clear conversion journeys.',
    insideFr: 'À Casablanca, l’attention est très disputée. J’aide les entreprises à se démarquer avec des applications rapides, une identité visuelle forte et des parcours clairs.'
  },
  {
    id: 'rabat-sale-kenitra',
    nameEn: 'Rabat • Salé • Kénitra',
    nameFr: 'Rabat • Salé • Kénitra',
    regionEn: 'RABAT-SALÉ-KÉNITRA',
    regionFr: 'RABAT-SALÉ-KÉNITRA',
    coords: '34.0209° N, 6.8416° W',
    xPercent: 41,
    yPercent: 36,
    focusEn: 'Institutional Grade UX & Full-Stack',
    focusFr: 'UX Exigeante & Full-Stack',
    modeEn: 'Corridor Coverage (Rabat / Salé / Kénitra)',
    modeFr: 'Axe Rabat • Salé • Kénitra',
    taglineEn: 'Structured digital platforms, clean engineering & trustworthy presence across the corridor.',
    taglineFr: 'Plateformes structurées, ingénierie soignée et présence fiable sur tout l’axe.',
    insideEn: 'Across Rabat, Salé, and Kénitra, organizations and growing companies value clarity, reliability, and polish. I build clean web systems and modern interfaces that inspire confidence.',
    insideFr: 'Sur l’axe Rabat, Salé et Kénitra, les structures et entreprises recherchent rigueur et clarté. Je conçois des solutions web fiables et modernes qui renforcent la crédibilité.'
  },
  {
    id: 'tanger',
    nameEn: 'Tanger',
    nameFr: 'Tanger',
    regionEn: 'TANGER-TÉTOUAN-AL HOCEÏMA',
    regionFr: 'TANGER-TÉTOUAN-AL HOCEÏMA',
    coords: '35.7595° N, 5.8340° W',
    xPercent: 54,
    yPercent: 15,
    focusEn: 'Bilingual EN/FR Platforms & Trade/Tech',
    focusFr: 'Plateformes Bilingues EN/FR & Business',
    modeEn: 'Remote & Scheduled Visits',
    modeFr: 'À distance & Déplacements planifiés',
    taglineEn: 'International-ready web experiences connecting local ambition with global reach.',
    taglineFr: 'Expériences web bilingues pensées pour l’international et la croissance.',
    insideEn: 'In Tanger, international connections and fast-growing operations benefit from bilingual (EN/FR) web clarity, speed, and modern product presentation.',
    insideFr: 'À Tanger, l’ouverture internationale et la rapidité d’exécution demandent des sites bilingues (EN/FR), fluides et bien structurés.'
  },
  {
    id: 'marrakech',
    nameEn: 'Marrakech',
    nameFr: 'Marrakech',
    regionEn: 'MARRAKECH-SAFI',
    regionFr: 'MARRAKECH-SAFI',
    coords: '31.6295° N, 7.9811° W',
    xPercent: 31,
    yPercent: 72,
    focusEn: 'Visual Storytelling, Booking & Brand UI',
    focusFr: 'Identité Visuelle, Parcours & Conversion',
    modeEn: 'Remote & Project Visits',
    modeFr: 'À distance & Missions ciblées',
    taglineEn: 'Distinctive visual craft, smooth mobile flows & memorable customer touchpoints.',
    taglineFr: 'Esthétique marquante, fluidité mobile et parcours client mémorable.',
    insideEn: 'In Marrakech, visual first impressions and seamless mobile experiences turn visitors and international guests into loyal clients.',
    insideFr: 'À Marrakech, l’impact visuel et la fluidité sur mobile transforment l’intérêt des visiteurs en demandes concrètes.'
  },
  {
    id: 'meknes',
    nameEn: 'Meknès',
    nameFr: 'Meknès',
    regionEn: 'FÈS-MEKNÈS',
    regionFr: 'FÈS-MEKNÈS',
    coords: '33.8935° N, 5.5473° W',
    xPercent: 53,
    yPercent: 39,
    focusEn: 'Digital Reputation & Practical Web Tools',
    focusFr: 'Réputation Digitale & Outils Web',
    modeEn: 'Remote & Regional Visits',
    modeFr: 'À distance & Déplacements régionaux',
    taglineEn: 'Turning local strengths and heritage businesses into clear, accessible digital brands.',
    taglineFr: 'Valoriser les savoir-faire locaux avec une présence digitale claire et efficace.',
    insideEn: 'In Meknès, helping established businesses modernize their online image and simplify client inquiries creates immediate local advantage.',
    insideFr: 'À Meknès, moderniser l’image en ligne et simplifier la prise de contact apporte un avantage concret et rapide.'
  },
  {
    id: 'fes',
    nameEn: 'Fès',
    nameFr: 'Fès',
    regionEn: 'FÈS-MEKNÈS',
    regionFr: 'FÈS-MEKNÈS',
    coords: '34.0181° N, 5.0078° W',
    xPercent: 60,
    yPercent: 41,
    focusEn: 'Full-Stack Web, Identity & Growth Systems',
    focusFr: 'Développement Full-Stack & Identité',
    modeEn: 'Remote & Regional Visits',
    modeFr: 'À distance & Déplacements régionaux',
    taglineEn: 'Craftsmanship meets modern code to build lasting online credibility.',
    taglineFr: 'Savoir-faire et code moderne pour bâtir une crédibilité durable.',
    insideEn: 'In Fès, combining strong identity with fast, dependable web engineering helps businesses reach wider audiences with confidence.',
    insideFr: 'À Fès, allier identité forte et ingénierie web fiable permet aux entreprises de toucher plus de clients en confiance.'
  }
];

const citySelectorBar = document.getElementById('citySelectorBar');
const mapPinsLayer = document.getElementById('mapPinsLayer');
const mapVisualBox = document.getElementById('mapVisualBox');
const cityDeepPanel = document.getElementById('cityDeepPanel');
const deepZoomBtn = document.getElementById('deepZoomBtn');
const hudCoords = document.getElementById('hudCoords');
const hudZoom = document.getElementById('hudZoom');

let activeCityIndex = 0;
let isDeepZoomed = false;

function applyMapZoomState() {
  const city = moroccoCities[activeCityIndex];
  if (!city || !mapVisualBox) return;

  mapVisualBox.style.setProperty('--zoom-x', `${city.xPercent}%`);
  mapVisualBox.style.setProperty('--zoom-y', `${city.yPercent}%`);
  mapVisualBox.style.setProperty('--map-scale', isDeepZoomed ? '1.65' : '1');

  if (cityDeepPanel) {
    cityDeepPanel.classList.toggle('is-zoomed', isDeepZoomed);
  }
  if (deepZoomBtn) {
    deepZoomBtn.classList.toggle('active', isDeepZoomed);
    if (currentLang === 'fr') {
      deepZoomBtn.textContent = isDeepZoomed ? 'Vue Globale ⤡' : 'Zoomer Dans la Ville ⤢';
    } else {
      deepZoomBtn.textContent = isDeepZoomed ? 'Reset Zoom ⤡' : 'Go Deep Inside ⤢';
    }
  }
  if (hudZoom) {
    hudZoom.textContent = isDeepZoomed ? 'DEPTH: 1.65x • INSIDE' : 'DEPTH: 1.0x';
  }
}

function renderCityInspector(idx, zoomIn = true) {
  const city = moroccoCities[idx];
  if (!city) return;

  activeCityIndex = idx;
  if (zoomIn) isDeepZoomed = true;

  const isFr = currentLang === 'fr';
  const badgeEl = document.getElementById('deepRegionBadge');
  const nameEl = document.getElementById('deepCityName');
  const tagEl = document.getElementById('deepCityTagline');
  const focusEl = document.getElementById('deepFocus');
  const modeEl = document.getElementById('deepMode');
  const insideEl = document.getElementById('deepInsideText');

  if (badgeEl) badgeEl.textContent = isFr ? city.regionFr : city.regionEn;
  if (nameEl) nameEl.textContent = isFr ? city.nameFr : city.nameEn;
  if (tagEl) tagEl.textContent = isFr ? city.taglineFr : city.taglineEn;
  if (focusEl) focusEl.textContent = isFr ? city.focusFr : city.focusEn;
  if (modeEl) modeEl.textContent = isFr ? city.modeFr : city.modeEn;
  if (insideEl) insideEl.textContent = isFr ? city.insideFr : city.insideEn;
  if (hudCoords) hudCoords.textContent = city.coords;

  document.querySelectorAll('.city-pill').forEach((pill, i) => {
    pill.classList.toggle('active', i === idx);
  });

  document.querySelectorAll('.city-pin').forEach((pin, i) => {
    pin.classList.toggle('is-active', i === idx);
  });

  applyMapZoomState();
}

function buildCityControls() {
  if (!citySelectorBar || !mapPinsLayer) return;
  citySelectorBar.innerHTML = '';
  mapPinsLayer.innerHTML = '';

  moroccoCities.forEach((city, idx) => {
    const label = currentLang === 'fr' ? city.nameFr : city.nameEn;

    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = `city-pill ${idx === activeCityIndex ? 'active' : ''}`;
    pill.textContent = label;
    pill.addEventListener('click', () => renderCityInspector(idx, true));
    citySelectorBar.appendChild(pill);

    const pin = document.createElement('button');
    pin.type = 'button';
    pin.className = `city-pin ${idx === activeCityIndex ? 'is-active' : ''}`;
    pin.style.left = `${city.xPercent}%`;
    pin.style.top = `${city.yPercent}%`;
    pin.textContent = label;
    pin.addEventListener('click', () => renderCityInspector(idx, true));
    mapPinsLayer.appendChild(pin);
  });
}

if (citySelectorBar && mapPinsLayer) {
  buildCityControls();
  renderCityInspector(0, false);

  if (deepZoomBtn) {
    deepZoomBtn.addEventListener('click', () => {
      isDeepZoomed = !isDeepZoomed;
      applyMapZoomState();
    });
  }
}

// ================= RENDEZ-VOUS MODAL + APPLE CALENDAR (.ICS) + APPS SCRIPT =================
const CALENDAR_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycby_HEKa6hUp2nhDka2n5zcP04YPcsimMQtqpvGEQwFE0WyExjpNzwlMU_9ap5T5-s9I/exec';

const bookingModal = document.getElementById('bookingModal');
const bookingBackdrop = document.getElementById('bookingBackdrop');
const closeBookingBtn = document.getElementById('closeBookingBtn');
const deepContactBtn = document.getElementById('deepContactBtn');
const bookingForm = document.getElementById('bookingForm');
const bookingCityTag = document.getElementById('bookingCityTag');
const bookingFeedback = document.getElementById('bookingFeedback');
const bookDateInput = document.getElementById('bookDate');

function formatIcsLocalDate(dateObj) {
  const pad = (n) => String(n).padStart(2, '0');
  return (
    dateObj.getFullYear() +
    pad(dateObj.getMonth() + 1) +
    pad(dateObj.getDate()) +
    'T' +
    pad(dateObj.getHours()) +
    pad(dateObj.getMinutes()) +
    pad(dateObj.getSeconds())
  );
}

function escapeIcsText(str) {
  return String(str || '')
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

function downloadAppleCalendarInvite({ firstName, lastName, email, phone, dateStr, timeStr, notes, city }) {
  const [year, month, day] = dateStr.split('-').map(Number);
  const [hour, minute] = timeStr.split(':').map(Number);

  const startDt = new Date(year, month - 1, day, hour || 11, minute || 0, 0);
  const endDt = new Date(startDt.getTime() + 45 * 60 * 1000);

  const fullName = `${firstName} ${lastName}`.trim();
  const uid = `codebyad-${Date.now()}@codebyad.local`;
  const summary = `RDV CODEBYAD — ${fullName} (${city})`;
  const description = [
    `Prénom / Nom: ${fullName}`,
    `Email: ${email}`,
    `Téléphone: ${phone}`,
    `Ville / Hub: ${city}`,
    notes ? `Notes: ${notes}` : ''
  ]
    .filter(Boolean)
    .join('\n');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CODEBYAD//Rendez-Vous Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatIcsLocalDate(new Date())}`,
    `DTSTART:${formatIcsLocalDate(startDt)}`,
    `DTEND:${formatIcsLocalDate(endDt)}`,
    `SUMMARY:${escapeIcsText(summary)}`,
    `LOCATION:${escapeIcsText(city)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `rendez-vous-codebyad-${(firstName || 'client').toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function openBookingModal() {
  if (!bookingModal || !bookingBackdrop) return;
  const city = moroccoCities[activeCityIndex];
  const cityLabel = city
    ? (currentLang === 'fr' ? city.nameFr : city.nameEn)
    : 'Casablanca';

  if (bookingCityTag) bookingCityTag.textContent = cityLabel.toUpperCase();
  if (bookingFeedback) bookingFeedback.textContent = '';

  if (bookDateInput && !bookDateInput.value) {
    const tomorrow = new Date(Date.now() + 86400000);
    bookDateInput.value = tomorrow.toISOString().split('T')[0];
  }

  bookingModal.classList.add('open');
  bookingBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  if (!bookingModal || !bookingBackdrop) return;
  bookingModal.classList.remove('open');
  bookingBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

if (deepContactBtn) {
  deepContactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openBookingModal();
  });
}

if (closeBookingBtn) closeBookingBtn.addEventListener('click', closeBookingModal);
if (bookingBackdrop) bookingBackdrop.addEventListener('click', closeBookingModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectDrawer();
    closeBookingModal();
  }
});

if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = document.getElementById('bookFirstName').value.trim();
    const lastName = document.getElementById('bookLastName').value.trim();
    const email = document.getElementById('bookEmail').value.trim();
    const phone = document.getElementById('bookPhone').value.trim();
    const dateStr = document.getElementById('bookDate').value;
    const timeStr = document.getElementById('bookTime').value;
    const notes = document.getElementById('bookNotes').value.trim();
    const city = bookingCityTag ? bookingCityTag.textContent : 'CASABLANCA';

    if (!firstName || !lastName || !email || !phone || !dateStr) return;

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      date: dateStr,
      time: timeStr,
      notes,
      city
    };

    downloadAppleCalendarInvite({
      firstName,
      lastName,
      email,
      phone,
      dateStr,
      timeStr,
      notes,
      city
    });

    if (bookingFeedback) {
      bookingFeedback.textContent =
        currentLang === 'fr'
          ? 'Synchronisation en cours avec votre calendrier...'
          : 'Syncing rendez-vous to your calendar...';
    }

    if (!CALENDAR_WEBHOOK_URL || CALENDAR_WEBHOOK_URL.startsWith('PASTE_')) {
      if (bookingFeedback) {
        bookingFeedback.textContent =
          currentLang === 'fr'
            ? `Fichier .ics généré pour ${firstName} ${lastName} (${dateStr} à ${timeStr}). Collez l'URL Apps Script dans CALENDAR_WEBHOOK_URL pour la synchro automatique.`
            : `.ics file generated for ${firstName} ${lastName} (${dateStr} at ${timeStr}). Paste your Apps Script URL into CALENDAR_WEBHOOK_URL for automatic sync.`;
      }
      return;
    }

    try {
      await fetch(CALENDAR_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      if (bookingFeedback) {
        bookingFeedback.textContent =
          currentLang === 'fr'
            ? `Rendez-vous enregistré pour ${firstName} ${lastName} le ${dateStr} à ${timeStr} (synchro iPhone via codebyamine@gmail.com).`
            : `Rendez-vous booked for ${firstName} ${lastName} on ${dateStr} at ${timeStr} (syncing to iPhone via codebyamine@gmail.com).`;
      }
    } catch (err) {
      if (bookingFeedback) {
        bookingFeedback.textContent =
          currentLang === 'fr'
            ? `Fichier .ics prêt pour ${firstName} ${lastName}. Vérifiez votre connexion pour la synchro automatique.`
            : `.ics invite ready for ${firstName} ${lastName}. Check your connection for automatic sync.`;
      }
    }
  });
}