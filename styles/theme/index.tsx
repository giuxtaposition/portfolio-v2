import { extendTheme } from '@chakra-ui/react'

export const globalTheme = extendTheme({
  styles: {
    global: (props: any) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'light' ? '#F2F2F2' : 'gray.800',
      },
    }),
  },
})
