import s from "./ProfileForm.module.scss";
import Subtitle from "../../../assets/components/common/subtitle/Subtitle.jsx";
import { Input } from "../../../assets/components/common/input/Input";

import img from "../../../assets/img/photo-profile.png";
import icon from "../../../assets/img/photo-icon.svg";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {AuthResponseType} from "../../../n1-main/m2-bll/api/api";
import {Navigate} from "react-router-dom";
import React from "react";
import Button from "../../../assets/components/common/button/Button";

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
   const { name, email, publicCardPacksCount} = useSelector<AppStoreType, AuthResponseType>(state => state.profile)

   if (!isLoggedIn) {
      return <Navigate to="/login"/>
   }

   return (
      <form action="">
         <div className={s.contentWrap}>
            <Subtitle subtitle="Personal Information" />
            <div className={s.img}>
               <img src={img} alt="img" />
               <div className={s.icon}>
                  <img src={icon} alt="icon" />
               </div>
            </div>
            <Input inputData={inputData1} value={name} onChange={() => {}}/>
            <Input inputData={inputData2} value={email} onChange={() => {}}/>
            <Input inputData={inputData3} value={publicCardPacksCount} onChange={() => {}}/>
            <div className={s.block}>
               <Button label="Cancel" style={styleButton1} />
               <Button label="Save" style={styleButton2} />
            </div>
         </div>
      </form >
   );
}


