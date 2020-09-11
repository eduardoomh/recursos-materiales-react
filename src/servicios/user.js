import { authFetch } from "./reutilizables/postService";
import { getFetch } from "./reutilizables/getService";


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

