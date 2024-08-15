import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NewNavbar from '../components/NewNavbar';
import Footer from '../components/Footer';
import "../components/services.css";
import fondo from '../assets/designs/fondo2.jpg';
import tres1 from '../assets/designs/tres1.jpg';
import tres2 from '../assets/designs/tres2.jpg';
import tres3 from '../assets/designs/tres3.jpg';
import corporativo from '../assets/projects/PISO 23/2.JPG'
import comercial from '../assets/projects/LOB/RENDER/1.jpg';
import residencial from '../assets/projects/TAPALPA/RENDER/11.jpg';

function Services() {
    
    useEffect(() => {
        AOS.init();
    }, [])

    
    const imageArray = [tres1, tres2, tres3];

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(count => count + 1);
        }, 5000);

        return () => clearInterval(timerId);
    }, []);  
    
    const slide_images = imageArray[count % imageArray.length];

    return (
        <>
            <NewNavbar
                color= 'grigio'
            />
            <div  className='title'>
                <h1>Cubrimos todas sus necesidades con alta calidad y compromiso</h1>
            </div>

            <div className='service-img'>
                <img src={fondo} alt=''></img>
                
            </div>
            
            <div className='cuadro-titulo'>
                <div className='titulo-ser-presen'>
                    <h1 data-aos="fade-right">   NUESTROS<br/>SERVICIOS</h1>
                </div>
                <div className='img-titulo-ser'>
                    <img src={slide_images} alt=''></img>
                    {/*<div className='slider-dos'></div>*/}
                </div>
            </div>

            <div className='tutti-cuadro-titulo'>
                <div className='intro-txt-ser'>
                    <p className='intro-txt-ser-p'>G+E cuenta con 3 áreas arquitectónicas, enfocadas en crear y diseñar proyectos modernos con alta calidad, entregándole a nuestros clientes una alta calidad en el resultado final.</p>
                    {/*<div className='ul-ser'>
                        <p className='ul-ser-p' data-aos="fade-up" data-aos-duration='600'>- Corporativos</p>
                        <p className='ul-ser-p' data-aos="fade-up" data-aos-duration='600'>- Comerciales</p>
                        <p className='ul-ser-p' data-aos="fade-up" data-aos-duration='600'>- Residenciales</p>
                    </div>*/}
                </div>
            </div>

            

            <div className='catalogo-ser'>
                <a href='service/corporativos' className='each-service' data-aos="fade-right" data-aos-duration='600'>
                    <p>CORPORATIVO</p>
                    <img src={corporativo} alt=''/>
                </a>
                <a href='service/comerciales' className='each-service' data-aos="fade-right" data-aos-duration='900'>
                    <p>COMERCIAL</p>
                    <img src={comercial} alt=''/>
                </a>
                <a href='service/residenciales' className='each-service' data-aos="fade-right" data-aos-duration='1200'>
                    <p>RESIDENCIAL</p>
                    <img src={residencial} alt=''/>
                </a>
                {/*<InfoEachService 
                    titulo= 'CORPORATIVO'
                    imagen= {Img_designs[5]}
                    info= 'Jash'
                    tempo= {600}
                />*/}

            </div>
            

            <Footer/>
        </>
    )
}

/*function InfoEachService(props){
    return(
        <>
            <div className="flipper-each" data-aos="fade-right" data-aos-duration={props.tempo}>
                <div className='face-each front' >
                    <p>{props.titulo}</p>
                    <img src={props.imagen} alt=''/>
                </div>
                <div className="face-each back">
                    <ul>
                        {Fra_Corp[1].map((item, index)=>{
                            return(
                                <li className="list-info-each" key={index}>
                                    <p >{item}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}*/

export default Services;