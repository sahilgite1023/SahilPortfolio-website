import { profile } from "@/lib/portfolio-data";

export const selectedRepos = [
  "job-portal-system",
  "employee-management-system",
  "fleet-management-system",
  "atmos",
  "sign-language-detection",
  "spam-email-classification",
];

export const projectMetadata: Record<
  string,
  { technologies: string[]; description?: string; aliases?: string[] }
> = {
  "job-portal-system": {
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    description:
      "Full-stack job portal for students and recruiters with resume upload and ATS filtering.",
    aliases: ["job-portal", "jobfindportal", "job-portal-system"],
  },
  "employee-management-system": {
    technologies: ["Next.js", "Node.js", "SQL"],
    description:
      "Management system for employee records, attendance tracking, and internal role permissions.",
    aliases: [
      "employee-management-system",
      "employee-management",
      "employee-attendance-system",
      "employee_feedback_system",
      "employee_feedback",
    ],
  },
  "fleet-management-system": {
    technologies: ["Node.js", "Express", "PostgreSQL", "Flutter"],
    description:
      "Real-time fleet tracking, vehicle maintenance scheduling, and analytics dashboard.",
    aliases: ["fleet-management-system", "fleet-management", "supply-chain-analytics"],
  },
  atmos: {
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "NASA API"],
    description:
      "Atmospheric monitoring and weather data visualization app powered by web APIs.",
    aliases: ["atmos"],
  },
  "sign-language-detection": {
    technologies: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "Streamlit"],
    description:
      "Real-time gesture recognition converting hand landmarks into readable text using deep learning.",
    aliases: ["sign-language-detection", "sign-language-detection-"],
  },
  "spam-email-classification": {
    technologies: ["Python", "Scikit-learn", "TF-IDF", "Streamlit"],
    description:
      "Machine learning email classifier detecting spam bodies using TF-IDF vectorization.",
    aliases: [
      "spam-email-classification",
      "spam-email-detection",
      "spam-message-detection-system",
    ],
  },
};

export const liveDemos: Record<string, string> = {
  "job-portal-system": "https://jobfindportal.netlify.app/",
  "employee-management-system": "YOUR_LIVE_URL",
  "fleet-management-system": "YOUR_LIVE_URL",
  "employee-management": "https://employee-ma.netlify.app/login",
  "job-portal": "https://jobfindportal.netlify.app/",
};

export interface RawGithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  language?: string | null;
  homepage?: string | null;
}

export interface ProcessedGithubRepo {
  name: string;
  displayName: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
  htmlUrl: string;
  liveDemoUrl?: string;
}

export function getGithubUsername(): string {
  if (profile.github) {
    const parts = profile.github.split("/").filter(Boolean);
    return parts[parts.length - 1] || "sahilgite1023";
  }
  return "sahilgite1023";
}

export function formatRepoTitle(name: string): string {
  return name
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase();
      if (lower === "api") return "API";
      if (lower === "jwt") return "JWT";
      if (lower === "ml") return "ML";
      if (lower === "ai") return "AI";
      if (lower === "ui") return "UI";
      if (lower === "ux") return "UX";
      if (lower === "tfidf") return "TF-IDF";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function formatTopic(topic: string): string {
  const map: Record<string, string> = {
    react: "React",
    nodejs: "Node.js",
    node: "Node.js",
    express: "Express",
    mongodb: "MongoDB",
    jwt: "JWT",
    python: "Python",
    tensorflow: "TensorFlow",
    opencv: "OpenCV",
    mediapipe: "MediaPipe",
    streamlit: "Streamlit",
    "scikit-learn": "Scikit-learn",
    sklearn: "Scikit-learn",
    nextjs: "Next.js",
    "next.js": "Next.js",
    sql: "SQL",
    postgresql: "PostgreSQL",
    flutter: "Flutter",
    tailwindcss: "Tailwind CSS",
    "tailwind-css": "Tailwind CSS",
    "nasa-api": "NASA API",
  };
  return map[topic.toLowerCase()] || formatRepoTitle(topic);
}

export function getValidLiveDemoUrl(repoName: string, homepage?: string | null): string | undefined {
  const mappedUrl = liveDemos[repoName] || liveDemos[repoName.toLowerCase()];
  if (mappedUrl && mappedUrl.startsWith("http") && !mappedUrl.includes("YOUR_LIVE_URL")) {
    return mappedUrl;
  }
  if (homepage && homepage.startsWith("http") && !homepage.includes("YOUR_LIVE_URL")) {
    return homepage;
  }
  return undefined;
}

function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function findMatchingGithubRepo(
  selectedName: string,
  githubRepos: RawGithubRepo[],
): RawGithubRepo | undefined {
  const normSelected = normalize(selectedName);
  const metadata = projectMetadata[selectedName];
  const aliases = (metadata?.aliases || [selectedName]).map(normalize);

  return githubRepos.find((repo) => {
    const normRepoName = normalize(repo.name);
    if (normRepoName === normSelected) return true;
    if (aliases.includes(normRepoName)) return true;
    if (normRepoName.includes(normSelected) || normSelected.includes(normRepoName)) return true;
    return false;
  });
}

export async function fetchSelectedGithubRepos(): Promise<ProcessedGithubRepo[]> {
  const username = getGithubUsername();
  let repositories: RawGithubRepo[] = [];

  try {
    const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;
    const response = await fetch(url);
    if (response.ok) {
      repositories = await response.json();
    }
  } catch (err) {
    console.warn("Could not fetch GitHub API repositories, using fallback data:", err);
  }

  // Always produce a project item for each of the selectedRepos
  return selectedRepos.map((selectedName) => {
    const matched = findMatchingGithubRepo(selectedName, repositories);
    const fallbackMeta = projectMetadata[selectedName];

    const rawName = matched ? matched.name : selectedName;
    const displayName = formatRepoTitle(selectedName);
    const description =
      matched?.description ||
      fallbackMeta?.description ||
      "Selected software project built with modern technologies.";

    let technologies: string[] = [];
    if (matched?.topics && matched.topics.length > 0) {
      technologies = matched.topics.map(formatTopic);
    } else if (fallbackMeta?.technologies) {
      technologies = fallbackMeta.technologies;
    } else if (matched?.language) {
      technologies = [matched.language];
    } else {
      technologies = ["Software"];
    }

    const htmlUrl = matched?.html_url || `https://github.com/${username}/${rawName}`;
    const liveDemoUrl = getValidLiveDemoUrl(selectedName, matched?.homepage);

    return {
      name: selectedName,
      displayName,
      description,
      technologies,
      stars: matched?.stargazers_count ?? 0,
      forks: matched?.forks_count ?? 0,
      htmlUrl,
      liveDemoUrl,
    };
  });
}
