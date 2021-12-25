const initialState: InitialStateType = {
    modalDelCardsPackShowHide: false,
    modalAddCardsPackShowHide: false,
    modalUpdateCardsPackShowHide: false,
    modalDelCardShowHide: false,
    modalAddCardShowHide: false,
    modalUpdateCardShowHide: false,
    clickedCardsPackId: '',
    clickedCardId: '' 
}

export const modalReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'MODAL/CLOSE-ALL-MODALS':
            return {...state, modalDelCardsPackShowHide: false, modalAddCardsPackShowHide: false,
                modalUpdateCardsPackShowHide: false, modalDelCardShowHide: false, modalAddCardShowHide: false,
                modalUpdateCardShowHide: false
            }
        case "MODAL/SHOW-MODAL-ADD-CARDS-PACK":
        case "MODAL/SHOW-MODAL-ADD-CARD":
        case 'MODAL/SHOW-MODAL-DEL-CARDS-PACK':
        case "MODAL/SET-CLICKED-CARDS-PACK":
        case "MODAL/SHOW-MODAL-UPDATE-CARDS-PACK":
        case "MODAL/SHOW-MODAL-DEL-CARD":
        case "MODAL/SET-CLICKED-CARD":
        case "MODAL/SHOW-MODAL-UPDATE-CARD":
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const closeAllModalsAC = () =>
    ({type: 'MODAL/CLOSE-ALL-MODALS'} as const)
export const showModalDelCardsPackAC = () =>
    ({type: 'MODAL/SHOW-MODAL-DEL-CARDS-PACK', payload: {modalDelCardsPackShowHide: true}} as const)
export const showModalAddCardsPackAC = () =>
    ({type: 'MODAL/SHOW-MODAL-ADD-CARDS-PACK', payload: {modalAddCardsPackShowHide: true}} as const)
export const showModalAddCardAC = () =>
    ({type: 'MODAL/SHOW-MODAL-ADD-CARD', payload: {modalAddCardShowHide: true}} as const)
export const setClickedCardPackId = (clickedCardsPackId: string) =>
    ({type: 'MODAL/SET-CLICKED-CARDS-PACK', payload: {clickedCardsPackId}} as const)
export const showModalUpdateCardsPackAC = () =>
    ({type: 'MODAL/SHOW-MODAL-UPDATE-CARDS-PACK', payload: {modalUpdateCardsPackShowHide: true}} as const)
export const showModalDelCardAC = () =>
    ({type: 'MODAL/SHOW-MODAL-DEL-CARD', payload: {modalDelCardShowHide: true}} as const)
export const setClickedCardId = (clickedCardId: string) =>
    ({type: 'MODAL/SET-CLICKED-CARD', payload: {clickedCardId}} as const)
export const showModalUpdateCardAC = () =>
    ({type: 'MODAL/SHOW-MODAL-UPDATE-CARD', payload: {modalUpdateCardShowHide: true}} as const)

type InitialStateType = {
    modalDelCardsPackShowHide: boolean
    modalAddCardsPackShowHide: boolean
    modalUpdateCardsPackShowHide: boolean
    modalDelCardShowHide: boolean
    modalAddCardShowHide: boolean
    modalUpdateCardShowHide: boolean
    clickedCardsPackId: string
    clickedCardId: string
}

type ActionType =
    | ReturnType<typeof closeAllModalsAC>
    | ReturnType<typeof showModalDelCardsPackAC>
    | ReturnType<typeof showModalAddCardsPackAC>
    | ReturnType<typeof showModalUpdateCardsPackAC>
    | ReturnType<typeof showModalDelCardAC>
    | ReturnType<typeof showModalAddCardAC>
    | ReturnType<typeof showModalUpdateCardAC>
    | ReturnType<typeof setClickedCardPackId>
    | ReturnType<typeof setClickedCardId>