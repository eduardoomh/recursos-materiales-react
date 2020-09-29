import { gql } from "@apollo/client";

export const OBTENER_ACOMODOSILLAS = gql`
query obtenerAcomodosillas($input: PaginateInput!){
    obtenerAcomodosillas(input: $input){
        id
        nombre
        imagen
    }
}
`;

export const CREAR_ACOMODOSILLA = gql`
mutation crearAcomodosilla($input: crearAcomodosilla!){
    crearAcomodosilla(input: $input)
}
`;