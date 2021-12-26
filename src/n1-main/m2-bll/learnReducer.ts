import {PackType} from "./packsReducer";

const initialState: InitialStateType = {
    lastCardsPacksOnScreen: []
}

export const learnReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "LEARN/SET-LAST-CARDS-PACKS-ON-SCREEN":
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setLastCardsPacksOnScreen = (lastCardsPacksOnScreen: Array<PackType>) =>
    ({type: 'LEARN/SET-LAST-CARDS-PACKS-ON-SCREEN', payload: {lastCardsPacksOnScreen}} as const)

type InitialStateType = {
    lastCardsPacksOnScreen: Array<PackType>
}

type ActionType =
    | ReturnType<typeof setLastCardsPacksOnScreen>