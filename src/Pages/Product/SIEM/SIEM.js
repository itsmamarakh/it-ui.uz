import React from 'react';
import Home from '../../../components/MainPage/Home'
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer'
import './style.css';

const SIEM = () => {
  return (
    <>
      <Navbar/>
        <div className='siem-conteiner container-xl'>
         <div className='siem'>
            <Home/>
            <div className='title-siem'>
               <h1>SIEM</h1>
               <p>SIEM</p>
            </div>
            <div className='siem-qism row '>
               <h1>Qismlari</h1>
               <div className='card-qism-siem col-6'>
                  <button className='svg-siem'>
               <svg width="25px" height="25px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone"><path d="M61 18L45 2v10H3v12h42v10z" fill="#fff"></path><path d="M8 62c-3.308 0-6-2.848-6-6.348h3c0 1.633 1.346 2.965 3 2.965s3-1.332 3-2.965s-1.346-2.961-3-2.961c-3.308 0-6-2.846-6-6.346C2 42.848 4.692 40 8 40s6 2.848 6 6.346h-3c0-1.633-1.346-2.963-3-2.963s-3 1.33-3 2.963s1.346 2.963 3 2.963c3.308 0 6 2.846 6 6.344C14 59.152 11.308 62 8 62" fill="#fff"></path><path d="M24 62c-3.308 0-6-2.848-6-6.348v-9.307C18 42.848 20.692 40 24 40s6 2.848 6 6.346v9.307C30 59.152 27.308 62 24 62m0-18.617c-1.654 0-3 1.33-3 2.963v9.307c0 1.633 1.346 2.965 3 2.965s3-1.332 3-2.965v-9.307c0-1.633-1.346-2.963-3-2.963" fill="#fff"></path><path d="M40 62c-3.308 0-6-2.848-6-6.348v-9.307C34 42.848 36.692 40 40 40s6 2.848 6 6.346v9.307C46 59.152 43.308 62 40 62m0-18.617c-1.654 0-3 1.33-3 2.963v9.307c0 1.633 1.346 2.965 3 2.965s3-1.332 3-2.965v-9.307c0-1.633-1.346-2.963-3-2.963" fill="#fff"></path><path d="M53 47.703L58.848 62H62V40h-3v14.295L53.152 40H50v22h3z" fill="#fff"></path></svg>
                   </button>
                  <div>
                     <h1>Datagaze SIEM</h1>
                     <p>Tez kunda...</p>
                  </div>
               </div>
            </div>
         </div>
        </div>
      <Footer/>
    </>
  )
}

export default SIEM
