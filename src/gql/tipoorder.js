import { gql } from "@apollo/client";

export const OBTENER_TIPOORDERS = gql`
query obtenerTipoorders($input: PaginateInput!){
    obtenerTipoorders(input: $input){
        id
        nombre
    }
}
`;

export const OBTENER_TIPOORDER = gql`
query obtenerTipoorder($id: ID!){
    obtenerTipoorder(id: $id){
        id
        nombre
        updatedAt
        createdAt
    }
}
`;

export const CREAR_TIPOORDER = gql`
mutation crearTipoorder($input: crearTipoorder!){
    crearTipoorder(input: $input)
}
`;

export const ACTUALIZAR_TIPOORDER = gql`
mutation actualizarTipoorder($id: ID! $input: actualizarTipoorder!){
    actualizarTipoorder(id: $id input: $input)
}
`;