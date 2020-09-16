import { endpoint } from "../../api/endpoint";
import { getStorage } from "../reutilizables/localStorage";

export const updateFetch = (ruta, data, id) => {

    return fetch(`${endpoint.url}${ruta}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getStorage("token")}`
        },
        body: JSON.stringify(
            data
        )
    })
}

export const updateAuth = (ruta, data, id) => {

    return fetch(`${endpoint.url}${ruta}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify(
            data
        )
    })
}