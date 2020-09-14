import { getFetch, getFetchId } from "./reutilizables/getService";
import { postFetch } from "./reutilizables/postService";
import { updateFetch } from "./reutilizables/updateService";

//servicios pedir datos a la base de datos a travez de un endpoint.
export const getVehiculos = async () => {
    const petition = await getFetch("/vehiculos")
    const response = await petition.json();

    return response;
}

export const getVehiculo = async (id) => {
    const petition = await getFetchId("/vehiculos", id)
    const response = await petition.json();

    return response;
}

export const newVehiculo = async (data) => {
    const petition = await postFetch("/vehiculos")
    const response = await petition.json();

    return response;
}

export const updateVehiculo = async (data, id) => {
    const petition = await updateFetch("/vehiculos", data, id)
    const response = await petition.json();

    return response;
}
