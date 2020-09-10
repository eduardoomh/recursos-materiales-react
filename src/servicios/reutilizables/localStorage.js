
//funciones para guardar, obtener o borrar elementos del localstorage.

export const saveStorage = (name, item) => {
    return localStorage.setItem(name, JSON.stringify(item));
}

export const getStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
}

export const clearStorage = () => {
    return localStorage.clear();
}