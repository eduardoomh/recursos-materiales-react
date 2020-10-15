import React from "react";
import { Table, Image } from "semantic-ui-react";
import { transformarFecha } from "../../../../utils/reutilizables/fecha";
import logo from "../../../../assets/img/logo.png";
import "./FormatoMantenimiento.scss";

export default function FormatoMantenimiento(props) {
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
                            Formato para orden de Mantenimiento
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
            <p>ORDEN DE TRABAJO DE MANTENIMIENTO</p>

            <Table celled padded>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell collapsing>
                            Mantenimiento de tipo
                        </Table.Cell>
                        <Table.Cell>
                            {data.mantenimiento}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Tipo de Servicio
                        </Table.Cell>
                        <Table.Cell>
                            {data.servicio.nombre}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Asignado A
                        </Table.Cell>
                        <Table.Cell>
                            {data.asignado_a}
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
                            Trabajo Realizado
                        </Table.Cell>
                        <Table.Cell>
                            {data.trabajo_realizado}
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
                    <Table.Row>
                        <Table.Cell>
                            Equipo de proteccion personal:
                        </Table.Cell>
                        <Table.Cell>
                            {data.equipo_proteccion || "no aplica"}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}