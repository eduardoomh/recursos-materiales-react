import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//servicios pedir datos a la base de datos a travez de un endpoint.
export const geStatusorders = async () => {
    const petition = await getFetch("/statusorders")
    const response = await petition.json();

    return response;
}

export const getStatusorder = async (id) => {
    const petition = await getFetchId("/statusorders", id)
    const response = await petition.json();

    return response;
}

export const newStatusorder = async (data) => {
    const petition = await postFetch("/statusorders")
    const response = await petition.json();

    return response;
}

export const updateStatusorder = async (data, id) => {
    const petition = await updateFetch("/statusorders", data, id)
    const response = await petition.json();

    return response;
}
