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
        path: "/eventos/actualizar/id",
        layout: LayoutBasic,
        component: ActualizarEvento,
        exact: true
    },
    {
        path: "/mantenimientos/actualizar/id",
        layout: LayoutBasic,
        component: ActualizarMantenimiento,
        exact: true
    },
    {
        path: "/salidas/actualizar/id",
        layout: LayoutBasic,
        component: ActualizarSalida,
        exact: true
    }
];

export default routes;