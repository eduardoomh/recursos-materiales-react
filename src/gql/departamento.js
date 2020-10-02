import { gql } from "@apollo/client";

export const OBTENER_DEPARTAMENTOS = gql`
query obtenerDepartamentos($input: PaginateInput!){
    obtenerDepartamentos(input: $input){
        id
        nombre
    }
}
`;

export const OBTENER_DEPARTAMENTO = gql`
query obtenerDepartamento($id: ID!){
    obtenerDepartamento(id: $id){
        id
        nombre
        correo
        telefono
        jefe
        updatedAt
        createdAt
        subdireccion{
            id
            nombre
        }
    }
}
`;

export const CREAR_DEPARTAMENTO = gql`
mutation crearDepartamento($input: crearDepartamento!){
    crearDepartamento(input: $input)
}
`;

export const ACTUALIZAR_DEPARTAMENTO = gql`
mutation actualizarDepartamento($id: ID! $input: actualizarDepartamento!){
    actualizarDepartamento(id: $id input: $input)
}
`;