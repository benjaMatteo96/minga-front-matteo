import React from 'react'

function Footer() {
  return (
    <footer className='bg-white mt-5  md:mt-44'>
    <img className="" src="./public/images/footer/footer-img.svg" alt="" />

    <div className='flex justify-around'>
      <div className='text-xs' >
        <a href="">Home</a>
        <a href="">Mangas</a>
      </div>
      <img className='w-10' src="./public/images/logo-minga.svg" alt="" />

      <div>

        <div className='flex justify-evenly mb-2 '>
          <img className='w-3' src="./public/images/footer/facebook-black.svg" alt="" />
          <img className='w-3' src="./public/images/footer/twitter-black.svg" alt="" />
          <img className='w-3' src="./public/images/footer/vimeo-black.svg" alt="" />
          <img className='w-3' src="./public/images/footer/youtube-black.svg" alt="" />
        </div>
        <button className='w-32 bg-pink-300 text-white mb-2'>Donate</button>
      </div>

    </div> {/* end-flex-container */}

  </footer>
  )
}

export default Footer