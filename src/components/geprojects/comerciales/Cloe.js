import React from "react";
import ComercialesPro from "./ComercialesPro";
import { All_Comer_Projects } from "../../items";

function Cloe(){
    return(
        <>
            <ComercialesPro 
                propPro= {All_Comer_Projects[0]}
            />
        </>
    )
}

export default Cloe;