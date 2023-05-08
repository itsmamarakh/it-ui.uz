import React from 'react';
import './style.css'
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png'

const Certification = () => {
  return (
    <>
      <section className='pricing'>
         <div className='container-xl cer-con'>
          <div className='row cer-header d-flex align-items-center'>
            <div className='col-sm cert-card'>
               <div className='certiImg'>
                  <img src={img1} />
               </div>
               <div className='certiTitle'>
               <h1 className="overview-header">Mahsulotlar uchun Microsoft va Digicert kompaniyalaridan sertifikatlar</h1>
               <p className="info-width mx-auto">Datagaze kompaniyasi tomonidan ishlab chiqilgan dasturiy ta'minotlar Microsoft va Digicert kompaniyalari tomonidan sertifikatlanadi. Bu orqali qalbaki dasturiy ta'minot yoki ishonchsiz manbaadan olingan dasturiy ta'minotdan foydalanishning oldi olinadi.</p>
               </div>
               </div>
            <div className='col-sm cert-card'>
               <div className='certiImg'>
                 <img src={img2}/>
               </div>
               <div className='certiTitle'>
                 <h1 className="overview-header">"Kiberxavfsizlik markazi" DUKdan xavfsizlik va muvofiqlik sertifikati</h1>
                 <p className="info-width mx-auto">Datagaze kompaniyasi taqdim etayotgan mahsulotlar va xizmatlar O'zbekiston Respublikasi qonun va qonun osti xujjatlari bilan tartibga solinadigan talablar bo'yicha "Kiberxavfsizlik markazi" Davlat unitar korxonasi tomonidan sertifikatlanadi. Bu  xizmatlarning sifatiga bevosita ta'sir ko'rsatadi.</p>
              </div>
            </div>
            <div className='col-sm cert-card'>
               <div className='certiImg'>
                 <img src={img3} />
               </div>
               <div className='certiTitle'>
               <h1 className="overview-header">Ko‘p yillik tajribali mutaxassislar va maslahatchilar</h1>
               <p className="info-width mx-auto">Datagaze kompaniyasi tomonidan taqdim etilayotgan mahsulotlar va xizmatlar ko'p yillik tajribaga ega bo'lgan malakali mutaxassislar va maslahatchilar tomonidan amalga oshiriladi. Bu esa mahsulotlar va xizmatlarning sifatiga bevosita ta'sir ko'rsatadi.</p>
               </div>
            </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Certification;