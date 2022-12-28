import react from 'react';
import { AiOutlineLeft, AiOutlineGoogle } from 'react-icons/ai'; 
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import logo from './img/Miles.png';
import logoTxt from './img/Tagline.png';

export default function NavLeft(){
    return (
        <div className="nav-main-left left-open" id="leftMain">
            <div className="top-main-left">
                <div className="left-main-icon">
                    <AiOutlineLeft className="icon-left-mobile" onClick={() => {
                        document.querySelector("#leftMain").classList.toggle('nav-main-left-open');
                    }}/>
                </div> 
                <div className="center-main-logo">
                    <img src={logo} className="miles" alt="miles"/>
                    <img src={logoTxt} className="carrental" alt="Carrental" />
                </div> 
                <div className="right-main-lenguaje" >
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197575.png" alt="" />
                </div>
            </div>
            <div className="nav-left-list">
                <ul>
                    <li><a href="" className='link_us'>Requisitos de alquiler</a></li>
                    <li><a href="" className='link_us'>Preguntas frecuentes</a></li>
                    <li><a href="" className='link_us'>Localidades</a></li>
                    <li><a href="" className='link_us'>Contactanos</a></li>
                </ul>
            </div>
            <div className="us-fotter">
                <span className="message-follow">Siguenos en</span>
                <ul>
                    <li><FiFacebook className="icon-follow-us"/></li>
                    <li><a href="https://www.linkedin.com/company/browser-travel-solutions/?originalSubdomain=co" target="_blank"><FiTwitter className="icon-follow-us"/></a></li>
                    <li><a href="https://browsertravelsolutions.com" target="_blank"><AiOutlineGoogle className="icon-follow-us"/></a></li>
                    <li><a href="https://www.instagram.com/browsertravelsolutions/?igshid=YmMyMTA2M2Y=+" target="_blank"><FiInstagram className="icon-follow-us"/></a></li>
                </ul>
            </div>
        </div>
    )
}