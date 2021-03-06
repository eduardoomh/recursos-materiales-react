import { gql } from "@apollo/client";

export const OBTENER_SALIDAS = gql`
    query obtenerSalidas($input: PaginateInput! $orden: Orden $filtro: String){
        obtenerSalidas(input: $input  orden: $orden filtro: $filtro){
            id
            destino
            fecha
            evidencias
        }
  
    }
`;

export const OBTENER_SALIDAS_FILTRO = gql`
    query obtenerSalidasFiltro($input: PaginateInput! $filtro: Filtro!){
        obtenerSalidasFiltro(input: $input filtro: $filtro){
            id
            destino
            fecha
            evidencias
        }
  
    }
`;

export const OBTENER_SALIDA = gql`
    query obtenerSalida($id: ID!){
        obtenerSalida(id: $id){
            id
            destino
            actividades
            fecha
            hora_salida
            hora_llegada
            chofer
            createdAt
            updatedAt
            departamento{
                id
                nombre
            }
            usuario{
                id
                nombre
                apellidos
                avatar
            }
            vehiculo{
                id
                nombre
            }
        }
  
    }
`;

export const CREAR_SALIDA = gql`
    mutation crearSalida($input: crearSalida!){
        crearSalida(input: $input)
    }
`;

export const ACTUALIZAR_SALIDA = gql`
    mutation actualizarSalida($id: ID! $input: actualizarSalida!){
        actualizarSalida(id: $id input: $input)
    }
`;

export const BORRAR_SALIDA = gql`
    mutation borrarSalida($id: ID!){
        borrarSalida(id: $id)
    }
`;

export const BUSCAR_SALIDA = gql`
    query buscarSalida($search: String){
        buscarSalida(search: $search){
            id
            destino
            fecha
        }
    }
`;
