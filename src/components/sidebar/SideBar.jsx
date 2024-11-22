import React,{useState} from 'react'
import {assets} from '../../assets/assets'
import "./Sidebar.css";
function SideBar() {

    const [extended,setExtended]=useState(false);
  return (
    <div className="sidebar">
        <div className="top">
            <img className="humberger" onClick={()=>{
                setExtended(!extended)
            }} src={assets.menu_icon}/>
            <div className="newchat">
                <img src={assets.plus_icon}/>
                {extended ? <p className="">New Chat</p> : null}
            </div>
            {extended ? <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon}/>
                    <p>what is react......</p>
                </div>
            </div>
            :
            null
            }
            
            </div>
            <div className="bottom">
            <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt=""/>
        {extended ?<p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt=""/>
            {extended ? <p>History</p> :null}
            </div>
            <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt=""/>
            {extended ? <p>Setting</p> :null}
            </div>
            </div>

    </div>
  )
}

export default SideBar
