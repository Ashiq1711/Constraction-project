import React from 'react'
import "./engineer.css"
function engineer() {
  return (
    <section id='engineer'>
        <div className="container">
            <div className="title">
                <h1 className='title_h1'>Our Best Engineers</h1>
                <p className='title_pera'>Blessing welcomed ladyship she met humoured sir breeding her. 
                    Six curiosity day assurance bed necessary.</p>
            </div>
            <div className="main_box_flex">
                <div className="engineer_box">
                    <div className="engineer_box_title_flex">

                <i  class="fa-solid fa-star yello_star"></i>
                <img src="public/grip-dot.png" alt="" />
                    </div>
                    <div className="engineer_img">

                    <img  src="public/Ellipse 752.png" alt="" />
                    </div>
                    <h4 className='engineer_name'>Chris Evans</h4>
                    <p className='engineer_degignation'>Michigan, TX</p>
                    <p className='engineer_contract'>989-653-2986</p>
                    <p className='engineer_mail'>ChrisEvans@const.com</p>
                </div>
                <div className="engineer_box">
                    <div className="engineer_box_title_flex">

                <i  class="fa-solid fa-star yello_star"></i>
                <img src="public/grip-dot.png" alt="" />
                    </div>
                    <div className="engineer_img">

                    <img  src="public/Ellipse 752 (1).png" alt="" />
                    </div>
                    <h4 className='engineer_name'>Alison Kiara</h4>
                    <p className='engineer_degignation'>Michigan, TX</p>
                    <p className='engineer_contract'>989-653-2986</p>
                    <p className='engineer_mail'>ChrisEvans@const.com</p>
                </div>
                <div className="engineer_box">
                    <div className="engineer_box_title_flex">

                <i  class="fa-solid fa-star yello_star"></i>
                <img src="public/grip-dot.png" alt="" />
                    </div>
                    <div className="engineer_img">

                    <img  src="public/Ellipse 752 (2).png" alt="" />
                    </div>
                    <h4 className='engineer_name'>Adam Gates</h4>
                    <p className='engineer_degignation'>Michigan, TX</p>
                    <p className='engineer_contract'>989-653-2986</p>
                    <p className='engineer_mail'>ChrisEvans@const.com</p>
                </div>

            </div>
            <div className="arrow_btn">

            <button className='arrow_btn_one'><i class="fa-solid fa-arrow-left one"></i></button>
            <button className='arrow_btn_two'><i class="fa-solid fa-arrow-right two"></i></button>
            </div>
        </div>
    </section>
  )
}

export default engineer