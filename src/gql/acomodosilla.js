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

export const OBTENER_ACOMODOSILLA = gql`
query obtenerAcomodosilla($id: ID!){
    obtenerAcomodosilla(id: $id){
        id
        nombre
        imagen
        updatedAt
        createdAt
    }
}
`;

export const CREAR_ACOMODOSILLA = gql`
mutation crearAcomodosilla($file: Upload! $input: crearAcomodosilla!){
    crearAcomodosilla(file: $file input: $input)
}
`;

export const ACTUALIZAR_ACOMODOSILLA = gql`
mutation actualizarAcomodosilla($id: ID! $input: actualizarAcomodosilla!){
    actualizarAcomodosilla(id: $id input: $input)
}
`;

export const ACTUALIZAR_ACOMODOSILLA_IMAGEN= gql`
mutation actualizarAcomodosillaImagen($id: ID! $file: Upload!){
    actualizarAcomodosillaImagen(id: $id file: $file)
}
`;

export const BORRAR_ACOMODOSILLA = gql`
mutation borrarAcomodosilla($id: ID!){
    borrarAcomodosilla(id: $id)
}
`;