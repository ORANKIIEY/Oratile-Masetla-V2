// Single source for Oratile's profile: used by the home page sections and the /resume page.
const resume = {
  name: "Oratile Masetla",
  nickname: "Ora",
  title: "Software Engineer",
  location: "South Africa",
  email: "oratiledineo75@gmail.com",
  github: "github.com/ORANKIIEY",
  githubUrl: "https://github.com/ORANKIIEY",
  linkedin: "linkedin.com/in/oratile-masetla",
  linkedinUrl: "https://www.linkedin.com/in/oratile-masetla-595816301",

  summary:
    "Software engineer in training at WeThinkCode_ and Richfield IT graduate. I build full applications (front ends, Java and Python back ends, APIs, databases and cloud deployments) with a strong focus on security. I have competed in 7 hackathons (including a Top 10 finish at GirlCode and a solo build at Entelect Hack<IT>), run real vulnerability assessments, and tutor other students in programming.",

  focus: [
    { title: "Full-Stack Development", text: "React front ends, Java Spring Boot and Python APIs, and the databases behind them.", icon: "code", color: "#8b5cf6" },
    { title: "Cybersecurity", text: "Secure coding, vulnerability scanning, penetration testing and security awareness.", icon: "shield", color: "#f43f5e" },
    { title: "Cloud & DevOps", text: "Docker, Render, Vercel, AWS and Microsoft Azure, with CI/CD pipelines.", icon: "cloud", color: "#0ea5e9" },
    { title: "Data & AI", text: "ETL pipelines, SQL warehouses, Pandas and AI-powered features.", icon: "spark", color: "#10b981" },
  ],

  // Hackathons, newest first (months from her LinkedIn posts). `slug` links to a case study on this site.
  hackathons: [
    {
      name: "Node Engine Hackathon",
      year: "2026",
      date: "Nov 2026",
      place: "Online · Base Sepolia",
      format: "1 week",
      team: "Team",
      built: "SolarShare",
      slug: "solarshare",
      result: "Contracts deployed",
      story: "Real-World Assets track: tokenised community solar, with payouts gated by a tamper-checked meter that signs onchain.",
      color: "#f5b82e",
    },
    {
      name: "FNB App of the Year Hackathon",
      year: "2026",
      date: "23–25 Oct 2026",
      place: "Online",
      format: "72 hours",
      team: "Team",
      built: "FinSmart",
      result: "Submitted",
      story: "72 hours, one mission. Our team designed, built and submitted FinSmart, a fintech app, to FNB's App of the Year.",
      color: "#00a3a1",
    },
    {
      name: "SheHacks",
      year: "2026",
      date: "Oct 2026",
      place: "South Africa",
      format: "Challenge B",
      team: "Team",
      built: "Mukuru Money Coach",
      slug: "mukuru-money-coach",
      result: "Shipped & live",
      story: "Women in tech building together. We built an AI money coach for Mukuru customers in English, isiZulu and chiShona.",
      color: "#ff5a1f",
    },
    {
      name: "Geekulcha Annual Hackathon #GKHack26",
      year: "2026",
      date: "25–27 Sep 2026",
      place: "BCX, Centurion",
      format: "3 days",
      team: "Team",
      result: "Participant",
      story: "Three days at BCX Centurion building for use, collaborating with developers from across the tech community.",
      color: "#e4002b",
    },
    {
      name: "Entelect Hack<IT>",
      year: "2026",
      date: "Sep 2026",
      place: "South Africa",
      format: "Solo",
      team: "Solo",
      result: "Finished build",
      story: "No team, no one to bounce ideas off: just me, a ticking clock and a problem. Proof that I can think on my feet and deliver.",
      color: "#7c5cff",
    },
    {
      name: "GirlCode Johannesburg Hackathon",
      year: "2026",
      date: "Sep 2026",
      place: "MTN Offices, Randburg",
      format: "30 hours",
      team: "Team",
      result: "Top 10 🏆",
      highlight: true,
      story: "30 hours with an amazing team, meeting sponsors and pitching our solution. Our team made it into the Top 10.",
      color: "#ff3d81",
    },
    {
      name: "MoMo Mini App Hackathon",
      year: "2026",
      date: "Sep 2026",
      place: "The Forum, Johannesburg",
      format: "24 hours",
      team: "Team",
      result: "Participant",
      story: "24 hours of building, brainstorming and debugging a fintech mini app, and learning to stay creative under pressure.",
      color: "#ffcc00",
    },
    {
      name: "Google Cloud & Gemini Buildathon",
      year: "2026",
      date: "Jul 2026",
      place: "GDG Johannesburg · Sandton",
      format: "Buildathon",
      team: "Team",
      result: "Participant",
      story: "Building AI-powered solutions with Google Cloud and Gemini alongside the GDG Johannesburg community.",
      color: "#4285f4",
    },
  ],

  // Programmes, conferences and meetups.
  community: [
    { name: "Capaciti AI Skills Accelerator", detail: "Accepted into the programme" },
    { name: "DevFest Pretoria 2026", detail: "Build, Secure, Scale" },
    { name: "AWS Summit Johannesburg 2026", detail: "Cloud computing" },
    { name: "Google Cloud Summit Johannesburg", detail: "AI and cloud" },
    { name: "Java/JVM Meetup", detail: "Microsoft South Africa" },
    { name: "TryHackMe", detail: "1st place, Bronze League" },
  ],

  experience: [
    {
      period: "Oct 2025 to Present",
      role: "Software Engineer (Learner)",
      company: "WeThinkCode_",
      place: "Ekurhuleni East College · On-site",
      points: [
        "Full-time, project-based software engineering programme.",
        "Building full-stack, data and security projects in Java, Python and JavaScript.",
        "Competing in hackathons: FNB App of the Year, #GKHack26, SheHacks, Entelect Hack<IT>, GirlCode (Top 10), MoMo and Node Engine.",
      ],
    },
    {
      period: "Oct 2025 to Present",
      role: "Peer Tutor",
      company: "WeThinkCode_",
      place: "On-site",
      points: [
        "Explaining programming concepts and helping students with coding challenges and debugging.",
        "Encouraging problem solving, collaboration and clean, efficient code.",
      ],
    },
    {
      period: "Feb 2024 to May 2025",
      role: "Information Technology Student",
      company: "Richfield Graduate Institute of Technology",
      place: "Cape Town, Western Cape",
      points: [
        "Completed a qualification in Information Technology.",
        "Built foundations in IT strategy, information security, programming (Java, VB.NET, C++), web development and databases.",
      ],
    },
    {
      period: "Dec 2023 to Feb 2024",
      role: "Office Assistant",
      company: "Hidden Dollar Technology",
      place: "South Africa",
      points: [
        "Handled calls and client communication, and greeted clients and visitors.",
        "Managed files, recorded information and kept documents up to date.",
      ],
    },
  ],

  certifications: [
    { name: "Cisco Certified Ethical Hacker", issuer: "Cisco Networking Academy", date: "Apr 2025", tag: "Security" },
    { name: "Cybersecurity Certificate", issuer: "Cisco Networking Academy", date: "Apr 2025", tag: "Security" },
    { name: "Cybersecurity is for Everyone", issuer: "Microsoft Ikamva Digital", date: "Mar 2026", tag: "Security" },
    { name: "Training for Developers: Intermediate (Azure)", issuer: "Microsoft Ikamva Digital", date: "Mar 2026", tag: "Cloud" },
    { name: "Python for Data Science", issuer: "IBM", date: "Mar 2026", tag: "Data" },
    { name: "Java Certificate", issuer: "Sololearn", date: "Apr 2026", tag: "Code" },
    { name: "Introduction to Programming Using Python", issuer: "Cisco Networking Academy", date: "Apr 2025", tag: "Code" },
    { name: "JavaScript Programming", issuer: "Cisco Networking Academy", date: "Apr 2025", tag: "Code" },
    { name: "C++ Programming", issuer: "CodSoft", date: "Dec 2024", tag: "Code" },
    { name: "Relational Database Management Systems", issuer: "IBM SkillsBuild", date: "Oct 2026", tag: "Data" },
    { name: "Data Engineering Basics for Everyone", issuer: "IBM · edX", date: "Oct 2026", tag: "Data" },
  ],

  projects: [
    { name: "Mukuru Money Coach", stack: "React, Spring Boot, PostgreSQL, Docker", description: "SheHacks build: multilingual AI money coach that protects family remittances and grows savings.", link: "https://mukuru-money-coach-frontend.onrender.com" },
    { name: "SolarShare", stack: "Solidity, ESP32, Node.js, Next.js", description: "Node Engine Hackathon: tokenised community solar with payouts gated by a tamper-checked, onchain meter.", link: "https://github.com/ORANKIIEY/SolarShare" },
    { name: "Home Network Vulnerability Scan", stack: "Nmap, Nessus, CVSS", description: "Blue-team assessment of a home subnet with a findings register, remediation tracker and report.", link: "https://home-network-vuln-dashboard.onrender.com" },
    { name: "Spotcheck", stack: "React, FastAPI", description: "Security awareness toolkit: phishing training plus password, email and website checkers.", link: "https://security-awareness-training.vercel.app" },
    { name: "ORANEO", stack: "FastAPI, SQLite, React, TypeScript", description: "Eight-screen data operations platform: ETL, data quality, warehouse insights and PDF reports.", link: "https://github.com/ORANKIIEY/oraneo" },
    { name: "RoomZA", stack: "Spring Boot, Spring Security, JWT, React", description: "Shared-accommodation platform with true monthly cost and transparent roommate matching.", link: "https://github.com/ORANKIIEY/RoomZA" },
  ],

  skills: [
    { group: "LANGUAGES", color: "#8b5cf6", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C++", "Solidity", "HTML", "CSS"] },
    { group: "FRAMEWORKS", color: "#d946ef", items: ["Spring Boot", "React", "Next.js", "FastAPI", "Flask", "Express", "Tailwind CSS", "Flutter"] },
    { group: "DATA", color: "#10b981", items: ["PostgreSQL", "MySQL", "SQLite", "Pandas", "NumPy", "ETL"] },
    { group: "SECURITY", color: "#f43f5e", items: ["Nmap", "Nessus", "Burp Suite", "ffuf", "OWASP Top 10", "CVSS", "JWT"] },
    { group: "CLOUD & TOOLS", color: "#0ea5e9", items: ["Docker", "AWS", "Azure", "Render", "Vercel", "Git", "GitHub Actions", "Maven"] },
  ],

  education: [
    { period: "Oct 2025 to Present", degree: "Software Engineering", school: "WeThinkCode_" },
    { period: "Feb 2024 to May 2025", degree: "Information Technology", school: "Richfield Graduate Institute of Technology" },
  ],
};

const hackathonCount = resume.hackathons.filter((h) => h.format !== "Buildathon").length;
resume.hackathonCount = hackathonCount;
resume.stats = [
  { value: 28, label: "Public repositories", icon: "github", color: "#8b5cf6" },
  { value: hackathonCount, label: "Hackathons", icon: "trophy", color: "#f59e0b" },
  { value: resume.certifications.length, label: "Certifications", icon: "award", color: "#f43f5e" },
  { value: 3, label: "Live demos", icon: "play", color: "#10b981" },
];

export default resume;
