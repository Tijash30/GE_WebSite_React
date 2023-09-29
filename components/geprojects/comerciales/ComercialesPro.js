import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './comercialessty.css';
import NewNavbar from "../../NewNavbar";
import Footer from "../../Footer";


function ComercialesPro(props){

    useEffect(() => {
        AOS.init();
    }, [])

    const [clickeddue, setClickeddue]= useState(false);
    const [opcion, setopcion] = useState(0);
    const [listimgs, setlistimgs] = useState(3);
    const handleclickdue = (prop) => {
        setClickeddue(!clickeddue);
        setlistimgs(0);
        setopcion(prop);
    }
    
    function checkoption(prop){
        if(prop === opcion){
            return true;
        }else{
            return false;
        }
    }
    /*function setlist_imgs(prop){
        setlistimgs(prop);
    }*/
    function handleimg(case_){
        var handleimg= listimgs;
        if(case_ === 1){
            if(handleimg===0){
                handleimg=4;
            }else{
                handleimg-=1;
            }
            setlistimgs(handleimg);
        }
        if(case_ === 2){
            if(handleimg===4){
                handleimg=0;
            }else{
                handleimg+=1;
            }
            setlistimgs(handleimg);
        }
    }

    const [clickednove, setclickednove]= useState(false);
    const [opcionnove, setopcionnove] = useState(0);
    const handleclicknove = (prop) => {
        setclickednove(!clickednove);
        setopcionnove(prop);
    }
    function checkoptionnove(prop){
        if(prop===opcionnove){
            return true;
        }else{
            return false;
        }
    }
    
    return(
        <>
            <NewNavbar color='bianco'/>
            <div className="top-space-nav" />
            <div className="title-img-logo">
                <p>{props.propPro[0].text.titulo_proyecto}</p>
                <div className="logo-entero-presen-comer">
                    <img src={props.propPro[0].imgs.logoancho} alt="" />
                </div>
                <div className="logo-entero-presen-due-comer">
                    <img src={props.propPro[0].imgs.logo} alt="" />
                </div>
                {/*<div className="img-logo-comer">*/}
            </div>
            <div className="img-comer-intro">
                <img alt="" src={props.propPro[0].imgs.imgintro}/>
            </div>
            <div className="cuadros-albums">
                {props.propPro[0].album_imgs.map((item, index) =>{  
                    return(
                        <div className="cada-cuadro-img" key={index} onClick={() => handleclickdue(item.opcion)}>
                            <p>{item.title}</p>
                            <img src={item.mainimg} alt=""/>
                        </div>
                    )
                })}
            </div>

            <div className={clickeddue ? "clicked-album active" : "clicked-album"}>
                <div className="relative-album">
                    <div className="close-album"  onClick={() => handleclickdue(0)}>
                        <i className="fas fa-times" ></i>
                    </div>
                    
                    <div className="album-catalog">
                        <div className="next-img-album"  onClick={() => handleimg(1)}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                        {props.propPro[0].album_imgs.map((item, index) =>{  
                            return(
                                <div className={checkoption(item.opcion) ? "img-selected-album" : 'img-selected-album none'} key={index}>
                                    <img src={item.listimgs[listimgs]} alt=""></img>
                                </div>
                            )
                        })}
                        <div className="next-img-album"  onClick={() => handleimg(2)}>
                            <i className="fa-solid fa-arrow-right" ></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className={props.propPro[0].mostrar.historia ? "carrusel-info-comer" : "carrusel-info-comer none" }>
                <div className="info-tecnica-comer">
                    <p>{props.propPro[0].text.infocarrusel}</p>
                </div>
                <div className="carrusel-chico">
                    <img alt="" src={props.propPro[0].imgs.carruuno}/>
                </div>
            </div>
            <div className="catalog-nine">
                <div className="txt-cata-nine">
                    <p>{props.propPro[0].text.infonine}</p>
                </div>
                <div className="nine-imgs-cata">
                    {props.propPro[0].nine_cta.map((item, index) =>{  
                        return(
                            <div className="each-nine" key={index} onClick={() => handleclicknove(item.opcion)} data-aos="fade-up" data-aos-duration='600'>
                                <img src={item.imagen} alt=""></img>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={clickednove ? "div-each-nine active" :"div-each-nine"} onClick={() => handleclicknove(0)}>
                <div className="d ">
                    {props.propPro[0].nine_cta.map((item, index) =>{  
                        return(
                            <div className={checkoptionnove(item.opcion) ? "each-nine-big " : "each-nine-big none"} key={index} >
                                <img src={item.imagen} alt=""></img>

                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
    
}

export default ComercialesPro;