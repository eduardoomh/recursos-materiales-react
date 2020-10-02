import { gql } from "@apollo/client";

export const OBTENER_EVENTOS = gql`
    query obtenerEventos($input: PaginateInput!){
        obtenerEventos(input: $input){
            id
            nombre
            fecha
            aprobado
        }
  
    }
`;

export const OBTENER_EVENTO = gql`
    query obtenerEvento($id: ID!){
        obtenerEvento(id: $id){
            id
            nombre
            actividades
            fecha
            hora_inicio
            hora_final
            verificado
            aprobado
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
            }
            acomodo_sillas{
                id
                nombre
            }
            sitio{
                id
                nombre
            }
        }

    }
`;

export const CREAR_EVENTO = gql`
    mutation crearEvento($input: crearEvento!){
        crearEvento(input: $input)
    }
`;

export const ACTUALIZAR_EVENTO = gql`
    mutation actualizarEvento($id: ID! $input: actualizarEvento!){
        actualizarEvento(id: $id input: $input)
    }
`;

export const BUSCAR_EVENTO = gql`
    query buscarEvento($search: String){
        buscarEvento(search: $search){
            id
            nombre
            fecha
        }
    }
`;
