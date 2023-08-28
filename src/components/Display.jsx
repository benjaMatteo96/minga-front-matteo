import React from 'react'


function Display(display, setDisplay) {
  return (
    <div className="drawer bg-pink-600 w-20 rounded-xl p-1 text-xs m-2 text-white md:w-4/5 md:flex md: justify-around md:mb-20 lg:block lg:w-20 lg:h-screen lg:absolute ">
      <p onClick={() => setDisplay(!display)} className="close">X</p>
      <p className="option">HOME</p>
      <p className="option">SIGN IN</p>
      <p className="option">REGISTER</p>
    </div>
  )
}

export default Display