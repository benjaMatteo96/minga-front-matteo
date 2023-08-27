import React from 'react'
import Arrow from './Arrow.jsx'
import leftArrow from "../../public/images/toLeft-carrousel-arrow.svg"
import rightArrow from "../../public/images/toRight-carrousel-arrow.svg"

export default function Carousel() {
  const d_left = "../../public/images/toLeft-carrousel-arrow.svg"
  const d_right = "../../public/images/toRight-carrousel-arrow.svg"
  return (
    <div className="h-52 bg-pink-400 container mx-auto justify-around hidden w-screen md:flex ">
            {/* Arrow toLeft */}
            <Arrow src={d_left}/>
            <img className="" src="../public/images/carrousel-character.svg" alt="" />
            <img className="-mt-8 mb-5" src="../public/images/carrousel-anime-cartel.svg" alt="" />

            <section className="relative m-14">
              <h5 className="text-white text-lg font-weight: 700; ">Shonen</h5>
              <p className="text-white leading-3 text-xs w-4/5 ">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.
              </p>
            </section>


            {/* Arrow toRight */}
            <Arrow src={d_right}/>
          </div >
  )
}
