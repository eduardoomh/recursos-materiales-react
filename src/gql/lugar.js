import { gql } from "@apollo/client";

export const OBTENER_LUGARES = gql`
query obtenerLugares($input: PaginateInput!){
    obtenerLugares(input: $input){
        id
        nombre
    }
}
`;

export const OBTENER_LUGAR = gql`
query obtenerLugar($id: ID!){
    obtenerLugar(id: $id){
        id
        nombre
    }
}
`;

export const CREAR_LUGAR = gql`
mutation crearLugar($input: crearLugar!){
    crearLugar(input: $input)
}
`;

export const ACTUALIZAR_LUGAR = gql`
mutation actualizarLugar($id: ID! $input: actualizarLugar!){
    actualizarLugar(id: $id input: $input)
}
`;