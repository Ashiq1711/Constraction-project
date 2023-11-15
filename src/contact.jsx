import React from 'react'
import "./contact.css"

function contact() {
  return (
    <section id='contact'>
        <div className="container">
            <div className="contact_title">
                <h1 className='contact_h1'>Contact Us</h1>
                <p className='contact_pera'>Blessing welcomed ladyship she met humoured sir breeding her. 
                    Six curiosity day assurance bed necessary.</p>
            </div>
            <div className="contact_flex">
                <div className="left_form">
                    <input type="text" className='field' placeholder='Name'/>
                    <input type="emil" className='field' placeholder='Email'/>
                    <input type="text" className='field' placeholder='Subject'/>
                   <textarea name="Message" className='field area' cols="30" rows="10" placeholder='Message'></textarea>
                   <button className='send_btn'>Send Massage</button>
                </div>
                <div className="right_map">
                    <img src="map.png" alt="" />
                </div>
            </div>
            
        </div>
    </section>
    

  )
}

export default contact