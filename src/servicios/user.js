import { authFetch } from "./reutilizables/postService";
import { getFetch } from "./reutilizables/getService";
import { updateFetch } from "./reutilizables/updateService";


export const loginService = async (data) => {
    const petition = await authFetch("/login", data);
    const response = await petition.json();

    return response;

}

export const registerService = async (data) => {
    const petition = await getFetch("/register", data);
    const response = await petition.json();

    return response;
}

export const updateUser = async (data, id) => {
    const petition = await updateFetch("/update", data, id);
    const response = await petition.json();

    return response;
}



