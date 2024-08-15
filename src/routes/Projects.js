import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import NewNavbar from '../components/NewNavbar';
import Footer from '../components/Footer';
import '../components/projects.css';
import { All_Projects } from "../components/items";

function Projects() {

    useEffect(() => {
        AOS.init();
    }, [])


    /* 
        Para mostrar los proyectos deseados
    */
    const [opcion, setopcion] = useState(0);
    const handleoption = (prop) => {
        setopcion(prop);
        setClicked(!clicked);
    }
    function checkoption(prop){
        //console.log(opcion);
        if(prop===opcion || opcion===0){
            return true;
        }else{
            return false;
        }
    }

    /* 
        Para mostrar menu de proyectos
    */
    const [clicked, setClicked]= useState(false);
    const handleclick = () => {
        setClicked(!clicked);
    }
    function checkoptiondue(prop){
        if(prop===opcion){
            return true;
        }else{
            return false;
        }
    }
    
    //on each-pro div
    //data-aos="fade-up" data-aos-duration='900'
    return (
        <>
            <NewNavbar color='bianco'/>
            <div className="espacio-nav-pro" />
            <div className="nuestros-proyectos">
                <p>Nuestros Proyectos</p>
            </div>
            {<div className={clicked ? "pro-menu active" : "pro-menu"}>
                <div className='menu-icons-pro' onClick={handleclick}>
                    <p> 
                        Proyectos  <i className={clicked ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down"}></i>
                    </p>
                </div>
                {<div className={clicked ? "pro-list active" : "pro-list"}>
                    <button onClick={() => handleoption(0)}><p className={checkoptiondue(0) ? "important-pro" : 'normal-pro'}>Todos</p></button>
                    <button onClick={() => handleoption(1)}><p className={checkoptiondue(1) ? "important-pro" : 'normal-pro'}>Comerciales</p></button>
                    <button onClick={() => handleoption(2)}><p className={checkoptiondue(2) ? "important-pro" : 'normal-pro'}>Corporativos</p></button>
                    <button onClick={() => handleoption(3)}><p className={checkoptiondue(3) ? "important-pro" : 'normal-pro'}>Residenciales</p></button>
                </div>}
            </div>}
            {<hr className="hr-pro"/>}
            <div className="all-projects">
                {All_Projects.map((item, index)=>{
                    return(
                        <a className={checkoption(item.option) ? "each-pro" : 'each-pro none'} key={index} href={item.url}>
                            <div className="img-each-pro">
                                <img alt="" src={item.imgg} />
                            </div>
                            <div style={{backgroundColor: item.color}} className="info-pro-hover">
                                <p>{item.year}</p>
                                <p>{item.descripcion}</p>
                            </div>
                            <p>{item.title}</p>
                        </a>
                    )
                })}
            </div>
            
            <Footer />
        </>
    )
}

export default Projects;