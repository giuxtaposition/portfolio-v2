import {
  Box,
  BoxProps,
  Stack,
  SlideFade,
  StackProps,
  Flex,
  FlexProps,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
export type Props = PropsWithChildren<{}>

export const MotionBox = motion<BoxProps>(Box)
export const MotionStack = motion<StackProps>(Stack)
export const MotionFlex = motion<FlexProps>(Flex)

export const PageSlideFade = ({ children }: Props) => {
  return <SlideFade in>{children}</SlideFade>
}

export const staggerVariants = {
  initial: {
    opacity: 0,
    translateY: -20,
  },
  enter: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const StaggerChildren = ({ children }: Props) => {
  return (
    <MotionBox
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      variants={staggerVariants}
    >
      {children}
    </MotionBox>
  )
}
