import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//servicios pedir datos a la base de datos a travez de un endpoint.
export const getCargos = async () => {
    const petition = await getFetch("/cargos")
    const response = await petition.json();

    return response;
}

export const getCargo = async (id) => {
    const petition = await getFetchId("/cargos", id)
    const response = await petition.json();

    return response;
}

export const newCargo = async (data) => {
    const petition = await postFetch("/cargos")
    const response = await petition.json();

    return response;
}

export const updateCargo = async (data, id) => {
    const petition = await updateFetch("/cargos", data, id)
    const response = await petition.json();

    return response;
}
