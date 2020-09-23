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
            <h1>Sistema de Gestión de Recursos Materiales y Servicios</h1>
            {
               isLogin === true ? <Login  /> : <Register setIsLogin={setIsLogin} />
            }
            {
                isLogin === true ? (
                    <p>No tine una cuenta? <span onClick={() => changeLogin()}>Registrese</span></p>
                ) 
                : (
                    <p>Ya tiene una cuenta? <span  onClick={() => changeLogin()}>Inicie Sesion</span></p>
                )
            }
        </div>
    )
}