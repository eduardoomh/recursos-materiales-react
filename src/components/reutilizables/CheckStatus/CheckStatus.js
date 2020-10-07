import React from "react";
import { Step, Icon } from "semantic-ui-react";
import "./CheckStatus.scss";

export default function CheckStatus(props) {
    const { verificado, aprobado } = props;
    return (
        <div className="check-status">
            <Step.Group size="small">
                {
                    verificado ? (
                        <Step>
                            <Icon name='check' color="green"/>
                            <Step.Content>
                                <Step.Title>Verificacion</Step.Title>
                                <Step.Description>La solicitud ha sido verificada</Step.Description>
                            </Step.Content>
                        </Step>
                    ) : (
                            <Step active>
                                <Icon name='lock' />
                                <Step.Content>
                                    <Step.Title>Verificacion</Step.Title>
                                    <Step.Description>La solicitud necesita verificacion</Step.Description>
                                </Step.Content>
                            </Step>
                        )
                }
                {
                    aprobado && verificado && (
                        <Step>
                            <Icon name='check' color="green" />
                            <Step.Content>
                                <Step.Title>Aprobacion</Step.Title>
                                <Step.Description>La solicitud ha sido aprobada</Step.Description>
                            </Step.Content>
                        </Step>

                    )
                }

                {!verificado && !aprobado &&
                    (
                        <Step>
                            <Icon name='lock' />
                            <Step.Content>
                                <Step.Title>Aprobacion</Step.Title>
                                <Step.Description>La solicitud necesita aprobacion</Step.Description>
                            </Step.Content>
                        </Step>

                    )
                }

                {verificado && !aprobado &&
                    (
                        <Step active>
                            <Icon name='lock' />
                            <Step.Content>
                                <Step.Title>Aprobacion</Step.Title>
                                <Step.Description>La solicitud necesita aprobacion</Step.Description>
                            </Step.Content>
                        </Step>

                    )
                }

            </Step.Group>
        </div>
    )
}