import React from "react";
import CorporativosPro from "./CorporativosPro";
import { All_Corp_Projects } from "../../items";

function Piso20(){
    return(
        <>
            <CorporativosPro
                propPro = {All_Corp_Projects[1]}
            />
        </>
    )
}

export default Piso20;