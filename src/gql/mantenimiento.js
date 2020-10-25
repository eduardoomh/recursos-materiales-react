import { gql } from "@apollo/client";

export const OBTENER_REPARACIONES = gql`
    query obtenerReparaciones($input: PaginateInput! $orden: Orden $filtro: String){
        obtenerReparaciones(input: $input orden: $orden filtro: $filtro){
            id
            nombre
            fecha
            aprobado
            evidencias
        }
  
    }
`;

export const OBTENER_MANTENIMIENTOS_FILTRO = gql`
    query obtenerMantenimientosFiltro($input: PaginateInput! $filtro: Filtro!){
        obtenerMantenimientosFiltro(input: $input filtro: $filtro){
            id
            nombre
            fecha
            aprobado
            evidencias
        }
  
    }
`;

export const OBTENER_SERVICIOS = gql`
    query obtenerServicios($input: PaginateInput!){
        obtenerServicios(input: $input){
            id
            fecha
        }
  
    }
`;

export const OBTENER_TRANSPORTES = gql`
    query obtenerTransportes($input: PaginateInput!){
        obtenerTransportes(input: $input){
            id
            fecha
        }
  
    }
`;

export const OBTENER_MANTENIMIENTO = gql`
    query obtenerMantenimiento($id: ID!){
        obtenerMantenimiento(id: $id){
            id
            nombre
            trabajo_realizado
            mantenimiento
            asignado_a
            fecha
            fecha_final
            hora_inicio
            hora_final
            verificado
            aprobado
            updatedAt
            createdAt
            equipo_proteccion
            servicio{
                id
                nombre
            }
            departamento{
                id
                nombre
                jefe
            }
            usuario{
                id
                nombre
                apellidos
                avatar
            }
        }
  
    }
`;

export const CREAR_MANTENIMIENTO = gql`
    mutation crearMantenimiento($input: crearMantenimiento!){
        crearMantenimiento(input: $input)
    }
`;

export const ACTUALIZAR_MANTENIMIENTO = gql`
    mutation actualizarMantenimiento($id: ID! $input: actualizarMantenimiento!){
        actualizarMantenimiento(id: $id input: $input)
    }
`;

export const BUSCAR_MANTENIMIENTO = gql`
    query buscarMantenimiento($search: String){
        buscarMantenimiento(search: $search){
            id
            nombre
            fecha
        }
    }
`;

export const APROBAR_MANTENIMIENTO = gql`
    mutation aprobarMantenimiento($id: ID! $input: actualizarMantenimiento! $contrasena: String!){
        aprobarMantenimiento(id: $id input: $input contrasena: $contrasena)
    }
`;

export const BORRAR_MANTENIMIENTO = gql`
    mutation borrarMantenimiento($id: ID!){
        borrarMantenimiento(id: $id)
    }
`;

export const MANTENIMIENTO_FECHAS = gql`
    query mantenimientoFechas($input: fechas!){
        mantenimientoFechas(input: $input){
            id
            nombre
            fecha
            trabajo_realizado
        }
    }
`;




