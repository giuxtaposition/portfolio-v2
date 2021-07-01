import Head from 'next/head'
import React, { useMemo } from 'react'
import {
  Stack,
  Box,
  Spinner,
  Heading,
  HStack,
  Tabs,
  TabPanel,
  TabPanels,
  useColorMode,
} from '@chakra-ui/react'
import ProjectsFilters from '../components/Projects/ProjectsFilters'
import ProjectsPanel from '../components/Projects/ProjectsPanel'
import { projectsFilters } from '../constants'
import { project } from '../components/Projects/types'
import { useApolloClient, useSubscription, useQuery } from '@apollo/client'
import { ALL_PROJECTS, PROJECT_ADDED } from '../queries'

export default function Projects({}) {
  const client = useApolloClient()
  const { data, loading, error } = useQuery(ALL_PROJECTS)
  const { colorMode, toggleColorMode } = useColorMode()

  const BoxColor = useMemo(() => {
    if (colorMode === 'light') {
      return 'gray.800'
    } else {
      return 'gray.200'
    }
  }, [colorMode])

  // Listen for new projects and update cache when subscription data arrives
  const updateCacheWith = (addedProject: any) => {
    const includedIn = (set: any, object: any) =>
      set.map((p: any) => p.id).includes(object.id)

    // Check that added project is not included in the current store
    const dataInStore = client.readQuery({ query: ALL_PROJECTS })
    if (!includedIn(dataInStore.allProjects, addedProject)) {
      client.writeQuery({
        query: ALL_PROJECTS,
        data: { allProjects: dataInStore.allProjects.concat(addedProject) },
      })
    }
  }

  useSubscription(PROJECT_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      const addedProject = subscriptionData.data.projectAdded
      updateCacheWith(addedProject)
    },
  })

  if (loading) {
    return (
      <div>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.300'
          color='purple.500'
          size='xl'
        />
      </div>
    )
  }

  if (error) {
    console.error(error)
    return null
  }

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

  const projects = data.allProjects

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
              bg={BoxColor}
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
                    projects={projects.filter((project: any) =>
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
