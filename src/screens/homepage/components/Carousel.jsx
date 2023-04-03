import React, { useEffect } from 'react'
import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { slides } from '../../../Helpers/CarouselData';
import './CarouselCSS.css'

const Carousel = ({ autoSlide = false, autoSlideInterval = 6000 }) => {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  
  //style={{backgroundImage: `url(${slides[curr].url})`}}
  //style={{transform: `translate(-${curr*100}%)`}}

  const style1 = { backgroundImage: `url(${slides[curr].url})` }
  // const style2={transform: `translate(-${slides[curr]*100}%)`}
  
  // transition-transform ease-out duration-500

  return (
    <div className="carousel">
      <div className="carouselInner" style={{ ...style1}}>
          
            <p className="text-8xl bg-black/50 carouselText font-semibold p-14">{slides[curr].text}</p>
          
        <div className="absolute inset-0 flex justify-between p-4">
          <button onClick={prev}>
            <FiChevronLeft size={40} />
          </button>
          <button onClick={next}>
            <FiChevronRight size={40} />
          </button>
        </div>
      </div>

    </div>



  )

}

export default Carousel