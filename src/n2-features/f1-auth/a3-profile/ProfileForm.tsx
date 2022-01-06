import s from "./ProfileForm.module.scss";
import Subtitle from "../../../assets/components/common/subtitle/Subtitle.jsx";
import {Input} from "../../../assets/components/common/input/Input";

import img from "../../../assets/img/photo-profile.png";
import icon from "../../../assets/img/photo-icon.svg";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {AuthResponseType} from "../../../n1-main/m2-bll/api/api";
import {Navigate} from "react-router-dom";
import React, {ChangeEvent, useRef, useState} from "react";
import Button from "../../../assets/components/common/button/Button";
import {profileUpdateAC, UpdateProfileTC} from "../../../n1-main/m2-bll/authReducer";
import {buttonCancelColor} from "../../../n1-main/m1-ui/common/components/styles/inlineVariables";

// данные для input nickname
const inputData1 = {
    id: "nickname",
    type: "text",
    name: "nickname",
    for: "nickname",
    label: "Nickname",
    style: {
        display: "none"
    }
}

// данные для input email
const inputData2 = {
    id: "email",
    type: "email",
    name: "email",
    for: "email",
    label: "Email",
    style: {
        display: "none"
    }
}

// данные для input publicCardPacksCount
const inputData3 = {
    id: "publicCardPacksCount",
    type: "text",
    name: "publicCardPacksCount",
    for: "publicCardPacksCount",
    label: "Cards packs count",
    style: {
        display: "none"
    }
}


// стилизация кнопок
const styleButton1 = {
    backgroundColor: buttonCancelColor,
    color: "#21268F",
    width: "124px",
    boxShadow: "none"
}

const styleButton2 = {
    width: "124px"
}

export default function ProfileForm() {
    const dispatch = useDispatch()
    const [error, setError] = useState('')

    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)
    const avatarFromState = useSelector<AppStoreType, string>(state => state.auth.avatar)


    const {
        name,
        email,
        publicCardPacksCount,
        avatar
    } = useSelector<AppStoreType, AuthResponseType>(state => state.profile)

    const [isEditMode, setIsEditMode] = useState(false)
    const [width, setWidth] = useState(0)

    const inRef = useRef<HTMLInputElement>(null);

    const upload = (e: ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader();
        const image = new Image()

        const newFile = e.target.files && e.target.files[0];

        reader.readAsDataURL(newFile as Blob);

        reader.onload = () => {
            image.src = reader.result as string;

            image.onload = () => {
                setWidth(image.width)
                console.log('images loaded', image.width, image.height)
                if (image.width === 96 && image.height === 96) {
                    setError('')
                    console.log('load to server')
                    dispatch(profileUpdateAC(reader.result as string))
                } else /*console.log('show error')*/ setError('error text')
            }

        };
        reader.onerror = (error) => {
        }

    }

    console.log(error)

    const goToEditModeHandler = () => {
        setIsEditMode(true)
    }

    const cancelEditHandler = () => {
        setIsEditMode(false)
    }

    const saveEditHandler = () => {
        setIsEditMode(false)
        dispatch(UpdateProfileTC(avatarFromState))
    }

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }
    return (
        <>
            <input
                ref={inRef}
                type={'file'}
                accept=".jpg, .jpeg, .png"
                style={{display: 'none'}}
                onChange={upload}
            /> {/*for select file dialog*/}

            <div> {/*previously was form*/}
                <div className={s.contentWrap}>
                    <Subtitle subtitle="Personal Information"/>
                    <div className={s.img}>
                        <img src={isEditMode ? avatarFromState : avatar} alt="img" className={s.picture}/>

                        {
                            isEditMode
                                ?
                                <div className={s.icon} onClick={() => inRef && inRef.current && inRef.current.click()}>
                                    <img src={icon} alt="icon"/>
                                </div>
                                : <div></div>
                        }
                    </div>
                    {error && <div className={s.error}>Avatar must be 96x96px</div>}
                    <Input inputData={inputData1} value={name} onChange={() => {
                    }}/>
                    <Input inputData={inputData2} value={email} onChange={() => {
                    }}/>
                    <Input inputData={inputData3} value={publicCardPacksCount} onChange={() => {
                    }}/>

                    {isEditMode
                        ? <div className={s.block}>
                            <Button label="Cancel" style={styleButton1} onClick={cancelEditHandler}/>
                            <Button label="Save" style={styleButton2} onClick={saveEditHandler}/>
                        </div>
                        : <div className={`${s.block} ${s.onEditMode}`}>
                            <Button label="Edit" style={styleButton2} onClick={goToEditModeHandler}/>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}


