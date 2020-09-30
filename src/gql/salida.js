import { gql } from "@apollo/client";

export const OBTENER_SALIDAS = gql`
    query obtenerSalidas($input: PaginateInput!){
        obtenerSalidas(input: $input){
            id
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
                nombre
            }
            usuario{
                nombre
                apellidos
            }
            vehiculo{
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