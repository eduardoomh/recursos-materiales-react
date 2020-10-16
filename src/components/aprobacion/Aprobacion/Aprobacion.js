import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import useIdentity from "../../../utils/hooks/useIdentity";
import CheckStatus from "../../reutilizables/CheckStatus/CheckStatus";
import AprobarModal from "../../reutilizables/AprobarModal/AprobarModal";
import FormatoPdf from "../FormatoPdf/FormatoPdf";
import "./Aprobacion.scss";

export default function Aprobacion(props) {
    const { verificado, aprobado, refetch, query, departamento, permiso, tipo, data, administrador} = props;
    const [abrir, setAbrir] = useState(false);
    const [abrirPDF, setAbrirPDF] = useState(false);
    const { identity } = useIdentity();

    const cerrarModal = () => {
        setAbrir(false);
        setAbrirPDF(false);
    }

    const abrirModal = (data) => {
        if(data){
            setAbrirPDF(true);
        }else{
           setAbrir(true); 
        }
        
    }

    return (
        <div className="aprobacion">
            <CheckStatus
                verificado={verificado}
                aprobado={aprobado}
            />
            <p>
                {
                    verificado && aprobado ?
                        "Ahora puede generar la solicitud en formato PDF"
                        :
                        "Una vez que la solicitud sea verificada por el usuario administrador y aprobada por el jefe del departamento solicitante se generara la solicitud en PDF"
                }
            </p>
            {
                !verificado && identity.estatus === "administrador" &&
                <>
                    <div>
                        <Button icon labelPosition='right' className="boton-guindo" onClick={() => abrirModal()} >
                            Verificar Solicitud
                                <Icon name='check' />
                        </Button>
                    </div>
                </>
            }
            {
                verificado && !aprobado && permiso?.departamento.id === departamento && permiso?.puesto.nombre === "Jefe" &&
                <>
                    <div>
                        <Button icon labelPosition='right' className="boton-guindo" onClick={() => abrirModal()} >
                            Aprobar Solicitud
                                <Icon name='check' />
                        </Button>
                    </div>
                </>
            }
            {
                verificado && aprobado  &&
                <>
                    <div>
                        <Button icon labelPosition='right' className="boton-guindo" onClick={() => abrirModal(true)} >
                            Generar Reporte
                                <Icon name='file pdf' />
                        </Button>
                    </div>
                </>
            }
            <FormatoPdf abrir={abrirPDF} cerrarModal={cerrarModal} data={data} tipo={tipo} administrador={administrador}/>
            <AprobarModal abrir={abrir} cerrar={cerrarModal} tipo={tipo} verificado={verificado} refetch={refetch} query={query} />
        </div>
    )
}