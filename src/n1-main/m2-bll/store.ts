import {applyMiddleware, combineReducers, createStore} from "redux";
import {testReducer} from "./testReducer";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "./authReducer";
import {profileReducer} from "./profileReducer";
import {registrationReducer} from "./registrationReducer";
import {passwordRecoveryReducer} from "./passwordRecoveryReducer";
import {appReducer} from "./appReducer";
import {packsReducer} from "./packsReducer";
import {cardsReducer} from "./cardsReducer";
import {findAndPaginationReducer} from "./findAndPaginationReducer";
import {modalReducer} from "./modalReducer";

const reducers = combineReducers({
    testReducer: testReducer,
    auth: authReducer,
    profile: profileReducer,
    registration: registrationReducer,
    recovery: passwordRecoveryReducer,
    app: appReducer,
    packs: packsReducer,
    cards: cardsReducer,
    findAndPagination: findAndPaginationReducer,
    modal: modalReducer,
})

// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev