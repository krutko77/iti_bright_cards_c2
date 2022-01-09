import React from 'react';
import s from "./CommonAddUpdate.module.scss";
import ModalTitleBlock from "../../../n1-main/m1-ui/common/Pvl/modal-title-block/ModalTitleBlock";
import {Input} from "../../../n1-main/m1-ui/common/Pvl/input/Input";
import ModalButtonBlock from "../../../n1-main/m1-ui/common/Pvl/modal-button-block/ModalButtonBlock";
import {StyleType} from "../../../types/types";

export const CommonAddUpdate = (props: PropsType) => {
    return <div className={s.newPackModal}>
        <div className={s.titleBlock}>
            <ModalTitleBlock title={props.title} onClose={props.closeHandler}/>
        </div>
        <div className={s.content}>
            <div className={s.input}>
                {props.inputs.map(e => {
                    return <Input inputData={e.inputData} value={e.value} onChangeText={e.onChangeText}/>
                })
                }
            </div>
            <ModalButtonBlock
                label1="Cancel"
                style1={props.style1}
                label2={props.yesButtonText}
                style2={props.style2}
                callback1={props.closeHandler}
                callback2={props.yesButtonHandler}
            />
        </div>
    </div>
}

type PropsType = {
    title: string
    closeHandler: () => void
    yesButtonText: string
    yesButtonHandler: () => void
    inputs: Array<InputsType>
    style1: StyleType
    style2: StyleType
}

type InputsType = {
    inputData: InputDataType,
    value: string
    onChangeText?: ((value: string) => void) | undefined
}

type InputDataType = {
    id: string
    type: string
    name: string
    for: string
    label: string
    style: {
        display: string
    }
}