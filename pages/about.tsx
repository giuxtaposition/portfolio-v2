import Head from 'next/head'
import React from 'react'
import { VStack, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import TechStack from '../components/TechStack'
import { MotionBox, MotionStack } from '../components/motion'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <VStack justifyContent='center' alignItems='center'>
        {/* Intro */}

        <MotionStack
          mb={6}
          textAlign='center'
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
        >
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
        </MotionStack>

        {/*Tech Stack*/}
        <VStack>
          <Heading color={useColorModeValue('purple.600', 'purple.300')}>
            Tech Stack
          </Heading>
          <Text py={2}>
            A list of my favorite tools and technologies that I use on a regular
            basis.
          </Text>
          <MotionBox
            initial={{
              translateY: 80,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <TechStack />
          </MotionBox>
        </VStack>
      </VStack>
    </>
  )
}
