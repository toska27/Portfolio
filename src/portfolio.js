import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const about = {
  name: "Nemanja Toskic",
  role: "Web Developer",
  desc: "With my first contact with a computer, I became interested in the world of technology and programming. One of the key reasons why I start to learn programming is my passion for problem-solving and logical thinking. As a beginner, I am eager to contribute to a dynamic team, demonstrate problem- solving skills, actively learn from experienced professionals while making a positive impact on the organization's success.",
};

const projects = [
  {
    id: 1,
    title: "Quotations",
    desc: "An application to display radnomly selected quotes from various fields.",
    stack: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS(Bootstrap)" },
      { id: 3, name: "PHP" },
      { id: 4, name: "txt File" },
    ],
    link: "https://github.com/toska27/Projects/tree/main/Quotations",
  },
  {
    id: 2,
    title: "Social network",
    desc: "An application that works on the principle of user profiles and tracking other profiles.",
    stack: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS(Bootstrap)" },
      { id: 3, name: "PHP" },
      { id: 4, name: "MySQL" },
    ],
    link: "https://github.com/toska27/Projects/tree/main/Social%20network",
  },
  {
    id: 3,
    title: "eVideo library",
    desc: "Application intended for keeping records of movie rentals.",
    stack: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS(Bootstrap)" },
      { id: 3, name: "PHP" },
      { id: 4, name: "Laravel" },
    ],
    link: "https://github.com/toska27/Projects/tree/main/eVideo%20library",
  },
  {
    id: 4,
    title: "Coffee machine",
    desc: "An application that works on the principle of a coffee machine.",
    stack: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS(Bootstrap)" },
      { id: 3, name: "JavaScript" },
    ],
    link: "https://github.com/toska27/Projects/tree/main/Coffee%20machine/Machine",
  },
  {
    id: 5,
    title: "E-commerce product page",
    desc: "An application that represents one side of an E-commerce site.",
    stack: [
      { id: 1, name: "HTML" },
      { id: 2, name: "SASS" },
      { id: 3, name: "JavaScript" },
    ],
    link: "https://github.com/toska27/Projects/tree/main/E-commerce%20product%20page",
  },
  {
    id: 6,
    title: "Food recipes",
    desc: "An application that can be used to view various food recipes.",
    stack: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "React" },
    ],
    link: "https://github.com/toska27/Food_recipes",
  },
  {
    id: 7,
    title: "Weather app",
    desc: "An application with which we can check the weather forecast in cities around the world.",
    stack: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "React" },
    ],
    link: "https://github.com/toska27/Weather_app",
  },
  {
    id: 8,
    title: "Blogs",
    desc: "An application for posting blogs, viewing blogs and profiles of other users.",
    stack: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS(Bootstrap)" },
      { id: 3, name: "PHP" },
      { id: 4, name: "MySQL" },
    ],
    link: "https://github.com/toska27/Blogs",
  },
];

const skills = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "PHP",
  },
  {
    id: 4,
    name: "JavaScript",
  },
  {
    id: 5,
    name: "React",
  },
  {
    id: 6,
    name: "Laravel",
  },
  {
    id: 7,
    name: "MySQL",
  },
  {
    id: 8,
    name: "SASS",
  },
  {
    id: 9,
    name: "Git",
  },
];

const contact = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/nemanja-toskic-543a34276/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    link: "https://github.com/toska27",
    icon: <FaGithub />,
  },
  {
    id: 3,
    link: "https://www.instagram.com/toskic_n/",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    link: "mailto:nemanjatoskic58@gmail.com",
    icon: <FaEnvelope />,
  },
];

export { projects, skills, about, contact };
