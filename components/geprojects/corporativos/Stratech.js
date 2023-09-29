import React from "react";
import CorporativosPro from "./CorporativosPro";
import { All_Corp_Projects } from "../../items";

function Stratech(){
    return(
        <>
            <CorporativosPro
                propPro = {All_Corp_Projects[2]}
            />
        </>
    )
}

export default Stratech;