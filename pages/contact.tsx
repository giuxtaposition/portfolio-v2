import Head from 'next/head'
import { VStack, Heading, Box } from '@chakra-ui/react'
import ContactForm from '../components/ContactForm'
import { MotionBox } from '../components/motion'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Box
        className='contact-border'
        boxShadow='lg'
        borderRadius={8}
        p={1}
        bgGradient='linear(to-r, purple.300, purple.400, blue.400)'
      >
        <VStack p={8} className='contact-form'>
          <Heading
            bgGradient='linear(to-r, purple.300, purple.400, blue.400)'
            bgClip='text'
          >
            Contact Me!
          </Heading>
          <MotionBox
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <ContactForm />
          </MotionBox>
        </VStack>
      </Box>
    </>
  )
}
