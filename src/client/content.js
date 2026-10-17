export const navItems = [
  { id: 'services', n: '01', label: 'Services' },
  { id: 'process', n: '02', label: 'Process' },
  { id: 'work', n: '03', label: 'Work' },
  { id: 'scope', n: '04', label: 'Sectors' },
  { id: 'credentials', n: '05', label: 'Credentials' },
];

export const marquee = [
  'FULL-STACK ENGINEERING',
  'EMBEDDED SYSTEMS',
  'APPLIED AI & NLP',
  'BI & ETL PIPELINES',
  'CI/CD & INFRASTRUCTURE',
  'LINUX ADMINISTRATION',
  'SOC DESIGN & DEPLOYMENT',
  'HYBRID SECURITY AUDITS',
  'THREAT DETECTION',
  'ISO 27001 REPORTING',
];

export const glyphs = [
  { t: '</>', top: '12%', left: '6%' },
  { t: 'SELECT *', top: '22%', left: '86%' },
  { t: '01001', top: '48%', left: '3%' },
  { t: 'TLS 1.3', top: '66%', left: '88%' },
  { t: '{ }', top: '80%', left: '10%' },
  { t: 'encrypt()', top: '36%', left: '50%' },
  { t: 'git commit', top: '90%', left: '70%' },
];

export const brainCaption = {
  title: 'Human minds. Real solutions.',
};

export const stats = [
  { v: '7+', l: 'Years engineering' },
  { v: '3×', l: 'Kaspersky certified' },
  { v: '3', l: 'Disciplines, one build' },
];

export const services = [
  {
    n: '01',
    title: 'Solutions development',
    lead: 'Full-stack products, embedded systems, and applied AI/BI — built with whichever stack the problem actually calls for. This is the core of the work.',
    points: [
      'Full-stack web, mobile & desktop delivery',
      'Embedded systems — STM32, ESP32, Raspberry Pi, custom Linux builds',
      'Applied AI — computer vision, NLP classification, prompt engineering',
      'ETL pipelines & BI dashboards (Qlik Cloud, Power BI)',
    ],
  },
  {
    n: '02',
    title: 'Systems & infrastructure',
    lead: 'The layer everything I build runs on — kept secure, observable, and boring in the best way.',
    points: [
      'Linux server administration & production deployment',
      'Nginx reverse proxy / load balancing, Docker-based services',
      'SSL/TLS & secure client–server architecture',
      'CI/CD pipelines, monitoring & incident response',
    ],
  },
  {
    n: '03',
    title: 'Security consulting',
    lead: 'SOC design and deployment, hybrid audits, and reporting a board can actually act on — not just a scan result.',
    points: [
      'SOC design & deployment on Kaspersky EDR / KSN',
      'Hybrid audits — web, network, and physical on-site',
      'Endpoint hardening, sandbox validation, incident response',
      'ISO 27001-aligned reporting for technical & executive audiences',
    ],
  },
];

export const process = [
  { n: '01', t: 'Diagnose', d: 'Understand the system, the risk, and the goal before naming a fix.' },
  { n: '02', t: 'Frame the real problem', d: 'Separate the symptom from the cause, and agree on what "solved" means.' },
  { n: '03', t: 'Design, tool-agnostic', d: 'Pick the architecture and stack that fit the constraints — not the reverse.' },
  { n: '04', t: 'Build & harden', d: 'Ship production-grade work: secured by design, documented, tested.' },
  { n: '05', t: 'Validate & hand over', d: 'Confirm it holds under real conditions, then leave your team able to run it.' },
];

export const work = [
  {
    n: '01',
    domain: 'AI & Software',
    kind: 'ai',
    title: 'ADVIIO — AI phone repair marketplace',
    body: "Architected a two-model AI engine for a B2B + B2C marketplace: computer vision to identify a phone from a photo, and NLP to map a user's described symptoms to the likely fault — powering two mobile apps and two web front ends.",
    tags: ['Computer vision', 'NLP', 'React Native', 'Node.js'],
  },
  {
    n: '02',
    domain: 'Software',
    kind: 'software',
    title: 'FinArchive — legacy to cross-platform',
    body: 'Migrated a financial archiving application from legacy MFC/C++ to Electron.js, re-architected the encryption flow to remove an insecure intermediate step, and shipped a synchronized desktop + web platform over SSL.',
    tags: ['Electron.js', 'Node.js', 'SFTP/WebDAV', 'SSL/TLS'],
  },
  {
    n: '03',
    domain: 'BI',
    kind: 'bi',
    title: 'FlexKPI — BI on Qlik Cloud',
    body: 'Built ETL pipelines consolidating operational and financial data, then interactive dashboards with secure token/API-based embedded sharing for stakeholders outside the core team.',
    tags: ['Qlik Cloud', 'ETL', 'REST APIs'],
  },
  {
    n: '04',
    domain: 'Software',
    kind: 'software',
    title: 'Cyber Academy — e-learning platform',
    body: 'Built and hardened a WordPress-based platform for a cybersecurity academy — courses, exams, badges, and certifications, with role-based access for instructors and students.',
    tags: ['WordPress', 'Role-based access', 'Hardened deployment'],
  },
  {
    n: '05',
    domain: 'Security',
    kind: 'security',
    title: 'SOC for an enterprise client',
    body: 'Authored and delivered a full Security Operations Center proposal end to end — control-room hardware and software stack, endpoint policies, sandbox validation, and a recurring client reporting pipeline on Kaspersky EDR/KSN.',
    tags: ['Kaspersky EDR', 'KSN', 'Sandbox', 'SIEM-style monitoring'],
  },
  {
    n: '06',
    domain: 'Security',
    kind: 'security',
    title: 'Hybrid security audits',
    body: 'Led combined web and on-site physical/network audits across multiple client organizations, then wrote ISO 27001-aligned reports pitched separately for technical teams and executive leadership.',
    tags: ['Web assessment', 'Network testing', 'ISO 27001'],
  },
];

export const scope = [
  {
    tag: 'By arrangement',
    title: 'Disk recovery & data forensics',
    body: 'Recovering data from failed or damaged drives, and reconstructing what happened on a compromised system — documented properly when chain of custody matters.',
  },
  {
    tag: 'By arrangement',
    title: 'Health-sector systems',
    body: "Security and infrastructure work for clinics and health platforms, where patient data confidentiality isn't a nice-to-have.",
  },
  {
    tag: 'By arrangement',
    title: 'Digitalizing legacy & classic systems',
    body: 'Moving paper processes and decades-old software onto something a modern team can actually maintain — without losing what already works.',
  },
  {
    tag: 'By arrangement',
    title: 'Government & public-sector support',
    body: 'Technical assistance for public institutions — infrastructure hardening, systems modernization, and advisory work.',
  },
  {
    tag: 'NDA available on request',
    title: 'Private & confidential engagements',
    body: 'Discreet support for critical industries, where the scope of the engagement itself stays off the record.',
    confidential: true,
  },
];

export const credentials = [
  { by: 'IBM', t: 'Software Engineer Professional Certificate' },
  { by: 'Kaspersky', t: 'Security Center for Managed Service Providers' },
  { by: 'Kaspersky', t: 'MSP Onboarding Program' },
  { by: 'Kaspersky', t: 'Partner Onboarding Program' },
  { by: 'ENIS', t: 'B.Eng in Electronics, 2015–2018' },
];

export const languages = [
  { l: 'Arabic', v: 'Native' },
  { l: 'English', v: 'Fluent' },
  { l: 'French', v: 'Fluent' },
];
