import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//Servicios para pedir datos de la base de datos a travez de un enpoint.

export const getSalidas = async () => {
    const petition = await getFetch("/salidas")
    const response = await petition.json();

    return response;
}

export const getSalida = async (id) => {
    const petition = await getFetchId("/salidas", id)
    const response = petition.json();
    
    return response;
}

export const newSalida = async (data) => {
    const petition = await postFetch("/salidas", data)
    const response = await petition.json();

    return response;
}

export const updateSalida = async (data, id) => {
    const petition = await updateFetch("/salidas", data, id)
    const response = await petition.json();

    return response;
}