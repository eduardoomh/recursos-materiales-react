import { authFetch } from "./reutilizables/postService";


export const loginService = async (data) => {

    const petition = await authFetch("/login", data);

    const response = await petition.json();

    return response;

}