import { endpoint } from "../../api/endpoint";
import { getStorage } from "../../servicios/reutilizables/localStorage";


export const getFetch = (ruta) => {
    return fetch(`${endpoint.url}/${ruta}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": ` bearer ${getStorage("token")}`
        },

    })
}
