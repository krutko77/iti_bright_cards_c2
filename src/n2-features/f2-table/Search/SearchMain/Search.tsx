import s from "./Search.module.scss";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../../../n1-main/m2-bll/appReducer";
import {ChangeEvent} from "react";


export default function Search(props: PropsType) {
    const appStatus = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)

    return (
        <div className={s.search}>
            <input className={s.inputSearch}
                   name="name"
                   type="text"
                   disabled={appStatus === 'loading'}
                   value={props.inputValue}
                   placeholder={props.inputPlaceholder}
                   onChange={props.setInputValueHandler}
            />
        </div>
    );
}

type PropsType = {
    inputValue: string
    inputPlaceholder: string
    setInputValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    buttonFindHandler: () => void
    buttonText: string
}
