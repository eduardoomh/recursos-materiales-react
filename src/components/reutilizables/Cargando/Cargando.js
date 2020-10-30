import React from "react";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import "./Cargando.scss";

export default function Cargando(){
    scrollTop();
    
    return(
        <div className="cargando-pagina">
            <div><h2>cargando...</h2></div>
            <div><p>cargando...</p></div>
            <div></div>
            <div>
                <article><p>cargando...</p></article>
            </div>
        </div>
    )
}