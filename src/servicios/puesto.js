import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//servicios pedir datos a la base de datos a travez de un endpoint.
export const getPuestos = async () => {
    const petition = await getFetch("/puestos")
    const response = await petition.json();

    return response;
}

export const getPuesto = async (id) => {
    const petition = await getFetchId("/puestos", id)
    const response = await petition.json();

    return response;
}

export const newPuesto = async (data) => {
    const petition = await postFetch("/puestos")
    const response = await petition.json();

    return response;
}

export const updatePuesto = async (data, id) => {
    const petition = await updateFetch("/puestos", data, id)
    const response = await petition.json();

    return response;
}
