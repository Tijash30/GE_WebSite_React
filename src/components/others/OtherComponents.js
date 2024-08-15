import React from "react";

import '../others/otherCom.css';
import { Bigger_designs, Img_designs, Info_pro_Corp } from "../items";

function Carrusel(){
    return(
        <>
            <div className='carrusel'>
                <div className='slides-ca'>

                    <input type='radio' name='r' id='r1' checked></input>
                    <input type='radio' name='r' id='r2' checked></input>
                    <input type='radio' name='r' id='r3' checked></input>
                    <input type='radio' name='r' id='r4' checked></input>
                    <input type='radio' name='r' id='r5' checked></input>

                    <div className='slide-ca s1'>
                        <img alt='' src={Bigger_designs[0]}></img> 
                    </div>
                    <div className='slide-ca'>
                        <img alt='' src={Bigger_designs[5]}></img>
                    </div>
                    <div className='slide-ca'>
                        <img alt='' src={Bigger_designs[4]}></img>
                    </div>
                    <div className='slide-ca'>
                        <img alt='' src={Bigger_designs[7]}></img>
                    </div>
                    <div className='slide-ca'>
                        <img alt='' src={Bigger_designs[3]}></img>
                    </div>                   
                </div>
            </div>
            <div className='navigation-ca'>
                <label for='r1' ></label>
                <label for='r2' ></label>
                <label for='r3' ></label>
                <label for='r4' ></label>
                <label for='r5' ></label>
            </div>
        </>
    )
}

export default Carrusel;