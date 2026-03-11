import type {
  experience,
  formField,
  skill,
  bio as BioType,
  hero as heroType,
  education,
  testimonial,
  achievement,
  Album,
  prcocessedimages,
  roleModels,
} from "../types";

import { getImageSet } from "../utils/getImageSrc";

import {
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineCodeBracketSquare,
  HiOutlineFlag,
  HiOutlineTrophy,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
} from "react-icons/hi2";

import { IoLogoElectron } from "react-icons/io5";
import { HiOutlineBadgeCheck } from "react-icons/hi";

export const navLinks: formField[] = [
  {
    name: "Home",
    value: "/#home",
  },
  {
    name: "Experience",
    value: "/experience",
  },
  {
    name: "Skills",
    value: "/experience#skills",
  },
  {
    name: "Gallery",
    value: "/gallery",
  },
];

export const hero: heroType = {
  title: `Welcome to <span class="text-indigo-500">Gokul&apos;s </span> digital canvas`,
  punchLine: "Interfaces that breathe.",
  shortDescription:
    "A software engineer who is solving for scale. Building for users. Refining for impact.",
  longDescription: ` Hi, I&apos;m <span class="dark:text-white text-black">Gokul</span>, a software
                          engineer with a passion for crafting seamless user interfaces that
                          blend form and function. I&apos;m keen on building products that
                          not only meet user needs but also delight them.`,
};
export const bio: BioType = {
  name: "Gokul",
  title: "Software Engineer",
  description:
    "Working at the intersection of engineering and design, I build frontends that are predictable for developers, intuitive for users, and fast in production. I care deeply about structure, motion, and architecture, ensuring interfaces stay smooth and reliable under real-world traffic.",
};

export const socialLinks: formField[] = [
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/gokulrao369",
  },
  {
    name: "GitHub",
    value: "https://github.com/gokul-369",
  },
];

export const workExperiences: experience[] = [
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    duration: "April 2025 - Present",
    description: [
      "One of the Designated Front-End Engineers in Lloyds Banking Group project, one of the UK’s leading financial institutions.",
      "Contributed to the Card Controls team, developing Single Page Applications (SPAs) that enable customers to manage and restrict card usage and limits.",
      "Currently working on VISA's click to pay team, that enables customer to pay using their VISA card",
      "Actively involved in building AI-driven solutions, including developing MCP servers, designing unique tools, and crafting elicitations for seamless integration with MCP clients.",
    ],
  },
  {
    company: "Paperflite",
    role: "Senior Software Engineer",
    duration: "January 2025 - March 2025",
    description: [
      "Worked on product revamp, migrating the legacy code to new code base, ensuring the compatibility of the codebases.",
      "Developed new nodules with real time analytics and data visualization",
      "Actively involved in organization level AI hackathon to build an AI based CLI that automates unit case generation using gemini 3.1",
    ],
  },
  {
    company: "Paperflite",
    role: "Software Engineer",
    duration: "August 2024 - January 2025",
    description: [
      "Involved in development of a product by working on new features that involved integrating AI product named 'Seek' built on top of open AI into our product ",
      "Fixed high priority customer tickets ",
      "Involved in fixing high priority defect there by reducing the overall bug count and ensuring the quality of the product",
    ],
  },
  {
    company: "Novac Technology Solutions",
    role: "Associate Project Manager",
    duration: "April 2024 - August 2024",
    description: [
      "Lead a team of 5 software developers in developing modules with payment related logics ",
      "Involved in Scrum, delivering modules with high quality code on a weekly sprint ",
      "Involved in Code reviews, reviewing peer code to achieve optimum performance ",
      "Involved in requirement discussion meetings, and understood key business goals thereby suggesting my ideas to the team in achieving the same",
    ],
  },
  {
    company: "Novac Technology Solutions",
    role: "Senior Software Engineer",
    duration: "July 2022 - April 2024",
    description: [
      "Actively involved in a team in developing various modules like Customer Portal, Admin Portal,Core business Application for Shriram Chits,  with payment gateways,Reports,and other finance related logics",
      "Did various R&Ds on React and React libraries for Pdf generation,Charts, Payment gateways and so on",
      "Worked on Reusable and scalable components in React",
      "Assisted team members on various stages of SDLC",
    ],
  },
  {
    company: "Novac Technology Solutions",
    role: "Software Engineer",
    duration: "June 2021 - July 2022",
    description: [
      "Worked on submitting various POCs on technologies like React,Redux,Webpack, Signal R and so on.",
      "Worked in a team,developing a CRM and core apps for Shriram Chits using React, Redux, Redux-saga, Axios and so on.",
      "Involved in setting up a development environment for React applications with modular and clean code along with project structuring for seamless development.",
    ],
  },
];

export const skills: skill[][] = [
  // Row 1 — Core Languages & Runtime (7)
  [
    {
      name: "JavaScript",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "HTML",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "SCSS",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
    {
      name: "Vite",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
  ],

  // Row 2 — Frontend Frameworks & Styling (8)
  [
    {
      name: "React",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Redux",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
    {
      name: "Redux Saga",
      imagePath:
        "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/reduxsaga.svg",
    },
    {
      name: "Tailwind",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Styled Components",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg",
    },
    {
      name: "jQuery",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
    },
    {
      name: "Zod",
      imagePath:
        "	https://zod.dev/_next/image?url=%2Flogo%2Flogo-glow.png&w=256&q=100", // your imported logo
    },
  ],

  // Row 3 — Tooling, Package Managers, Editor & API (8)
  [
    {
      name: "Git",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "GitHub Actions",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
    },
    {
      name: "VS Code",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "NPM",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    },
    {
      name: "Bun",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
    },
    {
      name: "Jest",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    },
    {
      name: "Postman",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", // import this
    },
  ],

  // Row 4 — DevOps, Cloud & Backend Infra (8)
  [
    {
      name: "Docker",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Vercel",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    },
    {
      name: "Jenkins",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    },
    {
      name: "GCP",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Nginx",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
    },
    {
      name: "IIS",
      imagePath:
        "https://images.seeklogo.com/logo-png/48/1/microsoft-iis-logo-png_seeklogo-484624.png", // your imported logo
    },
    {
      name: "Express",
      imagePath:
        "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/express.svg",
    },
    {
      name: "SignalR",
      imagePath:
        "	https://dotnet.microsoft.com/blob-assets/images/illustrations/swimlane-azure-signalr-logo.svg", // your imported logo
    },
  ],

  // Row 5 — Databases & AI / LLM Stack (7)
  [
    {
      name: "MongoDB",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Mongoose",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    },
    {
      name: "MCP",
      imagePath:
        "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/express.svg",
    },
    {
      name: "Ollama",
      imagePath:
        "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/ollama.svg",
    },
    {
      name: "Hugging Face",
      imagePath:
        "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/huggingface.svg",
    },
    {
      name: "linux",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    },
    {
      name: "mac OS",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
    },
  ],
];

export const educationItems: education[] = [
  {
    title: "B.Sc. Computer Science · RKM Vivekananda College",
    subTitle: "2018 – 2021 · First Class with Distinction",
  },
  {
    title: "High School · SBMHSS",
    subTitle: "2017 – 2018 · First Class with Distinction",
  },
  {
    title: "Beyond the classroom",
    subTitle:
      "Placement coordinator in college, top scorer in my department, and district physics symposium medalist.",
  },
];

export const interests: string[] = [
  "Automation",
  "Editing",
  "F1",
  "Frontend development",
  "Fitness and Health",
  "Football",
  "Gaming",
  "Gen AI",
  "Movies and TV shows",
  "Physics",
  "Photography",
  "Travel",
  "UI-UX",
];

export const testimonials: testimonial[] = [
  {
    name: "Leelavathi Dhanabal",
    jobTitle: "Lead Software Engineer",
    location: "Chennai, India",
    company: "TCS",
    testimonial:
      "It is a great experience working with Gokul, his dedication, postive attitude and commitment to delivering quality work truly stand out, he is very good when it comes to on time deliverables and maintaining good coordination with teams and clients.",
  },
  {
    name: "Bharathi Pachayappan",
    jobTitle: "Software Engineer",
    location: "Chennai, India",
    company: "Infosys",
    testimonial:
      "I’ve collaborated with him and exchanged technical ideas, and he consistently stands out for his quick learning ability and strong coding skills. He writes clean and optimized code, grasps new technologies and approaches challenges with clarity and confidence. It’s impressive to see such focus and growth at this stage of his career.",
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/bharathi.png",
  },
  {
    name: "Lavanya Srinivasan",
    jobTitle: "Software Engineer",
    location: "Ajax, Cannada",
    company: "Inovyne",
    testimonial:
      "I worked with Gokul and what stood out immediately was his genuine passion for coding. He enjoys digging into problems, understanding how things work, and finding clean solutions rather than just getting something to “work.” He’s reliable, easy to collaborate with, and takes real ownership of his work. Any team that values curiosity and solid engineering would benefit from having him.",
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/lavanya.png",
  },
  {
    name: "Nabeel Ahmed",
    jobTitle: "Lead Engineer",
    location: "Edinburg, Scotland",
    company: "Lloyds Bank",
    testimonial:
      "It was a pleasure working with Gokul. He consistently demonstarted a strong desire to learn and took initiative in addressing key challenges. His technical expertise was evident across various tasks and readily provided thoughtful support. As the team lead. I value his his collaborative spirit, effective problem solving and the positive impact he had on our deliverables.",
  },
  {
    name: "JM Mcghee",
    jobTitle: "Software Engineer",
    location: "Edinburg, Scotland",
    company: "Lloyds Bank",
    testimonial:
      "It’s rare to come across an engineer who combines such eagerness to learn, strong attention to detail, and a genuine willingness to go the extra mile to find solutions. Gokul is one of those engineers",
  },
  {
    name: "Steephen",
    jobTitle: "Software Engineer",
    location: "Chennai, India",
    company: "TCS",
    testimonial: `I had the opportunity to work closely with Gokul on our project, and his front-end expertise consistently stood out. He has a strong eye for detail and a deep understanding of building responsive, user friendly interfaces.
    What impressed me most was his ability to translate complex backend requirements into clean, intuitive UI experiences. He is highly collaborative, proactive in communication, and always focused on performance and maintainability.
    Any team would benefit from his technical skill, ownership mindset, and commitment to delivering high-quality work.`,
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/steephen.png",
  },
  {
    name: "Ajay Karthick",
    jobTitle: "Software Engineer",
    location: "Chennai, India",
    company: "Agilysis",
    testimonial: `I’ve had the pleasure of working with him and can confidently say he is both highly professional and genuinely easy to collaborate with. He approaches every project with a strong sense of responsibility and consistently delivers quality work.What stands out most is his open-minded attitude, he welcomes feedback. He works collaboratively and  communicates clearly`,
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/Ak.png",
  },
];

export const awards: achievement[] = [
  {
    title: "Physics Symposium Medalist",
    subTitle: "Won district‑level bronze medals in school physics symposium.",
    year: "2017",
    company: "SBMHSS",
    icon: IoLogoElectron,
    type: "award",
  },
  {
    title: "Placement Coordinator",
    company: "RKM Vivekananda College",
    year: "2020–2021",
    subTitle:
      "Led placement activities and helped peers navigate hiring processes and opportunities.",
    icon: HiOutlineUsers,
    type: "highlight",
  },
  {
    title: "Student Representative",
    company: "RKM Vivekananda College",
    year: "2020–2021",
    subTitle:
      "Served as class representative for a year, coordinating between students and faculty and helping resolve academic and administrative issues.",
    icon: HiOutlineUserGroup,
    type: "highlight",
  },
  {
    title: "Ranked 1st in Department",
    company: "RKM Vivekananda College",
    year: "2018–2021",
    subTitle:
      "Graduated as the top-ranked student in my Computer Science department, with a consistent track record of academic excellence and leadership.",
    icon: HiOutlineAcademicCap,
    type: "highlight",
  },
  {
    title: "Star of the Quarter",
    company: "Noac Technology Solutions",
    year: "2024",
    subTitle:
      "Got recognised for outstanding performance for the quarter Q1 2023 - 2024",
    icon: HiOutlineStar,
    type: "award",
  },
  {
    title: "AI Hackathon · Paperflite",
    company: "Paperflite",
    year: "2024",
    subTitle:
      "Co‑created a CLI tool for front end that auto generated unit tests using Gemini 3.1.",
    icon: HiOutlineCodeBracketSquare,
    type: "award",
  },
  {
    title: "Milestone Achiever · TCS AI Hackathon",
    company: "Tata Consultancy Services",
    year: "2025",
    subTitle:
      "Built AI-driven workflows for the Lloyds Banking Group project, integrating MCP servers and tools.",
    icon: HiOutlineFlag,
    type: "award",
  },
  {
    title: "Award for being a significant contributor",
    company: "Tata Consultancy Services",
    year: "2025",
    subTitle:
      "Got appreciation from the manager for making signifnificant impact on a short span of time, contrinuting to various deliverables",
    icon: HiOutlineBadgeCheck,
    type: "award",
  },
  {
    title: "Winner in Beyond the stack hackathon challenge",
    year: "2026",
    company: "Tata Consultancy Services",
    subTitle:
      "Winner in Fortnightly challenge in beyond the stack hackathon series",
    icon: HiOutlineTrophy,
    type: "award",
  },
];

export const album: Album[] = [
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image13.webp",
    title: "Perch",
    description: "A broken tree, two small witnesses",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image21.webp",
    title: "Skydance",
    description: "Scattered birds, turning the chaos into  skydance",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image12.webp",
    title: "P(J)oker",
    description: "Need to hear a joke ?",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image34.webp",
    title: "Big Bucket",
    description:
      "Glass stacked in circles, pretending it’s its own little planet",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image23.webp",
    title: "Heart's game",
    description: "one simple heart stealing the frame.",
  },

  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image22.webp",
    title: "Bird's watch",
    description: "A tiny lookout post for one very patient bird",
  },

  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image1.webp",
    title: "Golden hour",
    description: "Sunsets and shilloutes",
  },

  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image2.webp",
    title: "Purple",
    description: "Aubergine and purple",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image3.webp",
    title: "Concrete Grid",
    description: "Symmetric pattern and concrete chambers",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image6.webp",
    title: "Floodlights",
    description: "Steel and bulbs, staring back at the clouds",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image15.webp",
    title: "Mailboxes",
    description: "Letters and numbers pretending to sort out our mess",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image5.webp",
    title: "Clippings",
    description: "Color coded clips, hanging out to dry",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image32.webp",
    title: "Framed quiet",
    description:
      "Rust, grills, and a frame that’s seen more seasons than views",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image33.webp",
    title: "The Yellow Wall",
    description: "Yellow noise, blue pause, boxed into a perfect little frame",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image9.webp",
    title: "Valley",
    description: "Hills exhaling under a sky that can’t make up its mind",
  },

  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image17.webp",
    title: "Loose change",
    description: "Coins and notes, quietly keeping score in a corner drawer",
  },

  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image18.webp",
    title: "Fireflies",
    description: "Lights on the water, like fireflies that forgot to flicker",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image19.webp",
    title: "Boundaries",
    description:
      "One box for roots, one for ripeness, a neat border in between",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image20.webp",
    title: "The Blue house",
    description:
      "One blue house trying a little harder than the rest of the street",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image24.webp",
    title: "Old Stories",
    description:
      "Faded white, red doors, and a hallway full of leftover echoes",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image26.webp",
    title: "Entropy",
    description: "Order on paper, entropy in motion between stations",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image28.webp",
    title: "Stacked",
    description: "Color coded crates playing Tetris in the back of reality.",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image31.webp",
    title: "White town",
    description: "A small square of shade in a sunburnt wall",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image29.webp",
    title: "Red Threshold",
    description: "Weathered wood, and a threshold that’s seen it all",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image4.webp",
    title: "Borrowed light",
    orientation: "portrait",
    description: "A small flame holding back the dark",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image7.webp",
    title: "Sky on fire",
    orientation: "portrait",
    description: "The sky pretending it’s a canvas for once”",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image8.webp",
    title: "Gradient",
    orientation: "portrait",
    description: "who needs CSS for graidents",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image11.webp",
    title: "Jet smoke",
    orientation: "portrait",
    description: "Cyan skies and Jet smokes",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image16.webp",
    title: "Neon blocks",
    orientation: "portrait",
    description: "Geometry dressed up in blue and orange for the night shift",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image25.webp",
    title: "Symmetry",
    orientation: "portrait",
    description: "One person and a mirrored corridor",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image27.webp",
    title: "Blue tunnel",
    orientation: "portrait",
    description:
      "One person folded into a blue corridor, scrolling their way out",
  },

  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image30.webp",
    title: "Door 89",
    orientation: "portrait",
    description: "Dressed in white and accidental blue",
  },

  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image35.webp",
    title: "Sanctum Sanctorum",
    orientation: "portrait",
    description:
      "A tower of gods and colors, rising like a crown above the street",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image36.webp",
    title: "Cyan Facade",
    orientation: "portrait",
    description: "Weathered blue, small lock louder than the street",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/full/image37.webp",
    title: "Victorian Hall",
    description: "Ornate stone holding court under restless clouds",
    orientation: "portrait",
  },
];

export const processedAlbum: prcocessedimages[] = album.map((item) => ({
  title: item.title,
  orientation: item.orientation,
  description: item.description,
  ...getImageSet(item.img),
}));

export const roleModelsData: roleModels[] = [
  {
    name: "Steve Jobs",
    title: "Design thinking & minimalism",
    description: `While others chased features, he focused on solving real user problems. His obsession with simplicity and design shaped the modern Apple experience.`,
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/avatar/jobs.webp",
  },
  {
    name: "Cristiano Ronaldo",
    title: "Relentless under pressure",
    description: `Counted out time and again, yet he responds with performance. When the moment demands belief, he delivers.`,
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/avatar/cristiano.webp",
  },
  {
    name: "Bruce Lee",
    title: "Mastery through discipline",
    description: `Relentless focus. Constant refinement. His philosophy of “be like water” teaches adaptability without losing strength.`,
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/avatar/brucelee.webp",
  },
  {
    name: "Peter McKinnon",
    title: "Story-driven creativity",
    description: `Believes that an image without story is just noise. Creates not for algorithms, but for emotion and narrative. I owe one to him for inspiring me to shoot`,
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/avatar/mckinon.webp",
  },
  {
    name: "Lewis Hamilton",
    title: "Elite composure",
    description: `Pressure reveals character. Precision sustains dominance. He taught me that losing with composure can demand more strength than winning.`,
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/avatar/lewis.webp",
  },
  {
    name: "Christopher Nolan",
    title: "Structured creativity at scale",
    description: `Often known for complexity and grandeur, yet at the heart of his films are human emotions like love, loyalty, betrayal. He uses scale not to impress, but to intensify feeling. That is mastery.`,
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/avatar/nolan.webp",
  },
];
