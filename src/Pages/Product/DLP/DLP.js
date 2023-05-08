import React from 'react';
import Home from '../../../components/MainPage/Home';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import DtadaSvg from './DtadaSvg';
import DataBase from './DataBase';
import BaseScreenshots from './BaseScreenshots'
import img from '../images/concept-of-broken-links-2023-01-26_141028.png'
import img2 from '../images/cloud-storage-2023-01-26_141028.png'
import img3 from '../images/design-and-development-process_1-2023-01-26_141028.png';
import './style.css'

const DLP = () => {

   const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };
    
  return (
      <>
        <Navbar/>
        <div className='container-xl'>
        <Home/>
         <div className='product-dlp'>
         
          <div className='dlp-title'>
            <div>
               <h1>DLP</h1>
               <p>Bu product orqali siz o‘z xodimlaringizni doim nazorat qila olasiz</p>
            </div>
          </div>
          
          <div className='dlp-qismlari'>
            <h1>Datagaze DLP qismlari</h1>
            <div className='row'>
            <div className='col-sm qism-left'>
               <div>
               <svg fill="#8F77FF" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.06 485.06" >
<g>
	<path d="M367.604,57.802H74.4c-5.799,0-10.5,4.701-10.5,10.5v348.457c0,5.799,4.701,10.5,10.5,10.5h293.204
		c5.799,0,10.5-4.701,10.5-10.5V68.302C378.104,62.503,373.403,57.802,367.604,57.802z M357.104,406.258H84.9V78.802h272.204
		V406.258z"/>
	<path d="M220.358,339.535c52.737,0,95.643-42.905,95.643-95.644c0-52.738-42.905-95.644-95.643-95.644
		c-52.738,0-95.644,42.905-95.644,95.644C124.714,296.629,167.62,339.535,220.358,339.535z M220.358,169.248
		c41.158,0,74.643,33.485,74.643,74.644s-33.484,74.644-74.643,74.644s-74.644-33.485-74.644-74.644S179.2,169.248,220.358,169.248z
		"/>
	<path d="M209.858,280.786c0,5.799,4.701,10.5,10.5,10.5c26.134,0,47.395-21.261,47.395-47.395c0-5.799-4.701-10.5-10.5-10.5
		s-10.5,4.701-10.5,10.5c0,14.554-11.841,26.395-26.395,26.395C214.559,270.286,209.858,274.987,209.858,280.786z"/>
	<path d="M183.463,254.391c5.799,0,10.5-4.701,10.5-10.5c0-14.554,11.841-26.395,26.395-26.395c5.799,0,10.5-4.701,10.5-10.5
		s-4.701-10.5-10.5-10.5c-26.134,0-47.395,21.261-47.395,47.395C172.963,249.69,177.665,254.391,183.463,254.391z"/>
	<path d="M451.19,174.982c16.224,0,29.422-13.198,29.422-29.421v-17.5c0-16.223-13.198-29.421-29.422-29.421h-13.634V32.521
		C437.556,14.589,422.967,0,405.036,0H36.968C19.037,0,4.448,14.589,4.448,32.521v420.019c0,17.932,14.589,32.521,32.521,32.521
		h368.067c17.932,0,32.521-14.589,32.521-32.521v-66.118h13.634c16.224,0,29.422-13.198,29.422-29.421v-17.5
		c0-16.223-13.198-29.421-29.422-29.421h-13.634V174.982H451.19z M451.19,119.639c4.643,0,8.422,3.778,8.422,8.421v17.5
		c0,4.644-3.778,8.421-8.422,8.421h-13.634v-34.343H451.19z M416.556,452.539c0,6.353-5.168,11.521-11.521,11.521H36.968
		c-6.352,0-11.52-5.168-11.52-11.521V32.521c0-6.353,5.168-11.521,11.52-11.521h368.067c6.353,0,11.521,5.168,11.521,11.521V452.539
		z M451.19,331.078c4.643,0,8.422,3.778,8.422,8.421v17.5c0,4.644-3.778,8.421-8.422,8.421h-13.634v-34.343H451.19z"/>
</g>
</svg>
               </div>
               <h1>Maxfiy ma'lumotlar himoyasi</h1>
               <p>Kompyuterlarda saqlanayotgan, ishlov berilayotgan va yuborilayotgan ma'lumotlarni nazorat qiladi. Maxfiy ma'lumot aniqlangan hollarda tegishli choralarni ko'radi.</p>
            </div>
            <div className="col-sm qism-left">
               <div>
                <svg fill="#8F77FF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
	 width="40px" height="40px" viewBox="0 0 412.998 412.998"
	>
<g>
	<g>
		<g>
			<path d="M392.998,28.339H20c-11.046,0-20,8.954-20,20v234c0,11.046,8.954,20,20,20h139.499v45.32h-54.283
				c-10.201,0-18.5,8.299-18.5,18.5s8.299,18.5,18.5,18.5h202.566c10.201,0,18.5-8.299,18.5-18.5s-8.299-18.5-18.5-18.5h-54.283
				v-45.32h139.499c11.046,0,20-8.954,20-20v-234C412.998,37.293,404.044,28.339,392.998,28.339z M382.998,272.339H30v-214h352.998
				V272.339z"/>
			<path d="M134.589,235.304c7.563,0,13.701-6.136,13.701-13.699v-65.156c0-7.564-6.139-13.697-13.701-13.697
				c-7.564,0-13.695,6.133-13.695,13.697v65.155C120.894,229.168,127.024,235.304,134.589,235.304z"/>
			<path d="M182.53,235.304c7.564,0,13.695-6.136,13.695-13.699V108.506c0-7.564-6.131-13.695-13.695-13.695
				c-7.566,0-13.699,6.131-13.699,13.695v113.099C168.831,229.168,174.964,235.304,182.53,235.304z"/>
			<path d="M230.468,235.304c7.566,0,13.699-6.136,13.699-13.699v-84.333c0-7.564-6.133-13.695-13.699-13.695
				c-7.562,0-13.693,6.131-13.693,13.695v84.333C216.771,229.168,222.902,235.304,230.468,235.304z"/>
			<path d="M278.411,235.304c7.562,0,13.692-6.136,13.692-13.699v-98.714c0-7.564-6.132-13.697-13.692-13.697
				c-7.564,0-13.701,6.133-13.701,13.697v98.714C264.71,229.168,270.847,235.304,278.411,235.304z"/>
		</g>
	</g>
</g>
</svg>
              </div>
              <h1>Xodimlar faoliyati nazorati</h1>
              <p>Xodimlar faoliyatini nazorat qilish orqali ularning ishlash samaradorligini aniqlab boradi. Past samaradorlikka ega xodimlar ro'yxatini shakllantiradi.</p>
            </div>
            </div>
          </div>
          <div>
            <h1>Datagaze DLP imkoniyatlari</h1>
            <div className='chanceBox'>
            <Slider {...settings}>
            {DtadaSvg.map((value, index) => {
          return (
           
              <div className='chance'>
                <div className="chanceCart">
                <img src={value.svg} alt='icon' />
                <span>{value.title}</span>
                </div> 
              
              </div>
             )
            })}
           </Slider>
            </div>
          </div>
          <div>
            <h1>Datagaze DLP nazorat qiladigan axborot kanallari</h1>
            <div>
            {DataBase.map((value, index) => {
          return (
           
              <div className='information'>
                <div className="informationCart">
                <img src={value.svg} alt='icon' />
                <span>{value.title}</span>
                </div> 
              </div>
             )
            })}
            </div>
          </div>
          <div className='dlp-work'>
            <h1>Datagaze DLP ishlash muhiti</h1>
            <div className='dlp-card'>
            <div className='work-card'>
               <h1>Klient</h1>
               <div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill="#8F77FF" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M.2 298.669L0 90.615l256.007-34.76v242.814H.201zM298.658 49.654L639.905-.012v298.681H298.657V49.654zM640 341.331l-.071 298.681L298.669 592V341.332h341.33zM255.983 586.543L.189 551.463v-210.18h255.794v245.26z"/></svg>
              <span>Windows XP/7/8/10/11 (x86/x64)</span>
               </div>
            </div>
            <div className='work-card'>
               <h1>Server</h1>
               <div>
               <i class="fa fa-server"></i>
              <span>Ubuntu Server 18.04</span>
               </div>
            </div>
            </div>
          </div>
          <div className='row m-auto dlp-cards'>
            <div className='col-sm dlp-setting card'>
               <img src={img} />
               <br></br>
               <div className='dlp-number'><span><i class="fa fa-folder-open-o"></i></span><span>1 soat</span></div>
               <h1>Server dasturini o'rnatish va sozlash</h1>
            </div>
            <div className='col-sm dlp-setting card'>
               <img src={img2} />
               <br></br>
               <div className='dlp-number'><span><i class="fa fa-folder-open-o"></i></span><span>1 soat</span></div>
               <h1>Klient dasturini o'rnatish va sozlash</h1>
            </div>
            <div className='col-sm dlp-setting card'>
               <img src={img3} />
               <br></br>
               <div className='dlp-number'><span><i class="fa fa-folder-open-o"></i></span><span>1 soat</span></div>
               <h1>Xavfsizlik qoidalarini sozlash</h1>
            </div>
          </div>
          <div className='warning'><h1>*Eslatma: Hisob-kitoblar ideal muhit uchun</h1></div>
          <div className='screenshots-title'>
            <h1>Datagaze DLP skrinshotlari <span>(Screenshotlar)</span></h1>
            <div>
            <Slider {...settings}>
        {BaseScreenshots.map((value, index) => {
          return (
           
              <div className='card-screen'>
                <div className="screenshotsCart">
                <div className='screenshots'>
                  <img src={value.png} alt='icon' />
                  <span className='span-s'>{value.title}</span>
               </div>
                </div>
              </div>
            
          )
        })}
      </Slider>
            </div>
          </div>
          </div>
        </div>
        <Footer/>
      </>
  )
}

export default DLP;
