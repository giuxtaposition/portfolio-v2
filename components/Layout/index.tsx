import { Flex, Container, Center } from '@chakra-ui/react'

import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <Flex direction='column' minHeight='100vh'>
      <Header />

      <Center as='main' px={8} w='100%' flex='1 1 auto'>
        {children}
      </Center>

      <Footer />
    </Flex>
  )
}
