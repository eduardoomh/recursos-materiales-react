import { gql } from "@apollo/client";

export const OBTENER_SALIDAS = gql`
    query obtenerSalidas($input: PaginateInput!){
        obtenerSalidas(input: $input){
            id
            fecha
        }
  
    }
`;

export const CREAR_SALIDA = gql`
    mutation crearSalida($input: crearSalida!){
        crearSalida(input: $input)
    }
`;