import React from 'react'
import "./footer.css"
function footer() {
  return (
 <section id='footer'>
    <div className="container">
        <div className="footer_flex">
            <div className="footer_section_one">
                <h1 className='section_one_h1'>CONSTRUCTION</h1>
                <p className='section_one_pera'>You’ll find your next Home loan valu you prefer.</p>
                <div className="social_icons">
                <i class="fa-brands fa-square-facebook social_media"></i>
                <i class="fa-brands fa-square-twitter social_media"></i>
                <i class="fa-brands fa-linkedin social_media"></i>
                </div>
            </div>
            <div className="footer_section_two">
                <h1 className='section_two_h1'>Resources</h1>
                <ol>
                    
                </ol>
                    <li>Our Agents</li>
                    <li>Member Stories</li>
                    <li>Video</li>
                    <li>Free trial</li>
                
            </div>
            <div className="footer_section_three">
            <h1 className='section_two_h1'>Company</h1>
                <ol>
                    
                </ol>
                    <li>Patnerships</li>
                    <li>Terms of use</li>
                    <li>Privacy</li>
                    <li>Sitemapl</li>
            </div>
            <div className="footer_section_four">
            <h1 className='section_two_h1'>Company</h1>
            <button className='section_four_btn'>Enter your mail<i class="fa-solid fa-arrow-right section_four_arro"></i></button>
            </div>
        </div>
        <div className="bottom">
            <div className="copyright">
                <p>Copyright construction.com, All rights reserved.</p>
            </div>
        </div>
    </div>
 </section>
  )
}

export default footer