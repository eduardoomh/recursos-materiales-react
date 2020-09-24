import { gql } from "@apollo/client";

export const OBTENER_SUBDIRECCIONES = gql`
query obtenerSubdirecciones($input: PaginateInput!){
    obtenerSubdirecciones(input: $input){
        id
        nombre
    }
}
`;

export const CREAR_SUBDIRECCION = gql`
mutation crearSubdireccion($input: crearSubdireccion!){
    crearSubdireccion(input: $input)
}
`;