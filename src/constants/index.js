import {
  firebase,
  next,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  figma,
  clm,
  portfolio,
  africa,
  threejs,
  instagram,
  twitter,
  linkedin,
  github2,
  angular,
  adv,
  lolo,
  lgs,
  view,
  cobweb,
  phiresky,
  logo,
  freelance,
  cobweb2
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    title: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/lolo_prilo"
  },
  {
    title: "twitter",
    icon: twitter,
    link: "https://www.twitter.com/ProsperLolo"
  },
  {
    title: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/prosperlolo"
  },
  {
    title: "github",
    icon: github2,
    link: "https://github.com/Prilo-1010"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  }, 
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "figma",
    icon: figma,
  },
]


const experiences = [
  {
    title: "Javascript Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#1e1e1e",
    date: "March 2020 - Jul 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer & UI Designer",
    company_name: "Cobweb Developers",
    icon: cobweb,
    iconBg: "#030502",
    date: "Aug 2021 - Nov 2022",
    points: [
      "Create and develope user interfaces for web and mobile applications.",
      "Collaborates with other designers, developers, and stakeholders to ensure the design meets business requirements and aligns with brand identity.",
      "Conducts user research to understand user needs and behaviors.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#1e1e1e",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining full-stack applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Collaborates with the team to meet business requirements.",
      "Stays up to date with latest trends and technologies in the industry.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Phiresky",
    icon: phiresky,
    iconBg: "#fff",
    date: "Sep 2022 - Present",
    points: [
      "Designs user interfaces for web and made them responsive.",
      "Conducts user research to understand the target audience.",
      "Develops wireframes and prototypes to test interface design.",
      "Collaborates with the team to ensure design meets business requirements and brand identity.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Les Grand Services",
    description:
      "Web-based platform that provide a way for entrepreneurs and businesses to outsource various tasks and projects. Whether you need graphic design, or any other service.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lgs,
    source_code_link: "https://lesgrandservices.netlify.app/",
  },
  {
    name: "Lolo V",
    description:
      "Website for Software consultant company, they rovide a way for entrepreneurs and businesses to outsource various tasks and projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: lolo,
    source_code_link: "https://www.prosperlolo.com/",
  },
  {
    name: "ADV",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: adv,
    source_code_link: "https://www.prosperlolo.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "Portfolio website to showcase your skills and capabilities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://www.prosperlolo.com/",
  },
  {
    name: "Africa AI",
    description:
      "An illustration of africa made with the latest technology.",
    tags: [
      {
        name: "Midjourney",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      
    ],
    image: africa,
    source_code_link: "https://www.prosperlolo.com/",
  },
  {
    name: "C'est le meme",
    description:
      "Logo for a meme page, they make both french and english memes.",
    tags: [
      {
        name: "Illustrator",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: clm,
    source_code_link: "https://www.prosperlolo.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };