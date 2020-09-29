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
        }
  
    }
`;

export const OBTENER_USUARIO = gql`
    query obtenerUsuario($id: ID, $username: String){
        obtenerUsuario(id: $id, username: $username){
            id
            name
            username
            email
            siteWeb
            description
            avatar
            estatus
            createdAt
        }
  
    }
`;

export const ACTUALIZAR_AVATAR = gql`
    mutation updateAvatar($file: Upload){
        updateAvatar(file: $file){
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
    mutation updateUser($input: userUpdateInput){
        updateUser(input: $input)
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