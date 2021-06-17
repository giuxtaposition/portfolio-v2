import React from 'react'
import { Heading } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Heading
      fontSize='4xl'
      fontWeight='bold'
      bgGradient='linear(to-b, purple.500, blue.500)'
      bgClip='text'
    >
      GY.
    </Heading>
  )
}
export default Logo
