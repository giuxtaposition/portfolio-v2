import { Box, Stack, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import Copyright from './Copyright'
import Logo from './Logo'
import SocialMediaLinks from './SocialMediaLinks'

const Footer: React.FC = () => {
  return (
    <footer>
      <Box
        as='footer'
        role='contentinfo'
        mx='auto'
        py={2}
        px={{ base: '4', md: '8' }}
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.900', 'gray.100')}
        boxShadow='lg'
      >
        <Stack>
          <Stack
            direction='row'
            spacing='4'
            align='center'
            justify='space-between'
          >
            <Logo />
            <SocialMediaLinks />
          </Stack>
          <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
        </Stack>
      </Box>
      <Box h={1} bgGradient='linear(to-r, purple.500, blue.500)' />
    </footer>
  )
}

export default Footer
