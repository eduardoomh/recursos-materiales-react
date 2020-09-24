import { gql } from "@apollo/client";

export const OBTENER_SALIDAS = gql`
    query obtenerSalidas($input: PaginateInput!){
        obtenerSalidas(input: $input){
            fecha
        }
  
    }
`;