import React from 'react'
import ButtonWelcome from './ButtonWelcome.jsx'

function Welcome() {
  return (
    <section className='text-white text-center md:bg-image md:bg-cover md:h-screen md: bg-no-repeat md:mt-5 md:mx-5 md:h-80 lg:bg-cover lg:mx-10 lg:mt-10'>

      <div className='mt-56 flex-col gap-x-20 md:mt-0'>
        <h1 className='text-2xl font-extrabold' >Live the emotion of manga</h1>
        <p>Find the perfect manga for you.</p>
        <p>#MingaForever</p>
        <ButtonWelcome />

      </div>

    </section>
  )
}

export default Welcome