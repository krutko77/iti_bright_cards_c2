import React from 'react';
import {RegistrationForm} from "./RegistrationForm/RegistrationForm";
import {useDispatch, useSelector} from "react-redux";
import {Link, Navigate} from "react-router-dom";
import {createNewUser, RequestStatusType} from "../../../n1-main/m2-bll/registrationReducer";
import {AppStoreType} from "../../../n1-main/m2-bll/store";

export const Registration = () => {

    const dispatch = useDispatch()

    const error = useSelector<AppStoreType, string | null>(state => state.registration.error)
    const message = useSelector<AppStoreType, string | null>(state => state.registration.message)
    const status = useSelector<AppStoreType, RequestStatusType>(state => state.registration.status)


    const createNewUserHandler = (email: string, password: string) => {
        dispatch(createNewUser(email, password))
    }

    if (status === 'register_success') {
        return <Navigate to={"/login"}/>
    }

    return (
        <div>
            {status === 'loading'
                ? <h1>...loading</h1>
                : <div>
                    <span style={{color: 'red'}}>{error && error}</span>
                    <span style={{color: 'green'}}>{message && message}</span>
                    <RegistrationForm callBack={createNewUserHandler}/>
                    <Link to="/login">
                        login
                    </Link>
                </div>
            }
        </div>
    );
}