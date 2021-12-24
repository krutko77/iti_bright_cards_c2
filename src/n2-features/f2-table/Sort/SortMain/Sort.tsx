import React from 'react';
import SuperButton from "../../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import s from "./Sort.module.scss";

export function Sort (props: PropsType) {
    return <div className={s.container}>
        <SuperButton className={s.btn} onClick={props.upperSortHandler}>^</SuperButton>
        <SuperButton className={s.btn} onClick={props.lowerSortHandler}>v</SuperButton>
    </div>
}

type PropsType = {
    upperSortHandler: () => void
    lowerSortHandler: () => void
}

