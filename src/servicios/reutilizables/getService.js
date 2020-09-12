import { endpoint } from "../../api/endpoint";
import { getStorage } from "./localStorage";


export const getFetch = (ruta) => {
    return fetch(`${endpoint.url}${ruta}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": ` Bearer ${getStorage("token")}`
        },

    })
}

export const getFetchId = (ruta, id) => {
    return fetch(`${endpoint.url}${ruta}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getStorage("token")}`
        }
    })
}


