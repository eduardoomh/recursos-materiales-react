import { gql } from "@apollo/client";

export const OBTENER_EDIFICIOS = gql`
query obtenerEdificios($input: PaginateInput!){
    obtenerEdificios(input: $input){
        id
        nombre
    }
}
`;

export const OBTENER_EDIFICIO = gql`
query obtenerEdificio($id: ID!){
    obtenerEdificio(id: $id){
        id
        nombre
        updatedAt
        createdAt
    }
}
`;

export const CREAR_EDIFICIO = gql`
mutation crearEdificio($input: crearEdificio!){
    crearEdificio(input: $input)
}
`;

export const ACTUALIZAR_EDIFICIO = gql`
mutation actualizarEdificio($id: ID! $input: actualizarEdificio!){
    actualizarEdificio(id: $id input: $input)
}
`;

export const BORRAR_EDIFICIO = gql`
mutation borrarEdificio($id: ID!){
    borrarEdificio(id: $id)
}
`;