import { gql } from "@apollo/client";



export const CREAR_EVIDENCIA = gql`
mutation crearEvidencia($file: Upload $input: crearEvidencia!){
    crearEvidencia(file: $file input: $input)
}
`;

