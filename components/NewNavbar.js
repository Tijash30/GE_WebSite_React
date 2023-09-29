import React, { useEffect, useState  } from 'react';
import "./NewNavStyles.css";
import { NavItems } from './items';
import { Link } from "react-router-dom";
import logo_png from "../assets/logo_final.png";
import img1 from "../assets/logo_largo_final.png";


function NewNavbar(props){
    
    const [clicked, setClicked]= useState(false);
    const handleclick = () => {
        setClicked(!clicked)
    }

  
    const [scrollDir, setScrollDir] = useState(true);
  
    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.scrollY;
        let ticking = false;
    
        const updateScrollDir = () => {
            const scrollY = window.scrollY;
        
            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            /*
            true= scroll down 
            false= scroll up
            */
            setScrollDir(scrollY > lastScrollY ? false : true);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };
        
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };
    
        window.addEventListener("scroll", onScroll);
        //console.log(scrollDir);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return(
        
        <nav className={scrollDir ? `NavbarItems-${props.color}`: `NavbarItems-${props.color} active`}>
            <div className="logo">
                <Link to="/">
                    <img src={img1} alt=''></img>
                </Link>
            </div>
            <div className="logo-due">
                <Link to="/">
                    <img src={logo_png} alt=''></img>
                </Link>
            </div>

            <div className='menu-icons' onClick={handleclick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {NavItems.map((item, index)=>{
                    return(
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                {/*<i className={item.icon}/>*/}
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}





export default NewNavbar;