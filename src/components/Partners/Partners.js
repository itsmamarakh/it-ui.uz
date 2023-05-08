import React from "react"
import "./style.css"
import PartnersLogo from "./PartnersLogo"

const Partners = () => {
  return (
    <>
      <section className='container-xl TopCate background'>
        <div className=''>
          <div className='heading d_flex'>
          
            <div className='heading-right row '>
              <h1> Hamkorlar</h1>
             
            </div>
          </div>
          <PartnersLogo />
        </div>
      </section>
    </>
  )
}

export default Partners;