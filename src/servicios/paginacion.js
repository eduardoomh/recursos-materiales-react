import { getFetch } from "./reutilizables/getService";


//Servicios para pedir datos a la base de datos a travez de un endpoint.

export const getFetchPage  = async (ruta) => {
    const petition = await getFetch(ruta)
    const response = await petition.json();

    return response;
}