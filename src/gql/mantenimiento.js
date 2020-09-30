import { gql } from "@apollo/client";

export const OBTENER_REPARACIONES = gql`
    query obtenerReparaciones($input: PaginateInput!){
        obtenerReparaciones(input: $input){
            id
            fecha
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
            servicio{
                nombre
            }
            departamento{
                nombre
            }
            usuario{
                nombre
                apellidos
            }
        }
  
    }
`;

export const CREAR_MANTENIMIENTO = gql`
    mutation crearMantenimiento($input: crearMantenimiento!){
        crearMantenimiento(input: $input)
    }
`;


