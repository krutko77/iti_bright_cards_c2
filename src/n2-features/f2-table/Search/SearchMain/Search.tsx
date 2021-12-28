import React, {ChangeEvent} from 'react';
import SuperInputText from "../../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import s from './Search.module.scss'
import SuperButton from "../../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {RangeSlider} from "../RangeSlider/RangeSlider";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../../../n1-main/m2-bll/appReducer";

export const Search = (props: PropsType) => {
    const appStatus = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)

    return (
        <div className={s.search}>
            <SuperInputText
                value={props.inputValue}
                onChange={props.setInputValueHandler}
                placeholder={props.inputPlaceholder}
                className={s.input}
            />
            {props.showRange && <RangeSlider/>}
            <SuperButton onClick={props.buttonFindHandler} className={s.btn}
                         disabled={appStatus === "loading"}>{props.buttonText}</SuperButton>
        </div>
    )
}

type PropsType = {
    inputValue: string
    inputPlaceholder: string
    setInputValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    buttonFindHandler: () => void
    buttonText: string
    showRange: boolean
}
