import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//Servicios para pedir datos a la base de datos a travez de un endpoint.

export const getMantenimientos  = async () => {
    const petition = await getFetch("/mantenimientos")
    const response = await petition.json();

    return response;
}

export const getMantenimiento = async (id) => {
    const petition = await getFetchId("/mantenimientos", id)
    const response = await petition.json();

    return response;
}

export const newMantenimiento = async (data) => {
    const petition = await postFetch("/mantenimientos", data)
    const response = await petition.json();

    return response;
}

export const updateMantenimiento = async (data, id) => {
    const petition = await updateFetch("/mantenimientos", data, id)
    const response = await petition.json();

    return response;
}