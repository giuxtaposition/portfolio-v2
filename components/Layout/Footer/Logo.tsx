import React from 'react'
import { Heading } from '@chakra-ui/react'
import Image from 'next/image'
const Logo = () => {
  return (
    <Heading
      fontSize='3xl'
      fontWeight='bold'
      bgGradient='linear(to-b, purple.600, purple.400, purple.300)'
      bgClip='text'
    >
      <Image src='/icon.svg' alt='Logo' width={42} height={42} />
      Giulia Ye.
    </Heading>
  )
}
export default Logo
