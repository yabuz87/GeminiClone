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
            <di className="container">
                <div className="greet">
                    <p><span>Hello,Dev.</span></p>
                    <p>How can i Help you today ?</p>
                </div>
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
                 
            </di>
        </div>
    )
}

export default Main
