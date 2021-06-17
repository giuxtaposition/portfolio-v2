import React, { useEffect, useState } from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import { project } from './types'

const ProjectsPanel: React.FC<{ projects: project[] }> = ({ projects }) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
      {projects.map(project => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </SimpleGrid>
  )
}

export default ProjectsPanel
