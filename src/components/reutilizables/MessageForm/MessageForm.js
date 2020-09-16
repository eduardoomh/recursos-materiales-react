import React from "react";
import { Message } from "semantic-ui-react";

export default function MessageForm(props) {
    const { titulo, data } = props;
    return (
        <Message>
            {
                titulo && data ? (
                    <>
                        <Message.Header>{titulo}</Message.Header>
                        <p>{data}</p>
                    </>

                ) : (
                        <>
                            <Message.Header>Solicitud pendiente</Message.Header>
                            <p>
                                La solicitud estara visible pero pendiente hasta que el jefe del departamento de recursos materiales y servicios verifique la solicitud y hasta que el jefe del departamento solicitante apruebe la solicitud.
                            </p>
                        </>

                    )
            }

        </Message>
    )
}