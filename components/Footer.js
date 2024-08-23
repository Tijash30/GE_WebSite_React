import React from 'react';

import './footer.css';
import { /*NavItems,*/ ContactItems, SocialMedia } from './items';
import logo from "../assets/logo_ancho.jpg";

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer-info'>
                <a href='/' className='logo_foo'>
                    {<h3>Proyección de espacios</h3>}
                    {<img src={logo} alt=''></img>}
                </a>
                <div className='contact'>
                    {/*<h3>Contáctanos</h3>*/}
                    {ContactItems.map((item, index)=>{
                        return(
                            <a  key={index} href={item.url} className='menu-cont'>
                                <p>
                                    <i className={item.icon}/>
                                    {item.title}
                                </p>
                            </a>
                        )
                    })}
                </div>
            </div>
            <hr className='footer-hr' />
            <div className='footer-sm'>
                {SocialMedia.map((item, index)=>{
                    return(
                        <a key={index} href={item.url} className={item.cName}>
                            <i className={item.icon}/>
                        </a>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Footer;