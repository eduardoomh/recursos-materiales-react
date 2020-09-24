import { gql } from "@apollo/client";

export const OBTENER_EDIFICIOS = gql`
query obtenerEdificios($input: PaginateInput!){
    obtenerEdificios(input: $input){
        id
        nombre
    }
}
`;

export const CREAR_EDIFICIO = gql`
mutation crearEdificio($input: crearEdificio!){
    crearEdificio(input: $input)
}
`;