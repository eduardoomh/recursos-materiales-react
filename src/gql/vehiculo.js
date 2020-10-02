import { gql } from "@apollo/client";

export const OBTENER_VEHICULOS = gql`
query obtenerVehiculos($input: PaginateInput!){
    obtenerVehiculos(input: $input){
        id
        nombre
    }
}
`;

export const OBTENER_VEHICULO = gql`
query obtenerVehiculo($id: ID!){
    obtenerVehiculo(id: $id){
        id
        nombre
        placas 
        modelo
        disponibilidad
        updatedAt
        createdAt
    }
}
`;

export const CREAR_VEHICULO = gql`
mutation crearVehiculo($input: crearVehiculo!){
    crearVehiculo(input: $input)
}
`;

export const ACTUALIZAR_VEHICULO = gql`
mutation actualizarVehiculo($id: ID! $input: actualizarVehiculo!){
    actualizarVehiculo(id: $id input: $input)
}
`;