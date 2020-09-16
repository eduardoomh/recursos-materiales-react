import { format } from 'date-fns';
import { es } from 'date-fns/locale'

export const transformarFecha = (fecha) => {
    const year = fecha.substring(0,4);
    const month = fecha.substring(5,7);
    const day = fecha.substring(10, fecha.length-2);

    const fechaFinal = `${year}-${month}-${parseInt(day)}`;

    const result = format(new Date(fechaFinal), "dd' de ' MMMM' del 'yyyy" , { locale: es });

    const response = `${parseInt(result.substring(0,2))+1}${result.substring(2)}`

    return response;
}