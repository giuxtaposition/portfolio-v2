import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
  Textarea,
} from '@chakra-ui/react'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import contactService from './services/contactService'

const ContactForm: React.FC = () => {
  const toast = useToast()
  function validateName(value: string) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.length < 5) {
      error = 'Must be 5 characters or more'
    }
    return error
  }

  function validateEmail(value: string) {
    let error
    if (!value) {
      error = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address'
    }
    return error
  }

  function validateSubject(value: string) {
    let error
    if (!value) {
      error = 'Subject is required'
    } else if (value.length < 5) {
      error = 'Must be 5 characters or more'
    }
    return error
  }

  function validateMessage(value: string) {
    let error
    if (!value) {
      error = 'Message is required'
    } else if (value.length < 5) {
      error = 'Must be 5 characters or more'
    }
    return error
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false)

          const emailObject = {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          }

          let toastText = ''
          let toastType = ''

          contactService(emailObject).then(returnedResponse => {
            if (returnedResponse === 'success') {
              toastText = 'Email Sent Successfully'
              toastType = 'success'
            } else {
              toastText = 'Email Not Sent, please try again'
              toastType = 'error'
            }
          })

          toast({
            position: 'bottom',
            title: 'Notification',
            description: 'Email Sent Successfully!',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        }, 200)
      }}
    >
      {props => (
        <Form>
          {/* Name  Input Field */}
          <Field name='name' validate={validateName}>
            {({ field, form }: any) => (
              <FormControl
                isInvalid={form.errors.name && form.touched.name}
                isRequired
              >
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input {...field} id='name' placeholder='name' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Email  Input Field */}
          <Field name='email' validate={validateEmail}>
            {({ field, form }: any) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
                isRequired
                mt={6}
              >
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input {...field} id='email' placeholder='email' />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Subject  Input Field */}
          <Field name='subject' validate={validateSubject}>
            {({ field, form }: any) => (
              <FormControl
                isInvalid={form.errors.subject && form.touched.subject}
                isRequired
                mt={6}
              >
                <FormLabel htmlFor='subject'>Subject</FormLabel>
                <Input {...field} id='subject' placeholder='subject' />
                <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Message  Input Field */}
          <Field name='message' validate={validateMessage}>
            {({ field, form }: any) => (
              <FormControl
                isInvalid={form.errors.message && form.touched.message}
                isRequired
                mt={6}
                size='2em'
              >
                <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea
                  {...field}
                  id='message'
                  placeholder='message'
                  size='md'
                  resize='vertical'
                  maxLength='300'
                  h='4'
                />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button
            mt={6}
            width='full'
            colorScheme='purple'
            variant='outline'
            isLoading={props.isSubmitting}
            loadingText='Submitting'
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
export default ContactForm
