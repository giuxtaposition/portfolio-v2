import React from 'react'
import {
  Text,
  HStack,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  List,
  ModalCloseButton,
  Badge,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { AiFillTool, AiFillDatabase } from 'react-icons/ai'
import { MdLanguage, MdLibraryBooks } from 'react-icons/md'
import { projectDetails, projectModal } from './types'

const ProjectDetailsListItem: React.FC<projectDetails> = ({
  icon,
  title,
  value,
}) => {
  return (
    <ListItem color='dark'>
      <ListIcon as={icon} color='purple.400' />
      <Text as='strong'>{title}:</Text> {value}
    </ListItem>
  )
}

const ProjectModal: React.FC<projectModal> = ({
  title,
  category,
  details,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent marginX={5} backgroundColor='white.100'>
        <ModalHeader>
          <Text color='dark'>{title}</Text>
          <HStack spacing={1} mr={6} py={2}>
            {category.map(c => (
              <Badge
                variant='subtle'
                colorScheme='purple'
                px={2}
                py={1}
                fontSize='sm'
                fontWeight='600'
                rounded='md'
                _hover={{ bg: 'purple.600' }}
                key={c}
              >
                {c}
              </Badge>
            ))}
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing={3}>
            {details.language !== '' ? (
              <ProjectDetailsListItem
                icon={MdLanguage}
                title='Language'
                value={details.language}
              />
            ) : null}

            {details.framework !== '' ? (
              <ProjectDetailsListItem
                icon={AiFillTool}
                title='Framework'
                value={details.framework}
              />
            ) : null}

            {details.library !== '' ? (
              <ProjectDetailsListItem
                icon={MdLibraryBooks}
                title='Libraries'
                value={details.library}
              />
            ) : null}

            {details.database !== '' ? (
              <ProjectDetailsListItem
                icon={AiFillDatabase}
                title='Databases'
                value={details.database}
              />
            ) : null}
          </List>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}

export default ProjectModal
