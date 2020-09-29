import { gql } from "@apollo/client";

export const OBTENER_PERMISOS = gql`
query obtenerPermisos($input: PaginateInput!){
    obtenerPermisos(input: $input){
        id
        usuario{
            nombre
            apellidos
        }
    }
}
`;

export const CREAR_PERMISO = gql`
mutation crearPermiso($input: crearPermiso!){
    crearPermiso(input: $input)
}
`;