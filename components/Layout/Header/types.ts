import { IconType } from 'react-icons'
import { PropsWithChildren } from 'react'
import { LinkProps as ChakraLinkProps } from '@chakra-ui/react'

export interface navlink {
  name: string
  path: string
  icon: IconType
  onClose?: () => void
}

export type LinkProps = ChakraLinkProps &
  PropsWithChildren<{
    href: string
    activeColor?: string
  }>
