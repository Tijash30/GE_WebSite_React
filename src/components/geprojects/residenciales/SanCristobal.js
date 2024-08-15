import React from "react";
import Resi from "./Residenciales_Pro";
import { All_Resi_Projects } from "../../items";

function SanCristobal(){
    return(
        <>
            <Resi
                propPro= {All_Resi_Projects[1]}
            />
        </>
    )
}

export default SanCristobal;