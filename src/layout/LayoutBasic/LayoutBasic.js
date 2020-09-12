import React, {useState} from "react";
import Header from "../../components/Header/Header";
import "./Layout.scss";
import MenuHamburguer from "../../components/Menu/MenuHamburguer/MenuHamburguer";
import SubmenuSolicitudes from "../../components/Menu/SubmenuSolicitudes/SubmenuSolicitudes";
import SubmenuCrear from "../../components/Menu/SubmenuCrear/SubmenuCrear";
import SubmenuUsuario from "../../components/Menu/SubmenuUsuario/SubmenuUsuario";
import Footer from "../../components/Footer/Footer";

export default function LayoutBasic(props) {
    const [showHamburguer, setShowHamburguer] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [showSubmenuCrear, setShowSubmenuCrear] = useState(false);
    const [showSubmenuUsuario,  setShowSubmenuUsuario] = useState(false);

    const { children } = props;

    const closeAll = () => {
        setShowHamburguer(false);
        setShowSubmenu(false);
        setShowSubmenuCrear(false);
        setShowSubmenuUsuario(false);
    }

    const previousMenu = () => {
        setShowSubmenu(false);
        setShowSubmenuCrear(false);
        setShowSubmenuUsuario(false);
    }

    return (
        <>
            <div className={showHamburguer ? "layout scroll" : "layout"}>
                <MenuHamburguer 
                    showHamburguer={showHamburguer}
                    setShowSubmenu={setShowSubmenu}
                    setShowSubmenuCrear={setShowSubmenuCrear}
                    setShowSubmenuUsuario={setShowSubmenuUsuario}
                    closeAll={closeAll}
                />

                <SubmenuSolicitudes 
                    showSubmenu={showSubmenu} 
                    previousMenu={previousMenu} 
                />

                <SubmenuCrear 
                    showSubmenuCrear={showSubmenuCrear} 
                    previousMenu={previousMenu} 
                />

                <SubmenuUsuario 
                    showSubmenuUsuario={showSubmenuUsuario} 
                    previousMenu={previousMenu} 
                />

                <Header 
                    show={showHamburguer} setShow={setShowHamburguer}
                    setShowSubmenu={setShowSubmenu}
                    setShowSubmenuCrear={setShowSubmenuCrear}
                    setShowSubmenuUsuario={setShowSubmenuUsuario}
                     />
                <main className={showHamburguer ? "move blur": ""} >
                    {children}
                </main>
                
                <Footer />
            </div>

        </>
    )
}