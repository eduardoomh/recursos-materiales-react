import React, {useState} from "react";
import Banner from "../../components/reutilizables/Banner/Banner";
import Titulo from "../../components/reutilizables/Titulo/Titulo";
import Container from "../../components/calendario/Container/Container";
import "./Calendario.scss";

export default function Calendario(){
    const [fecha, setFecha] = useState(new Date());
    const [inicio, setInicio] = useState("");
    const [final, setFinal] = useState("");
    const [abrir, setAbrir] = useState(false);
    const [evntArr, setEvntArr] = useState("");
    const [mntoArr, setMntoArr] = useState("");
    const [loading, setLoading] = useState(false);

    const abrirModal = () => {
        setAbrir(true);
    }

    const cerrarModal = () => {
        setAbrir(false);
        setEvntArr("");
        setMntoArr("");
    }

    return(
        <div className="calendario">
            <Banner titulo="Calendario de actividades" />
            <Titulo titulo="Consulte solicitudes y fechas" />
            <Container 
                fecha={fecha} 
                setFecha={setFecha}
                inicio={inicio} 
                final={final}
                setInicio={setInicio}
                setFinal={setFinal}
                cerrarModal={cerrarModal}
                abrirModal={abrirModal}
                abrir={abrir}
                evntArr={evntArr}
                mntoArr={mntoArr}
                setEvntArr={setEvntArr}
                setMntoArr={setMntoArr}
                setLoading={setLoading}
                loading={loading}
            />
  
        </div>
    )
}