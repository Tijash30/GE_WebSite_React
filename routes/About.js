import React from 'react';

import '../components/about.css';
import { Historia_personas } from '../components/items';
import NewNavbar from '../components/NewNavbar';
import Footer from '../components/Footer';
import mis from '../assets/mis.png';
import vis from '../assets/vis.png';
import com from '../assets/com.png';
import logo from '../assets/logo_ancho_final.png';


function About() {
    return (
        <>
            <NewNavbar color= 'bianco' />

            <div className='espacio-nav-ochenta' />

            <div className='imagen-equipo'>
                <img alt='' src={logo} />
            </div>
            <div className='mis-vis-com'>
                <MisVisCom 
                    imagen ={mis}
                    titulo= 'Misión'
                    txt= 'G+E Proyección de espacios  tiene por misión cumplir con la expectativa del cliente al momento de ejecutar un proyecto o construcción en términos de calidad, tiempo de entrega y costos justos, siempre en cumplimiento de los lineamientos técnicos, éticos, legales y sociales que nuestros clientes requieren y que nosotros mismos nos exigimos.'
                />
                <MisVisCom 
                    imagen ={vis}
                    titulo= 'Visión'
                    txt= 'Proyección de espacios S de RL de CV tiene por visión convertirse en una opción practica, sencilla, confiable y de alto valor, a favor de los clientes, teniendo como constante la innovación técnica, respeto al medio-ambiente y compromiso social para con los clientes y colaboradores.'
                />
                <MisVisCom 
                    imagen ={com}
                    titulo= 'Valores'
                    txt= 'Nos caracteriza nuestra pasión por la arquitectura, nuestro compromiso por la calidad ,nuestra disciplina por el trabajo duro, nuestra dedicación con el servicio a cliente, nuestra eficiencia y eficacia para entregar la mejor calidad con el precio justo y el tiempo adecuado, nuestro respeto a todos nuestros clientes y colaboradores.'
                />
            </div>
            
            {/*<div className='historia-ge'>

            </div>*/}

            <p className='tit-nuestro-equipo'>Nuestro equipo</p>
            <div className='historia-personal'>
                {Historia_personas.map((item, index) => {
                    return(
                        <div className='each-persona' key={index}>
                            <div  className='img-persona'>
                                <img src={item.imagen} alt='' ></img>
                            </div>
                            <p className='nombre-persona'>{item.nombre}</p>
                            <p className='puesto-persona'>{item.puesto}</p>
                        </div>
                    )
                })}
            </div>

            <Footer />
        </>
    )
}

function MisVisCom(props){
    return(
        <>
            <div className='each-misviscom'>
                {/*<div className='img-misviscom'>
                    <img src={props.imagen} alt='' ></img>
                </div>*/}
                <p className='tit-each-misviscom'>{props.titulo}</p>
                <p className='txt-each-misviscom'>{props.txt}</p>
            </div>
        </>
    )
}

export default About;