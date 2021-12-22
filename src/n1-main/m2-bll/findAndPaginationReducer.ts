const initialState: InitialStateType = {
    cardPacks: {
        totalCount: 10,
        pageCount: 10,
        page: 1,
        max: 200,
        min: 0,
    },
    cards: {
        totalCount: 10,
        pageCount: 10,
        page: 1,
    }
}

export const findAndPaginationReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        // for CardPacks
        case "FIND-AND-PAGINATION/SET-CARD-PACKS-CURRENT-PAGE":
            return {...state, cardPacks: {...state.cardPacks, page: action.page}}
        case "FIND-AND-PAGINATION/SET-CARD-PACKS-PAGE-COUNT":
            return {...state, cardPacks: {...state.cardPacks, pageCount: action.pageCount}}
        case "FIND-AND-PAGINATION/SET-CARD-PACKS-TOTAL-COUNT":
            return {...state, cardPacks: {...state.cardPacks, totalCount: action.cardPacksTotalCount}}
        case "FIND-AND-PAGINATION/SET-CARDS-PACKS-COUNT":
            return {...state, cardPacks: {...state.cardPacks, max: action.max, min: action.min}}
        // for Cards
        case "FIND-AND-PAGINATION/SET-CARDS-TOTAL-COUNT":
            return {...state, cards: {...state.cards, totalCount: action.cardsTotalCount}}
        case "FIND-AND-PAGINATION/SET-CARDS-PAGE-COUNT":
            return {...state, cards: {...state.cards, pageCount: action.pageCount}}
        case 'FIND-AND-PAGINATION/SET-CARDS-CURRENT-PAGE':
            return {...state, cards: {...state.cards, page: action.page}}
        default:
            return state
    }
}

type InitialStateType = {
    cardPacks: {
        totalCount: number
        pageCount: number
        page: number
        min: number
        max: number
    }
    cards: {
        totalCount: number
        pageCount: number
        page: number
    }
}

//AC for CardPacks:
export const setCardPacksTotalCountAC = (cardPacksTotalCount: number) =>
    ({type: 'FIND-AND-PAGINATION/SET-CARD-PACKS-TOTAL-COUNT', cardPacksTotalCount,} as const)
export const setCardPacksPageCountAC = (pageCount: number) =>
    ({type: 'FIND-AND-PAGINATION/SET-CARD-PACKS-PAGE-COUNT', pageCount,} as const)
export const setCardPacksCurrentPageAC = (page: number) =>
    ({type: 'FIND-AND-PAGINATION/SET-CARD-PACKS-CURRENT-PAGE', page} as const)
export const setCardsPacksCountAC = (min: number,max: number ) =>  // min and max cardsPacks
    ({type: 'FIND-AND-PAGINATION/SET-CARDS-PACKS-COUNT', min, max,} as const)

//AC for Cards:
export const setCardsTotalCountAC = (cardsTotalCount: number) =>
    ({type: 'FIND-AND-PAGINATION/SET-CARDS-TOTAL-COUNT', cardsTotalCount,} as const)
export const setCardsPageCountAC = (pageCount: number) =>
    ({type: 'FIND-AND-PAGINATION/SET-CARDS-PAGE-COUNT', pageCount,} as const)
export const setCarsCurrentPageAC = (page: number) =>
    ({type: 'FIND-AND-PAGINATION/SET-CARDS-CURRENT-PAGE', page} as const)

export type SetCardPacksTotalCountType = ReturnType<typeof setCardPacksTotalCountAC>
export type SetCardsTotalCountType = ReturnType<typeof setCardsTotalCountAC>


type ActionType =
    | SetCardPacksTotalCountType
    | ReturnType<typeof setCardPacksPageCountAC>
    | ReturnType<typeof setCardPacksCurrentPageAC>
    | ReturnType<typeof setCardsPacksCountAC>
    | SetCardsTotalCountType
    | ReturnType<typeof setCardsPageCountAC>
    | ReturnType<typeof setCarsCurrentPageAC>