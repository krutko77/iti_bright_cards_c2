import React, {useEffect} from 'react';
import './App.css';
import {Main} from "./p2-main/Main";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../m2-bll/store";
import {InitializeTC} from "../m2-bll/authReducer";
import {CircularProgress, LinearProgress} from "@mui/material";
import {RequestStatusType} from "../m2-bll/appReducer";

export const App = () => {
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppStoreType, boolean>(state => state.app.isInitilize)

    useEffect(() => {
        dispatch(InitializeTC())
    }, [])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <div className="App">
            <Main />
        </div>
    );
}

