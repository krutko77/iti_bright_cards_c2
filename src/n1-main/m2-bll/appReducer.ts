// todo: add Loader here

let initialState: InitialStateType = {
    isInitilize: false,
    error:null,
    message:null,
    loading:false,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-IS-INITIALIZE':
            return {...state, isInitilize: action.isInitilize}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-MESSAGE':
            return {...state, message: action.message}
        case 'APP/SET-LOADING':
            return {...state, loading: action.loading}
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

export const setAppLoading = (loading: boolean) => {
    return ({type: 'APP/SET-LOADING', loading} as const)
}

// Types
type InitialStateType = {
    isInitilize: boolean
    error: null | string
    message: null | string
    loading: boolean
}

type ActionsType =
    | ReturnType<typeof setIsInitializeAC>
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppMessage>
    | ReturnType<typeof setAppLoading>


