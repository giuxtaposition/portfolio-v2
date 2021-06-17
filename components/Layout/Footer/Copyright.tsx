import { Text, TextProps } from '@chakra-ui/layout'
import React from 'react'

const Copyright = ({ ...props }: TextProps) => {
  return (
    <Text fontSize='sm' {...props}>
      &copy; {new Date().getFullYear()} Web Site Built and Designed by Giulia
      Ye.
    </Text>
  )
}
export default Copyright
