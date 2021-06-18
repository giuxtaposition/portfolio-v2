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
    name: 'Visual Studio Code',
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
    title: 'Sketchpad',
    img: '/images/projects/sketchpad.png',
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
  {
    title: 'Todo App',
    img: '/images/projects/todo.png',
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
    title: 'Portfolio Site',
    img: '/images/projects/portfolio-v1.png',
    description: 'Portofolio Site V1',
    projectLink: 'https://giuxtaposition.github.io/portfolio-v1',
    projectGithub: 'https://github.com/giuxtaposition/portfolio-v1',
    id: 'portofolio-v1',
    category: ['Frontend', 'Backend'],
    details: {
      language: 'Typescript, Sass',
      framework: 'Express.js',
      library: 'React, Chakra UI, Node.js',
      database: '',
    },
  },
]
