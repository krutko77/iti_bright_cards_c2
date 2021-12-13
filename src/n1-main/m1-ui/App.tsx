import React, {useEffect} from 'react';
import './App.css';
import {Main} from "./p2-main/Main";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../m2-bll/store";
import {InitializeTC} from "../m2-bll/authReducer";

export const App = () => {
    const dispatch = useDispatch()
    const isInitialize = useSelector<AppStoreType, boolean>(state => state.auth.isInitilize)
    useEffect(() => {
        dispatch(InitializeTC())
    }, [])
    return (
        <div className="App">
            {isInitialize && <Main />}
        </div>
    );
}