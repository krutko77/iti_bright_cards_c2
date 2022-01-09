import s from "./BottomBlock.module.scss";
import {PaginationPacksContainer} from "../../../../../n2-features/f2-table/Pagination/PaginationPacksContainer";
import * as React from "react";
import {PaginationCardsContainer} from "../../../../../n2-features/f2-table/Pagination/PaginationCardsContainer";


export default function BottomBlock(props: PropsType) {
    return (
        <div className={s.bottomBlock}>
            {props.type === 'packs' ? <PaginationPacksContainer/> : <PaginationCardsContainer />}
        </div>
    )
}

type PropsType = {
    type: 'packs' | 'cards'
}


