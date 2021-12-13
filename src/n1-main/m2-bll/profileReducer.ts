import {AuthResponseType} from "./api/api";

let initialState: AuthResponseType = {
    avatar: '',
    email: '',
    name: '',
    publicCardPacksCount: 0,
    _id: '',
}

export const profileReducer = (state = initialState, action: ActionsType): AuthResponseType => {
    debugger
    switch (action.type) {
        case 'PROFILE/SET-PROFILE':
            return {...state, ...action.data}
        default:
            return {...state}
    }
}

export const setProfileAC = (data: AuthResponseType) => {
    return ({type: 'PROFILE/SET-PROFILE', data} as const)
}

export type SetProfileType = ReturnType<typeof setProfileAC>
type ActionsType = SetProfileType