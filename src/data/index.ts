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
  HiOutlineStar,
  HiOutlineCodeBracketSquare,
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D
} from "react-icons/hi2";

import { IoLogoElectron } from "react-icons/io5";

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
  title: `Welcome to <span class="text-indigo-500">Moa&apos;s </span> Portfolio`,
  punchLine: "Where interfaces meet intention.",
  shortDescription:
    "A Front-End Developer who is solving for scale. Building for users. Refining for impact.",
  longDescription: ` Hi, I&apos;m <span class="dark:text-white text-black">Moa</span>, a front-end developer with a passion for crafting seamless user interfaces that
                          blend form and function. I&apos;m keen on building products that
                          not only meet user needs but also delight them.`,
};
export const bio: BioType = {
  name: "Moa",
  title: "Front-End Developer",
  description:
    "I build scalable front-end systems where performance, structure, and user experience meet. From interactive learning platforms to real-world production environments, I focus on creating reliable, efficient, and maintainable interfaces.",
};

export const socialLinks: formField[] = [
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/christover-moa",
  },
  {
    name: "GitHub",
    value: "https://github.com/tophermoa",
  },
];

export const workExperiences: experience[] = [
  {
    company: "PT Digital Animasi Asia",
    role: "Front-End Developer",
    duration: "December 2020 - Present",
    description: [
      "Developed interactive learning content using vanilla JavaScript, including quizzes and informational modules.",
      "Integrated SCORM with Moodle-based LMS platforms for seamless learning content deployment.",
      "Designed reusable templates for interactive learning content to streamline future development.",
      "Conducted research on e-learning platforms to ensure compatibility with the company’s implemented system architecture.",
      "Performed vulnerability testing on all interactive learning templates using OWASP ZAP.",
      "Created, developed, and maintained the Moleawiz Web platform, an e-learning–based solution.",
      "Researched and optimized streaming processes within the e-learning platform to enable integration between Moodle and internal databases using SCORM APIs.",
      "Conducted penetration testing on the e-learning web platform using OWASP ZAP.",
      "Restructured data communication processes for the streaming feature within the e-learning platform to comply with SCORM API standards.",
    ],
  },
  {
    company: "Tongkonan Antapani Clinic",
    role: "Programmer Desktop",
    duration: "August 2018 - Mei 2019",
    description: [
      "Designed and developed a desktop-based system using Java (NetBeans IDE) for handling financial transactions and operational data.",
      "Built an integrated inventory tracking module for pharmaceutical stock management with accurate and structured data handling.",
      "Optimized data processing workflows, improving efficiency and minimizing human error in daily operations.",
    ],
  },
];

export const skills: skill[][] = [
  [
    {
      name: "HTML5",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "SCSS",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
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
  ],
  [
    {
      name: "React.js",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Vue.js",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Node.js",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "jQuery",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
    },
    {
      name: "Tailwind CSS",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Ant Design",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
    },
  ],
  [
    {
      name: "Redux",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
    {
      name: "Axios",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    },
    {
      name: "Bun",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
    },
    {
      name: "Vite",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Webpack",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
    },
    {
      name: "NPM",
      imagePath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    },
    {
      name: "AJAX",
      imagePath:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='55' font-family='sans-serif' font-weight='900' font-size='32' fill='%236B7280' text-anchor='middle' dominant-baseline='middle'>AJAX</text></svg>",
    },
  ],
];

export const educationItems: education[] = [
  {
    title: "Universitas Komputer Indonesia",
    subTitle: "2016 - 2020 · Informatics Engineering",
  },
  {
    title: "UNIKOM Student Representative Council",
    subTitle: "2018 - 2019 · Member of Commission II",
  },
  {
    title: "SMA Tarsisius Vireta Tangerang",
    subTitle: "2013 - 2016 · Science Major",
  },
];

export const interests: string[] = [
  "Frontend",
  "Technology",
  "UX",
  "Music",
  "Football",
  "Economics",
  "Finance",
  "Gaming",
  "Film",
  "Cars",
  "Fitness"
];

export const testimonials: testimonial[] = [
  {
    name: "Leelavathi Dhanabal",
    jobTitle: "Lead Software Engineer",
    location: "Chennai, India",
    company: "TCS",
    testimonial:
      "It is a great experience working with Moa, his dedication, postive attitude and commitment to delivering quality work truly stand out, he is very good when it comes to on time deliverables and maintaining good coordination with teams and clients.",
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
      "I worked with Moa and what stood out immediately was his genuine passion for coding. He enjoys digging into problems, understanding how things work, and finding clean solutions rather than just getting something to “work.” He’s reliable, easy to collaborate with, and takes real ownership of his work. Any team that values curiosity and solid engineering would benefit from having him.",
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/lavanya.png",
  },
  {
    name: "Nabeel Ahmed",
    jobTitle: "Lead Engineer",
    location: "Edinburg, Scotland",
    company: "Lloyds Bank",
    testimonial:
      "It was a pleasure working with Moa. He consistently demonstarted a strong desire to learn and took initiative in addressing key challenges. His technical expertise was evident across various tasks and readily provided thoughtful support. As the team lead. I value his his collaborative spirit, effective problem solving and the positive impact he had on our deliverables.",
  },
  {
    name: "JM Mcghee",
    jobTitle: "Software Engineer",
    location: "Edinburg, Scotland",
    company: "Lloyds Bank",
    testimonial:
      "It’s rare to come across an engineer who combines such eagerness to learn, strong attention to detail, and a genuine willingness to go the extra mile to find solutions. Moa is one of those engineers",
  },
  {
    name: "Steephen",
    jobTitle: "Software Engineer",
    location: "Chennai, India",
    company: "TCS",
    testimonial: `I had the opportunity to work closely with Moa on our project, and his front-end expertise consistently stood out. He has a strong eye for detail and a deep understanding of building responsive, user friendly interfaces.
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
    title: "Moleawiz Web Platform",
    subTitle: "Built and maintained an end-to-end e-learning platform (Moleawiz) with SCORM integration and streaming capabilities.",
    year: "2023-2024",
    company: "",
    icon: HiOutlineCodeBracketSquare,
    type: "highlight",
  },
  {
    title: "SCORM Integration Expertise",
    subTitle: "Successfully integrated SCORM content with Moodle-based LMS for seamless learning deployment.",
    year: "2020-now",
    company: "",
    icon: HiOutlineAcademicCap,
    type: "highlight",
  },
  {
    title: "Streaming Optimization",
    subTitle: "Optimized streaming architecture for LMS content delivery, improving performance and compatibility.",
    year: "2023-now",
    company: "",
    icon: IoLogoElectron,
    type: "highlight",
  },
  {
    title: "Security Testing",
    subTitle: "Conducted vulnerability and penetration testing using OWASP ZAP to ensure platform security.",
    year: "2022-2023",
    company: "",
    icon: HiOutlineShieldCheck,
    type: "highlight",
  },
  {
    title: "Reusable System / Template",
    subTitle: "Designed reusable interactive learning templates to accelerate development and maintain consistency.",
    year: "2020-now",
    company: "",
    icon: HiOutlineSquare3Stack3D,
    type: "highlight",
  },
  {
    title: "4+ Years Experience",
    subTitle: "4+ years experience building scalable frontend systems in e-learning environments.",
    year: "2020-now",
    company: "",
    icon: HiOutlineStar,
    type: "highlight",
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
    name: "Tom Lembong",
    title: "Strategic Thinking & Economic Insight",
    description: "He represents a forward-thinking mindset grounded in data and global awareness. From him, I value the ability to think critically about systems, adapt to economic change, and approach challenges with both analytical depth and pragmatic execution.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Thomas_Lembong_%28cropped%29.jpg",
  },
  {
    name: "Alex Ferguson",
    title: "Leadership, Discipline & Team Building",
    description: "His legacy reflects exceptional leadership through consistency, discipline, and the ability to build winning teams over time. I learn the importance of long-term vision, managing people effectively, and maintaining high standards in any environment.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Sir_Alex_Ferguson_2016.png",
  },
  {
    name: "Gita Wirjawan",
    title: "Lifelong Learning & Global Perspective",
    description: "He embodies intellectual curiosity and a global mindset. His approach encourages continuous learning, open dialogue, and the ability to connect ideas across disciplines to create meaningful impact.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Gita_Wirjawan_at_Global_Sustainable_Development_Congress%2C_Nottingham.jpg",
  },
  {
    name: "Christopher Nolan",
    title: "Structured creativity at scale",
    description: `Often known for complexity and grandeur, yet at the heart of his films are human emotions like love, loyalty, betrayal. He uses scale not to impress, but to intensify feeling. That is mastery.`,
    image:
      "https://cdn.jsdelivr.net/gh/gokul-369/digital-canvas/src/assets/avatar/nolan.webp",
  },
];

import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    title: "e-Learning LMS Web",
    description: "A platform for improving competency complete with a full Learning Management System (LMS) that can be accessed on Android, iOS, and Web-based devices. Features SCORM support.",
    image: "/projects/e-learning.png",
    galleryImages: [
      "/projects/e-learning-1.png",
      "/projects/e-learning-2.png",
      "/projects/e-learning-3.png",
      "/projects/e-learning-4.png"
    ],
    techStack: [
      { name: "React js", colorClass: "text-blue-400 bg-blue-400" },
      { name: "Redux", colorClass: "text-purple-400 bg-purple-400" },
      { name: "VITE", colorClass: "text-purple-500 bg-purple-500" },
      { name: "gulp", colorClass: "text-red-500 bg-red-500" }
    ],
    githubUrl: "https://github.com/tophermoa/e-Learning-LMS-Web"
  },
  {
    title: "PharmaStock",
    description: "A modern, responsive frontend User Interface template built for Pharmacy Inventory Management Systems. Features multiple dashboard screens.",
    image: "/projects/pharma-stock.png",
    galleryImages: [
      "/projects/pharma-stock-1.png",
      "/projects/pharma-stock-2.png",
      "/projects/pharma-stock-3.png",
      "/projects/pharma-stock-4.png"
    ],
    techStack: [
      { name: "React 18", colorClass: "text-blue-400 bg-blue-400" },
      { name: "Vite", colorClass: "text-purple-500 bg-purple-500" },
      { name: "React Router", colorClass: "text-red-400 bg-red-400" },
      { name: "Tailwind CSS", colorClass: "text-cyan-400 bg-cyan-400" }
    ],
    githubUrl: "https://github.com/tophermoa/pharma-stock"
  },
  {
    title: "Parallax Infographic Learning Content",
    description: "An interactive learning content format that presents information using smooth parallax effects during scrolling or page transitions.",
    image: "/projects/parallax.png",
    galleryImages: [
      "/projects/parallax-1.png",
      "/projects/parallax-2.png",
      "/projects/parallax-3.png",
      "/projects/parallax-4.png"
    ],
    techStack: [
      { name: "HTML", colorClass: "text-orange-500 bg-orange-500" },
      { name: "CSS", colorClass: "text-blue-500 bg-blue-500" },
      { name: "JavaScript", colorClass: "text-yellow-400 bg-yellow-400" },
      { name: "AOS.js", colorClass: "text-green-400 bg-green-400" }
    ],
    githubUrl: "https://github.com/tophermoa/Parallax-Infographic-Learning-Content"
  },
  {
    title: "Digital Comic Learning Content",
    description: "An interactive learning content format designed to help learners understand information through a story-driven comic experience.",
    image: "/projects/digital-comic.png",
    galleryImages: [
      "/projects/digital-comic-1.png",
      "/projects/digital-comic-2.png",
      "/projects/digital-comic-3.png",
      "/projects/digital-comic-4.png"
    ],
    techStack: [
      { name: "HTML", colorClass: "text-orange-500 bg-orange-500" },
      { name: "SCSS", colorClass: "text-pink-400 bg-pink-400" },
      { name: "vanilla JS", colorClass: "text-yellow-400 bg-yellow-400" },
      { name: "jQuery", colorClass: "text-blue-600 bg-blue-600" }
    ],
    githubUrl: "https://github.com/tophermoa/Digital-Comic-Learning-Content"
  },
  {
    title: "Q&A Checkpoint Learning Content",
    description: "An interactive learning content type that allows learners to answer a series of questions presented at each checkpoint.",
    image: "/projects/qna.png",
    galleryImages: [
      "/projects/qna-1.png",
      "/projects/qna-2.png",
      "/projects/qna-3.png",
      "/projects/qna-4.png"
    ],
    techStack: [
      { name: "HTML", colorClass: "text-orange-500 bg-orange-500" },
      { name: "CSS", colorClass: "text-blue-500 bg-blue-500" },
      { name: "JavaScript", colorClass: "text-yellow-400 bg-yellow-400" },
      { name: "JSON", colorClass: "text-slate-400 bg-slate-400" }
    ],
    githubUrl: "https://github.com/tophermoa/QnA-Checkpoint-Learning-Content"
  }
];
