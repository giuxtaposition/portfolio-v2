import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import { project } from './types'
import { MotionBox, StaggerChildren, PageSlideFade } from '../motion'

const ProjectsPanel: React.FC<{ projects: project[] }> = ({ projects }) => {
  return (
    <PageSlideFade>
      <StaggerChildren>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} mt={8}>
          {projects.map(project => (
            <MotionBox whileHover={{ y: -5 }} key={project.id}>
              <ProjectCard project={project} />
            </MotionBox>
          ))}
        </SimpleGrid>
      </StaggerChildren>
    </PageSlideFade>
  )
}

export default ProjectsPanel
