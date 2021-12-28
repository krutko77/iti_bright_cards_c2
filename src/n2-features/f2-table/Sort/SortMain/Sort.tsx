import React from 'react';
import SuperButton from "../../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import s from "./Sort.module.scss";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../../../n1-main/m2-bll/appReducer";

export function Sort(props: PropsType) {
    const appStatus = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)

    return <div className={s.container}>
        <SuperButton className={s.btn} onClick={props.upperSortHandler}
                     disabled={appStatus === "loading"}>^</SuperButton>
        <SuperButton className={s.btn} onClick={props.lowerSortHandler}
                     disabled={appStatus === "loading"}>v</SuperButton>
    </div>
}

type PropsType = {
    upperSortHandler: () => void
    lowerSortHandler: () => void
}

