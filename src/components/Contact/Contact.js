import React from 'react';
import './style.css'

const Contact = () => {
  return (
    <>
      <div className='container-xl'>
         <div className='contact'>
            <div className='contact-title'><h1>Savollar, taklif va murojaatlar uchun</h1></div>
            <div className='contact-info'>
              <div className='contact-left'>
                <div className='contact-icon'><div><i class="fa fa-envelope-o"></i></div><a href='mailto:info@datagaze.uz'><span>info@datagaze.uz</span></a></div>
              </div>
              <div className='contact-right'>
                <div className='contact-icon'><div><i class="fa fa-phone"></i></div><span>+998 97 449 97 33</span></div>
              </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Contact
