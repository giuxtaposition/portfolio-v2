import NextLink from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { Link as ChakraLink, useColorMode } from '@chakra-ui/react'

import { LinkProps } from './types'
import { useMemo } from 'react'

export default function Link({ href, children, ...rest }: LinkProps) {
  const router = useRouter()

  const isActive = router.pathname === href

  const { colorMode, toggleColorMode } = useColorMode()

  const activeLinkColor = useMemo(() => {
    if (colorMode === 'light') {
      return 'purple.600'
    } else {
      return 'purple.300'
    }
  }, [colorMode])

  return (
    <NextLink href={href} as={process.env.BACKEND_URL + href}>
      <ChakraLink
        href={href}
        color={isActive ? activeLinkColor : ''}
        fontWeight={isActive ? 700 : 500}
        {...rest}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}
