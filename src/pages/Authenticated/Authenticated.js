import React, { useState } from "react";
import "./Authenticated.scss";
import Login from "../../components/Authenticated/Login/Login";
import Register from "../../components/Authenticated/Register/Register";

export default function Authenticated(){

    const [ isLogin, setIsLogin ] = useState(true);
    const [ loading, setLoading] = useState(false);

    const changeLogin = () => {
        setIsLogin(!isLogin);
    }
    return(
        <div className="authenticated">
            <h1>Sistema de Gestión de Recursos Materiales y Servicios</h1>
            {
               isLogin === true ? <Login 
                                    loading={loading} 
                                    setLoading={setLoading} 
                                /> : 
                                <Register 
                                    setIsLogin={setIsLogin} 
                                    loading={loading} 
                                    setLoading={setLoading} 
                                />
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