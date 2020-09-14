import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//servicios pedir datos a la base de datos a travez de un endpoint.
export const getDepartamentos = async () => {
    const petition = await getFetch("/departamentos")
    const response = await petition.json();

    return response;
}

export const getDepartamento = async (id) => {
    const petition = await getFetchId("/departamentos", id)
    const response = await petition.json();

    return response;
}

export const newDepartamento = async (data) => {
    const petition = await postFetch("/departamentos")
    const response = await petition.json();

    return response;
}

export const updateDepartamento = async (data, id) => {
    const petition = await updateFetch("/departamentos", data, id)
    const response = await petition.json();

    return response;
}

