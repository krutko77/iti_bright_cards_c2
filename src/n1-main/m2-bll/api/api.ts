import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const API = {
    login(data: LoginType) {
        return instance.post<AuthResponseType>('auth/login', data);
    },
    me() {
        return instance.post<AuthResponseType>('/auth/me',{})
    },
}

export type LoginType = {
    email: string,
    password: string,
    rememberMe: boolean,
}
export type AuthResponseType = {
    avatar: string
    email: string
    name: string
    publicCardPacksCount: number
    _id: string
}
