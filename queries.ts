import { gql } from '@apollo/client'

export const ALL_PROJECTS = gql`
  query {
    allProjects {
      title
      img
      description
      projectLink
      projectGithub
      category
      id
      details {
        language
        framework
        library
        database
      }
    }
  }
`

export const PROJECT_ADDED = gql`
  subscription {
    projectAdded {
      title
      img
      description
      projectLink
      projectGithub
      category
      id
      details {
        language
        framework
        library
        database
      }
    }
  }
`
