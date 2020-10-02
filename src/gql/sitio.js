import { gql } from "@apollo/client";

export const OBTENER_SITIOS = gql`
query obtenerSitios($input: PaginateInput!){
    obtenerSitios(input: $input){
        id
        nombre
    }
}
`;

export const OBTENER_SITIO = gql`
query obtenerSitio($id: ID!){
    obtenerSitio(id: $id){
        id
        nombre
        updatedAt
        createdAt
        edificio{
            id
            nombre
        }
    }
}
`;

export const CREAR_SITIO= gql`
mutation crearSitio($input: crearSitio!){
    crearSitio(input: $input)
}
`;

export const ACTUALIZAR_SITIO= gql`
mutation actualizarSitio($id: ID! $input: actualizarSitio!){
    actualizarSitio(id: $id input: $input)
}
`;