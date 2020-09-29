import { gql } from "@apollo/client";

export const OBTENER_LUGARES = gql`
query obtenerLugares($input: PaginateInput!){
    obtenerLugares(input: $input){
        id
        nombre
    }
}
`;

export const CREAR_LUGAR = gql`
mutation crearLugar($input: crearSubdireccion!){
    crearLugar(input: $input)
}
`;