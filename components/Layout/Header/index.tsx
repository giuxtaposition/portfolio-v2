import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Icon,
  Center,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import Logo from './Logo'
import { NavLinks } from '../../../constants'
import { navlink } from './types'
import Link from './Link'

const NavLink: React.FC<navlink> = ({ name, path, icon }) => (
  <Link
    href={path}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
      color: useColorModeValue('purple.600', 'purple.300'),
    }}
  >
    <Center>
      <Icon w={6} h={6} as={icon} mr={2} />
      {name}
    </Center>
  </Link>
)

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <Box h={1} bgGradient='linear(to-r, purple.500, blue.500)' />
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.900', 'gray.100')}
        px={4}
        py={2}
        boxShadow='lg'
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Mobile Hamburger */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* Logo */}
          <Logo />
          {/* Web Nav Links */}
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {NavLinks.map(link => (
              <NavLink
                key={link.name}
                name={link.name}
                path={link.path}
                icon={link.icon}
              />
            ))}
          </HStack>

          {/*Dark/Light Theme Button*/}
          <Flex alignItems={'center'}>
            <IconButton
              onClick={toggleColorMode}
              isRound={true}
              aria-label='switch-theme'
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </Flex>
        </Flex>

        {/* Mobile Nav Links */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {NavLinks.map(link => (
                <NavLink
                  key={link.name}
                  name={link.name}
                  path={link.path}
                  icon={link.icon}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </header>
  )
}

export default Header
