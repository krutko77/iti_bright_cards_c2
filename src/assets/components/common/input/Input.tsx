import React from 'react'
import s from "./Input.module.scss";

import icon from './../../../img/shape.svg';
import {inputDataType} from "../../login-form/LoginForm";

export const Input: React.FC<PropsType> = ({inputData,...restProps}) => {
   return (
      <div className={s.input}>
         <input id={inputData.id} type={inputData.type} name={inputData.name} required {...restProps}/>
         <label className={s.placeholder} htmlFor={inputData.for}>{inputData.label}</label>
         <img className={s.icon} src={icon} alt="icon" style={inputData.style} />
      </div>
   );
}

type PropsType = {
    inputData: inputDataType
}


