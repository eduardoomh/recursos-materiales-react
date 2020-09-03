import React from "react";
import "./MenuResponsive.scss";

export default function MenuResponsive(props){
    const {conditional, children} = props;

    return(
        <ul className={conditional ? " open-submenu submenu-left" : "submenu-left"}>
            {children}
        </ul>
    );
}
