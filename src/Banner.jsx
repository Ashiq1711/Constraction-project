import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <section id='banner'>
        <div className="container">
            <div className="banner_flex">
                <div className="left_banner">
                    <h1 className='left_banner_h1'><span>Masters</span> of Consistency 
                        and <span>Quality</span>.</h1>
                        <p className='left_banner_pera'>Blessing welcomed ladyship she met humoured sir
                         breeding her. Six curiosity day assurance bed necessary.</p>
                         <button className='left_banner_btn_1'>Explore</button>
                         <button className='left_banner_btn_2'>Contact Us</button>
                <div className="count_number_flex">
                    <div className="number_start">
                        <h1 className='number'>25,356</h1>
                        <p className='number_pera'>Projects Done</p>
                    </div>
                    <div className="number_start">
                        <h1 className='number'>15,200</h1>
                        <p className='number_pera'>Buildings Done</p>
                    </div>
                    <div className="number_start">
                        <h1 className='number'>350+</h1>
                        <p className='number_pera'>Total Employees</p>
                    </div>

                </div>
                </div>
                <div className="right_banner">
                    <img className='banner_image' src="public/hero-image.png" alt="" />
                </div>
            </div>
            <img  className='logos_banner' src="public/logos.png" alt="" />
        </div>
    </section>
  )
}

export default Banner