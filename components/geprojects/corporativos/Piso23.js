import React from "react";
import CorporativosPro from "./CorporativosPro";
import { All_Corp_Projects } from "../../items";

function Piso17(){
    return(
        <>
            <CorporativosPro
                propPro = {All_Corp_Projects[3]}
            />
        </>
    )
}

export default Piso17;