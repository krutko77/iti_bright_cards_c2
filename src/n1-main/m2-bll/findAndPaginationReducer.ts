const initialState: InitialStateType = {
    cardPacks: {
        totalCount: 10, // this is for pagination
        pageCount: 10, // this is for pagination
        page: 1, // this is for pagination
        max: 200, // this is for range slider
        min: 0, // this is for range slider
        packName: '', // this is for search
        sortPacks: null, // this is for sorting
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
        case "FIND-AND-PAGINATION/SET-SEARCH-PACK-NAME":
            return {...state, cardPacks: {...state.cardPacks, packName: action.packName}}
        case "FIND-AND-PAGINATION/SET-SORT-PACKS":
            return {...state, cardPacks: {...state.cardPacks, sortPacks: action.sortPacks}}

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
        packName: string
        sortPacks: SortPackType
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
/*export const setCardsPacksCountAC = (min: number,max: number ) =>  // min and max cardsPacks
    ({type: 'FIND-AND-PAGINATION/SET-CARDS-PACKS-COUNT', min, max,} as const)*/
export const setCardsPacksCountAC = (numbers: Array<number> ) =>  // min and max cardsPacks
    ({type: 'FIND-AND-PAGINATION/SET-CARDS-PACKS-COUNT', min: numbers[0], max: numbers[1],} as const)
export const setSearchPackNameAC = (packName: string) =>
    ({type: 'FIND-AND-PAGINATION/SET-SEARCH-PACK-NAME', packName} as const)
export const setSortPacksAC = (sortPacks: SortPackType) =>
    ({type: 'FIND-AND-PAGINATION/SET-SORT-PACKS', sortPacks} as const)

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
    | ReturnType<typeof setSearchPackNameAC>
    | ReturnType<typeof setSortPacksAC>

export type SortPackType = '0name' | '1name' | '0cardsCount' | '1cardsCount' | '0updated'| '1updated' | null
