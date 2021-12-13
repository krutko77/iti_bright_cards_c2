import {API, AuthResponseType} from "./api/api";
import {Dispatch} from "redux";
import {setProfileAC, SetProfileType} from "./profileReducer";

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
export const setIsLoggedInAC = (value: boolean) => {
    return ({type: 'LOGIN/SET-IS-LOGGED-IN', value} as const)
}
export const setIsErrorAC = (error: string) => {
    return ({type: 'login/SET-IS-ERROR', error} as const)
}

//Thunks
export const LoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {
    API.login({email, password, rememberMe})
        .then(res => {
                dispatch(setIsLoggedInAC(true))
                dispatch(setProfileAC(res.data))
            }
        )
        .catch(e => {
                e.response
                    ? dispatch(setIsErrorAC(e.response.data.error))
                    : dispatch(setIsErrorAC(e.message + ', more details in the console'));
            }
        )
}

//Types
type InitialStateType = {
    isLoggedIn: boolean
    error: string | null
}


type ActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setIsErrorAC>
    | SetProfileType