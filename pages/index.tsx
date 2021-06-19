import Head from 'next/head'
import {
  Stack,
  Circle,
  Text,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import Link from '../components/Layout/Header/Link'
import Image from 'next/image'
import Avatar from '../public/images/avatar.png'
import { MotionBox } from '../components/motion'

export default function Home() {
  const animationDuration = 0.5
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Stack
        direction={['column', 'row']}
        justifyContent='center'
        alignItems='center'
        p={8}
        w='100%'
      >
        {/* Intro */}
        <MotionBox
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: animationDuration,
            },
          }}
        >
          <Text fontSize='5xl' fontWeight='semibold'>
            Hi, I am
          </Text>
          <Text
            fontSize='7xl'
            fontWeight='bold'
            bgGradient='linear(to-r, purple.600, blue.500, purple.300)'
            bgClip='text'
          >
            Giulia Ye
          </Text>
          <Text color={useColorModeValue('gray.800', 'gray.200')} fontSize='xl'>
            Full Stack Developer and an open source lover from Italy!
          </Text>
          <Link href='/contact' _hover={{ textDecoration: 'none' }}>
            <Button
              mt={8}
              bg={useColorModeValue('purple.300', 'purple.600')}
              _hover={{
                bg: useColorModeValue('gray.700', 'gray.200'),
                color: useColorModeValue('purple.300', 'purple.600'),
              }}
            >
              Contact Me
            </Button>
          </Link>
        </MotionBox>

        {/* Avatar */}
        <MotionBox
          initial={{
            translateX: 150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: animationDuration,
            },
          }}
        >
          <Circle
            position='relative'
            bg='transparent'
            w='25em'
            h='25em'
            alignSelf='flex-end'
          >
            <Image
              className='next-image next-image---contained'
              layout='fill'
              src={Avatar}
              alt='avatar'
            />
          </Circle>
        </MotionBox>
      </Stack>
    </>
  )
}
