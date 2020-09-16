import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//servicios pedir datos a la base de datos a travez de un endpoint.
export const getSubdirecciones = async () => {
    const petition = await getFetch("/subdirections")
    const response = await petition.json();

    return response;
}

export const getSubdireccion = async (id) => {
    const petition = await getFetchId("/subdirections", id)
    const response = await petition.json();

    return response;
}

export const newSubdireccion = async (data) => {
    const petition = await postFetch("/subdirections")
    const response = await petition.json();

    return response;
}

export const updateSubdireccion = async (data, id) => {
    const petition = await updateFetch("/subdirections", data, id)
    const response = await petition.json();

    return response;
}
