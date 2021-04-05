import React from 'react'
//import facebook from '../assets/icons/facebook.svg'
//import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
//import tie from '../assets/icons/tie.svg'
import Usha from '../assets/Usha.jpg'
//import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:ushaprakash1116@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={Usha} alt="usha" className="usha_image" />
            <div className="sidebar__name">Usha <span>Prakash</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            
        
            <div className="sidebar__contact">
                
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Stockholm, Sweden
                <p className="sidebar__item">ushaprakash1116@gmail.com
                
                </p>
                </div>
                
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email Me</div>
        </div>
    )
}

export default Sidebar;
