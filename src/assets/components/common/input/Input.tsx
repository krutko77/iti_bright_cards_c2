import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "./Input.module.scss";

import icon from './../../../img/shape.svg';
import {inputDataType} from "../../../../n2-features/f1-auth/a1-login/LoginForm";

export const Input: React.FC<PropsType> = ({inputData, value, onChange, ...restProps}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)
    }
   return (
      <div className={s.input}>
         <input
             id={inputData.id}
             type={inputData.type}
             name={inputData.name}
             required {...restProps}
             value={value}
             onChange={onChangeCallback}
         />
         <label className={s.placeholder} htmlFor={inputData.for}>{inputData.label}</label>
         <img className={s.icon} src={icon} alt="icon" style={inputData.style} />
      </div>
   );
}

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type PropsType = DefaultInputPropsType & {
    inputData: inputDataType
    value?: string | number
}


