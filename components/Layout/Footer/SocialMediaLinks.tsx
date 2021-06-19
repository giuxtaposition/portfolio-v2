import {
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaEnvelope } from 'react-icons/fa'

const SocialMediaLinks: React.FC = (props: ButtonGroupProps) => (
  <ButtonGroup variant='ghost' color='gray.600' {...props}>
    <IconButton
      _hover={{
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue('purple.600', 'purple.300'),
      }}
      isRound={true}
      as='a'
      href='https://github.com/giuxtaposition'
      aria-label='GitHub'
      icon={<FaGithub fontSize='20px' />}
    />
    <IconButton
      _hover={{
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue('purple.600', 'purple.300'),
      }}
      isRound={true}
      as='a'
      href='mailto:yg97.cs@gmail.com'
      aria-label='Email'
      icon={<FaEnvelope fontSize='20px' />}
    />
  </ButtonGroup>
)
export default SocialMediaLinks
