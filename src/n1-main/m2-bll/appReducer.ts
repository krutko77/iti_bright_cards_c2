// todo: add Loader here

let initialState: InitialStateType = {
    isInitilize: false,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-IS-INITIALIZE':
            return {...state, isInitilize: action.isInitilize}
        default:
            return {...state}
    }
}

export const setIsInitializeAC = (isInitilize: boolean) => {
    return ({type: 'APP/SET-IS-INITIALIZE', isInitilize} as const)
}

// Types
type InitialStateType = {
    isInitilize: boolean
}

type ActionsType = ReturnType<typeof setIsInitializeAC>

