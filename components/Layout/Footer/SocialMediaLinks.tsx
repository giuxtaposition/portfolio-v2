import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaEnvelope } from 'react-icons/fa'

const SocialMediaLinks: React.FC = (props: ButtonGroupProps) => (
  <ButtonGroup variant='ghost' color='gray.600' {...props}>
    <IconButton
      as='a'
      href='https://github.com/giuxtaposition'
      aria-label='GitHub'
      icon={<FaGithub fontSize='20px' />}
    />
    <IconButton
      as='a'
      href='mailto:yg97.cs@gmail.com'
      aria-label='Email'
      icon={<FaEnvelope fontSize='20px' />}
    />
  </ButtonGroup>
)
export default SocialMediaLinks
