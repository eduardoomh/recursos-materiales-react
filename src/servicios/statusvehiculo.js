import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//servicios pedir datos a la base de datos a travez de un endpoint.
export const getStatusvehiculos = async () => {
    const petition = await getFetch("/statusvehiculos")
    const response = await petition.json();

    return response;
}

export const getStatusvehiculo = async (id) => {
    const petition = await getFetchId("/statusvehiculos", id)
    const response = await petition.json();

    return response;
}

export const newStatusvehiculo = async (data) => {
    const petition = await postFetch("/statusvehiculos")
    const response = await petition.json();

    return response;
}

export const updateStatusvehiculo = async (data, id) => {
    const petition = await updateFetch("/statusvehiculos", data, id)
    const response = await petition.json();

    return response;
}
