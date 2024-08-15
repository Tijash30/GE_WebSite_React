import React, {useState } from "react";

import './residencial.css';
import NewNavbar from "../../NewNavbar";
import Footer from "../../Footer";


function Residenciales_Pro(props){

    const nada = () => {
        
    }

    const [dinamico, setDinamico]= useState(false);
    const handledina = () => {
        setDinamico(!dinamico);
    }

    /*
        las siguientes funciones son para darle lógica a la última parte 
        de las 12 imágenes
    */
    const [clickedtre, setClickedtre]= useState(false);
    const [opcion, setopcion] = useState(0);
    const handleclicktre = (prop) => {
        setClickedtre(!clickedtre);
        setopcion(prop);
    }
    function checkoption(prop){
        if(prop===opcion){
            return true;
        }else{
            return false;
        }
    }
    /*const [numimg, setnumimg] = useState(0);*/
    function handleimg(case_){
        var numimg;
        if(case_===1){
            if(opcion!==1 || opcion!==5 || opcion!==9){
                numimg=opcion-1;
                setopcion(numimg);
                console.log(numimg);
            }
            if(opcion===1 || opcion===5 || opcion===9){
                numimg=opcion+3;
                setopcion(numimg);
                console.log(numimg);
            }
        }else if(case_===2){
            if(opcion!==(opcion%4===0)){
                numimg=opcion+1;
                setopcion(numimg);
                console.log(numimg);
            }
            if(opcion%4===0){
                numimg=opcion-3;
                setopcion(numimg);
                console.log(numimg);
            }
        }
    }

    return(
        <>
            <NewNavbar color='bianco'/>

            <div className="espacio-ochpx" />

            <div className="res-presen-imgs">
                <p>{props.propPro[0].text.titulo}</p>
                <div className="logo-entero-presen">
                    <img src={props.propPro[0].imgs.logoancho} alt="" />
                </div>
                <div className="logo-entero-presen-due">
                    <img src={props.propPro[0].imgs.logo} alt="" />
                </div>
            </div>

            <div className="espacio-para-fondo" />

            <div className="tres-imgs-proceso">
                <div className="cada-tres-img">
                    <img src={props.propPro[0].imgs.img_prinuno} alt="" />
                </div>
                <hr className="linea-vert-fra" />
                <div className="cada-tres-img">
                    <img src={props.propPro[0].imgs.img_prindue} alt="" />
                </div>
                <hr className="linea-vert-fra" />
                <div className="cada-tres-img">
                    <img src={props.propPro[0].imgs.img_printre} alt="" />
                </div>
            </div>

            <div className="relative-div-info-res">
                <div className="pro-menu-res">
                    {props.propPro[0].Info_resi.map((item, index) =>{  
                        return(
                            <div className= "hover-div-list-res" key={index} >
                                <div className="all-info-res">
                                    <p className="lista-titulo-res">{item.titulo}</p>
                                    <p className={item.opcion ? "lista-texto-res dos" :  "lista-texto-res"}>{item.info}</p>
                                </div>
                                <hr className={item.opcion ? 'hr-lista-res dos' :  'hr-lista-res'}></hr>
                            </div>
                        )
                    })}
                </div>
                <div className="dos-imgs-dinamicas">
                    <div onClick={dinamico ? nada : handledina} className={dinamico ? "primer-dina" : 'segunda-dina'}>
                        <img alt="" src={props.propPro[0].imgs.dinauno} />
                    </div>
                    <div onClick={dinamico ? handledina : nada}  className={dinamico ? "segunda-dina" : 'primer-dina'}>
                        <img alt="" src={props.propPro[0].imgs.dinadue} />
                    </div>
                </div>
            </div>
            
            <div className="proceso-constr">
                <div className="cata-imgs-proceso">
                    {props.propPro[0].Img_proceso.map((item, index) =>{  
                        return(
                            <div className="each-img-hover-proceso" key={index} onClick={() => handleclicktre(item.opcion)}>
                                {item.condi ? <p className="txt-proceso">{item.txt}</p> : <></>}
                                <img src={item.img_name} alt=""></img>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={clickedtre ? "img-proc-cata active" : "img-proc-cata"}>
                <div className="relative-img-proc">
                    <div className="close-album-res"  onClick={() => handleclicktre(0)}>
                        <i className="fas fa-times" ></i>
                    </div>
                    
                        
                    {props.propPro[0].Img_proceso.map((item, index) =>{  
                        return(
                            <div key={index} className="absolute-arrow-img">
                                <div className="next-img-album-res"  onClick={() => handleimg(1)}>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </div>
                                <div className="next-img-album-res"  onClick={() => handleimg(2)}>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>

                                <div className={checkoption(item.opcion) ? "img-selected-proc" : 'img-selected-proc none'}>
                                    <img src={item.img_name} alt=""></img>
                                </div>
                                
                                
                                
                            </div>
                        )
                    })}
                        
                </div>
            </div>

            <div className="fondo-estatico-render">
                <img src={props.propPro[0].imgs.fondo} alt="" />
            </div>

            <Footer />
        </>
    )
}

export default Residenciales_Pro;