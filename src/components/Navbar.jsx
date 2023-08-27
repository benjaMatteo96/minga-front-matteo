import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between container mx-auto py-8 md:w-full">
      <img src="../public/images/hamburger-menu.svg" alt="This is a hamburguer menu image" className="w-7" />
      <img src="../public/images/logo-minga.svg" alt="This is the logo of minga web page" className='w-7' />
    </nav>
  )
}

export default Navbar