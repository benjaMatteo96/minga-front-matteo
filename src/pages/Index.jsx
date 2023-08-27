import React from 'react'
import Welcome from '../components/Welcome.jsx'
import Carousel from '../components/Carousel.jsx'

function Index() {
  return (
    <main className='mb-0'>
      {/* Carrousel */}
      <Carousel />

      {/* Hero Section */}
      <Welcome />

    </main>
  )
}

export default Index