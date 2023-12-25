import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  twitter,
  quizup,
  sharespace
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "DS &  Algo",
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
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developemt",
    company_name: "Share Space",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Created and launched Share Space, a social media app utilizing the MERN stack, encompassing user post management, login/register capabilities, and robust authentication/authorization mechanisms to ensure utmost user privacy and data security.",
      "Implemented Material UI for a captivating interface and CORS to enable cross-origin resource sharing for seamless external service integration.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "App monitoring with Morgan middleware for detailed HTTP logging and troubleshooting.",
    ],
  },
  {
    title: "Automation",
    company_name: "Twitter Bot",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using Python and other related technologies of Selenium",
      "Engineered a Twitter automation bot utilizing Selenium, designed to address network connectivity challenges with the Internet Service Provider.",
      "Implemented seamless integration with Ookla for automated speed testing, providing users with accurate upload and download speed metrics in real-time.",
      "Developed a secure and efficient automation module for Twitter, enabling user login and dynamic tweeting capabilities to alert the Internet Service Provider in case of subpar network speeds.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Quiz Up",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrated OpenTrivia API to generate 10 random questions in each quiz session.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "NOTES",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rakteem proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rakteem does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rakteem optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Share Space",
    description:
      "Created Share Space with MERN stack: user-friendly post handling, secure login, Material UI design, CORS for integration, Morgan middleware for logging",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sharespace,
    source_code_link: "https://github.com/Rakteem007/ShareSpace_Client",
  },
  {
    name: "Twitter Bot",
    description:
      "A Selenium Twitter bot addressing ISP connectivity issues, integrated Ookla for speed tests, and created a secure automation module for proactive ISP alerts",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/Rakteem007/Twitter_bot",
  },
  {
    name: "Quiz-Up",
    description:
      "Created a quiz web app utilizing Express.js and EJS as the primary frameworks. Integrated OpenTrivia API to generate 10 random questions in each quiz session",
    tags: [
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "EJS",
        color: "yellow-text-gradient"
      }
    ],
    image: quizup,
    source_code_link: "https://github.com/Rakteem007/Quiz_UP",
  },
];

export { services, technologies, experiences, testimonials, projects };