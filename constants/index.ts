import { AiTwotoneThunderbolt } from 'react-icons/ai'
import { FaStore, FaDatabase } from 'react-icons/fa'
import { BsGearFill } from 'react-icons/bs'
import { FiMail, FiHome, FiUser } from 'react-icons/fi'
import { FaLaptopCode } from 'react-icons/fa'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodeDotJs,
  SiFirebase,
  SiGit,
  SiVisualstudiocode,
  SiSass,
} from 'react-icons/si'

import sketchpad from '../public/images/projects/sketchpad.png'
import todo from '../public/images/projects/todo.png'
import portfolio_v1 from '../public/images/projects/portfolio-v1.png'
import portfolio_v2 from '../public/images/projects/portfolio-v2.png'
import bookworm from '../public/images/projects/bookworm.png'

export const NavLinks = [
  {
    name: 'Home',
    path: '/',
    icon: FiHome,
  },
  {
    name: 'About',
    path: '/about',
    icon: FiUser,
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: FaLaptopCode,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: FiMail,
  },
]

export const techStack = [
  {
    name: 'HTML5',
    icon: SiHtml5,
    color: 'orange.500',
  },
  {
    name: 'CSS',
    icon: SiCss3,
    color: 'blue.500',
  },
  {
    name: 'Javascript',
    icon: SiJavascript,
    color: 'yellow.400',
  },
  {
    name: 'Typescript',
    icon: SiTypescript,
    color: 'blue.400',
  },
  {
    name: 'React',
    icon: SiReact,
    color: 'cyan.400',
  },
  {
    name: 'NodeJs',
    icon: SiNodeDotJs,
    color: 'green.400',
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    color: 'yellow.500',
  },
  {
    name: 'VS Code',
    icon: SiVisualstudiocode,
    color: 'blue.500',
  },
  {
    name: 'Sass',
    icon: SiSass,
    color: 'pink.500',
  },
  {
    name: 'Git',
    icon: SiGit,
    color: 'orange.500',
  },
]

export const projectsFilters = [
  {
    name: 'All',
    icon: AiTwotoneThunderbolt,
  },
  {
    name: 'Frontend',
    icon: FaStore,
  },
  {
    name: 'Backend',
    icon: FaDatabase,
  },
  {
    name: 'Other',
    icon: BsGearFill,
  },
]

export const projects = [
  {
    title: 'Bookworm',
    img: bookworm,
    description: 'Library management site',
    projectLink: 'https://giuxtaposition.github.io/bookworm',
    projectGithub: 'https://github.com/giuxtaposition/bookworm',
    id: 'bookworm',
    category: ['Frontend', 'Backend'],
    details: {
      language: 'Typescript, Sass',
      framework: 'Express.js',
      library: 'React, Chakra UI, Node.js',
      database: '',
    },
  },
  {
    title: 'Portfolio-v2',
    img: portfolio_v2,
    description: 'Portfolio Site to showcase my projects (This Site)',
    projectLink: 'https://giuxtaposition.vercel.app/',
    projectGithub: 'https://github.com/giuxtaposition/portfolio-v2',
    id: 'portfolio-v2',
    category: ['Frontend', 'Backend'],
    details: {
      language: 'Typescript, Sass',
      framework: 'Express.js',
      library: 'React, Chakra UI, Framer Motion, Node.js',
      database: '',
    },
  },

  {
    title: 'Todo App',
    img: todo,
    description: 'A Todo List App',
    projectLink: 'https://giuxtaposition.github.io/todo-app/',
    projectGithub: 'https://github.com/giuxtaposition/todo-app',
    id: 'todo',
    category: ['Frontend', 'Backend'],
    details: {
      language: 'Javascript',
      framework: '',
      library: 'React, Material-UI',
      database: 'Firebase Firestore Database',
    },
  },
  {
    title: 'Portfolio-V1',
    img: portfolio_v1,
    description: 'Portofolio Site V1',
    projectLink: 'https://giuxtaposition.github.io/portfolio-v1',
    projectGithub: 'https://github.com/giuxtaposition/portfolio-v1',
    id: 'portofolio-v1',
    category: ['Frontend', 'Backend'],
    details: {
      language: 'Typescript, Sass',
      framework: 'Express.js',
      library: 'React, Node.js',
      database: '',
    },
  },
  {
    title: 'Sketchpad',
    img: sketchpad,
    description: 'A simple site to make some pixel art',
    projectLink: 'https://giuxtaposition.github.io/sketchpad/',
    projectGithub: 'https://github.com/giuxtaposition/sketchpad',
    id: 'sketchpad',
    category: ['Frontend'],
    details: {
      language: 'Javascript',
      framework: '',
      library: 'React',
      database: '',
    },
  },
]
