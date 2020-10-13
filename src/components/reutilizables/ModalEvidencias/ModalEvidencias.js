import React from "react";
import { Modal, Button, Icon, Image} from "semantic-ui-react";
import { formatDate } from "../../../utils/reutilizables/fecha";
import "./ModalEvidencias.scss";

export default function ModalEvidencias(props){
    const {evidencias, abrir, cerrarModal} = props;

    return(
        <div className="modal-evidencias">
            <Modal
                onClose={cerrarModal}
                open={abrir}
                className="modal-usuario-box"
            >
                <Modal.Header>Evidencias</Modal.Header>
                <Modal.Content scrolling>
                    {
                        evidencias.map(e => {
                            return <div className="modal-evidencias__imagenes" key={e.id}>
                                       <p>Subida el {formatDate(e.createdAt)}</p>
                                        <div>
                                            <Image src={e.imagen}  />
                                        </div>
                                    </div>
                        })
                    }
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={cerrarModal} primary>
                        Cerrar <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}