const initialState: InitialStateType = {
    modalDelCardsPackShowHide: false,
    modalAddCardsPackShowHide: false,
    modalUpdateCardsPackShowHide: false,
    modalDelCardShowHide: false,
    modalAddCardShowHide: false,
    modalUpdateCardShowHide: false,
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
            return {...state, ...action.payload}

        case 'MODAL/SHOW-MODAL-DEL-CARDS-PACK':
            return {...state, modalDelCardsPackShowHide: true}
        case "MODAL/SHOW-MODAL-UPDATE-CARDS-PACK":
            return {...state, modalUpdateCardsPackShowHide: true}
        case "MODAL/SHOW-MODAL-DEL-CARD":
            return {...state, modalDelCardShowHide: true}


        case "MODAL/SHOW-MODAL-UPDATE-CARD":
            return {...state, modalUpdateCardShowHide: true}
        default:
            return state
    }
}

export const closeAllModalsAC = () =>
    ({type: 'MODAL/CLOSE-ALL-MODALS'} as const)
export const showModalDelCardsPackAC = () =>
    ({type: 'MODAL/SHOW-MODAL-DEL-CARDS-PACK'} as const)
export const showModalAddCardsPackAC = () =>
    ({type: 'MODAL/SHOW-MODAL-ADD-CARDS-PACK', payload: {modalAddCardsPackShowHide: true}} as const)
export const showModalUpdateCardsPackAC = () =>
    ({type: 'MODAL/SHOW-MODAL-UPDATE-CARDS-PACK'} as const)
export const showModalDelCardAC = () =>
    ({type: 'MODAL/SHOW-MODAL-DEL-CARD'} as const)
export const showModalAddCardAC = () =>
    ({type: 'MODAL/SHOW-MODAL-ADD-CARD', payload: {modalAddCardShowHide: true}} as const)
export const showModalUpdateCardAC = () =>
    ({type: 'MODAL/SHOW-MODAL-UPDATE-CARD'} as const)

type InitialStateType = {
    modalDelCardsPackShowHide: boolean
    modalAddCardsPackShowHide: boolean
    modalUpdateCardsPackShowHide: boolean
    modalDelCardShowHide: boolean
    modalAddCardShowHide: boolean
    modalUpdateCardShowHide: boolean
}

type ActionType =
    | ReturnType<typeof closeAllModalsAC>
    | ReturnType<typeof showModalDelCardsPackAC>
    | ReturnType<typeof showModalAddCardsPackAC>
    | ReturnType<typeof showModalUpdateCardsPackAC>
    | ReturnType<typeof showModalDelCardAC>
    | ReturnType<typeof showModalAddCardAC>
    | ReturnType<typeof showModalUpdateCardAC>