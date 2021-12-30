import axios from "axios";

// export const baseURL = 'https://ancient-gorge-20298.herokuapp.com/';
export const baseURL = 'https://dry-forest-56016.herokuapp.com/';

export const instance = axios.create({
    baseURL
});