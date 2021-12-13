import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
    headers: {}
})

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}


export const registrationAPI = {
    registerUser(email: string, password: string) {
        return instance.post<{ title: string }, AxiosResponse<ResponseType>>('auth/register', {
            email: email,
            password: password
        });
    },
}