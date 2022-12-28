import react from 'react';
import logo from './img/Miles.png';
import logoTxt from './img/Tagline.png';

import { BiMenuAltLeft, BiDollarCircle } from 'react-icons/bi';
export default function Nav(){
    return(
        <div className="Navigation">
            <div className="navigation-left">
                    <BiMenuAltLeft className="icon-nav-left" onClick={() => {
                        document.querySelector("#leftMain").classList.toggle('nav-main-left-open');
                    }}/>
                <div className="logo">
                    <img src={logo} className="miles" alt="Miles" />
                    <img src={logoTxt} className="carrental" alt="Carrental"/>
                </div>
            </div>
            <div className="navigation-right">
                <ul>
                    <li key={1}><BiDollarCircle className="icon-question" /></li>
                    <li key={2}><img src="https://cdn-icons-png.flaticon.com/512/197/197575.png" /></li>
                </ul>
            </div> 
            
        </div>
    )
}