import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import img1 from './images/TQU7evEm_eWNcW1O_dQimgixuL96Qtie-2023-01-28_071104.jpeg';
import img2 from './images/tIeGFDOgbR37eNQBbgctctCFmv9_0ylS_medium-2023-01-28_070013.jpeg';
import img3 from './images/microsoft_p73_05967_windows_server_2012_r2_1025605-2023-01-28_071951.jpeg';
import './style.css'
import Footer from '../../components/Footer/Footer';

const News = () => {
  return (
    <>
      <Navbar/>
      <div className='news-conteiner container-xl'>
         <div className='news'>
              <div><h1>Yangiliklar</h1></div>
            <div className='news-card row'>
              <div className='news-card-box col-sm mr-50'>
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
      <Footer />
    </>
  )
}

export default News
