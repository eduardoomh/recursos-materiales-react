import React from "react";
import "./MessageForm.scss";

export default function MessageForm(props) {
    const { data } = props;
    return (
        <div className="mensaje-form">
            <p>Nota:</p>
            <p>{data}</p>
        </div>
    )
}