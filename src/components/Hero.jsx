import React from 'react'

import Styles from '../landing.module.css';
import ResumeImg from "../assets/hero-img-2.jpg";

const Hero = () => {
  return (

    <div className='row'>
      <div className="col-5 position-relative">
        <div className='pt-2 mt-4'>
          <div className='my-4'>Why Us ?</div>
          <h4 className={`${Styles['hero-title']} my-2 fw-bold`} >
            Killer CV that can land
            you a job
          </h4>
          <div className='mt-4'>
            Build professional CV as
            per the job description
          </div>
          <button className={`${Styles["cta-btn"]} fw-bold mt-4 mb-3`}>Create CV</button>
          <div className={`${Styles["overlap-container"]} mt-4`}>
            <div className="row">
              <div className="col-3">
                <div className='fw-bold'>Over 100</div>
                <div className='fw-bold'>Users</div>
              </div>
              <div className="col-3">
                <div className='fw-bold'>20+</div>
                <div className='fw-bold'>Templates</div>
              </div>
              <div className="col-3">
                <div className='fw-bold'>500+</div>
                <div className='fw-bold'>Happy Clients</div>
              </div>
              <div className="col-3">
                <div className='fw-bold'>600+</div>
                <div className='fw-bold'>Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-7'>
        <div className={` ${Styles['hero-right__wrapper']} py-4 mt-4`}>

        </div>
      </div>
    </div>
  )
}

export default Hero