import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import { project } from './types'

const ProjectsPanel: React.FC<{ projects: project[] }> = ({ projects }) => {
  return (
    <Box w='100%' mx='auto' mb={6} maxW='3xl'>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} mt={8}>
        {projects.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ProjectsPanel
