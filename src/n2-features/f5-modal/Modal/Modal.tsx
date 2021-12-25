import React from 'react';
import s from './Modal.module.scss'
import {useDispatch} from "react-redux";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";

type ModalPropsType = {
    modalShowHide: boolean
    version: 'Briws' | 'Pavel'
}

export const Modal: React.FC<ModalPropsType> = (props) => {
    const dispatch = useDispatch()

    if (!props.modalShowHide) return null

    const onCloseHandler = () => {
        dispatch(closeAllModalsAC())
    }

    if (props.version === 'Briws') {
        return <div className={s.modalBackground} onClick={onCloseHandler}>
            <div className={s.modalWindow} onClick={e => e.stopPropagation()}>
                <div className={s.modalContent}>
                    {props.children}
                </div>
                <div className={s.close} onClick={onCloseHandler}>X</div>
            </div>
        </div>
    }
    if (props.version === 'Pavel') {
        return <div className={s.modalBackground} onClick={onCloseHandler}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    }
    else {
        return <div>
            no version selected
        </div>
    }
}



