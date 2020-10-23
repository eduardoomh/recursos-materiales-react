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
import Error404 from "../pages/Error/Error404/Error404";

//paginas admin de ver
import Departamentos from "../pages/administrador/ver/departamentos/Departamentos";
import Vehiculos from "../pages/administrador/ver/vehiculos/Vehiculos";
import Sitios from "../pages/administrador/ver/sitios/Sitios";
import Tipoordenes from "../pages/administrador/ver/tipoordenes/Tipoordenes";
import Puestos from "../pages/administrador/ver/puestos/Puestos";
import Permisos from "../pages/administrador/ver/permisos/Permisos";
import Organizaciones from "../pages/administrador/ver/organizaciones/Organizaciones";
import Subdirecciones from "../pages/administrador/ver/subdirecciones/Subdirecciones";
import Edificios from "../pages/administrador/ver/edificios/Edificios";

//paginas admin de crear
import CrearPuesto from "../pages/administrador/crear/puestos/CrearPuesto";
import CrearDepartamento from "../pages/administrador/crear/departamentos/CrearDepartamento";
import CrearSitio from "../pages/administrador/crear/sitios/CrearSitio";
import CrearPermiso from "../pages/administrador/crear/permisos/CrearPermiso";
import CrearTipoorden from "../pages/administrador/crear/tipoordenes/CrearTipoorden";
import CrearOrganizacion from "../pages/administrador/crear/organizaciones/CrearOrganizacion";
import CrearSubdireccion from "../pages/administrador/crear/subdirecciones/CrearSubdireccion";
import CrearEdificio from "../pages/administrador/crear/edificios/CrearEdificio";
import CrearVehiculo from "../pages/administrador/crear/vehiculos/CrearVehiculo";

//paginas admin de editar
import EditPuesto from "../pages/administrador/actualizar/puestos/EditPuesto";
import EditDepartamento from "../pages/administrador/actualizar/departamentos/EditDepartamento";
import EditSitio from "../pages/administrador/actualizar/sitios/EditSitio";
import EditPermiso from "../pages/administrador/actualizar/permisos/EditPermiso";
import EditTipoorden from "../pages/administrador/actualizar/tipoordenes/EditTipoorden";
import EditOrganizacion from "../pages/administrador/actualizar/organizaciones/EditOrganizacion";
import EditSubdireccion from "../pages/administrador/actualizar/subdirecciones/EditSubdireccion";
import EditEdificio from "../pages/administrador/actualizar/edificios/EditEdificio";
import EditVehiculo from "../pages/administrador/actualizar/vehiculos/EditVehiculo";

//paginas admin de detalle
import DetallePuesto from "../pages/administrador/detalle/puestos/DetallePuesto";
import DetalleDepartamento from "../pages/administrador/detalle/departamentos/DetalleDepartamento";
import DetalleSitio from "../pages/administrador/detalle/sitios/DetalleSitio";
import DetallePermiso from "../pages/administrador/detalle/permisos/DetallePermiso";
import DetalleTipoorden from "../pages/administrador/detalle/tipoordenes/DetalleTipoorden";
import DetalleOrganizacion from "../pages/administrador/detalle/organizaciones/DetalleOrganizacion";
import DetalleSubdireccion from "../pages/administrador/detalle/subdirecciones/DetalleSubdireccion";
import DetalleEdificio from "../pages/administrador/detalle/edificios/DetalleEdificio";
import DetalleVehiculo from "../pages/administrador/detalle/vehiculos/DetalleVehiculo";

//pagina admin de ver usuarios
import Usuarios from "../pages/usuario/Usuarios/Usuarios";


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
        path: "/mantenimientos/:refresh",
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
        path: "/eventos/:refresh",
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
        path: "/salidas/:refresh",
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
        path: "/mantenimiento/:id",
        layout: LayoutBasic,
        component: VerMantenimiento,
        exact: true
    },
    {
        path: "/evento/:id",
        layout: LayoutBasic,
        component: VerEvento,
        exact: true
    },
    {
        path: "/salida/:id",
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
        path: "/admin/departamentos/:refresh",
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
        path: "/admin/vehiculos/:refresh",
        layout: LayoutBasic,
        component: Vehiculos,
        exact: true,
        admin: true
    },
    {
        path: "/admin/tipoordenes",
        layout: LayoutBasic,
        component: Tipoordenes,
        exact: true,
        admin: true
    },
    {
        path: "/admin/tipoordenes/:refresh",
        layout: LayoutBasic,
        component: Tipoordenes,
        exact: true,
        admin: true
    },
    {
        path: "/admin/sitios",
        layout: LayoutBasic,
        component: Sitios,
        exact: true,
        admin: true
    },
    {
        path: "/admin/sitios/:refresh",
        layout: LayoutBasic,
        component: Sitios,
        exact: true,
        admin: true
    },
    {
        path: "/admin/puestos/:refresh",
        layout: LayoutBasic,
        component: Puestos,
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
        path: "/admin/permisos",
        layout: LayoutBasic,
        component: Permisos,
        exact: true,
        admin: true
    },
    {
        path: "/admin/permisos/:refresh",
        layout: LayoutBasic,
        component: Permisos,
        exact: true,
        admin: true
    },
    {
        path: "/admin/organizaciones",
        layout: LayoutBasic,
        component: Organizaciones,
        exact: true,
        admin: true
    },
    {
        path: "/admin/organizaciones/:refresh",
        layout: LayoutBasic,
        component: Organizaciones,
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
        path: "/admin/subdirecciones/:refresh",
        layout: LayoutBasic,
        component: Subdirecciones,
        exact: true,
        admin: true
    },
    {
        path: "/admin/edificios",
        layout: LayoutBasic,
        component: Edificios,
        exact: true,
        admin: true
    },
    {
        path: "/admin/edificios/:refresh",
        layout: LayoutBasic,
        component: Edificios,
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
        path: "/admin/crear/tipoorden",
        layout: LayoutBasic,
        component: CrearTipoorden,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/sitio",
        layout: LayoutBasic,
        component: CrearSitio,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/permiso",
        layout: LayoutBasic,
        component: CrearPermiso,
        exact: true,
        admin: true
    },
    {
        path: "/admin/crear/organizacion",
        layout: LayoutBasic,
        component: CrearOrganizacion,
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
        path: "/admin/crear/edificio",
        layout: LayoutBasic,
        component: CrearEdificio,
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
        path: "/admin/actualizar/departamento/:id",
        layout: LayoutBasic,
        component: EditDepartamento,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/sitio/:id",
        layout: LayoutBasic,
        component: EditSitio,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/permiso/:id",
        layout: LayoutBasic,
        component: EditPermiso,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/tipoorden/:id",
        layout: LayoutBasic,
        component: EditTipoorden,
        exact: true,
        admin: true
    },
    {
        path: "/admin/actualizar/organizacion/:id",
        layout: LayoutBasic,
        component: EditOrganizacion,
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
        path: "/admin/actualizar/edificio/:id",
        layout: LayoutBasic,
        component: EditEdificio,
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
        path: "/admin/puesto/:id",
        layout: LayoutBasic,
        component: DetallePuesto,
        exact: true,
        admin: true  
    },
    {
        path: "/admin/departamento/:id",
        layout: LayoutBasic,
        component: DetalleDepartamento,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/sitio/:id",
        layout: LayoutBasic,
        component: DetalleSitio,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/permiso/:id",
        layout: LayoutBasic,
        component: DetallePermiso,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/tipoorden/:id",
        layout: LayoutBasic,
        component: DetalleTipoorden,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/organizacion/:id",
        layout: LayoutBasic,
        component: DetalleOrganizacion,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/subdireccion/:id",
        layout: LayoutBasic,
        component: DetalleSubdireccion,
        exact: true,
        admin: true  

    },
    {
        path: "/admin/edificio/:id",
        layout: LayoutBasic,
        component: DetalleEdificio,
        exact: true,
        admin: true 

    },
    {
        path: "/admin/vehiculo/:id",
        layout: LayoutBasic,
        component: DetalleVehiculo,
        exact: true,
        admin: true 

    },
    {
        path: "/usuarios",
        layout: LayoutBasic,
        component: Usuarios,
        exact: true,
        admin: true

    }

];

export const errorRoute = [
    {
        layout: LayoutBasic,
        component: Error404
    }
];

