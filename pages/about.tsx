import Head from 'next/head'
import React from 'react'
import { VStack, Box, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import TechStack from '../components/TechStack'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <VStack
        justifyContent='center'
        alignItems='center'
        spacing={2}
        h='calc(100vh - 6em)'
      >
        {/* Intro */}
        <VStack mb={6}>
          <Heading p={1} color={useColorModeValue('purple.600', 'purple.300')}>
            Let Me Introduce Myself
          </Heading>
          <Text>
            Hi! I&apos;m Giulia and I like building things that live on the
            internet.
          </Text>
          <Text>My field of Interest are Web and Mobile Development.</Text>
          <Text>
            Strong Believer of the Open-source-software movement! Let&apos;s
            make something amazing!
          </Text>
        </VStack>

        {/*Tech Stack*/}
        <VStack>
          <Heading color={useColorModeValue('purple.600', 'purple.300')}>
            Tech Stack
          </Heading>
          <Text py={2}>
            A list of my favorite tools and technologies that I use on a regular
            basis.
          </Text>
          <Box>
            <TechStack />
          </Box>
        </VStack>
      </VStack>
    </>
  )
}
