import React from 'react'
import { useState } from 'react'

function Navbar() {
  const [display, setDisplay] = useState(false)

  return (
    <>
      <nav nav onClick={()=>setDisplay(!display)} className="flex justify-between container mx-auto py-8 md:w-full">
        <img src="../public/images/hamburger-menu.svg" alt="This is a hamburguer menu image" className="w-7 cursor-pointer" />
        <img src="../public/images/logo-minga.svg" alt="This is the logo of minga web page" className='w-7' />
      </nav>

      {display && (<div className="drawer">
                <p onClick={()=>setDisplay(!display)} className="close">X</p>
                <p className="option">HOME</p>
                <p className="option">SIGN IN</p>
                <p className="option">REGISTER</p>
        </div>)}


    </>

  )
}

export default Navbar