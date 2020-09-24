import { gql } from "@apollo/client";

export const OBTENER_TIPOORDERS = gql`
query obtenerTipoorders($input: PaginateInput!){
    obtenerTipoorders(input: $input){
        id
        nombre
    }
}
`;

export const CREAR_TIPOORDER = gql`
mutation crearTipoorder($input: crearTipoorder!){
    crearTipoorder(input: $input)
}
`;