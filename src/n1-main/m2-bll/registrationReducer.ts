const initialState: InitialStateType = {
    testValue: ''
}

export const registrationReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        default:
            return state
    }
}

export const setTestValueAC = (newValue: string) =>
    ({type: 'SET-TEST-VALUE', newValue} as const)


type InitialStateType = {
}

type ActionType = ReturnType<typeof setTestValueAC>