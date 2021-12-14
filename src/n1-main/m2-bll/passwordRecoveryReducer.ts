import {Dispatch} from "redux";
import {RecoveryAPI} from "./api/api";

const initialState: InitialStateType = {
    success: false,
    error: null
}
type InitialStateType = {
    success: boolean
    error: null | string
}

type ActionType =
    | ReturnType<typeof setSuccessAC>
    | ReturnType<typeof setErrorAC>


export const passwordRecoveryReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'recovery/SET-SUCCESS':
            return {...state, success: action.success, error: ''}
        case 'recovery/SET-ERROR':
            return {...state, error: action.error, success: false}

        default:
            return state
    }
}

export const sendPassRecoveryTC = (email: string) => (dispatch: Dispatch<ActionType>) => {
    RecoveryAPI.recoveryPass(email)
        .then((res) => {
            if (res.data.success) {
                dispatch(setSuccessAC(true))
                alert('Письмо отправлено')
            }
        })
        .catch(e => {
            dispatch(setErrorAC(e.response.data.error))
        })
}


export const setSuccessAC = (success: boolean) => ({type: 'recovery/SET-SUCCESS', success} as const)
export const setErrorAC = (error: string) => ({type: 'recovery/SET-ERROR', error} as const)





