import {cardPacksType} from "./api/api";

const initialState: InitialStateType = {
    getPacksAC: []
}

export const packReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'pack/GET-CARD-PACKS':
            return {...state, cardPack: action.cardPacks}
        default:
            return state
    }
}

export const getPacksAC = (cardPacks: cardPacksType[]) => ({type: "pack/GET-CARD-PACKS", cardPacks} as const)


type InitialStateType = {
    getPacksAC: Array<{}>
}

type ActionType = ReturnType<typeof getPacksAC>