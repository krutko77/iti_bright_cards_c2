import s from "./ProfileForm.module.scss";
import Subtitle from "../../../assets/components/common/subtitle/Subtitle.jsx";
import {Input} from "../../../assets/components/common/input/Input";

import img from "../../../assets/img/photo-profile.png";
import icon from "../../../assets/img/photo-icon.svg";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {AuthResponseType} from "../../../n1-main/m2-bll/api/api";
import {Navigate} from "react-router-dom";
import React, {ChangeEvent, useRef, useState} from "react";
import Button from "../../../assets/components/common/button/Button";
import {boolean} from "yup";

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
    backgroundColor: "#D7D8EF",
    color: "#21268F",
    width: "124px",
    boxShadow: "none"
}

const styleButton2 = {
    width: "124px"
}

export default function ProfileForm() {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)
    const {
        name,
        email,
        publicCardPacksCount,
        avatar
    } = useSelector<AppStoreType, AuthResponseType>(state => state.profile)

    const [file, setFile] = useState<File>();
    const [file64, setFile64] = useState<string | ArrayBuffer | null>();
    const [fileURL, setFileURL] = useState<string>(avatar);
    const [fileData, setFileData] = useState<FormData>();
    const [isEditMode, setIsEditMode] = useState(false)

    const inRef = useRef<HTMLInputElement>(null);

    const upload = (e: ChangeEvent<HTMLInputElement>) => {

        const reader = new FileReader();
        // const formData = new FormData(); // for send to back

        const newFile = e.target.files && e.target.files[0];
        debugger

        if (newFile) {
            setFile(newFile);
            setFileURL(window.URL.createObjectURL(newFile));
            // formData.append('myFile', newFile, newFile.name);
            // setFileData(formData);

            setFile64(reader.result);
            debugger
            reader.readAsDataURL(newFile);
            // debugger

            console.log(file64)
        }
    }

    const goToEditModeHandler = () => {
        setIsEditMode(true)
    }

    const cancelEditHandler = () => {
        setIsEditMode(false)
    }

    const saveEditHandler = () => {
        setIsEditMode(false)
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
                        <img src={isEditMode ? fileURL : avatar} alt="img" className={s.picture}/>
                        {
                            isEditMode
                                ?
                                <div className={s.icon} onClick={() => inRef && inRef.current && inRef.current.click()}>
                                    <img src={icon} alt="icon"/>
                                </div>
                                : <div></div>
                        }
                    </div>
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


