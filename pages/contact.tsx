import Head from 'next/head'
import { VStack, Heading } from '@chakra-ui/react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <VStack p={8} borderWidth={1} borderRadius={8} boxShadow='lg'>
        <Heading>Contact Me!</Heading>
        <ContactForm />
      </VStack>
    </>
  )
}
