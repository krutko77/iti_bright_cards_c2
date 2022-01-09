import s from "./BottomBlock.module.scss";
import UsePagination from "../pagination/UsePagination.jsx";
import Select from "../select/Select.jsx";
import {Pagination} from "../../../../../n2-features/f2-table/Pagination/Pagination";
import {PaginationPacksContainer} from "../../../../../n2-features/f2-table/Pagination/PaginationPacksContainer";
import * as React from "react";


export default function BottomBlock() {
    return (
        <div className={s.bottomBlock}>
            <div className={s.oldPaginationBlock}>
                {/*<UsePagination/>*/}
                <div className={s.selectBlock}>
                    {/*<span className={s.label1}>Show</span>
                    <div className={s.selectWrap}>
                        <Select/>
                    </div>
                    <span className={s.label2}>Cards per Page</span>*/}
                </div>
            </div>
            <PaginationPacksContainer/>
        </div>
    )
}


