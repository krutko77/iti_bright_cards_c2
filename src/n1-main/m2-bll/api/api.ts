import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const RecoveryAPI = {
    recoveryPass(email: string) {
        return instance.post<recoveryType>('/auth/forgot', {
            email,
            from: "test-front-admin <ivanin.jay@gmail.com>",
            message: `<div style="background-color: lime; padding: 15px">password recovery link: 
                            <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`
        })
    }
};

export type recoveryType = {
    error:string
    success:boolean
}
