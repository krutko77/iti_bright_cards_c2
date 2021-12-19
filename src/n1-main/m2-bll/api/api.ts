import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const authAPI = {
    login(data: LoginType) {
        return instance.post<AuthResponseType>('auth/login', data);
    },
    me() {
        return instance.post<AuthResponseType>('/auth/me', {})
    },
    logout() {
        return instance.delete('/auth/me')
    }
}
export const registrationAPI = {
    registerUser(email: string, password: string) {
        return instance.post<{ title: string }, AxiosResponse<ResponseType>>('auth/register', {
            email: email,
            password: password
        });
    },
}
export const RecoveryAPI = {
    recoveryPass(email: string) {
        return instance.post<recoveryType>('/auth/forgot', {
            email,
            from: "test-front-admin <ivanin.jay@gmail.com>",
            message: `<div style="background-color: lime; padding: 15px">password recovery link: 
                            <a href='http://localhost:3000/#/passwordnew/$token$'>link</a></div>`
        })
    },

    newPass(password: string, token: string) {
        return instance.post<recoveryType>('/auth/set-new-password', {
            password: password,
            resetPasswordToken: token,
        })
    }
};

export const cardsAPI = {
    registerUser() {
        return instance.get<cardPacksType[]>('/GET /cards/pack')
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
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
export type recoveryType = {
    error: string
    success: boolean
    info: string
}

export type cardPacksType = []
