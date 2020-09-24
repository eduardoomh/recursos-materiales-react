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