import {Dispatch} from "redux";
import {packsAPI} from "./api/api";
import {AppStoreType} from "./store";
import {setCardPacksTotalCountAC, setCardPacksTotalCountType} from "./findAndPaginationReducer";

export const initialState:packsStateType = {
    cardPacks:[],
    pack_id:''
}

export const packsReducer = (state= initialState, action: ActionType):packsStateType => {
    switch (action.type) {
        case 'pack/GET-CARD-PACKS':
            return {...state, cardPacks: action.cardPacks}
        case 'pack/GET-USER-ID':
            return {...state, pack_id: action.pack_id}
        default:
            return state
    }
}

export const getPacksAC = (cardPacks: packType[]) => ({type: "pack/GET-CARD-PACKS", cardPacks} as const)
export const getUserIdAC = (pack_id: string) => ({type: "pack/GET-USER-ID", pack_id} as const)

export const getPacksTC = () => (dispatch: Dispatch<ActionType>, getState: () => AppStoreType) => {
    const page = getState().findAndPagination.page
    const pageCount = getState().findAndPagination.pageCount.toString()
    const min = getState().findAndPagination.min
    const max = getState().findAndPagination.max

    packsAPI.getPacks(pageCount, page, min, max)
        .then((res) => {
            if (res.data.cardPacks) {
                dispatch(getPacksAC(res.data.cardPacks))
                dispatch(setCardPacksTotalCountAC(res.data.cardPacksTotalCount))
            }
        })
}

export type packType = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grade: number
    cardsCount: number
    type: string
    rating: number
    created: string
    updated: string
}

export type packsStateType = {
    cardPacks: packType[];
    pack_id: string;
}

type ActionType =
    | ReturnType<typeof getPacksAC>
    | ReturnType<typeof getUserIdAC>
    | setCardPacksTotalCountType

