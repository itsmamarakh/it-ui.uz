import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"

import './style.css';

const PartnersLogo = () => {
   const settings = {
      className: "slider center variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      speed: 500
    };
 
  return (
    <div>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
           
              <div className=''>
                <div className='nametop d_flex'>
                </div>
                <div className="LogoCart">
                  <a href={value.a}>
                <div className='img'>
                  <img src={value.cover} alt='' />
                  <span className="title">{value.title}</span>
               </div>
               </a>
                </div>
              </div>
            
          )
        })}
      </Slider>
    </div>
  )
}

export default PartnersLogo;