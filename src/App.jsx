import { useState } from 'react'

export default function App() {
  return (
    <div >

      <div className=' bg-image-mobile bg-cover  md:bg-none '>

      <nav className="flex justify-between container mx-auto py-8 md:w-full">
        <img src="../public/images/hamburger-menu.svg" alt="This is a hamburguer menu image" className="w-7" />
        <img src="../public/images/logo-minga.svg" alt="This is the logo of minga web page" className='w-7' />
      </nav>

      <main className='mb-0'>
        {/* Carrousel */}
        <div className="h-52 bg-pink-400 container mx-auto justify-around hidden w-screen md:flex ">
          <img className="w-12" src="../public/images/toLeft-carrousel-arrow.svg" alt="" />
          <img className="" src="../public/images/carrousel-character.svg" alt="" />
          <img className="-mt-8 mb-5" src="../public/images/carrousel-anime-cartel.svg" alt="" />

          <section className="relative m-14">
            <h5 className="text-white text-lg font-weight: 700; ">Shonen</h5>
            <p className="text-white leading-3 text-xs w-4/5 ">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.
            </p>
          </section>


          <img className="w-12" src="../public/images/toRight-carrousel-arrow.svg" alt="" />

        </div >
        {/* Carrousel end */}

        {/* Background Section */}
        <section className='text-white text-center md:bg-image md:bg-cover md:h-screen md: bg-no-repeat md:mt-5 md:mx-5 md:h-80 lg:bg-cover lg:mx-10 lg:mt-10'>
          
          <div className='mt-56 flex-col gap-x-20 md:mt-0'>
            <h1 className='text-2xl font-extrabold' >Live the emotion of manga</h1>
            <p>Find the perfect manga for you.</p>
            <p>#MingaForever</p>
            <button className='w-32 bg-pink-300'>Explore</button>
          </div>

        </section>
      </main>
      </div>
     
    
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

    </div>
  )
}