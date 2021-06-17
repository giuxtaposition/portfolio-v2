import React from 'react'
import { TabList } from '@chakra-ui/react'
import FilterTab from './FilterTab'
import { projectsFilters } from './../../constants'

const ProjectsFilters: React.FC = () => {
  return (
    <TabList display='flex' flexWrap='wrap'>
      {projectsFilters.map(filter => (
        <FilterTab filter={filter.name} icon={filter.icon} key={filter.name} />
      ))}
    </TabList>
  )
}
export default ProjectsFilters
