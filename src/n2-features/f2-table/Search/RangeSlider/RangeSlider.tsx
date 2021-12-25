import React from 'react';
import {Slider, Typography} from "@mui/material";
import s from './RangeSlider.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {setCardsPacksCountAC} from "../../../../n1-main/m2-bll/findAndPaginationReducer";

export const RangeSlider = () => {
    const dispatch = useDispatch()

    const handleChange = (event: Event, newValue: number | number[]) => {
        dispatch(setCardsPacksCountAC(newValue as number[]))
    };

    const min = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacks.min)
    const max = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacks.max)

    return <div className={s.rangeSlider}>
        <div>
            How much Cards in Pack to show:
        </div>
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={[min,max]}
            onChange={handleChange}
            valueLabelDisplay="on"
            className={s.slider}
            min={0}
            max={200}
        />
    </div>
}