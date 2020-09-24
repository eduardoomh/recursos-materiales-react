import { gql } from "@apollo/client";

export const OBTENER_EVENTOS = gql`
    query obtenerEventos($input: PaginateInput!){
        obtenerEventos(input: $input){
            id
            nombre
            fecha
        }
  
    }
`;