import { List, ListItem, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { techStack } from '../constants'
import { VscGithub } from 'react-icons/vsc'
import { SiNextDotJs } from 'react-icons/si'

const TechStack: React.FC = () => {
  return (
    <List
      display='grid'
      gridTemplateColumns='repeat(4, 1fr)'
      gridGap={6}
      margin='auto'
    >
      {techStack.map(tech => (
        <ListItem
          display='flex'
          flexDirection='column'
          textAlign='center'
          alignContent='center'
          key={tech.name}
        >
          <ListIcon
            w='3rem'
            h='3rem'
            marginInlineStart='auto'
            marginInlineEnd='auto'
            mb='0.5rem'
            transition='fill 500ms ease-in-out'
            as={tech.icon}
            _hover={{ fill: tech.color }}
          />
          {tech.name}
        </ListItem>
      ))}
      {/*Github Icon Custom Hover*/}
      <ListItem
        display='flex'
        flexDirection='column'
        textAlign='center'
        alignContent='center'
      >
        <ListIcon
          w='3rem'
          h='3rem'
          marginInlineStart='auto'
          marginInlineEnd='auto'
          mb='0.5rem'
          transition='opacity 500ms ease-in-out'
          as={VscGithub}
          _hover={{
            opacity: '0.5',
          }}
        />
        Github
      </ListItem>
      {/*Next.Js Icon Custom Hover*/}
      <ListItem
        display='flex'
        flexDirection='column'
        textAlign='center'
        alignContent='center'
      >
        <ListIcon
          w='3rem'
          h='3rem'
          marginInlineStart='auto'
          marginInlineEnd='auto'
          mb='0.5rem'
          transition='opacity 500ms ease-in-out'
          as={SiNextDotJs}
          _hover={{
            opacity: '0.5',
          }}
        />
        Next.Js
      </ListItem>
      {/*Custom Chakra UI Icon*/}
      <ListItem
        display='flex'
        flexDirection='column'
        textAlign='center'
        alignContent='center'
      >
        <ListIcon
          viewBox='0 0 24 24'
          w='3rem'
          h='3rem'
          marginInlineStart='auto'
          marginInlineEnd='auto'
          mb='0.5rem'
          transition='fill 500ms ease-in-out'
          fill='currentColor'
          _hover={{ fill: 'teal.400' }}
        >
          <path d='M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 00.164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 00-.151-.296H6.627a.187.187 0 01-.131-.32l8.18-8.123a.182.182 0 01.125-.056z' />
        </ListIcon>
        Chakra Ui
      </ListItem>
    </List>
  )
}

export default TechStack
