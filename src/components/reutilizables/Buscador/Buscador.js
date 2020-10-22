import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { size } from "lodash";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import { Search as SearchUI, Modal, Button, Icon, Image } from "semantic-ui-react";
import imagenInfo from "../../../assets/img/buscar-info.jpg";
import "./Buscador.scss";

export default function Buscador(props) {
    const { tipo, query, cerrar, abrir } = props;
    const [search, setSearch] = useState(null);
    const [results, setResults] = useState([]);

    const { data, loading } = useQuery(query, {
        variables: {
            search
        }
    });

    console.log(data);
    useEffect(() => {
        switch (tipo) {
            case "evento":
                if (size(data?.buscarEvento) > 0) {
                    const elementos = [];
                    data.buscarEvento.forEach((e, index) => {
                        elementos.push({
                            key: index,
                            identificador: e.id,
                            nombre: e.nombre,
                            fecha: e.fecha,
                        });
                    });
                    setResults(elementos);

                } else {
                    setResults([]);
                }
                break;
            case "mantenimiento":
                if (size(data?.buscarMantenimiento) > 0) {
                    const elementos = [];
                    data.buscarMantenimiento.forEach((e, index) => {
                        elementos.push({
                            key: index,
                            identificador: e.id,
                            nombre: e.nombre,
                            fecha: e.fecha,
                        });
                    });
                    setResults(elementos);

                } else {
                    setResults([]);
                }
                break;
            case "salida":
                if (size(data?.buscarSalida) > 0) {
                    const elementos = [];
                    data.buscarSalida.forEach((e, index) => {
                        elementos.push({
                            key: index,
                            identificador: e.id,
                            nombre: e.destino,
                            fecha: e.fecha,
                        });
                    });
                    setResults(elementos);

                } else {
                    setResults([]);
                }
                break;
            default:
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const onChange = (e) => {
        if (e.target.value) setSearch(e.target.value);
        else setSearch(null);
    }

    const handleResultSelect = () => {
        setSearch(null);
        setResults([]);
    }

    return (
        <Modal
            onClose={cerrar}
            open={abrir}
        >
            <Modal.Header>Buscador</Modal.Header>
            <Modal.Content scrolling>
                <div className="buscar-elementos">
                    <div className="buscar-elementos__input-box">
                        <p>Busque las solicitudes de {tipo} por nombre</p>
                        <SearchUI
                            fluid
                            size="small"
                            input={{ icon: "search", iconPosition: "left" }}
                            loading={loading}
                            value={search || ""}
                            onSearchChange={onChange}
                            onResultSelect={handleResultSelect}
                            results={results}
                            resultRenderer={(e) => <ResultSearch data={e} tipo={tipo} />}
                        />
                    </div>
                    <div className="buscar-elementos__resultados">
                        <div>
                            <Image src={imagenInfo} />
                        </div>
                    </div>

                </div>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={cerrar}>
                    cerrar
          </Button>
            </Modal.Actions>
        </Modal>
    );
}

function ResultSearch(props) {
    const { data, tipo } = props;

    return (
        <Link className="buscar-elementos__item" to={`/${tipo}/${data.identificador}`}>
            <div>
                <p>{data.nombre}</p>
                <p> <Icon name="clock" />{transformarFecha(data.fecha)}</p>
            </div>
        </Link>
    )
}