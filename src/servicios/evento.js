import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//servicios pedir datos a la base de datos a travez de un endpoint.
export const getEventos = async () => {
    const petition = await getFetch("/eventos")
    const response = await petition.json();

    return response;
}

export const getEvento = async (id) => {
    const petition = await getFetchId("/eventos", id)
    const response = await petition.json();

    return response;
}

export const newEvento = async (data) => {
    const petition = await postFetch("/eventos")
    const response = await petition.json();

    return response;
}

export const updateEvento = async (data, id) => {
    const petition = await updateFetch("/eventos", data, id)
    const response = await petition.json();

    return response;
}

