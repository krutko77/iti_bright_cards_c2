import {API, AuthResponseType} from "./api/api";
import {Dispatch} from "redux";

let initialState: InitialStateType = {
    isLoggedIn: false,
    error: null,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return {...state}
    }
}

//ActionsCreators
export const setIsLoggedIn = (value: boolean) => {
    return ({type: 'LOGIN/SET-IS-LOGGED-IN', value} as const)
}
export const setProfile = (data: AuthResponseType) => {
    const {avatar, email, name, publicCardPacksCount, _id} = data
    return ({type: 'profile/SET-PROFILE', avatar, email, name, publicCardPacksCount, _id} as const)
}
export const setIsError = (error: string) => {
    return ({type: 'login/SET-IS-ERROR', error} as const)
}

//Thunks
export const LoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {
    API.login({email, password, rememberMe})
        .then(res => {
                dispatch(setIsLoggedIn(true))
            }
        )
        .catch(e => {
                e.response
                    ? dispatch(setIsError(e.response.data.error))
                    : dispatch(setIsError(e.message + ', more details in the console'));
            }
        )
}

//Types
type InitialStateType = {
    isLoggedIn: boolean
    error: string | null
}


type ActionsType = ReturnType<typeof setIsLoggedIn> | ReturnType<typeof setIsError>