import { endpoint } from "../../src/api/endpoint";

export const loginService = async (data) => {

    const petition = await fetch(`${endpoint.url}login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            data
        )
    })
    const result =  await petition.json();
    const response = await result;
    return response;

}