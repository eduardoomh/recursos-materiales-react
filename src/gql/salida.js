import { gql } from "@apollo/client";

export const OBTENER_SALIDAS = gql`
    query obtenerSalidas($input: PaginateInput!){
        obtenerSalidas(input: $input){
            id
            destino
            fecha
        }
  
    }
`;

export const OBTENER_SALIDA = gql`
    query obtenerSalida($id: ID!){
        obtenerSalida(id: $id){
            id
            destino
            actividades
            fecha
            hora_salida
            hora_llegada
            chofer
            createdAt
            updatedAt
            departamento{
                id
                nombre
            }
            usuario{
                id
                nombre
                apellidos
            }
            vehiculo{
                id
                nombre
            }
        }
  
    }
`;

export const CREAR_SALIDA = gql`
    mutation crearSalida($input: crearSalida!){
        crearSalida(input: $input)
    }
`;

export const ACTUALIZAR_SALIDA = gql`
    mutation actualizarSalida($id: ID! $input: actualizarSalida!){
        actualizarSalida(id: $id input: $input)
    }
`;