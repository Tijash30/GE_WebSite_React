import React from "react";
import Resi from "./Residenciales_Pro";
import { All_Resi_Projects } from "../../items";

function Casa(){
    return(
        <>
            <Resi
                propPro= {All_Resi_Projects[0]}
            />
        </>
    )
}

export default Casa;