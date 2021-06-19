import { Flex, Center } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  const [isLargerThan450] = useMediaQuery('(min-width: 450px)')
  return (
    <Flex direction='column' minHeight='100vh'>
      <Header />

      <Center
        as='main'
        px={`${isLargerThan450 ? '8' : '4'}`}
        py='4'
        w='100%'
        flex='1 1 auto'
      >
        {children}
      </Center>

      <Footer />
    </Flex>
  )
}
