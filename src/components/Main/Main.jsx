import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum reiciendis nobis facilis!</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div><div className="card">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, enim?</p>
                        <img src={assets.message_icon} alt="" />
                    </div><div className="card">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, numquam?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Ask Gemini' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                        </div>
                        <p className='bottom-info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in nisi eaque officia.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Main
