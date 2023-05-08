import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import './Home.css'
import BsArrowRightShort from 'react-icons/bs'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
           
              <div className='row header-main' key={index}>
               <div className='left col-md-6'>
                  <h1 className="header-info ">{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary btn btn-outline-light btn-lg btn-space'> Batafsil <i class="fa fa-angle-right"></i> </button>
                </div>
                <div className='right col-md-6 text-center '>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
