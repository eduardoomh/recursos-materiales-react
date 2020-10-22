import { gql } from "@apollo/client";

export const OBTENER_SUBDIRECCIONES = gql`
query obtenerSubdirecciones($input: PaginateInput!){
    obtenerSubdirecciones(input: $input){
        id
        nombre
    }
}
`;

export const OBTENER_SUBDIRECCION = gql`
query obtenerSubdireccion($id: ID!){
    obtenerSubdireccion(id: $id){
        id
        nombre
        jefe
        updatedAt
        createdAt
    }
}
`;


export const CREAR_SUBDIRECCION = gql`
mutation crearSubdireccion($input: crearSubdireccion!){
    crearSubdireccion(input: $input)
}
`;

export const ACTUALIZAR_SUBDIRECCION = gql`
mutation actualizarSubdireccion($id: ID! $input: actualizarSubdireccion!){
    actualizarSubdireccion(id: $id input: $input)
}
`;

export const BORRAR_SUBDIRECCION = gql`
mutation borrarSubdireccion($id: ID!){
    borrarSubdireccion(id: $id)
}
`;