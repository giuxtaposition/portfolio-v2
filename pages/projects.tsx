import Head from 'next/head'
import React from 'react'
import {
  Stack,
  Box,
  useColorModeValue,
  Heading,
  HStack,
  Tabs,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'
import ProjectsFilters from '../components/Projects/ProjectsFilters'
import ProjectsPanel from '../components/Projects/ProjectsPanel'
import { projectsFilters, projects } from '../constants'
import { project } from '../components/Projects/types'

export default function Projects() {
  const handleTabFilter = (project: project, tab: string) => {
    if (tab === 'All') {
      return project
    }

    for (const category of project.category) {
      if (category === tab) {
        return project
      }
    }
  }

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Stack>
        {/*Title*/}
        <Heading
          mt={10}
          mb={6}
          fontSize='3xl'
          lineHeight='shorter'
          fontWeight='bold'
          textAlign='center'
        >
          <Box as='span' display='inline-block' position='relative'>
            Projects
            <Box
              as='span'
              display='block'
              position='absolute'
              bg={useColorModeValue('gray.800', 'gray.200')}
              w='100%'
              h='2px'
              bottom={-2}
            />
          </Box>
        </Heading>

        <HStack>
          {/*Filters*/}
          <Tabs
            variant='soft-rounded'
            colorScheme='blue'
            align='center'
            w='100%'
            defaultIndex={0}
            isLazy
          >
            <ProjectsFilters />

            {/*Projects*/}
            <TabPanels minHeight={'45vh'}>
              {projectsFilters.map((tab, index) => (
                <TabPanel py={4} key={index}>
                  <ProjectsPanel
                    projects={projects.filter(project =>
                      handleTabFilter(project, tab.name)
                    )}
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </HStack>
      </Stack>
    </>
  )
}
