import {API, AuthResponseType} from "./api/api";
import {Dispatch} from "redux";
import {setProfileAC, SetProfileType} from "./profileReducer";

let initialState: InitialStateType = {
    isLoggedIn: false,
    error: null,
    isInitilize: false,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'LOGIN/SET-IS-ERROR':
            return {...state, error: action.error}
        case 'LOGIN/SET-IS-INITIALIZE':
            return {...state, isInitilize: action.isInitilize}
        default:
            return {...state}
    }
}

// ActionsCreators
export const setIsLoggedInAC = (value: boolean) => {
    return ({type: 'LOGIN/SET-IS-LOGGED-IN', value} as const)
}
export const setIsErrorAC = (error: string | null) => {
    return ({type: 'LOGIN/SET-IS-ERROR', error} as const)
}
export const setIsInitializeAC = (isInitilize: boolean) => {
    return ({type: 'LOGIN/SET-IS-INITIALIZE', isInitilize} as const)
}

// Thunks
export const LoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {
    API.login({email, password, rememberMe})
        .then(res => {
                dispatch(setIsLoggedInAC(true))
                dispatch(setProfileAC(res.data))
            }
        )
        .catch(e => {
                dispatch(setIsErrorAC(e.response.data.error))
            }
        )
}
export const InitializeTC = () => (dispatch: Dispatch) => {
    API.me()
        .then(res => {
                dispatch(setIsLoggedInAC(true))
                dispatch(setProfileAC(res.data))
            }
        )
        .catch(e => {
                dispatch(setIsLoggedInAC(false))
            }
        )
        .finally(() => {
            dispatch(setIsInitializeAC(true))
        })
}
export const LogoutTC = () => (dispatch: Dispatch) => {
    API.logout()
        .then(res => {
                dispatch(setIsLoggedInAC(false))
                dispatch(setIsErrorAC(null))
            }
        )
        .catch(e => {
                dispatch(setIsErrorAC(e.response.data.error))
            }
        )
}

// Types
type InitialStateType = {
    isLoggedIn: boolean
    error: string | null
    isInitilize: boolean
}
type ActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setIsErrorAC>
    | SetProfileType
    | ReturnType<typeof setIsInitializeAC>

