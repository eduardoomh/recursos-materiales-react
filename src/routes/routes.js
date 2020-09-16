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


const routes = [
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
    },
    {
        path: "/admin/departamentos",
        layout: LayoutBasic,
        component: Departamentos,
        exact: true
    },
    {
        path: "/admin/vehiculos",
        layout: LayoutBasic,
        component: Vehiculos,
        exact: true
    },
    {
        path: "/admin/statusorders",
        layout: LayoutBasic,
        component: Statusorders,
        exact: true
    },
    {
        path: "/admin/locaciones",
        layout: LayoutBasic,
        component: Espacios,
        exact: true
    },
    {
        path: "/admin/cargos",
        layout: LayoutBasic,
        component: Cargos,
        exact: true
    },
    {
        path: "/admin/puestos",
        layout: LayoutBasic,
        component: Puestos,
        exact: true
    },
    {
        path: "/admin/statusvehiculos",
        layout: LayoutBasic,
        component: Statusvehiculos,
        exact: true
    },
    {
        path: "/admin/subdirecciones",
        layout: LayoutBasic,
        component: Subdirecciones,
        exact: true
    },
    {
        path: "/admin/ubicaciones",
        layout: LayoutBasic,
        component: Ubicaciones,
        exact: true
    }
];

export default routes;