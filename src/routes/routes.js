import Inicio from "../pages/Inicio/Inicio.js";
import LayoutBasic from "../layout/LayoutBasic/LayoutBasic";
import Eventos from  "../pages/Eventos/Eventos";
import Mantenimientos from "../pages/Mantenimientos/Mantenimientos";
import Salidas from "../pages/Salidas/Salidas";
import Calendario from "../pages/Calendario/Calendario";
import VerEvento from "../pages/VerDetalle/VerEvento/VerEvento";
import VerMantenimiento from "../pages/VerDetalle/VerMantenimiento/VerMantenimiento";
import VerSalida from "../pages/VerDetalle/VerSalida/VerSalida";
import CrearEvento from "../pages/CrearSolicitud/CrearEvento/CrearEvento";
import CrearMantenimiento from "../pages/CrearSolicitud/CrearMantenimiento/CrearMantenimiento";
import CrearSalida from "../pages/CrearSolicitud/CrearSalida/CrearSalida";
import ActualizarEvento from "../pages/ActualizarSolicitud/ActualizarEvento/ActualizarEvento";
import ActualizarMantenimiento from "../pages/ActualizarSolicitud/ActualizarMantenimiento/ActualizarMantenimiento";
import ActualizarSalida from "../pages/ActualizarSolicitud/ActualizarSalida/ActualizarSalida";
import Perfil from "../pages/usuario/Perfil/Perfil";
import EditarPerfil from "../pages/usuario/EditarPerfil/EditarPerfil";
import MisSolicitudes from "../pages/usuario/MisSolicitudes/MisSolicitudes";
import Departamentos from "../pages/administrador/ver/departamentos/Departamentos";
import Vehiculos from "../pages/administrador/ver/vehiculos/Vehiculos";
import Espacios from "../pages/administrador/ver/espacios/Espacios";
import Statusorders from "../pages/administrador/ver/statusorders/Statusorders";
import Cargos from "../pages/administrador/ver/cargos/Cargos";
import Puestos from "../pages/administrador/ver/puestos/Puestos";
import Statusvehiculos from "../pages/administrador/ver/statusvehiculos/Statusvehiculos";
import Subdirecciones from "../pages/administrador/ver/subdirecciones/Subdirecciones";
import Ubicaciones from "../pages/administrador/ver/ubicaciones/Ubicaciones";
import CrearCargo from "../pages/administrador/crear/cargos/CrearCargo";
import CrearDepartamento from "../pages/administrador/crear/departamentos/CrearDepartamento";
import CrearEspacio from "../pages/administrador/crear/espacios/CrearEspacio";
import CrearPuesto from "../pages/administrador/crear/puestos/CrearPuesto";
import CrearStatusorder from "../pages/administrador/crear/statusorders/CrearStatusorder";
import CrearStatusvehiculo from "../pages/administrador/crear/statusvehiculos/CrearStatusvehiculo";
import CrearSubdireccion from "../pages/administrador/crear/subdirecciones/CrearSubdireccion";
import CrearUbicacion from "../pages/administrador/crear/ubicaciones/CrearUbicacion";
import CrearVehiculo from "../pages/administrador/crear/vehiculos/CrearVehiculo";
import EditCargo from "../pages/administrador/actualizar/cargos/EditCargo";
import EditDepartamento from "../pages/administrador/actualizar/departamentos/EditDepartamento";
import EditEspacio from "../pages/administrador/actualizar/espacios/EditEspacio";
import EditPuesto from "../pages/administrador/actualizar/puestos/EditPuesto";
import EditStatusorder from "../pages/administrador/actualizar/statusorders/EditStatusorder";
import EditStatusvehiculo from "../pages/administrador/actualizar/statusvehiculos/EditStatusvehiculo";
import EditSubdireccion from "../pages/administrador/actualizar/subdirecciones/EditSubdireccion";
import EditUbicacion from "../pages/administrador/actualizar/ubicaciones/EditUbicacion";
import EditVehiculo from "../pages/administrador/actualizar/vehiculos/EditVehiculo";
import DetalleCargo from "../pages/administrador/detalle/cargos/DetalleCargo";
import DetalleDepartamento from "../pages/administrador/detalle/departamentos/DetalleDepartamento";
import DetalleEspacio from "../pages/administrador/detalle/espacios/DetalleEspacio";
import DetallePuesto from "../pages/administrador/detalle/puestos/DetallePuesto";
import DetalleStatusorder from "../pages/administrador/detalle/statusorders/DetalleStatusorder";
import DetalleStatusvehiculo from "../pages/administrador/detalle/statusvehiculos/DetalleStatusvehiculo";
import DetalleSubdireccion from "../pages/administrador/detalle/subdirecciones/DetalleSubdireccion";
import DetalleUbicacion from "../pages/administrador/detalle/ubicaciones/DetalleUbicacion";
import DetalleVehiculo from "../pages/administrador/detalle/vehiculos/DetalleVehiculo";


export const routes = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Inicio,
        exact: true
    },
    {
        path: "/mantenimientos",
        layout: LayoutBasic,
        component: Mantenimientos,
        exact: true
    },
    {
        path: "/eventos",
        layout: LayoutBasic,
        component: Eventos,
        exact: true
    },
    {
        path: "/salidas",
        layout: LayoutBasic,
        component: Salidas,
        exact: true
    },
    {
        path: "/calendario",
        layout: LayoutBasic,
        component: Calendario,
        exact: true
    },
    {
        path: "/mantenimientos/:id",
        layout: LayoutBasic,
        component: VerMantenimiento,
        exact: true
    },
    {
        path: "/eventos/:id",
        layout: LayoutBasic,
        component: VerEvento,
        exact: true
    },
    {
        path: "/salidas/:id",
        layout: LayoutBasic,
        component: VerSalida,
        exact: true
    },
    {
        path: "/nuevo/evento",
        layout: LayoutBasic,
        component: CrearEvento,
        exact: true
    },
    {
        path: "/nuevo/mantenimiento",
        layout: LayoutBasic,
        component: CrearMantenimiento,
        exact: true
    },
    {
        path: "/nuevo/salida",
        layout: LayoutBasic,
        component: CrearSalida,
        exact: true
    },
    {
        path: "/actualizar/evento/:id",
        layout: LayoutBasic,
        component: ActualizarEvento,
        exact: true
    },
    {
        path: "/actualizar/mantenimiento/:id",
        layout: LayoutBasic,
        component: ActualizarMantenimiento,
        exact: true
    },
    {
        path: "/actualizar/salida/:id",
        layout: LayoutBasic,
        component: ActualizarSalida,
        exact: true
    },
    {
        path: "/usuario/perfil",
        layout: LayoutBasic,
        component: Perfil,
        exact: true
    },
    {
        path: "/usuario/perfil/editar",
        layout: LayoutBasic,
        component: EditarPerfil,
        exact: true
    },
    {
        path: "/usuario/solicitudes",
        layout: LayoutBasic,
        component: MisSolicitudes,
        exact: true
    }
];

export const routesAdmin = [
    {
        path: "/admin/departamentos",
        layout: LayoutBasic,
        component: Departamentos,
        exact: true,
        admin: true
    },
    {
        path: "/admin/vehiculos",
        layout: LayoutBasic,
        component: Vehiculos,
        exact: true,
        admin: true
    },
    {
        path: "/admin/statusorders",
        layout: LayoutBasic,
        component: Statusorders,
        exact: true,
        admin: true
    },
    {
        path: "/admin/locaciones",
        layout: LayoutBasic,
        component: Espacios,
        exact: true,
        admin: true
    },
    {
        path: "/admin/cargos",
        layout: LayoutBasic,
        component: Cargos,
        exact: true,
        admin: true
    },
    {
        path: "/admin/puestos",
        layout: LayoutBasic,
        component: Puestos,
        exact: true,
        admin: true
    },
    {
        path: "/admin/statusvehiculos",
        layout: LayoutBasic,
        component: Statusvehiculos,
        exact: true,
        admin: true
    },
    {
        path: "/admin/subdirecciones",
        layout: LayoutBasic,
        component: Subdirecciones,
        exact: true,
        admin: true
    },
    {
        path: "/admin/ubicaciones",
        layout: LayoutBasic,
        component: Ubicaciones,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/cargo",
        layout: LayoutBasic,
        component: CrearCargo,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/departamento",
        layout: LayoutBasic,
        component: CrearDepartamento,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/vehiculo",
        layout: LayoutBasic,
        component: CrearVehiculo,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/statusorder",
        layout: LayoutBasic,
        component: CrearStatusorder,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/locacion",
        layout: LayoutBasic,
        component: CrearEspacio,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/puesto",
        layout: LayoutBasic,
        component: CrearPuesto,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/statusvehiculo",
        layout: LayoutBasic,
        component: CrearStatusvehiculo,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/subdireccion",
        layout: LayoutBasic,
        component: CrearSubdireccion,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/ubicacion",
        layout: LayoutBasic,
        component: CrearUbicacion,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/cargo/:id",
        layout: LayoutBasic,
        component: EditCargo,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/departamento/:id",
        layout: LayoutBasic,
        component: EditDepartamento,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/espacio/:id",
        layout: LayoutBasic,
        component: EditEspacio,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/puesto/:id",
        layout: LayoutBasic,
        component: EditPuesto,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/statusorder/:id",
        layout: LayoutBasic,
        component: EditStatusorder,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/statusvehiculo/:id",
        layout: LayoutBasic,
        component: EditStatusvehiculo,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/subdireccion/:id",
        layout: LayoutBasic,
        component: EditSubdireccion,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/ubicacion/:id",
        layout: LayoutBasic,
        component: EditUbicacion,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/vehiculo/:id",
        layout: LayoutBasic,
        component: EditVehiculo,
        exact: true,
        admin: true
    },
    {
        path: "/admin/cargos/:id",
        layout: LayoutBasic,
        component: DetalleCargo,
        exact: true,
        admin: true  
    },
    {
        path: "/admin/departamentos/:id",
        layout: LayoutBasic,
        component: DetalleDepartamento,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/espacios/:id",
        layout: LayoutBasic,
        component: DetalleEspacio,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/puestos/:id",
        layout: LayoutBasic,
        component: DetallePuesto,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/statusorders/:id",
        layout: LayoutBasic,
        component: DetalleStatusorder,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/statusvehiculos/:id",
        layout: LayoutBasic,
        component: DetalleStatusvehiculo,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/subdirecciones/:id",
        layout: LayoutBasic,
        component: DetalleSubdireccion,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/ubicaciones/:id",
        layout: LayoutBasic,
        component: DetalleUbicacion,
        exact: true,
        admin: true 

    },
    {
        path: "/admin/vehiculos/:id",
        layout: LayoutBasic,
        component: DetalleVehiculo,
        exact: true,
        admin: true 

    }

];

export const errorRoute = [
    {
        layout: LayoutBasic,
        component: Inicio
    }
];

