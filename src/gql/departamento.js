import { gql } from "@apollo/client";

export const OBTENER_DEPARTAMENTOS = gql`
query obtenerDepartamentos($input: PaginateInput!){
    obtenerDepartamentos(input: $input){
        id
        nombre
    }
}
`;

export const CREAR_DEPARTAMENTO = gql`
mutation crearDepartamento($input: crearDepartamento!){
    crearDepartamento(input: $input)
}
`;