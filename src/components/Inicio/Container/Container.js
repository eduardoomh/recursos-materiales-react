import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { OBTENER_EVENTOS } from "../../../gql/evento";
import { OBTENER_REPARACIONES, OBTENER_SERVICIOS, OBTENER_TRANSPORTES } from "../../../gql/mantenimiento";
import CardCarrousel from "../../reutilizables/CardCarrousel/CardCarrousel";
import Titulo from "../../reutilizables/Titulo/Titulo";
import { eventosRecientes, mantenimientosRecientes, salidasRecientes } from "../../../api/data";
import "./Container.scss";

export default function Container(props){
    const { loading, setLoading } = props;
    const [arrayEventos, setArrayEventos] = useState(false);
    const [arrayTransportes, setArrayTransportes] = useState(false);
    const [arrayServicios, setArrayServicios] = useState(false);
    const [arrayReparaciones, setArrayReparaciones] = useState(false);


    return(
        <div className="container">
            <Titulo titulo="Solicitudes Mas Recientes" />
            <div>        
                
            </div>
        </div>
    )
}