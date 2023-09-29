import React, {useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './corporativo.css';
import NewNavbar from "../../NewNavbar";
import Footer from "../../Footer";

function CorporativosPro(props){
    
    const [clicked, setClicked]= useState(false);
    const handleclick = () => {
        setClicked(!clicked)
    }

    /*Para que salga la imagen más grande del catálogo de imgs*/
    const [clickeddue, setClickeddue]= useState(false);
    const [opcion, setopcion] = useState(0);
    const handleclickdue = (prop) => {
        setClickeddue(!clickeddue)
        setopcion(prop);
    }
    function checkoption(prop){
        //console.log(opcion);
        if(prop===opcion){
            return true;
        }else{
            return false;
        }
    }

    useEffect(() => {
        AOS.init();
    }, [])

    

    const imageArray = [props.propPro[0].imgs.autouno, props.propPro[0].imgs.autodue, props.propPro[0].imgs.autotre];

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(count => count + 1);
        }, 5000);

        return () => clearInterval(timerId);
    }, []);  
    
    const slide_images = imageArray[count % imageArray.length];
    
    return(
        <>
            <NewNavbar color='bianco'/>
            <div className="espacio-ochpx" />

            <div className="res-presen-imgs">
                <p>{props.propPro[0].text.titulo_proyecto}</p>
                <div className="logo-entero-presen">
                    <img src={props.propPro[0].imgs.logoancho} alt="" />
                </div>
                <div className="logo-entero-presen-due">
                    <img src={props.propPro[0].imgs.logo} alt="" />
                </div>
            </div>
            <div className="espacio-img-pro" />
            <div className={clicked ? "info-gene-pro active" : "info-gene-pro"}>
                <div className="info-img-pro">
                    <div className="img-mid-pro"><img alt="" src={props.propPro[0].imgs.firstimg}/></div>
                    <div className="relative-div-side">
                        <div className='menu-info-pro' onClick={handleclick}>
                            <p> 
                                Mostrar información del proyecto <i className={clicked ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down"}></i>
                            </p>
                        </div>
                        <div className={clicked ? "pro-menu-corp active" : "pro-menu-corp"}>

                                {props.propPro[0].info_lista
                                .map((item, index) =>{  
                                    return(
                                        <div className="hover-div-list" key={index}>
                                            <div className="all-info-corp">
                                                <p className="lista-titulo-corp">{item.titulo}</p>
                                                <p className="lista-texto-corp">{item.texto}</p>
                                            </div>
                                            <hr className="hr-lista-pro"></hr>
                                        </div>
                                    )
                                })}
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="txt-negritas">
                <div className="txt-info-ne">
                    <p>{props.propPro[0].text.txt_neri_uno}</p>
                </div>
                <div className="txt-neri-img">
                    {<img alt="" src={slide_images}/>}
                </div>
            </div>
            
            <div className="carrusel-info">
                {/*<div className="chico-carrusel">*/}
                    <div className='container-a' >
                        <div className='slider-wraper'>
                            <div className='slider-a'>
                                <img alt='' src={props.propPro[0].imgs.carruuno} id='slide-1'></img>
                                <img alt='' src={props.propPro[0].imgs.carrudue} id='slide-2'></img>
                                <img alt='' src={props.propPro[0].imgs.carrutre} id='slide-3'></img>              
                            </div>
                            <div className='slider-nav'>
                                <a href='#slide-1'> </a>
                                <a href='#slide-2'> </a>
                                <a href='#slide-3'> </a>
                            </div>
                        </div>
                    </div>
                {/*</div>*/}
                <div className="info-tecnica">
                    <p>{props.propPro[0].text.txt_neri_due}</p>
                </div>
            </div>
            <div className="scale-imgs">
                <div className="cata-imgs">
                    {props.propPro[0].imgs.galeria.map((item, index) =>{  
                        return(
                            <div className="each-img-scale" key={index} onClick={() => handleclickdue(item.opcion)}>
                                <img src={item.imagen} alt=""></img>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='corp-ini-img'>
                <img src={props.propPro[0].imgs.fondo} alt=''></img>
            </div>
            <div className={clickeddue ? "img-sele-cata active" : "img-sele-cata"} onClick={() => handleclickdue(0)}>
                <div className="relative-img-sele">
                    {props.propPro[0].imgs.galeria.map((item, index) =>{  
                        return(
                            <div className={checkoption(item.opcion) ? "img-selected" : 'img-selected none'} key={index}>
                                <img src={item.imagen} alt=""></img>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="espacio-img-pro" />
            <Footer />
        </>
    )
}

export default CorporativosPro;