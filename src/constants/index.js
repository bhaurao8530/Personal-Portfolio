import {
    mobile,
    backend,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    mysql,
    git,
    postman,
    docker,
    meta,
    aspire,
    octanet,
    shopify,
    carrermyntra,
    crypto,
    tripguide,
    github,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "Java",
      icon: java,
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
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "Github",
      icon: github,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "postman",
      icon: postman,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Trainee (Internship)",
      company_name: "Aspire Technology Pvt Ltd",
      icon: aspire,
      iconBg: "#383E56",
      date: "June 2025 - Present",
      points: [
        "Designed and implemented responsive front-end interfaces using React.js, HTML, CSS, and JavaScript,enhancing user experience.",
        "Integrated and consumed RESTful APIs in React.js applications for seamless front-end and back-end communication.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Optimized, tested, and debugged React components for reliable and smooth application performance.",
      ],
    },
    {
      title: "Java Developer (Internship) ",
      company_name: "Techoctanet Private Limited",
      icon: octanet,
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Feb 2025",
      points: [
        "Created, maintained, and built reusable, efficient, and reliable Java code",
        "Implemented and tested RESTful APIs with Spring Boot to ensure seamless backend integration and performance.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Utilized Git for version control, enabling streamlined collaboration and efficient code management.",
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
      name: "Career Myntra Website",
      description:
        "Developed the ”About Us” page for the Career Myntra website using React.js, implementing responsive design and interactive components",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrermyntra,
      source_code_link: "https://github.com/bhaurao8530/About-Us-Page",
      demo_link: "https://careermyntra.com/" ,
    },
    {
      name: "Crypto Trading Platform",
      description:
        "Developed a full-stack crypto trading platform allowing users to register, log in securely, view real-time cryptocurrency prices, and perform buy/sell operations",
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
          name: "java",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/bhaurao8530/Crypto-Trading-Platform",
      demo_link: "" ,
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };