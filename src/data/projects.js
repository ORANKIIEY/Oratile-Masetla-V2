import mukuruImage from "../assets/projects/mukuru.png";
import netscanImage from "../assets/projects/netscan.png";
import spotcheckImage from "../assets/projects/phishing.png";

const GH = "https://github.com/ORANKIIEY";

// `image` is optional: projects without one get a generated cover (see components/Cover.jsx).
// `embed: true` means the live site allows framing, so the detail page shows it inline.
const projects = [
  {
    slug: "mukuru-money-coach",
    title: "Mukuru Money Coach",
    tagline: "An AI money coach in English, isiZulu and chiShona.",
    category: "Full-Stack",
    highlight: "SheHacks · Challenge B",
    year: "2026",
    role: "Full-Stack Developer",
    timeline: "Hackathon build",
    status: "Live",
    image: mukuruImage,
    live: "https://mukuru-money-coach-frontend.onrender.com",
    embed: true,
    github: `${GH}/Mukuru-Saver-Imali`,
    accent: "#ff5a1f",
    metrics: [
      { value: "3", label: "Languages" },
      { value: "R50", label: "Welcome reward" },
      { value: "1", label: "Port: React + Spring Boot" },
    ],
    description:
      "A mobile-first financial platform that helps Mukuru customers track spending, protect the money they send home and reach their savings goals, with coaching from an AI.",
    overview:
      "Millions of people across Africa use Mukuru to send money to family. Money Coach sits on top of that habit: it sorts spending, protects family remittances as real commitments, and turns what is left into safe, steady savings.",
    challenge:
      "Most budgeting apps treat money sent home as 'spending' and tell people to cut it. For Mukuru's customers, that money is not optional. The app also had to work for people who are more comfortable in isiZulu or chiShona than in English.",
    solution:
      "A Safe-to-Save engine that ring-fences family commitments before suggesting any saving, plus instant language switching (EN / ZU / SN) across every screen. A Spring Boot API and a React SPA ship together in one Docker image on Render.",
    technologies: ["React 18", "Vite", "Java 21", "Spring Boot 3.5", "PostgreSQL", "H2", "Docker", "Render", "JUnit", "Mockito"],
    features: [
      "Sign up and sign in with automatic country dial codes and protected routes",
      "Safe-to-Save buffer that protects family remittances first",
      "AI Money Coach chat and a What-If savings simulator",
      "Goal sprints with XP, milestone alerts and confetti celebrations",
      "Auto-saver rules such as the Friday Auto-Lock (R20 into goals every Friday)",
      "Referral links shared to WhatsApp and SMS, with a R50 welcome bonus",
    ],
    demoSteps: [
      { title: "Choose a language", text: "Switch between English, isiZulu and chiShona at the top right. Every label updates instantly." },
      { title: "Start a demo session", text: "Tap “Try Demo Session (Grace Moyo)” to explore with a ready-made profile. No sign-up needed." },
      { title: "See what's safe to save", text: "The dashboard greets Grace by name, sets aside her family commitments, then shows what she can safely save." },
      { title: "Sprint towards a goal", text: "Use quick boosters to move money into a goal, earn XP and watch the progress ring fill." },
      { title: "Ask the coach", text: "Open the AI Coach, ask a money question, or run a What-If to see how a habit changes the goal date." },
    ],
    learnings: [
      "Shipping a React front end and a Spring Boot API as one deployable service",
      "Designing a financial product around real cultural commitments, not generic budgeting rules",
      "Building multilingual UI with full template interpolation",
    ],
  },
  {
    slug: "solarshare",
    title: "SolarShare",
    tagline: "Co-own a community solar mini-grid. Get paid monthly.",
    category: "Blockchain & IoT",
    highlight: "Node Engine Hackathon 2026",
    year: "2026",
    role: "Full-Stack & Smart Contracts",
    timeline: "One-week hackathon",
    status: "Contracts live on Base Sepolia",
    live: "https://sepolia.basescan.org/address/0x025A0eA625e462A4906C9811dcde14075cBD8491",
    liveLabel: "VIEW CONTRACT ON BASESCAN",
    github: `${GH}/SolarShare`,
    accent: "#f5b82e",
    metrics: [
      { value: "3,500", label: "Shares per mini-grid" },
      { value: "10 kWp", label: "Community solar" },
      { value: "4", label: "Deployed contracts" },
    ],
    description:
      "Neighbours buy shares from about R100 in a township solar mini-grid and earn a monthly USDC payout, but only for energy that a tamper-checked meter has signed for onchain.",
    overview:
      "SolarShare tokenises a real-world asset: one 10 kWp community solar mini-grid. Payouts are gated by a meter that signs every reading, so the money can only follow energy that was really produced and billed.",
    challenge:
      "When neighbours co-own solar, nobody can easily check how much power was produced and paid for, and illegal connections quietly drain the income before it reaches the owners.",
    solution:
      "An ESP32 meter signs each reading (EIP-712) with its own key, a counter and the time. A relayer posts it onchain, where MeterOracle verifies the signature and flags theft, tampering or silence. If anything is wrong, payouts pause automatically and everyone can see why.",
    technologies: ["Solidity", "OpenZeppelin v5", "Hardhat", "Base Sepolia", "ESP32 / Wokwi", "MQTT", "Node.js", "TypeScript", "viem", "Next.js", "Tailwind CSS"],
    features: [
      "Allowlisted share token with freeze, recover and a hard 3,500-share cap",
      "Device-signed meter readings with replay protection",
      "Automatic THEFT and OFFLINE states that pause payouts",
      "Operators can only deposit income up to what the meter proved",
      "Monthly USDC payouts with a (mocked) cash-out to mobile money",
      "Every mint, transfer, reading and payout emits an auditable event",
    ],
    demoSteps: [
      { title: "Buy a share", text: "An investor buys shares on a phone in under two minutes, with no wallet pop-ups or crypto jargon." },
      { title: "Watch the meter", text: "The asset page turns green as signed readings arrive. Each reading links to Basescan." },
      { title: "Get paid", text: "The operator deposits the month's income in USDC and the investor claims a payout." },
      { title: "Play the thief", text: "Turn the Wokwi theft dial. Within seconds the status turns red, a signed theft record appears onchain and payouts pause." },
      { title: "Try to cheat", text: "Change one number in a reading before it reaches the chain. The contract rejects it." },
    ],
    learnings: [
      "Writing Solidity rules that enforce real-world trust, not just token balances",
      "Signing data on an embedded device and verifying it onchain",
      "Being honest about what is real and what is mocked in a demo",
    ],
  },
  {
    slug: "home-network-vulnerability-scan",
    title: "Home Network Vulnerability Scan",
    tagline: "A blue-team audit of a home network, from discovery to fix.",
    category: "Cybersecurity",
    highlight: "Nmap · Nessus Essentials",
    year: "2026",
    role: "Security Analyst",
    timeline: "Ongoing audit",
    status: "Live dashboard",
    image: netscanImage,
    live: "https://home-network-vuln-dashboard.onrender.com",
    embed: false,
    github: `${GH}/home-network-vulnerability-scan`,
    accent: "#22d3ee",
    metrics: [
      { value: "9", label: "Hosts discovered" },
      { value: "10", label: "Findings triaged" },
      { value: "6.5", label: "Max CVSS" },
    ],
    description:
      "A repeatable vulnerability-management process for a home network using Nmap and Nessus, with an interactive dashboard, a findings register and a formal assessment report.",
    overview:
      "Home devices often expose management ports, outdated software and services nobody asked for. This project scans a home subnet I am authorised to test, triages every finding and tracks the fixes until they are verified.",
    challenge:
      "Scanner output is noisy. An open port is not an exploit, and a plugin hit is not always a real weakness. The challenge was to report honestly, without overstating risk or claiming fixes that were not verified.",
    solution:
      "A five-step workflow (scope, discover, scan, triage, remediate and verify) and a dashboard that shows severity, affected hosts, evidence and remediation status. Each claim is labelled with how strong its evidence is.",
    technologies: ["Nmap 7.95", "Nessus Essentials", "CVSS v3.1", "HTML", "CSS", "JavaScript", "Render"],
    features: [
      "Overview with subnet, findings, max CVSS and remediation KPIs",
      "Findings register with severity and triage notes",
      "Network topology of the assessed hosts",
      "Evidence and logs with integrity and provenance labels",
      "Remediation tracker and a built-in CVSS calculator",
      "Executive report for non-technical readers",
    ],
    demoSteps: [
      { title: "Scope it", text: "Only devices I own or am authorised to test: the 192.168.1.0/24 home subnet." },
      { title: "Discover with Nmap", text: "Find reachable hosts, open TCP ports and service banners. Nine hosts, three in focus." },
      { title: "Scan with Nessus", text: "Record each finding with its severity, plugin ID and evidence." },
      { title: "Triage", text: "Check whether each hit is a real weakness or just a service being present, then score it with CVSS." },
      { title: "Fix and verify", text: "Apply approved changes and re-scan. A fix only counts once it has been verified." },
    ],
    learnings: [
      "The difference between an open port, a vulnerability and an exploit",
      "Writing security reports that executives and engineers can both use",
      "Evidence integrity: labelling what is verified and what is not",
    ],
  },
  {
    slug: "spotcheck",
    title: "Spotcheck",
    tagline: "Check before you click. A security awareness toolkit.",
    category: "Cybersecurity",
    highlight: "Phishing awareness training",
    year: "2026",
    role: "Full-Stack Developer",
    timeline: "Training project",
    status: "Live",
    image: spotcheckImage,
    live: "https://security-awareness-training.vercel.app",
    embed: true,
    github: `${GH}/security_awareness-training-`,
    accent: "#2f855a",
    metrics: [
      { value: "6", label: "Realistic emails" },
      { value: "3", label: "Live checkers" },
      { value: "5 min", label: "To complete" },
    ],
    description:
      "An interactive toolkit that teaches people to spot phishing emails, weak passwords and fake websites, and gives them tools to check all three.",
    overview:
      "Most breaches start with a reused password, a convincing email or a fake login page. Spotcheck trains people to notice those signs without a tool, and gives them a tool for when they are unsure.",
    challenge:
      "Security training is usually a boring slideshow. People need to practise on realistic examples and see exactly what gave each one away.",
    solution:
      "A ‘Spot the phish’ game with six fictional emails, annotated red flags and the psychology behind each trick, plus password, email and website checkers powered by a FastAPI backend.",
    technologies: ["React", "FastAPI", "Python", "HTML", "CSS", "Vercel"],
    features: [
      "Spot-the-phish training with six realistic emails",
      "Password check: time to crack and whether it has leaked",
      "Email check for spoofed senders, fake links and pressure tactics",
      "Website check for certificates, HTTPS and security headers",
      "A quiz to test what you learned",
      "Ethical by design: fictional emails, no credential forms",
    ],
    demoSteps: [
      { title: "Start training", text: "Work through six emails and decide whether each one is safe or phishing." },
      { title: "See the red flags", text: "After each answer, the email is annotated with exactly what gave it away." },
      { title: "Check a password", text: "See how long it would take to crack, and whether it has appeared in a breach." },
      { title: "Check a link", text: "Look up a website's certificate, HTTPS setup and security headers before you trust it." },
      { title: "Take the quiz", text: "Lock in the habits that stop most attacks." },
    ],
    learnings: [
      "Teaching security through practice, not lectures",
      "Connecting a React UI to a Python FastAPI service",
      "Keeping offensive examples safe and ethical",
    ],
  },
  {
    slug: "oraneo",
    title: "ORANEO",
    tagline: "An eight-screen data operations platform.",
    category: "Data",
    highlight: "ETL · Warehouse · Reports",
    year: "2026",
    role: "Data & Full-Stack Developer",
    timeline: "Personal project",
    status: "Deployable on Render",
    github: `${GH}/oraneo`,
    accent: "#d9367e",
    metrics: [
      { value: "8", label: "Working screens" },
      { value: "ZAR", label: "SA sales dataset" },
      { value: "4", label: "Automation schedules" },
    ],
    description:
      "A full-stack platform that validates, loads and explains a synthetic South African sales dataset, from the ETL run to multi-page PDF reports.",
    overview:
      "ORANEO grew out of my sales ETL pipeline. It turns raw CSVs into a SQLite warehouse and puts every step on screen: run the pipeline, explore the sales, inspect rejected rows and export reports.",
    challenge:
      "Data teams need to trust the numbers. Every accepted, rejected and duplicate row has to be accounted for, and nothing on the dashboard can be invented by the front end.",
    solution:
      "All metrics are calculated by the Python API from SQLite. Every run reconciles input = accepted + rejected + duplicates, and the full history is kept for audit.",
    technologies: ["Python", "FastAPI", "SQLite", "React", "TypeScript", "Vite", "Axios", "Docker", "Render"],
    features: [
      "Overview of warehouse KPIs, monthly revenue, products and cities",
      "Pipeline control: validate, run, poll status, read logs and retry",
      "Sales explorer with server-side search, filters and pagination",
      "Data quality screen with row-level rejection reasons and CSV export",
      "Native-text, multi-page PDF reports",
      "Scheduled ETL runs (15 min to daily) with quality alerts",
    ],
    demoSteps: [
      { title: "Upload or pick a CSV", text: "Validate an existing or uploaded sales file before anything touches the warehouse." },
      { title: "Run the pipeline", text: "ETL runs in the background. Poll its status and read the logs live." },
      { title: "Check the quality", text: "See every rejected and duplicate row, with its original values and the reason." },
      { title: "Explore the sales", text: "Search by date, city, product or customer with server-side pagination." },
      { title: "Export a report", text: "Generate a multi-page PDF of analytics, data quality and run history." },
    ],
    learnings: [
      "Building ETL that reconciles every single record",
      "Serving a React build and a FastAPI service from one container",
      "Designing clear error states for data tools",
    ],
  },
  {
    slug: "roomza",
    title: "RoomZA",
    tagline: "Shared accommodation in South Africa, done right.",
    category: "Full-Stack",
    highlight: "Java · Spring Security · JWT",
    year: "2026",
    role: "Full-Stack Developer",
    timeline: "In progress",
    status: "In development",
    github: `${GH}/RoomZA`,
    accent: "#7c5cff",
    metrics: [
      { value: "3", label: "User roles" },
      { value: "20+", label: "REST endpoints" },
      { value: "JWT", label: "Secured API" },
    ],
    description:
      "A shared-accommodation platform with verified listings, a true monthly cost view and transparent roommate matching.",
    overview:
      "Finding a room is stressful. Listings hide the real cost, and you rarely know who you will be living with. RoomZA shows the true monthly cost of a room and explains why a roommate is a good match.",
    challenge:
      "Renters need protection from fake listings, landlords need control over their own listings, and admins need to moderate quickly, all on one secure API.",
    solution:
      "A Spring Boot 3 API secured with Spring Security and JWT, with seeker, landlord and admin roles. Three open reports automatically hide a listing until an admin reviews it.",
    technologies: ["Java 17", "Spring Boot 3", "Spring Security", "JWT", "JPA", "PostgreSQL", "H2", "React 18", "Vite", "Tailwind CSS"],
    features: [
      "Search listings by area, max rent, room type and availability",
      "True monthly cost including utilities, Wi-Fi and transport",
      "Roommate match scores that explain their reasons",
      "Enquiries with optional viewing times; landlords accept or decline",
      "Phone verification and listing verification",
      "Community reporting and admin moderation",
    ],
    demoSteps: [
      { title: "Search", text: "Filter verified listings by area, budget, room type and move-in date." },
      { title: "See the true cost", text: "Add your own utilities, Wi-Fi and transport estimates to see what the room really costs each month." },
      { title: "Check the match", text: "Each listing shows a roommate match score, with the reasons behind it." },
      { title: "Enquire", text: "Send an enquiry with a viewing time. The landlord accepts or declines." },
      { title: "Stay safe", text: "Report a suspicious listing. Three open reports hide it until an admin reviews it." },
    ],
    learnings: [
      "Role-based security with Spring Security and JWT",
      "Designing a REST API around real user roles",
      "Building features that protect vulnerable users",
    ],
  },
  {
    slug: "watch-amoo",
    title: "Watch Amoo",
    tagline: "Nursery rhymes in Sepedi, Sesotho and Setswana.",
    category: "Full-Stack",
    highlight: "AI Discovery Assistant",
    year: "2026",
    role: "Full-Stack Developer",
    timeline: "Personal project",
    status: "In development",
    github: `${GH}/watch-amoo`,
    accent: "#ff3d81",
    metrics: [
      { value: "3", label: "Indigenous languages" },
      { value: "1", label: "Place for it all" },
      { value: "AI", label: "Discovery assistant" },
    ],
    description:
      "Helps parents and caregivers find nursery rhyme videos in South African indigenous languages in one place, instead of searching across many platforms.",
    overview:
      "Children's content in Sepedi, Sesotho and Setswana exists, but it is scattered. Watch Amoo brings it together and adds an AI assistant that helps parents find the right video quickly.",
    challenge:
      "Parents should not need to search five platforms to find a rhyme in their home language.",
    solution:
      "A Next.js front end that talks to an Express and SQLite API, with secure HttpOnly cookie sessions and an AI Discovery Assistant for finding content.",
    technologies: ["Next.js", "React", "TypeScript", "Express", "SQLite", "Node.js"],
    features: [
      "Videos grouped by language: Sepedi, Sesotho and Setswana",
      "AI Discovery Assistant for finding the right rhyme",
      "Accounts with secure HttpOnly cookie sessions",
      "Email delivery for account flows",
    ],
    demoSteps: [
      { title: "Pick a language", text: "Choose Sepedi, Sesotho or Setswana." },
      { title: "Browse", text: "See nursery rhymes from many sources in one place." },
      { title: "Ask the assistant", text: "Describe what your child likes and get suggestions." },
      { title: "Watch together", text: "Play the video right away." },
    ],
    learnings: [
      "Building for language communities that tech often overlooks",
      "Proxying a Next.js front end to an Express API",
    ],
  },
  {
    slug: "flask-secure-app",
    title: "Flask Secure App",
    tagline: "Build it, harden it, then attack it.",
    category: "Cybersecurity",
    highlight: "Web AppSec capstone",
    year: "2026",
    role: "Developer & Pentester",
    timeline: "Two-week capstone",
    status: "Complete",
    github: `${GH}/Flask-Secure-App`,
    accent: "#e11d48",
    metrics: [
      { value: "4", label: "Phases" },
      { value: "RBAC", label: "Access control" },
      { value: "1", label: "Pentest report" },
    ],
    description:
      "A capstone where I built a Flask web app, hardened it with secure coding practices, attacked it with Burp Suite and ffuf, and wrote a formal penetration test report.",
    overview:
      "Most developers only build, and most testers only attack. This capstone does both on the same application, so every weakness found feeds straight back into the code.",
    challenge:
      "Writing secure code is hard to prove until someone tries to break it.",
    solution:
      "Four phases: build the app with authentication and role-based access control; harden it with input validation, session controls and secure headers; pentest it; and report the findings with fixes.",
    technologies: ["Python", "Flask", "Flask-Bcrypt", "Firebase", "Burp Suite", "ffuf", "OWASP Top 10"],
    features: [
      "User authentication and role-based access control",
      "Server-side input validation and session management",
      "Security headers and secrets kept out of the code",
      "Penetration testing with Burp Suite, ffuf and DevTools",
      "Formal pentest report with an executive summary and fixes",
    ],
    demoSteps: [
      { title: "Build", text: "A full-stack Flask app with login and role-based access." },
      { title: "Harden", text: "Add input validation, session controls and security headers." },
      { title: "Attack", text: "Test it with Burp Suite, ffuf and browser DevTools." },
      { title: "Report", text: "Write up each finding with its risk and its fix." },
    ],
    learnings: [
      "Thinking like an attacker while writing code",
      "OWASP Top 10 in practice, not just in theory",
    ],
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default projects;
