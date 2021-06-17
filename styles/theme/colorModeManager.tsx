import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  ChakraProviderProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { PropsWithChildren } from 'react'

export type Props = ChakraProviderProps &
  PropsWithChildren<{
    cookies: string
    children: ReactNode
  }>

export function Chakra({ cookies, children, ...rest }: Props) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager
  return (
    <ChakraProvider colorModeManager={colorModeManager} {...rest}>
      {children}
    </ChakraProvider>
  )
}

// also export a reusable function getServerSideProps
export function getServerSideProps({ req }: any) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  }
}
