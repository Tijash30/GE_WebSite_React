import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './servicios.css';
import NewNavbar from "../NewNavbar";
import Footer from "../Footer";
import {Bigger_designs, Fra_imgs_ser } from "../items";
import imgintro from '../../assets/projects/SAN CRISTOBAL/RENDER/1.jpg';

function Residencial(){

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
                        <a href="/service/comerciales" ><p className="normal-ser">Comercial</p></a>
                        <a href="/service/residenciales"><p className="important-ser">Residencial</p></a>
                    </div>
                </div>
                <div className="intro-each-ser">
                    <img src={imgintro} className="img-intro-ser" alt="" />
                    <div className="diagonal-intro">
                        <p className="titulo">Residencial</p>
                        <p>Diseñamos espacios acojedores para hogares con un diseño inteligente, moderno y estéticamente atractivo para una familia</p>
                    </div>
                </div>
                

                <div className="general-radical-width">
                    <div className="imgs-info-flex">
                        {Fra_imgs_ser[2].map((item, index)=>{
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

/*

    Para el div que gira al hover:
    (flipper)

    <div className="flipper">
        <div className="face front">
            <h3>Ti</h3>
        </div>
        <div className="face back">
            <h3>Jash</h3>
        </div>
    </div>


    /*

        Para los fliping divs 
        prueba 1
            ...
                ....
                    .....
                        ......

    .flipper{
        position: relative;
        width: 300px;
        height: 400px;
        transform-style: preserve-3d;
    }
    .face{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
        transition: 1s;
    }
    .face.front{
        background-color: cornflowerblue;
    }
    .flipper:hover .face.front{
        transform: perspective(500px) rotateY(180deg);
    }
    .face.back{
        background-color: coral;
        transform: perspective(500px) rotateY(180deg);
    }
    .flipper:hover .face.back{
        transform: perspective(500px) rotateY(360deg);
    }

*/

export default Residencial;