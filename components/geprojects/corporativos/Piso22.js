import React from "react";
import CorporativosPro from "./CorporativosPro";
import { All_Corp_Projects } from "../../items";

function Piso22(){
    return(
        <>
            <CorporativosPro
                propPro = {All_Corp_Projects[0]}
            />
        </>
    )
}

export default Piso22;