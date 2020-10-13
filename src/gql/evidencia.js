import { gql } from "@apollo/client";

export const OBTENER_EVIDENCIAS = gql`
query obtenerEvidencias($input: pedirEvidenciaInput!){
    obtenerEvidencias(input: $input){
        id
        imagen
        createdAt
    }
}
`;


export const CREAR_EVIDENCIA = gql`
mutation crearEvidencia($file: Upload $input: crearEvidencia!){
    crearEvidencia(file: $file input: $input)
}
`;

