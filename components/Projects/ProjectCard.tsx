import React from 'react'
import {
  Stack,
  Text,
  useColorModeValue,
  Link,
  Heading,
  Wrap,
  WrapItem,
  Badge,
  useDisclosure,
} from '@chakra-ui/react'

import ProjectModal from './ProjectModal'
import Image from 'next/image'

import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { project } from './types'
import { MotionFlex } from '../motion'

const ProjectCard: React.FC<{ project: project }> = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.stopPropagation()
  }

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { transition },
    },
  }

  return (
    <>
      <ProjectModal
        title={project.title}
        category={project.category}
        details={project.details}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Stack
        as='button'
        height='20em'
        width='full'
        minW='20em'
        onClick={onOpen}
        spacing={5}
        padding={5}
        direction='column'
        alignItems='center'
        borderRadius='md'
        borderWidth={0.5}
        borderColor={useColorModeValue('gray.300', 'gray.700')}
        justifyContent='center'
      >
        <MotionFlex
          width='full'
          position='relative'
          borderRadius='md'
          alignSelf='center'
          height='full'
          variants={thumbnailVariants}
        >
          <Image
            alt={project.title}
            src={project.img}
            layout='fill'
            className='next-image next-image---contained next-image---hover'
          />
        </MotionFlex>

        <Stack
          width='full'
          spacing={2}
          direction='column'
          alignSelf='start'
          alignItems='start'
          justifyContent='space-between'
        >
          <Stack width='full' spacing={1} direction='column' alignItems='start'>
            <Stack direction='row' alignItems='center'>
              <Heading as='strong' size='xs' textAlign='left'>
                {project.title}
              </Heading>

              {project.projectGithub ? (
                <Link
                  href={project.projectGithub}
                  title='See the project on GitHub'
                  isExternal
                  aria-label='See project on GitHub'
                  onClick={onLinkClick}
                >
                  <AiFillGithub>{project.projectGithub}</AiFillGithub>
                </Link>
              ) : null}

              {project.projectLink ? (
                <Link
                  href={project.projectLink}
                  title='See project live version'
                  isExternal
                  aria-label='See project live version'
                  onClick={onLinkClick}
                >
                  <AiOutlineLink>{project.projectLink}</AiOutlineLink>
                </Link>
              ) : null}
            </Stack>

            <Wrap spacing={1} marginBottom='auto'>
              {project.category.map(category => (
                <WrapItem key={category}>
                  <Badge variant='subtle' colorScheme='purple'>
                    {category}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>

          <Text size='sm' variant='regular' textAlign='left'>
            {project.description}
          </Text>
        </Stack>
      </Stack>
    </>
  )
}

export default ProjectCard
