import Head from 'next/head'
import {
  Stack,
  Circle,
  Box,
  Text,
  useColorModeValue,
  Button,
  Flex,
} from '@chakra-ui/react'
import React from 'react'
import Link from '../components/Layout/Header/Link'
import Image from 'next/image'
import Avatar from '../public/images/avatar.png'

export const ChakraNextImage = (props: any) => {
  const { src, alt, ...rest } = props
  return (
    <Box position='relative' {...rest}>
      <Image objectFit='cover' layout='fill' src={src} alt={alt} />
    </Box>
  )
}

export default function Home() {
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
        <Box>
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
        </Box>

        {/* Avatar */}
        <Box>
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
        </Box>
      </Stack>
    </>
  )
}
