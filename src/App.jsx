import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Index from './pages/index.jsx'

export default function App() {
  return (
    <div >

      <div className=' bg-image-mobile bg-cover  md:bg-none '>

        <Navbar />
        <Index />

      </div>


      <Footer />

    </div>
  )
}