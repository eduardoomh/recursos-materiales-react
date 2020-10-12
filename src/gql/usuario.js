import { gql } from "@apollo/client";

export const CREAR_USUARIO = gql`
    mutation crearUsuario($input: usuarioInput!){
        crearUsuario(input: $input){
            nombre
        }
    }
`;

export const LOGIN = gql`
    mutation login($input: loginInput!){
        login(input: $input){
            token
        }
    }
`;

export const OBTENER_USUARIOS = gql`
    query obtenerUsuarios($input: PaginateInput!){
        obtenerUsuarios(input: $input){
            id
            nombre
            apellidos
            createdAt
        }
  
    }
`;

export const OBTENER_USUARIOS_APROBADOS = gql`
    query obtenerUsuarios($input: PaginateInput!){
        obtenerUsuarios(input: $input){
            id
            nombre
            avatar
            apellidos
            createdAt
        }
  
    }
`;

export const OBTENER_USUARIOS_PENDIENTES = gql`
    query obtenerUsuariosPendientes($input: PaginateInput!){
        obtenerUsuariosPendientes(input: $input){
            id
            nombre
            apellidos
            avatar
            createdAt
        }
  
    }
`;

export const OBTENER_USUARIO = gql`
    query obtenerUsuario($id: ID!){
        obtenerUsuario(id: $id){
            id
            nombre
            apellidos
            correo
            numero_control
            estatus
            createdAt
        }
  
    }
`;

export const ACTUALIZAR_AVATAR = gql`
    mutation actualizarAvatar($file: Upload){
        actualizarAvatar(file: $file){
            status,
            urlAvatar
        }
    }
`;

export const BORRAR_AVATAR = gql`
    mutation deleteAvatar{
        deleteAvatar
    }
`;

export const ACTUALIZAR_USUARIO = gql`
    mutation actualizarUsuario($input: actualizarUsuarioInput!){
        actualizarUsuario(input: $input){
            id
            nombre
            apellidos
            correo
            numero_control
            descripcion
            avatar
            estatus
            telefono
        }
    }
`;

export const BUSCAR = gql`
    query search($search: String){
        search(search: $search){
            name
            username
            avatar
        }
    }
`;


export const APROBAR_USUARIO = gql`
    mutation aprobarUsuario($id: ID!){
        aprobarUsuario(id: $id)
    }
`;