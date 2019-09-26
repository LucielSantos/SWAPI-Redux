import axios from 'axios';

const api = axios.create({
    baseURL: 'https://swapi.co/api/'
});

export async function loadList(page = 1){
    const results = await api.get(`people/?page=${page}`);

    return results.data;
}