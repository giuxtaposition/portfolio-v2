import { Flex } from '@chakra-ui/react'

import Header from './Header'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <Flex direction='column' minHeight='100vh'>
      <Header />
    </Flex>
  )
}
