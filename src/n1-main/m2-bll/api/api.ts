import axios, {AxiosResponse} from "axios";
import {packType} from "../packsReducer";
import {cardType} from "../cardsReducer";
import {SortCardsType, SortPackType} from "../findAndPaginationReducer";

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

export const packsAPI = {
    getPacks(pageCount: string, page: number, min: number, max: number, packName: string, sortPacks: SortPackType) {
        return instance.get<getPacksType>(`/cards/pack`, {params: {
            pageCount, page, min, max, packName, sortPacks}})
    },
    addPacks(isPrivate:boolean) {
        return instance.post<getPacksType>(`/cards/pack`, {
            cardsPack: {
                name: "new Pack333",
                private: isPrivate
            }
        })
    }
}
export const cardsAPI = {
    getCards(id: string, pageCount: string, page: number, cardQuestion: string, sortCards: SortCardsType) {
        return instance.get<getCardType>(`/cards/card`, {params: {
                cardsPack_id: id, pageCount, page, cardQuestion, sortCards
            }})
    },
    addCards(cardsPack_id:string){
        return instance.post<getCardType>(`/cards/card`, {
            card:{
                cardsPack_id,
                question: "no question",
                answer: "no answer",
                grade: Math.random()*5,
                shots: 0,
            }
        })
    }
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

export type getPacksType = {
    cardPacks: packType[]
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}
export type getCardType = {
    cards: cardType[]
    cardsTotalCount: number
}