import React from 'react';
import img1 from './images/programmer-software-engineer-coder-software-developer-svgrepo-com (1).svg'
import img2 from './images/service-counter-repair-service-repairman-svgrepo-com.svg'
import img3 from './images/product-marketing-offer-compare-choose-svgrepo-com.svg'
import img4 from './images/workers-team-svgrepo-com.svg'
import './style.css'

const Statistic = () => {
  return (
    <>
      <div className='container-xl stat-con'>
         <div className='row header d-flex align-items-center'>
            <div className="col"> 
               <div className='box-static-info'>
               <img className='w-8 h-8 mr-2 icon-statistic' src={img1}/>
               <span>12+</span>
              </div>
               <h1>Malakali mutaxassislar</h1>
            </div>
            <div className="col">
            <div className='box-static-info'>
               <img className='w-8 h-8 mr-2 icon-statistic' src={img2}/>
               <span>2+</span>
              </div>
               <h1>Xizmat turlari</h1>
            </div>
            <div className='col'>
            <div className='box-static-info'>
               <img className='w-8 h-8 mr-2 icon-statistic' src={img3}/>
               <span>3+</span>
              </div>
               <h1>Mahsulot turlari</h1>
            </div>
            <div className='col'>
            <div className='box-static-info'>
               <img className='w-8 h-8 mr-2 icon-statistic' src={img4}/>
               <span>10+</span>
              </div>
               <h1>Faol mijozlar</h1>
            </div>
         </div>
      </div>
    </>
  )
}

export default Statistic;
