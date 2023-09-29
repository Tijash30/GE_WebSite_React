import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './servicios.css';
import NewNavbar from "../NewNavbar";
import Footer from "../Footer";
import lob1 from '../../assets/projects/LOB/RENDER/1.jpg';
import {Fra_imgs_ser } from "../items";

function Comercial(){

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
                        <a href="/service/corporativos"><p className="normal-ser">Corporativo</p></a>
                        <a href="/service/comerciales" ><p className="important-ser">Comercial</p></a>
                        <a href="/service/residenciales"><p className="normal-ser">Residencial</p></a>
                    </div>
                </div>
                <div className="intro-each-ser">
                    <img src={lob1} className="img-intro-ser" alt="" />
                    <div className="diagonal-intro">
                        <p className="titulo">Comercial</p>
                        <p>Desarrollamos conceptos arquitectónicos enfocados en el buyer persona de la marca conformando un diseño arquitectónico y mercadológico.</p>
                    </div>
                </div>
                
                <div className="general-radical-width">
                    <div className="imgs-info-flex">
                        {Fra_imgs_ser[1].map((item, index)=>{
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

export default Comercial;