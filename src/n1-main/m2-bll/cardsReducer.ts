import {Dispatch} from "redux";
import {cardsAPI} from "./api/api";
import {AppStoreType} from "./store";
import {setCardsTotalCountAC, SetCardsTotalCountType} from "./findAndPaginationReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export const initialState:cardType[] = []

export const cardsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'cards/GET-CARDS':
            return [...action.cards]
        default:
            return state
    }
}

export const getCardsAC = (cards: cardType[]) => ({type: "cards/GET-CARDS", cards} as const)

export const getCardsTC = (id:string):ThunkType => (dispatch: Dispatch<ActionType>, getState: () => AppStoreType) => {
    const page = getState().findAndPagination.cards.page
    const pageCount = getState().findAndPagination.cards.pageCount.toString()

    cardsAPI.getCards(id, pageCount, page)
        .then((res) => {
            if (res.data.cards) {
                dispatch(getCardsAC(res.data.cards))
                dispatch(setCardsTotalCountAC(res.data.cardsTotalCount))
            }
        })
}
export const addCardsTC = (id:string):ThunkType => (dispatch:ThunkDispatch<AppStoreType, unknown, ActionType>) => {
    cardsAPI.addCards(id)
        .then((res) => {
            dispatch(getCardsTC(id))
        })
}

type ActionType = ReturnType<typeof getCardsAC> | SetCardsTotalCountType
type ThunkType = ThunkAction<void, AppStoreType, unknown, ActionType>

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

