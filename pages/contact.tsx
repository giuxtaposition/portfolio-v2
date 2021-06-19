import Head from 'next/head'
import { VStack, Heading } from '@chakra-ui/react'
import ContactForm from '../components/ContactForm'
import { MotionBox } from '../components/motion'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <VStack p={8} borderWidth={1} borderRadius={8} boxShadow='lg'>
        <Heading>Contact Me!</Heading>
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
    </>
  )
}
