import { gql } from "@apollo/client";

export const OBTENER_VEHICULOS = gql`
query obtenerVehiculos($input: PaginateInput!){
    obtenerVehiculos(input: $input){
        id
        nombre
    }
}
`;

export const CREAR_VEHICULO = gql`
mutation crearVehiculo($input: crearVehiculo!){
    crearVehiculo(input: $input)
}
`;