import { getFetch } from "./reutilizables/getService";

//Servicios para pedir datos a la base de datos a travez de un endpoint.
export const getPorFiltrado = async (tipo, titulo) => {
    const tipoSingular = tipo.substring(0, tipo.length-1);
    let petition;
    let response;

    switch(titulo){
        case "Solicitudes mas antiguas" :
            petition = await getFetch(`/${tipoSingular}antiguos`)
            response = await petition.json();
        break;

        case "Solicitudes del mes":
            petition = await getFetch(`/${tipoSingular}pormes`)
            response = await petition.json();
        break;

        case "Solicitudes mas recientes":
            petition = await getFetch(`/${tipo}`)
            response = await petition.json();
        break;
    
        default:
            break;
    }

    return response;

}