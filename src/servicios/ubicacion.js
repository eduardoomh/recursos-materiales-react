import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//servicios pedir datos a la base de datos a travez de un endpoint.
export const getUbicaciones = async () => {
    const petition = await getFetch("/ubications")
    const response = await petition.json();

    return response;
}

export const getUbicacion = async (id) => {
    const petition = await getFetchId("/ubications", id)
    const response = await petition.json();

    return response;
}

export const newUbicacion = async (data) => {
    const petition = await postFetch("/ubications")
    const response = await petition.json();

    return response;
}

export const updateUbicacion = async (data, id) => {
    const petition = await updateFetch("/ubications", data, id)
    const response = await petition.json();

    return response;
}
