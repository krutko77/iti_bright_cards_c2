import s from "./TableRow.module.scss";
import CellCommon from "../cell-common/CellCommon.jsx";
import {packsStateType, PackType} from "../../../../n1-main/m2-bll/packsReducer";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {useLocation, useNavigate} from "react-router-dom";
import { setClickedCardPackId, showModalDelCardsPackAC, showModalUpdateCardsPackAC } from "../../../../n1-main/m2-bll/modalReducer";
import TableButton from "../table-button/TableButton";
import ModalDelPack from "../../../../n2-features/f5-modal/ModalDelPack/ModalDelPack";
import ModalUpdatePack from "../../../../n2-features/f5-modal/ModalUpdatePack/ModalUpdatePack";
import ModalAddPack from "../../../../n2-features/f5-modal/ModalAddPack/ModalAddPack";
import {CardType} from "../../../../n1-main/m2-bll/cardsReducer";

// стилизация кнопки
const buttonStyle = {
   backgroundColor: "#F1453D",
   color: "#FFFFFF",
   fontWeight: 500
}

export type PropsType = {
    cellData:PackType
}

export default function TableRow(props:PropsType) {

    // let location = useLocation()
    // console.log(location.pathname)

    const {cardPacks} = useSelector<AppStoreType, packsStateType>(state => state.packs)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const showModalDelPackHandler = (id: string) => {
        dispatch(setClickedCardPackId(id))
        dispatch(showModalDelCardsPackAC())
    }

    const showModalUpdatePackHandler = (id: string) => {
        dispatch(setClickedCardPackId(id))
        dispatch(showModalUpdateCardsPackAC())
    }


    const startLearnHandler = (packId: string) => {
        localStorage.setItem('cardsPacks', JSON.stringify(cardPacks)) // this go to LS, to save it on F5 Learn.
        navigate(`/learn/${packId}`, {replace: true})
    }

    const editHandler = (packId: string)=>{
        localStorage.setItem('cardsPacks', JSON.stringify(cardPacks))
        navigate(`/cardsdesigned/${packId}`,)
    }

   return (
       <>
           <ModalUpdatePack/>
    <ModalAddPack/>
    <ModalDelPack/>
      <tr className={s.tr}>

         <CellCommon callback={()=>editHandler(props.cellData._id)} cellData={props.cellData.name} />
         <CellCommon cellData={props.cellData.cardsCount} />
         <CellCommon cellData={props.cellData.updated} />
          <CellCommon cellData={props.cellData.user_name} />
         {/*<RatingCell cellData={props.cellData.rating}/>*/}
         <td className={s.td}>
            <div className={s.btnBlock}>
               <TableButton onClick={() => showModalDelPackHandler(props.cellData._id)} label="Delete" style={buttonStyle}/>
               <TableButton onClick={() => showModalUpdatePackHandler(props.cellData._id)} label="Edit" />
                <TableButton onClick={() => startLearnHandler(props.cellData._id)} label="Learn" />
            </div>
         </td>
      </tr>
       </>
   );
}
