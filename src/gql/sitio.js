import { gql } from "@apollo/client";

export const OBTENER_SITIOS = gql`
query obtenerSitios($input: PaginateInput!){
    obtenerSitios(input: $input){
        id
        nombre
    }
}
`;

export const CREAR_SITIO= gql`
mutation crearSitio($input: crearSitio!){
    crearSitio(input: $input)
}
`;