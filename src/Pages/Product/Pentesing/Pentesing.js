import React from 'react';
import Home from '../../../components/MainPage/Home'
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import screen from './pentesing-screen.jpeg';
import Pdata from './PData';
import './style.css';

const Pentesing = () => {

   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    
  return (
    <>
      <Navbar/>
      <div className='pentesing-conteiner'>
            <Home/>
            <div className='pentesing container-xl'>
            <div className='pentesing-about'>
               <h1>Pentesting</h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin</p>
            </div>
            <div className='pentesing-card'>
              <h1>Qismlari</h1>
                <div className='cards-pen'>
                <Slider {...settings}>
            {Pdata.map((value, index) => {
          return (
           
            <div className='chance'>
            <div className='pentesing-svg'>
               <button className='svg-fill'>
                <img src={value.cover} alt='icon' />
                </button>
                <h1>{value.title}</h1>
                        <p>{value.paragraf}</p>  
                </div> 
              </div>
             )
            })}
           </Slider> 
               </div>
            </div>
            <div className='pentesing-screen'>
               <h1>Ekran tasvirlari<span>(Screenshotlar)</span></h1>
               <div className='creen-card'>
                  <img src={screen} />
               </div>
            </div>
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default Pentesing
