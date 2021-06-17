import { Flex, Container } from '@chakra-ui/react'

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

      <Container as='main' maxW='3xl' paddingX={8}>
        {children}
      </Container>

      <Footer />
    </Flex>
  )
}
