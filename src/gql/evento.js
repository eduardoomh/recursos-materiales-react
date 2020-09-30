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
                nombre
            }
            usuario{
                nombre
                apellidos
            }
            acomodo_sillas{
                nombre
            }
            sitio{
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
