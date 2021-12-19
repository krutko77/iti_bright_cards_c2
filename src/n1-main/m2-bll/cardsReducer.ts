import {cardPacksType} from "./api/api";

const initialState: InitialStateType = {
    getPacksAC: []
}

export const cardReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'pack/GET-CARDS':
            return {...state, cards: action.cards}
        default:
            return state
    }
}

export const getCardsAC = (cards: cardsType) => ({type: "pack/GET-CARDS", cards} as const)

type InitialStateType = {
    getPacksAC: Array<{}>
}

type ActionType = ReturnType<typeof getCardsAC>