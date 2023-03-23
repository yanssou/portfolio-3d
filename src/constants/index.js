// a modifier pour modifier l'affichage des informations sur le site
import {
    medianis,
    aws,
    angular,
    sorbonne,
    etna,
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
    docker,
    grinlive,
    bank,
    threejs,
    mysql
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "À propos",
    },
    {
      id: "work",
      title: "Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur Web",
      icon: web,
    },
    {
      title: "Développeur Mobile",
      icon: mobile,
    },
    {
      title: "Développeur Backend",
      icon: backend,
    },
    {
      title: "Anglais C1",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "aws",
      icon: aws,
    }
  ];
  
  const experiences = [
    {
      title: "Développeur Web et Mobile",
      company_name: "GrinLive",
      icon: grinlive,
      iconBg: "#383E56",
      date: "Sep 2022 - en cours",
      points: [
        "Développement d'une application de conférence en temps réel innovante et nouvelle sur le marché en React Native et en utilisant le WebRTC.",
        "Mise en place d'un serveur avec nginx et OVH afin d'héberger un site web de conférences en temps réel.",
        "Création et gestion d'un site web en ReactJS permettant la mise en place de conférences en temps réel, gestion d'une base de données d'utilisateurs avec mySQL.",
      ],
    },
    {
      title: "Master Architecte Logiciel et Développement",
      company_name: "ETNA",
      icon: etna,
      iconBg: "#383E56",
      date: "Oct 2022 - en cours",
      points: [
        "Site web (framework Angular) et application mobile (Flutter) d'un e-commerce. Gestion des produits et des utilisateurs a à l'aide d'une API REST (Node JS, Express, JWT) et une base de données (MySQL) et déploiement à l'aide de Docker, AWS et Terraform.",
      ],
    },
    {
      title: "Master Architecte Logiciel et Développement",
      company_name: "Sorbonne Université",
      icon: sorbonne,
      iconBg: "#383E56",
      date: "Oct 2022 - en cours",
      points: [
        "Gestion de l'intelligence artificielle d'un groupe de personnages dans un petit jeu en Python à l'aide de pyGame (gestion de boucles, stratégies, comportements, adaptation).",
        "Création d'un jeu vidéo jouable directement sur le navigateur à l'aide de HTML, Javascript et CSS (gestion de la vélocité, gravité, keymapping)."
      ],
    }
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
      name: "Landing Page pour une banque en ligne",
      description:
        "Application web réalisée en React et TailwindCSS. Il s'agit d'un site web factice pour une banque en ligne. Le site est entièrement responsive et moderne. Il permet à l'utilisateur de découvrir les caractéristiques de la banque pas à pas au fur et à mesure qu'il navigue sur le site.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: bank,
      source_code_link: "https://github.com/yanssou/responsive-modern-bank-website",
    },
    {
      name: "Landing Page pour une agence de marketing digital",
      description:
        "Application web réalisée en React et TailwindCSS. Il s'agit d'un site web factice pour une agence de marketing digital. Le site est entièrement responsive et moderne. Il permet à l'utilisateur de découvrir les caractéristiques de l'agence pas à pas au fur et à mesure qu'il navigue sur le site. Une interaction avec l'utilisateur est mise en place afin de lui proposer une expérience agréable.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: medianis,
      source_code_link: "https://github.com/yanssou/digital-marketing-agency-website",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };