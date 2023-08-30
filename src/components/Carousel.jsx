import React, { useEffect, useState } from 'react'
import Arrow from './Arrow.jsx'
import leftArrow from "../../public/images/toLeft-carrousel-arrow.svg"
import rightArrow from "../../public/images/toRight-carrousel-arrow.svg"
import axios from 'axios'

export default function Carousel() {
  let [counter, setCounter] = useState(0)
  let [categories, setCategories] = useState([])
  let url ='https://minga-back-vyqy.onrender.com/categories'

  function getData (){
    axios(url)
      .then(res => setCategories(res.data.categories))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getData()
  },[])


  const d_left = "../../public/images/toLeft-carrousel-arrow.svg"
  const d_right = "../../public/images/toRight-carrousel-arrow.svg"

  console.log(categories)
  let next = () => (counter !== categories.length - 1) ? setCounter(counter + 1) : setCounter(0)
  let prev = () => (counter !== 0) ? setCounter(counter - 1) : setCounter(categories.length - 1)



  return (
    <div className="h-52 bg-pink-400 container mx-auto justify-around hidden w-screen md:flex ">
      {/* Arrow toLeft */}
      <Arrow src={d_left} onClick={prev} />
      <img className="" src={categories[counter]?.character_photo} alt="" />
      <img className="-mt-8 mb-5" src={categories[counter]?.cover_photo} alt="" />

      <section className="relative m-14">
        <h5 className="text-white text-lg font-weight: 700; "></h5>
        <p className="text-white leading-3 text-xs w-4/5 ">{categories[counter]?.description}
        </p>
      </section>


      {/* Arrow toRight */}
      <Arrow src={d_right} onClick={next} />
    </div >
  )
}