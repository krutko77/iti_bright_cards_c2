import {applyMiddleware, combineReducers, createStore} from "redux";
import {testReducer} from "./testReducer";
import thunkMiddleware from "redux-thunk";
import {passwordRecoveryReducer} from "./passwordRecoveryReducer";

const reducers = combineReducers({
    testReducer: testReducer,
    recovery: passwordRecoveryReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev