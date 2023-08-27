import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layouts(props) {
  console.log(props.children)
  return (
    <div>
      <div className=' bg-image-mobile bg-cover  md:bg-none '>
        <Navbar />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}
