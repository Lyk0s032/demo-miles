import react from 'react';
import Promo from './utils/promo';

import { AiOutlineCar, AiOutlineArrowRight } from 'react-icons/ai';
import { TbCalendarTime } from 'react-icons/tb';
import { FaSearch } from 'react-icons/fa';

export default function Home(){
    return(
        <div className="Home">
            <div className="font-div">
                <div className="container-font">
                    <div className="title01" >
                        <h3>ALQUILER DE CARROS MIAMI</h3>
                    </div>
                    <div className="options-container">
                        <div className="box-white">
                            <div className="left-icon">
                                <AiOutlineArrowRight  className="top-small"/>
                                <AiOutlineCar className="icon-small-box" />
                            </div>
                            <div className="right-info">
                                <span className='title'>Localidad de retiro</span><br />
                                <span className='descript'>Ciudad, Aereopuerto o Ciudad</span>
                            </div>
                             
                        </div>
                        <div className="btn-filter" >
                                <div className="button">
                                    <input type="checkbox" id="btn-switch" />
                                    <label htmlFor="btn-switch" className="lbl-switch"></label>
                                </div><span>Lo quiero devolver en otra localidad</span>
                        </div>
                        <div className='box-white'>
                            <div className="time">
                                <TbCalendarTime className="calendary-icon"/>
                                <div className="info">
                                    <span className="title">
                                        Recogida
                                    </span><br />
                                    <span className="descript">
                                        4 Jul
                                    </span>
                                </div>
                            
                            </div>

                            <div className="time">
                                <TbCalendarTime className="calendary-icon"/>
                                <div className="info">
                                    <span className="title">
                                        Devolución
                                    </span><br />
                                    <span className="descript">
                                        5 Jul
                                    </span>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="bottom-container">
                    <button><FaSearch className="search-icon"/></button>
                </div> 
            </div>
            <Promo />
        </div>
    )
}