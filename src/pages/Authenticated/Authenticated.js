import React, { useState } from "react";
import "./Authenticated.scss";
import Login from "../../components/Authenticated/Login/Login";
import Register from "../../components/Authenticated/Register/Register";

export default function Authenticated(){

    const [ isLogin, setIsLogin ] = useState(true);

    const changeLogin = () => {
        setIsLogin(!isLogin);
    }
    return(
        <div className="authenticated">
            <h1>Sitema de Gestion de Recursos Materiales y Servicios</h1>
            {
               isLogin === true ? <Login  /> : <Register />
            }
            {
                isLogin === true ? (
                    <p>No tine una cuenta? <a onClick={() => changeLogin()}>Registrese</a></p>
                ) 
                : (
                    <p>Ya tiene una cuenta? <a onClick={() => changeLogin()}>Inicie Sesion</a></p>
                )
            }
        </div>
    )
}