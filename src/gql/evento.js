import { gql } from "@apollo/client";

export const OBTENER_EVENTOS = gql`
    query obtenerEventos($input: PaginateInput!){
        obtenerEventos(input: $input){
            id
            nombre
        }
  
    }
`;

export const CREAR_EVENTO = gql`
    mutation crearEvento($input: crearEvento!){
        crearEvento(input: $input)
    }
`;
