import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './servicios.css';
import NewNavbar from "../NewNavbar";
import Footer from "../Footer";
import {Bigger_designs, Fra_imgs_ser } from "../items";
import imgintro from '../../assets/projects/PISO 23/4.jpg';


function Corporativos (){

    const [clicked, setClicked]= useState(false);
    const handleclick = () => {
        setClicked(!clicked)
    }
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <>
            <NewNavbar color='grigio'/>
            <div className="color-gris">
                <div className="espacio-nav" />
                <div className={clicked ? "ser-menu active" : "ser-menu"}>
                    <div className='menu-icons-ser' onClick={handleclick}>
                        <p> 
                            Servicios  <i className={clicked ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down"}></i>
                        </p>
                    </div>
                    <div className={clicked ? "ser-list active" : "ser-list"}>
                        <a href="/service/corporativos"><p className="important-ser">Corporativo</p></a>
                        <a href="/service/comerciales" ><p className="normal-ser">Comercial</p></a>
                        <a href="/service/residenciales"><p className="normal-ser">Residencial</p></a>
                    </div>
                </div>
                <div className="intro-each-ser">
                    <img src={imgintro} className="img-intro-ser" alt="" />
                    <div className="diagonal-intro">
                        <p className="titulo">Corporativos</p>
                        <p>Desarrollamos espacios y diseños únicos para corporativos para satisfacer las necesiadades profersionales y crear diseños únicos y funcionales.</p>
                    </div>
                </div>
                
                <div className="general-radical-width">
                    <div className="imgs-info-flex">
                        {Fra_imgs_ser[0].map((item, index)=>{
                            return(
                                <div className="div-info-img" key={index}>
                                    <div className={item.divv ? "divv-flipper" : 'dis-none'}>
                                        <div className="face front">
                                            <img alt="" src={item.imagen} />
                                        </div>
                                        <div className="face back">
                                            <img alt="" src={item.imagen2} />
                                        </div>
                                    </div>
                                    <div className={item.divv ? 'dis-none' : "divv-txt" }>
                                        <p>{item.info1}</p>
                                        <p>{item.info2}</p>
                                        <p>{item.info3}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}


/*function CuadrosInfo(){
    return(
        <>
            <div className="dos-cuadros-info">
                <div className="cuadro-info">
                    <div className="cuadro-info-img">
                        <img alt="" src={Img_designs[3]} />
                    </div>
                    <div className="info-div">
                        <h3>hoallalaa</h3>
                    </div>
                </div>
                <div className="cuadro-info segundo">
                    <div className="cuadro-info-img">
                        <img alt="" src={Img_designs[5]} />
                    </div>
                    <div className="info-div">
                        <h3>hoallalaa</h3>
                    </div>
                </div>
            </div>
        </>
    )
}*/

export default Corporativos;