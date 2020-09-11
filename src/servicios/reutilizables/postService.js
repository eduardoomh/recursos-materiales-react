import {endpoint} from "../../api/endpoint";
import { getStorage } from "../../servicios/reutilizables/localStorage";

export const postFetch = async (ruta, data) => {
   return fetch(`${endpoint.url}${ruta}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getStorage("token")}`
        },
        body: JSON.stringify(
            data
        )
    })
}

export const authFetch = (ruta, data) => {
    return fetch(`${endpoint.url}${ruta}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            data
        )
    })

}