import { gql } from "@apollo/client";

export const OBTENER_PUESTOS = gql`
query obtenerPuestos($input: PaginateInput!){
    obtenerPuestos(input: $input){
        id
        nombre
    }
}
`;

export const OBTENER_PUESTO = gql`
query obtenerPuesto($id: ID!){
    obtenerPuesto(id: $id){
        id
        nombre
        updatedAt
        createdAt
    }
}
`;

export const CREAR_PUESTO = gql`
mutation crearPuesto($input: crearPuesto!){
    crearPuesto(input: $input)
}
`;

export const ACTUALIZAR_PUESTO = gql`
mutation actualizarPuesto($id: ID! $input: actualizarPuesto!){
    actualizarPuesto(id: $id input: $input)
}
`;

export const BORRAR_PUESTO = gql`
mutation borrarPuesto($id: ID!){
    borrarPuesto(id: $id)
}
`;