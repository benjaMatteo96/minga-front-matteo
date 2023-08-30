import React from 'react'


function Display(display, setDisplay) {
  return (
    <div className="drawer  ">
      <p onClick={() => setDisplay(!display)} className="close">X</p>
      <p className="option">HOME</p>
      <p className="option">SIGN IN</p>
      <p className="option">REGISTER</p>
    </div>
  )
}

export default Display