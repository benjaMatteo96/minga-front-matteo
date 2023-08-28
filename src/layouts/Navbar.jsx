import React from 'react'
import { useState } from 'react'
import Display from '../components/Display'

function Navbar() {
  const [display, setDisplay] = useState(false)

  return (
    <>
      <nav nav onClick={()=>setDisplay(!display)} className="flex justify-between container mx-auto py-8 md:w-full">
        <img src="../public/images/hamburger-menu.svg" alt="This is a hamburguer menu image" className="w-7 cursor-pointer" />
        <img src="../public/images/logo-minga.svg" alt="This is the logo of minga web page" className='w-7' />
      </nav>
    
    {display && (<Display display={display} setDisplay={setDisplay}/>)}
      


    </>

  )
}

export default Navbar