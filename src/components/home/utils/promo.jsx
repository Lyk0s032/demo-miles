import car from './../img/PCAR_US.png';
import plus from './../img/plus.png';
import { AiFillStar } from 'react-icons/ai';
import { FaStar,FaStarHalf } from 'react-icons/fa';

export default function Promo(){
    return (
        <div className="choose-car">
                <div className="container-seccion">
                    <div className="container-car">
                        <div className="car">
                            <img src={car} className="car-img" alt="Chevrolet impala rojo" />
                            <img src={plus} className="plus-img" alt="plus"/>
                        </div>
                    </div>
                    <div className="info-car">
                        <h2>¡SEGURO DE VIAJE <strong className="act">GRATIS!</strong></h2>
                        <div className="qualifications">
                            <span className="medicine-text">Con cobertura médica frente al Coronavirus de USD $100.000</span>
                            <div className="title-qualifications">
                                <AiFillStar className="star-icon" /><h3>Trustpilot <h1>4.7 / 5</h1></h3>
                            </div>
                            <div className="stars-qualifications">
                                <FaStar className="star-icon" />
                                <FaStar className="star-icon" />
                                <FaStar className="star-icon" />
                                <FaStar className="star-icon" />
                                <FaStarHalf className="star-medium-icon" /> 
                            </div>
                            <span className="numbers">Basado en <strong>3312 +</strong> comentarios</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}