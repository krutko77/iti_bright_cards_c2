// todo: add Loader here

let initialState: InitialStateType = {
    isInitilize: false,
    error:null,
    message:null,
    status: 'idle',
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-IS-INITIALIZE':
            return {...state, isInitilize: action.isInitilize}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-MESSAGE':
            return {...state, message: action.message}
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return {...state}
    }
}

export const setIsInitializeAC = (isInitilize: boolean) => {
    return ({type: 'APP/SET-IS-INITIALIZE', isInitilize} as const)
}

export const setAppError = (error: string) => {
    return ({type: 'APP/SET-ERROR', error} as const)
}

export const setAppMessage = (message: string) => {
    return ({type: 'APP/SET-MESSAGE', message} as const)
}
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
// Types
type InitialStateType = {
    isInitilize: boolean
    error: null | string
    message: null | string
    status: RequestStatusType
}

export type SetAppStatusAT = ReturnType<typeof setAppStatusAC>

type ActionsType =
    | ReturnType<typeof setIsInitializeAC>
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppMessage>
    | SetAppStatusAT


