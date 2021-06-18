import { IconType } from 'react-icons/lib'
export interface project {
  title: string
  img: string
  description: string
  projectLink: string
  projectGithub: string
  id: string
  category: string[]
  details: {
    language: string
    framework: string
    library: string
    database: string
  }
}

export interface filterTab {
  filter: string
  icon: IconType
}

export interface projectDetails {
  icon: IconType
  title: string
  value: string
}

export interface projectModal {
  title: string
  category: string[]
  details: {
    language: string
    framework: string
    library: string
    database: string
  }
  isOpen: boolean
  onClose: () => void
}
