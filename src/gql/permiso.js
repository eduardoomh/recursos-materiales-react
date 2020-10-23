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
export const OBTENER_PERMISO = gql`
    query obtenerPermiso($id: ID!){
    obtenerPermiso(id: $id){
        id
        updatedAt
        createdAt
        usuario{
            id
            nombre
            apellidos
        }
        departamento{
            id
            nombre
        }
        puesto{
            id
            nombre
        }
    }
}
`;

export const OBTENER_PERMISO_USUARIO = gql`
    query obtenerPermisoUsuario($id: ID!){
    obtenerPermisoUsuario(id: $id){
        id
        updatedAt
        createdAt
        usuario{
            id
            nombre
            apellidos
        }
        departamento{
            id
            nombre
        }
        puesto{
            id
            nombre
        }
    }
}
`;

export const CREAR_PERMISO = gql`
mutation crearPermiso($input: crearPermiso!){
    crearPermiso(input: $input)
}
`;

export const ACTUALIZAR_PERMISO = gql`
mutation actualizarPermiso($id: ID! $input: actualizarPermiso!){
    actualizarPermiso(id: $id input: $input)
}
`;

export const BORRAR_PERMISO = gql`
mutation borrarPermiso($id: ID!){
    borrarPermiso(id: $id)
}
`;