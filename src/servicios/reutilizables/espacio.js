import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//servicios pedir datos a la base de datos a travez de un endpoint.
export const getEspacios = async () => {
    const petition = await getFetch("/espacios")
    const response = await petition.json();

    return response;
}

export const getEspacio = async (id) => {
    const petition = await getFetchId("/espacios", id)
    const response = await petition.json();

    return response;
}

export const newEspacio = async (data) => {
    const petition = await postFetch("/espacios")
    const response = await petition.json();

    return response;
}

export const updateEspacio = async (data, id) => {
    const petition = await updateFetch("/espacios", data, id)
    const response = await petition.json();

    return response;
}
