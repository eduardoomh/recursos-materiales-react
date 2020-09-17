import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleDepartamento.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getDepartamento } from "../../../../servicios/departamento";
import InfoDepartamento from "../../../../components/admin/detalle/departamentos/InfoDepartamento";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function DetalleDepartamento(){
    const [content, setContent] = useState("cargando ....");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect( () => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const departamento = await getDepartamento(id);
                
                setContent( () => {
                    if(departamento.status === "success"){
                        return departamento.elementos
                    }
                });
                setLoading(false);
                
    
            }
            catch(err){
                console.log(err);
            }
        }
        
        scrollTop();
        fetchData();

        return () => {
            setContent("");
        }
    },[id]);



    return(
        <div className="ver-departamento">
            <Banner titulo="Detalle del Departamento" />
            <Titulo titulo="Informacion sobre el Departamento seleccionado" />
            <InfoDepartamento data={content} loading={loading} />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </div>
    )
}