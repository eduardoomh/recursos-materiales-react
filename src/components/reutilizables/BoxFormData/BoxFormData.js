import React from "react";
import { Image } from "semantic-ui-react";
import defaultAvatar from "../../../assets/img/default_user.png";
import "./BoxFormData.scss";

export default function BoxFormData(props) {
    const { titulo, data, avatar, user = false, imagen = false } = props;
    return (
        <article>
            <p>{titulo}</p>
            <p>
                {
                    user &&  <article className="box-imagen"><Image src={avatar === null ? defaultAvatar : avatar} /></article>
                }
                {
                    imagen ? <Image src={data} /> : data || "cargando"
                }
    
            </p>
        </article>
    )
}