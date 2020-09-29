import { gql } from "@apollo/client";

export const OBTENER_PUESTOS = gql`
query obtenerPuestos($input: PaginateInput!){
    obtenerPuestos(input: $input){
        id
        nombre
    }
}
`;

export const CREAR_PUESTO = gql`
mutation crearPuesto($input: crearPuesto!){
    crearPuesto(input: $input)
}
`;