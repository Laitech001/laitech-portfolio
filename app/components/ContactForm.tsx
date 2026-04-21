'use client'
import { Form, Label, TextInput, TextArea, Button } from '@/ui'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      message: '',
    }
  );

  
  return (
    <Form>
      <h1 className='text-xl md:text-2xl text-gray-900 text-center mb-3'>Send Us a Message</h1>

      <div>
        <Label htmlFor='name'>
          Name
        </Label>

        <TextInput 
          id='name'
          type='text'
          placeholder='Name'
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>

      <div>
        <Label htmlFor='email'>
          Email
        </Label>

        <TextInput 
          id='email'
          type='email'
          placeholder='Email'
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div>
        <Label htmlFor='message'>
          message
        </Label>

        <TextArea 
          id='message'
          placeholder='Type in your message'
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
      </div>
      
      <Button type='submit'>
        Send Message
      </Button>

    </Form>
  )
}