import React from 'react';
import s from './CommonBackground.module.scss'
import {useDispatch} from "react-redux";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";

type ModalPropsType = {
    modalShowHide: boolean
}

export const CommonBackground: React.FC<ModalPropsType> = (props) => {
    const dispatch = useDispatch()

    if (!props.modalShowHide) return null

    const onCloseHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return <div className={s.modalBackground} onClick={onCloseHandler}>
        <div className={s.modalContent} onClick={e => e.stopPropagation()}>
            {props.children}
        </div>
    </div>

}



