import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../components/home.css";



import NewNavbar from '../components/NewNavbar';
import { Img_clients, /*Img_designs,*/ Imgs_e_info_Home } from '../components/items';
import Footer from '../components/Footer';

//const imageArray = [img1, img2, img3];

function Home(){
    
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <>
            <NewNavbar color='bianco'/>

            <div className="home-image">
                {<div className="slider"> </div>}
                {/*<img src={image} alt="" />*/}
                
            </div>
            <div className='fondo-transparente-vh' />

            {/*<p className='tituio-intro-cuatro'>Nuestros mejores diseños </p>*/}
            <div className='intro-cuatro-imgs'>
                {Imgs_e_info_Home.map((item, index) => {
                    return(
                        <div className='each-cuatro-imgs' key={index}>
                            <a href={item.url} className='img-de-each'>
                                <img src={item.imagen} alt='' ></img>
                            </a>
                            <p className='tit-each-imgs'>{item.titulo}</p>
                            <p className='txt-each-imgs'>{item.info}</p>
                        </div>
                    )
                })}
            </div>

            <div className='presen-due-home'>
                <div className='presen-quienes'>
                    <p>¿Quiénes Somos?</p>
                </div>
                <div className='qiuenes-info'>
                    <div className='quienes-div-xt'>
                        <p className='txt-wuienes'>Somos una empresa orgullosamente Tapatía con mas de 25 años de experiencia en el área de arquitectura y construcción dedicada a la búsqueda constante de la satisfacción del cliente a partir de proyectos arquitectónicos y ejecuciones constructivas con los mas altos estándares de calidad, comprometidos con la mejora continua .</p>
                        <p className='txt-wuienes'>Contamos con un capital humano que comparte nuestros ideales asi como nuestros altos estándares de calidad y pasión por  la Arquitectura y el diseño y un equipo administrativo dedicado a entregar la mejor relacion precio-calidad para la satisfacción del cliente.</p>
                    </div>
                    <div className='img-quienes'>
                        <div />
                        {/*<img alt='' src={Img_designs[3]} />*/}
                    </div>
                </div>
            </div>
            
            <div className='clientes'>
                <hr className='green-line'/>
                <hr className='grey-line'/>
                <p>NUESTROS CLIENTES</p>
                <div className='catalogo'>
                    {Img_clients.map((item, index) => {
                        return(
                            <a href={item.url} className={item.cName} key={index} data-aos="fade-up" data-aos-duration='600'>
                                <img src={item.img_name} alt='' ></img>
                            </a>
                        )
                    })}
                </div>
            </div>
            

            <Footer/>
        </>
    )
}

export default Home;
