import { gql } from "@apollo/client";

export const OBTENER_EVIDENCIAS = gql`
query obtenerEvidencias($input: pedirEvidenciaInput!){
    obtenerEvidencias(input: $input){
        id
        imagen
        solicitud
        tipo
        createdAt
    }
}
`;


export const CREAR_EVIDENCIA = gql`
mutation crearEvidencia($file: Upload! $input: crearEvidencia!){
    crearEvidencia(file: $file input: $input)
}
`;

export const BORRAR_EVIDENCIA = gql`
mutation borrarEvidencia($id: ID! $input: crearEvidencia!){
    borrarEvidencia(id: $id, input: $input)
}
`;

