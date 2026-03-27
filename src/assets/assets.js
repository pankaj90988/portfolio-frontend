import { href } from "react-router";
import Project_1 from './project-photos/project-1.png'
import Clang from './language-icon/cLang.png'
import Cpp from './language-icon/cpp.png'
import Html5 from './language-icon/html5.png'
import Css3 from './language-icon/css3.png'
import Javascript from './language-icon/javascript.png'
import Java from './language-icon/java.png'
import Python from './language-icon/python.png'

// NavLinks as List of Object
export const navLink = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "TechStack", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "AdminPanel", href: "/admin-dashboard" },
]

export const techskillsData = [
  // --- FRONTEND ---
  {
    id: 1,
    name: "JavaScript",
    logo: "FaJsSquare",
    description: "Writing the core logic for seamless and fast web experiences.",
    category: "Frontend"
  },
  {
    id: 2,
    name: "React.js",
    logo: "FaReact",
    description: "Building dynamic, interactive, and modern user interfaces.",
    category: "Frontend"
  },
  {
    id: 3,
    name: "Tailwind CSS",
    logo: "SiTailwindcss",
    description: "Rapid, responsive, and utility-first styling for web apps.",
    category: "Frontend"
  },

  // --- BACKEND ---
  {
    id: 4,
    name: "Python",
    logo: "FaPython",
    description: "Writing scalable backend logic and integrating AI models.",
    category: "Backend"
  },
  {
    id: 5,
    name: "FastAPI",
    logo: "SiFastapi",
    description: "Designing high-performance, asynchronous REST APIs.",
    category: "Backend"
  },
  {
    id: 6,
    name: "Pydantic",
    logo: "SiPydantic",
    description: "Strict data validation and robust schema modeling.",
    category: "Backend"
  },

  // --- DATABASE & CLOUD ---
  {
    id: 7,
    name: "MongoDB",
    logo: "SiMongodb",
    description: "Managing flexible and scalable NoSQL database architectures.",
    category: "Database"
  },
  // {
  //   id: 8,
  //   name: "PostgreSQL",
  //   logo: "SiPostgresql",
  //   description: "Handling complex and structured relational data management.",
  //   category: "Database"
  // },
  {
    id: 9,
    name: "Cloudinary",
    logo: "SiCloudinary",
    description: "Seamless media storage, optimization, and delivery.",
    category: "Cloud"
  },

  // --- AI & DATA SCIENCE ---
  {
    id: 10,
    name: "NumPy",
    logo: "SiNumpy",
    description: "High-performance numerical computing and array operations.",
    category: "AI & Data Science"
  },
  {
    id: 11,
    name: "Pandas",
    logo: "SiPandas",
    description: "Powerful data manipulation, cleaning, and analysis.",
    category: "AI & Data Science"
  },
  // {
  //   id: 12,
  //   name: "OpenCV",
  //   logo: "SiOpencv",
  //   description: "Implementing computer vision and real-time image processing.",
  //   category: "AI & Data Science"
  // },

  // --- TOOLS ---
  {
    id: 13,
    name: "Git",
    logo: "FaGitAlt",
    description: "Local version control ,automerging codes, tracking code history, and efficient branching.",
    category: "Tools"
  },
  {
    id: 14,
    name: "GitHub",
    logo: "FaGithub",
    description: "Cloud repo, version control, team collaboration, auto-deploy on push.",
    category: "Tools"
  },
  {
    id: 15,
    name: "Postman",
    logo: "SiPostman",
    description: "Efficient API testing, debugging, and endpoint management.",
    category: "Tools"
  }
];

export const languagesData = [
  {
    name: "C",
    icon: Clang,
  },
  {
    name: "C++",
    icon: Cpp,
  },
  {
    name: "Python",
    icon: Python,
  },
  // {
  //   name: "Java",
  //   icon: Java,
  // },
  {
    name: "HTML5",
    icon: Html5,
  },
  {
    name: "CSS3",
    icon: Css3,
  },
  {
    name: "JavaScript",
    icon: Javascript,
  },

];