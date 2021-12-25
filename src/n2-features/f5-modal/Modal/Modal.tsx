import React from 'react';
import s from './Modal.module.scss'
import {useDispatch} from "react-redux";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";

type ModalPropsType = {
    modalShowHide: boolean
}


export const Modal: React.FC<ModalPropsType> = (props) => {
    const dispatch = useDispatch()

    if (!props.modalShowHide) return null

    const onCloseHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return <div className={s.modalBackground} onClick={onCloseHandler}>
        <div className={s.modalWindow} onClick={e => e.stopPropagation()}>
            <div className={s.modalContent} >
                {props.children}
            </div>
            <div className={s.close} onClick={onCloseHandler}>X</div>
        </div>
    </div>
}

/*todo: add close on background click*/