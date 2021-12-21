const initialState: InitialStateType = {
    cardPacksTotalCount: 10,
    pageCount: 10,
    page: 1,
    max: 200,
    min: 1,
}

export const findAndPaginationReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FIND-AND-PAGINATION/SET-CURRENT-PAGE":
            return {...state, page: action.page}
        case "FIND-AND-PAGINATION/SET-PAGE-COUNT":
            return {...state, pageCount: action.pageCount}
        case "FIND-AND-PAGINATION/SET-TOTAL-COUNT":
            return {...state, cardPacksTotalCount: action.cardPacksTotalCount}
        case "FIND-AND-PAGINATION/SET-CARDS-PACKS-COUNT":
            return {...state, max: action.max, min: action.min}
        default:
            return state
    }
}

type InitialStateType = {
    cardPacksTotalCount: number
    pageCount: number
    page: number
    min: number
    max: number
}

export const setCardPacksTotalCountAC = (cardPacksTotalCount: number) =>
    ({type: 'FIND-AND-PAGINATION/SET-TOTAL-COUNT', cardPacksTotalCount,} as const)
export const setPageCountAC = (pageCount: number) =>
    ({type: 'FIND-AND-PAGINATION/SET-PAGE-COUNT', pageCount,} as const)
export const setCurrentPageAC = (page: number) =>
    ({type: 'FIND-AND-PAGINATION/SET-CURRENT-PAGE', page} as const)
export const setCardsPacksCountAC = (min: number,max: number ) =>  // min and max cardsPacks
    ({type: 'FIND-AND-PAGINATION/SET-CARDS-PACKS-COUNT', min, max,} as const)

export type setCardPacksTotalCountType = ReturnType<typeof setCardPacksTotalCountAC>

type ActionType =
    | setCardPacksTotalCountType
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setCardsPacksCountAC>