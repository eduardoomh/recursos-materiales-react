import { format } from 'date-fns';
import { toDate } from 'date-fns'
import { es } from 'date-fns/locale'

export const transformarFecha = (fecha) => {
    const year = fecha.substring(0,4);
    const month = fecha.substring(5,7);
    const dia = fecha.substring(10, fecha.length-2);

    const fechaFinal = `${year}-${month}-${parseInt(dia)}`;

    const result = format(new Date(fechaFinal), dia+"' de ' MMMM' del 'yyyy" , { locale: es });

    return result;
}

export const formatDate = (isoDate) => {
    const number = parseInt(isoDate);
    const result = toDate(number);
    const response = format(new Date(result), "dd ' de ' MMMM ' del ' yyyy" , { locale: es })
    return response;
}