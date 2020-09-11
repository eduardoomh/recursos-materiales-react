import React from "react";
import { Modal } from "semantic-ui-react";
import "./ModalBasic.scss";

export default function ModalBasic(props){
    const { show, children} = props;

    const onClose = () => {
        return false;
    }

    return(
        <Modal size="mini" open={show} onClose={onClose} className="modal-basic">
            {children}
        </Modal>

    );
}