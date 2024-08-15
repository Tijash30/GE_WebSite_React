import React from "react";
import ComercialesPro from "./ComercialesPro";
import { All_Comer_Projects } from "../../items";

function Lob_footwear(){
    return(
        <>
            <ComercialesPro 
                propPro= {All_Comer_Projects[1]}
            />
        </>
    )
}

export default Lob_footwear;