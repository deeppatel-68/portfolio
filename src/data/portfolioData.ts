export const siteConfig = {
  name: "Deep Patel",
  title: "Software Engineering Graduate",
  tagline:
    "Building practical tools across software, data, automation, geospatial systems, and AI.",
  intro:
    "I'm a Brisbane-based Software Engineering graduate with experience in full-stack development, data analytics, machine learning, geospatial applications, and technology risk. I enjoy building useful systems that connect technical depth with real-world problems.",
  location: "Brisbane, Australia",
  email: "dpate0568@gmail.com",
  github: "https://github.com/deeppatel-68",
  linkedin: "https://www.linkedin.com/in/deep-patel-880338279",
  resumeUrl: "/resume.pdf" as string | null,
};

// Short credibility strip shown under the hero CTAs.
export const credentials = [
  {
    label: "QUT",
    detail: "Bachelor of IT & Business · Computer Science & Finance",
  },
  { label: "Deloitte", detail: "Graduate Technology Risk Analyst" },
  { label: "APA Group", detail: "Operational Technology Analyst Intern" },
];

export const about = {
  paragraphs: [
    "I'm a QUT graduate (Bachelor of IT and Business, majoring in Computer Science and Finance, GPA 5.2) — a combination that means I'm as comfortable reasoning about systems and code as I am about the business context they operate in.",
    "Professionally, I work as a Graduate Technology Risk Analyst in Deloitte's Technology Assurance practice, analysing IT general controls and technology risk across critical business systems. Before that, I spent eighteen months at APA Group on the operational technology side of energy infrastructure, and worked as a Software Developer with Orefox AI building a GIS-based spatial analytics platform.",
    "My own projects lean towards the things I find most interesting: geospatial systems, machine learning experiments in TensorFlow, automation agents, and clean web frontends. I'm looking for roles where I can keep building — software engineering, data analytics, or technology risk with a hands-on technical edge.",
  ],
  highlights: [
    "Bachelor of IT & Business, QUT (2025) — Computer Science & Finance majors, GPA 5.2",
    "Graduate Technology Risk Analyst at Deloitte, Technology Assurance",
    "Operational Technology Analyst Intern at APA Group (Nov 2023 – May 2025)",
    "Software Developer with Orefox AI (Mar 2025 – Nov 2025)",
    "Comfortable bridging technical and business conversations",
  ],
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Software Development",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Django",
      "C#",
      "Tailwind CSS",
      "Git / GitHub",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "SQL",
      "Power BI",
      "Pandas",
      "NumPy",
      "Data modelling",
      "Data visualisation",
      "Dashboarding",
    ],
  },
  {
    title: "Databases & Geospatial",
    skills: [
      "PostgreSQL",
      "PostGIS",
      "MySQL",
      "Leaflet.js",
      "Azure Maps API",
      "Google Elevation API",
      "Spatial data modelling",
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "Scikit-learn",
      "TensorFlow / Keras",
      "Model evaluation",
      "ML workflows",
      "Gemini API",
      "AI-assisted automation",
    ],
  },
  {
    title: "Technology Risk & Professional",
    skills: [
      "Technology risk",
      "IT general controls",
      "Cybersecurity governance",
      "Operational technology",
      "Power Apps",
      "AWS",
      "Process automation",
      "Business & technical communication",
    ],
  },
];

export type ProjectCategory =
  | "Geospatial"
  | "Machine Learning"
  | "Frontend"
  | "AI & Automation"
  | "Systems & OOP";

export type Project = {
  name: string;
  context?: string;
  category: ProjectCategory;
  featured?: boolean;
  description: string;
  tech: string[];
  demonstrates: string;
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    name: "Farm Fence Planner",
    context: "Orefox AI — Software Developer",
    category: "Geospatial",
    featured: true,
    description:
      "Contributed to a GIS-based spatial analytics platform supporting real-time asset tracking and layout planning for agricultural operations across Queensland. Worked across the Django backend, PostGIS spatial data layer, and mapping integrations with Azure Maps and the Google Elevation API — production software, built and shipped as part of an agile team.",
    tech: [
      "Django 5.0",
      "Python",
      "PostgreSQL",
      "PostGIS",
      "Azure Maps API",
      "Google Elevation API",
    ],
    demonstrates:
      "Real-world spatial data modelling, mapping workflows, and team-based software delivery.",
    links: [
      // Repository is private — linking to GitHub profile instead.
      { label: "GitHub Profile", url: "https://github.com/deeppatel-68" },
    ],
  },
  {
    name: "SVHN Digit Classification",
    context: "Computer Vision",
    category: "Machine Learning",
    description:
      "Developed a machine learning project comparing SVM and deep CNN approaches for classifying real-world house-number digits from the SVHN dataset — from preprocessing and feature handling through to training, evaluation, and an honest comparison of the two approaches.",
    tech: ["Python", "TensorFlow / Keras", "Scikit-learn", "Pandas", "NumPy"],
    demonstrates:
      "Data preprocessing, model evaluation, and Python-based ML experimentation.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/deeppatel-68/svhn-digit-classification",
      },
      {
        label: "Kaggle",
        url: "https://www.kaggle.com/code/deeppatel68/svhn-digit-classification-svm-vs-deep-cnns",
      },
    ],
  },
  {
    name: "Dayly",
    context: "Personal Project",
    category: "Frontend",
    description:
      "A productivity web app built with a modern frontend stack. The focus: a clean, fast interface that's pleasant to use every day — sensible state management, careful typography, and no clutter.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    demonstrates:
      "Modern React/Next.js development and clean, user-focused interface design.",
    links: [
      { label: "GitHub", url: "https://github.com/deeppatel-68/dayly-v1" },
    ],
  },
  {
    name: "AI Agent",
    context: "Personal Project",
    category: "AI & Automation",
    description:
      "A Python automation agent built on the Gemini API — an exploration of how LLMs can drive practical, scripted workflows rather than just chat. Covers prompt design, API integration, and structured task automation.",
    tech: ["Python", "Gemini API", "Automation workflows"],
    demonstrates:
      "AI-assisted automation, API integration, and practical experimentation with AI tooling.",
    links: [
      { label: "GitHub", url: "https://github.com/deeppatel-68/ai-agent" },
    ],
  },
  {
    name: "Obstacle Odyssey",
    context: "CLI Path-Finding Game",
    category: "Systems & OOP",
    description:
      "An interactive command-line path-finding game built in C# on .NET Core, applying core OOP principles — inheritance, polymorphism, abstraction — within a modular class architecture.",
    tech: ["C#", ".NET Core", "OOP", "CLI application design"],
    demonstrates:
      "Object-oriented design, algorithmic thinking, and clean terminal application structure.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/deeppatel-68/cli-path-finder-game",
      },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Deloitte",
    role: "Graduate Technology Risk Analyst",
    period: "Mar 2026 – Present",
    current: true,
    summary:
      "Technology Assurance, Brisbane — working across technology risk and IT controls engagements for critical business systems.",
    points: [
      "Analysing IT general controls and technology risk data across critical business systems, identifying control gaps and supporting evidence-based remediation",
      "Collaborating with stakeholders across IT, operations, and risk teams to improve governance, compliance, and process efficiency",
      "Leveraging AI and digital tools to streamline testing workflows and improve reporting accuracy",
      "Supporting delivery of technology assurance activities in fast-paced, multi-stakeholder environments",
    ],
  },
  {
    company: "Orefox AI",
    role: "Software Developer",
    period: "Mar 2025 – Nov 2025",
    current: false,
    summary:
      "Built a GIS-based spatial analytics platform for agricultural operations across Queensland.",
    points: [
      "Built a GIS-based spatial analytics platform using Django and Python to support real-time asset tracking and layout planning",
      "Gathered and translated stakeholder requirements into practical software solutions, improving usability for non-technical users",
      "Enhanced UI/UX and reporting functionality through iterative development and end-user feedback",
      "Worked collaboratively within an agile development environment to deliver scalable, data-focused solutions",
    ],
  },
  {
    company: "APA Group",
    role: "Operational Technology Analyst Intern",
    period: "Nov 2023 – May 2025",
    current: false,
    summary:
      "Worked with operational technology systems and data in an energy infrastructure environment.",
    points: [
      "Developed interactive Power BI dashboards to monitor operational KPIs for senior engineering and operations stakeholders",
      "Automated operational data pipelines using Python and Bash scripting, improving engineering productivity and data availability by 20%",
      "Designed and implemented a Power Apps workforce scheduling solution that improved coordination and reduced operational conflicts across teams",
    ],
  },
];

export const contact = {
  heading: "Let's talk",
  message:
    "Interested in working together or learning more about my projects? I'm open to graduate, junior, and early-career opportunities across software engineering, data analytics, automation, geospatial systems, and technology risk.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
