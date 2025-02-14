import React from 'react'
import PostForm from '../_components/PostForm'
import Container from '../../_components/Container'

// type Props = {}

export default function page() {
  return (
    <Container element="section" className='flex flex-col gap-4'>
      <PostForm />
    </Container>
  )
}