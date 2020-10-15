import React from "react";
import { Table, Image } from "semantic-ui-react";
import { transformarFecha } from "../../../../utils/reutilizables/fecha";
import logo from "../../../../assets/img/logo.png";
import "./FormatoEvento.scss";

export default function FormatoEvento(props) {
    const { data } = props;
    return (
        <div className="tabla-orden">
            <Table celled padded>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell rowSpan="3">
                           <Image src={logo} />
                           <p>Instituto Tecnologico de Matamoros</p>
                        </Table.Cell>
                        <Table.Cell >
                            Formato de Solicitud de evento
                        </Table.Cell>
                        <Table.Cell collapsing>
                            Codigo SGI-ITM-AD-PO-001-04
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell rowSpan="2">
                            Referencia al punto de la norma ISO
                            <br/>
                            ISO 9001:2015: 7.1.3
                            <br/>
                            ISO 14001:2015 8.1
                            <br/>
                            ISO 50001:2011: 4.5.5
                            <br/>
                            OHSAS 18001:2007: 4.4.6
                        </Table.Cell>
                        <Table.Cell collapsing>
                            Revision 1
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Pagina 1 de 1
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <p>SOLICITUD DE EVENTO</p>

            <Table celled padded>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell collapsing>
                            Nombre del evento
                        </Table.Cell>
                        <Table.Cell>
                            {data.nombre}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Fecha de Realizacion
                        </Table.Cell>
                        <Table.Cell>
                            {transformarFecha(data.fecha)}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Horario del evento
                        </Table.Cell>
                        <Table.Cell>
                            {`comienza a las ${data.hora_inicio} hrs. y termina a las ${data.hora_final} hrs.`}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Actividades a realizar
                        </Table.Cell>
                        <Table.Cell>
                            {data.actividades}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Verificado y Liberado por:
                        </Table.Cell>
                        <Table.Cell>
                            Usuario Administrador
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            fecha y firma:
                        </Table.Cell>
                        <Table.Cell>

                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Aprobado por:
                        </Table.Cell>
                        <Table.Cell>
                            Jefe de departamento
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            fecha y firma:
                        </Table.Cell>
                        <Table.Cell>

                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}