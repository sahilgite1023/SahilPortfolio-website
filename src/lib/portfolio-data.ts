export const profile = {
  name: "Sahil Gite",
  role: "Full Stack Developer · AI/ML Enthusiast",
  tagline:
    "Full stack developer building web products end to end — and teaching machines to see, read and classify.",
  email: "sahilgite511@gmail.com",
  phone: "+91 93737 82446",
  location: "Nashik, Maharashtra, India",
  site: "https://sahil-gite.netlify.app/",
  github: "https://github.com/sahilgite1023",
  linkedin: "https://bit.ly/4cJuNwG",
};

export const stats = [
  { value: "2", label: "Internships" },
  { value: "3+", label: "Shipped projects" },
  { value: "6", label: "Hackathons" },
  { value: "7.92", label: "BCA CGPA" },
];

export const stack = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "JWT",
  "Python",
  "TensorFlow",
  "OpenCV",
  "MediaPipe",
  "Data Analysis",
  "UI/UX",
  "Git",
];

export const skillGroups = [
  {
    title: "Web Development",
    items: ["React", "Node.js / Express", "MongoDB", "REST APIs & JWT auth", "Tailwind CSS"],
  },
  {
    title: "AI / Machine Learning",
    items: ["Python", "TensorFlow", "OpenCV + MediaPipe", "Classification models", "Data analysis"],
  },
  {
    title: "Ways of working",
    items: [
      "Hackathon-speed prototyping",
      "Event co-lead (ASCEND 2K26)",
      "Team & stakeholder comms",
      "Google-certified UI/UX basics",
    ],
  },
];

export const experience = [
  {
    company: "Wind Hans Technology, Nashik",
    role: "Full Stack Developer Intern",
    when: "Jan 2026 · 15 days · On-site",
    points: [
      "Built responsive web pages against real client requirements.",
      "Worked across the front-end and back-end of live web features.",
      "Learned a real-time, ship-daily development workflow.",
    ],
  },
  {
    company: "AICTE TechSaksham",
    role: "AI Intern",
    when: "Dec 2025 · 3 months · Remote",
    points: [
      "Studied and applied AI/ML fundamentals on guided projects.",
      "Used Python for data analysis and model experimentation.",
    ],
  },
];

export const projects = [
  {
    index: "01",
    title: "Job Portal System",
    role: "Backend Developer",
    when: "Dec 2025 · 1 month",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Multer", "Tailwind CSS"],
    summary:
      "A full-stack job portal for students and recruiters: secure authentication, resume uploads, ATS-style filtering, application tracking and an admin dashboard.",
    highlights: [
      "JWT auth with role-based access for students, recruiters and admins",
      "Resume upload pipeline with Multer + ATS keyword filtering",
      "Application tracking and admin dashboard views",
    ],
    link: "https://jobfindportal.netlify.app/",
    linkLabel: "Live demo",
  },
  {
    index: "02",
    title: "Sign Language Detection",
    role: "Individual Project",
    when: "Mar 2025 · 1 month",
    stack: ["Python", "TensorFlow", "OpenCV", "MediaPipe"],
    summary:
      "Real-time sign language recognition that tracks hand landmarks from a webcam feed and converts gestures into readable text using a deep learning classifier.",
    highlights: [
      "MediaPipe hand-landmark extraction on a live video stream",
      "Deep learning gesture classifier trained on a custom dataset",
      "Instant gesture-to-text output for accessibility use cases",
    ],
    link: "https://github.com/sahilgite1023/Sign-Language-Detection-.git",
    linkLabel: "Source",
  },
  {
    index: "03",
    title: "Spam Email Detection",
    role: "Individual Project",
    when: "Feb 2025 · 1 month",
    stack: ["Python", "Scikit-learn", "NLP"],
    summary:
      "A machine learning system that classifies incoming email text as spam or legitimate using text vectorisation and supervised classification.",
    highlights: [
      "Text preprocessing and feature extraction from raw email bodies",
      "Supervised classifier evaluated on precision and recall",
    ],
    link: profile.github,
    linkLabel: "GitHub",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications",
    school: "Sandip University, Nashik",
    when: "2022 – 2025",
    score: "CGPA 7.92",
  },
  {
    degree: "Higher Secondary Certificate",
    school: "Nutan Vidyamandir, Deolali Camp, Nashik",
    when: "2019 – 2021",
    score: "67.17%",
  },
  {
    degree: "Secondary School Certificate",
    school: "Janata Vidyalaya, Pandhurli, Nashik",
    when: "2018 – 2019",
    score: "73.20%",
  },
];

export const wins = [
  "1st Position — Logic Hunt Coding Competition, KKWIEER (Oct 2025)",
  "2× 1st Prize — Poster Presentation Competition, Sandip University",
  "Co-Head — ASCEND 2K26 Mini Hackathon, KKWIEER",
  "Participant — Avishkar Project Presentation, KKWIEER (Sep 2025)",
  "NASA Space Apps Challenge — 2022, 2024, 2025",
  "InitHacks 2023 · SunHacks 2024",
  "Runner-Up — BGMI Tournament, Sandip University (2024)",
  "GCC-TBC English 40 WPM — A Grade",
];

export const certificates = [
  { name: "MERN Stack Development", issuer: "Apna College", year: "2026" },
  { name: "JavaScript Fundamentals", issuer: "GreatStack", year: "Oct 2025" },
  { name: "JavaScript (Basic) Certification", issuer: "HackerRank", year: "Oct 2025" },
  { name: "Google UI/UX Design", issuer: "Coursera", year: "Feb 2024" },
  { name: "Data Science & Machine Learning", issuer: "YBI Foundation", year: "Dec 2023" },
  { name: "Mastering MERN (4-day workshop)", issuer: "OctaNet", year: "—" },
];

export const languages = ["English", "Hindi", "Marathi (native)"];