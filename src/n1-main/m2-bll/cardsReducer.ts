import {Dispatch} from "redux";
import {cardsAPI} from "./api/api";
import {AppStoreType} from "./store";

export const initialState:cardType[] = []


export const cardsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'cards/GET-CARDS':
            return {...state, cards: action.cards}
        default:
            return state
    }
}

export const getCardsAC = (cards: cardType[]) => ({type: "cards/GET-CARDS", cards} as const)

export const getCardsTC = (id:any) => (dispatch: Dispatch<ActionType>) => {
    cardsAPI.getCards(id)
        .then((res) => {
            if (res.data.cards) {
                dispatch(getCardsAC(res.data.cards))
            }
        })
}

type ActionType = ReturnType<typeof getCardsAC>

export type cardType = {
    _id: string
    cardsPack_id: string
    user_id: string
    answer: string
    question: string
    grade: number
    shots: number
    comments: string
    type: string
    rating: number
    more_id: string
    created: string
    updated: string
}

