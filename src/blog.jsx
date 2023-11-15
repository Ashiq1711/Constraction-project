import React from 'react'
import "./blog.css"

function blog() {
    return (
        <section id='blog'>
            <div className="container">
            <div className="contact_title">
                <h1 className='contact_h1'>Lattest Blogs</h1>
                <p className='contact_pera'>Blessing welcomed ladyship she met humoured sir breeding her. 
                    Six curiosity day assurance bed necessary.</p>
            </div>
            <div className="blog_flex">
                <div className="left_blog">
                    <div className="blog_img">
                        <img src="public/Img-2.png" alt="" />
                    <div className="blog_text">
                        <h1 className='blog_h1'>Unleash Your Creativity</h1>
                        <p className='blog_pera'>Nine for Mortal Men, doomed to die, One for</p>
                    </div>
                    </div>
                </div>
                <div className="right_blog">
                <div className="blog_img">
                        <img src="public/Img-2 (1).png" alt="" />
                    <div className="blog_text">
                        <h1 className='blog_h1'>Unleash Your Creativity</h1>
                        <p className='blog_pera'>Nine for Mortal Men, doomed to die, One for</p>
                        <button className='read_more'>Read more</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default blog