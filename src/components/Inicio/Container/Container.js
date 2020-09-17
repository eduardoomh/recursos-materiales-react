import React, { useState, useEffect } from "react";
import "./Container.scss";
import { getEventos } from "../../../servicios/evento";
import { getMantenimientos } from "../../../servicios/mantenimiento";
import { getSalidas } from "../../../servicios/salida";
import { getDepartamentos } from "../../../servicios/departamento";
import { getVehiculos } from "../../../servicios/vehiculo";
import { getEspacios } from "../../../servicios/espacio";
import { getStatusvehiculos } from "../../../servicios/statusvehiculo";
import { getStatusorders } from "../../../servicios/statusorder";
import { getPuestoByUser, getPuestos } from "../../../servicios/puesto";
import { getCargos } from "../../../servicios/cargo";
import { getUbicaciones } from "../../../servicios/ubicacion";
import { getSubdirecciones } from "../../../servicios/subdireccion";
import { getUsers } from "../../../servicios/user";
import useIdentity from "../../../utils/hooks/useIdentity";
import { saveStorage, getStorage } from "../../../servicios/reutilizables/localStorage";
import CardCarrousel from "../../reutilizables/CardCarrousel/CardCarrousel";
import Titulo from "../../reutilizables/Titulo/Titulo";
import { eventosRecientes, mantenimientosRecientes, salidasRecientes } from "../../../api/data";

export default function Container(props){
    const { loading, setLoading } = props;
    const { identity } = useIdentity();

    const [arrayEventos, setArrayEventos] = useState(eventosRecientes);
    const [arrayMantenimientos, setArrayMantenimientos] = useState(mantenimientosRecientes);
    const [arraySalidas, setArraySalidas] = useState(salidasRecientes);

            const fetchData = async () => {
            try {
                const eventos = await getEventos();
                const mantenimientos = await getMantenimientos();
                const salidas = await getSalidas();
    
                if(eventos.status === "success"){
                    await saveStorage("eventos", eventos.elementos.data);   
                    setArrayEventos(eventos.elementos.data);        
                }
    
                if(mantenimientos.status === "success"){
                    await saveStorage("mantenimientos", mantenimientos.elementos.data);
                    setArrayMantenimientos(mantenimientos.elementos.data);            
                }
    
                if(salidas.status === "success"){
                    await saveStorage("salidas", salidas.elementos.data);
                    setArraySalidas(salidas.elementos.data);             
                }

                setLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        }

        const fetchDataAdmin = async () => {
            try{
                const departamentos = await getDepartamentos();
                const vehiculos = await getVehiculos();
                const statusorders = await getStatusorders();
                const espacios = await getEspacios();
                const cargos = await getCargos();
                const subdirecciones = await getSubdirecciones();
                const ubicaciones = await getUbicaciones();
                const statusvehiculos = await getStatusvehiculos();
                const puestos = await getPuestos();
                const permiso = await getPuestoByUser(identity.id);
                const users = await getUsers();
    
                if(departamentos.status === "success"){
                    await saveStorage("departamentos", departamentos.elementos.data);         
                }
    
                if(vehiculos.status === "success"){
                    await saveStorage("vehiculos", vehiculos.elementos);         
                }
    
                if(statusorders.status === "success"){
                    await saveStorage("statusorders", statusorders.elementos);           
                }
    
                if(espacios.status === "success"){
                    await saveStorage("espacios", espacios.elementos);          
                }

                if(cargos.status === "success"){
                    await saveStorage("cargos", cargos.cargos);          
                }
                if(subdirecciones.status === "success"){
                    await saveStorage("subdirecciones", subdirecciones.elementos);          
                }
                if(ubicaciones.status === "success"){
                    await saveStorage("ubicaciones", ubicaciones.elementos);          
                }
                if(statusvehiculos.status === "success"){
                    await saveStorage("statusvehiculos", statusvehiculos.elementos);          
                }
                if(puestos.status === "success"){
                    await saveStorage("puestos", puestos.elementos.data);          
                }
                if(permiso.status === "success"){
                    await saveStorage("permiso", permiso.elementos);          
                }else{
                    await saveStorage("permiso", "No hay permiso");
                }
                if(users.status === "success"){
                    await saveStorage("users", users.usuarios);          
                }

            }
            catch(err){
                console.log(err);
            }

        }



    useEffect( () => {
        fetchData();

        if(!getStorage("departamentos") && !getStorage("vehiculos") && !getStorage("espacios")
        && !getStorage("subdirecciones") && !getStorage("statusorders") && !getStorage("statusvehiculos")
        && !getStorage("permiso") && !getStorage("puestos") && !getStorage("cargos")&& !getStorage("locaciones"))
        {
            fetchDataAdmin();
            console.log("Esto solo pasa una vez");
        }

        

        return () => {
            setArrayEventos(eventosRecientes);
            setArrayMantenimientos(mantenimientosRecientes);
            setArraySalidas(salidasRecientes);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [identity.id])

     
    return(
        <div className="container">
            <Titulo titulo="Solicitudes Mas Recientes" />
            <div>
                {
                    loading === false  ? 
                    (
                        <>
                            <CardCarrousel titulo="Eventos" data={arrayEventos} />

                            <CardCarrousel titulo="Mantenimientos" data={arrayMantenimientos} />
                    
                            <CardCarrousel titulo="Salidas" data={arraySalidas} />
                        </>           
                    )
                    :
                    (
                        <p>Gargando datos...</p>
                    )

                }

            </div>
        </div>
    )
}