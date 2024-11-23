import React from 'react'
import {assets} from "../../assets/assets"
import "./main.css"

function Main() {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="container">
                <div className="greet">
                    <p><span>Hello,Dev.</span></p>
                    <p>How can i Help you today ?</p>
                </div>
                <div className="cards">
                <div className="card">
                    <p>Suggest Beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt=""/>
                </div> 
                <div className="card">
                    <p>Breifly summerize this concepts: urban planning</p>
                    <img src={assets.bulb_icon} alt=""/>
                </div>  
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt=""/>
                </div>  
                <div className="card">
                    <p>Suggest Beautiful places to see on an upcoming road trip</p>
                    <img src={assets.code_icon} alt=""/>
                </div>  
                </div>
                 <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Ask Gemini"></input>
                        <div>
                            <img src={assets.gallery_icon}/>
                            <img src={assets.mic_icon}/>
                            <img src={assets.send_icon}/>
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini can mistakes, so double-check it 
                    </p>
                 </div>
            </div>
        </div>
    )
}

export default Main
