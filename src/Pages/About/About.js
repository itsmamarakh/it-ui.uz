import React from 'react'
import Slider from 'react-slick'
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../News/images/TQU7evEm_eWNcW1O_dQimgixuL96Qtie-2023-01-28_071104.jpeg';
import img2 from '../News/images/tIeGFDOgbR37eNQBbgctctCFmv9_0ylS_medium-2023-01-28_070013.jpeg';
import img3 from '../News/images/microsoft_p73_05967_windows_server_2012_r2_1025605-2023-01-28_071951.jpeg';
import img4 from '../News/images/1-2023-01-03_152841-2023-01-10_121241.png'
import Footer from '../../components/Footer/Footer';
import './style.css'

const settings = {
   dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear"
 }

const About = () => {
  return (
    <>
      <Navbar /> 
       <div>
         <div className='container-xl'>
            <div className='about-me-title'>
               <h1>Biz haqimizda</h1>
               <p>Description Datagaze onlayn himoya bo'yicha dunyo bo'ylab yetakchi hisoblanadi. 
                  Biz qurilmalarni emas, balki odamlarni himoya qilishga e'tibor qaratamiz.
                   Bizning yechimlarimiz mijozlarimizning ehtiyojlariga moslashadi va ularga integratsiyalashgan, 
                  ishlatish uchun qulay echimlar orqali onlayn hayotni ishonchli his qilish imkonini beradi. Description Datagaze onlayn 
                  himoya bo'yicha dunyo bo'ylab yetakchi hisoblanadi. 
                  Biz qurilmalarni emas, balki odamlarni himoya qilishga e'tibor qaratamiz.</p>
            </div>
            <div>
               <i class='fas fa-award'></i><h1 className='ser-title'>Sertifikatlarimiz</h1>
               <div className='slider-card'>
                   <img src={img4}/>
               </div>
            </div>
            <div></div>
            <div className='news-conteiner'>
         <div className='news row'>
              <div><h1>Yangiliklar</h1></div>
            <div className=' row'>
              <div className='news-card-box col-sm'>
                <img src={img1}/>
                <h1>Moldova davlat muassasalari veb-sahifalari keng ko‘lamli kiberhujumga uchradi</h1>
              </div>
              <div className='news-card-box col-sm'>
              <img src={img2} />
              <h1>Yevropa Ittifoqining kiberxavfsizlik direktivasi kuchga kirdi</h1>
              </div>
              <div className='news-card-box col-sm'>
              <img src={img3} />
              <h1>Windows Server 2012ʼni qo‘llab-quvvatlash muddati tez orada tugaydi.</h1>
              </div>
            </div>
         </div>
      </div>
         </div>
       </div>
       <Footer/>
    </>
  ) 
}

export default About
