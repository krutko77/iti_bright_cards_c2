import s from "./TableRow.module.scss";
import CellCommon from "../cell-common/CellCommon.jsx";
import TableButton from "../table-button/TableButton.jsx";
import {packsStateType, PackType} from "../../../../n1-main/m2-bll/packsReducer";
import {
    setClickedCardPackId,
    showModalDelCardsPackAC,
    showModalUpdateCardsPackAC
} from "../../../../n1-main/m2-bll/modalReducer";
import UpdatePackModal from "../../../../n2-features/f5-modal/ModalUpdatePack/UpdatePackModal";
import NewPackModal from "../../../../n2-features/f5-modal/ModalAddPack/NewPackModal";
import DeletePackModal from "../../../../n2-features/f5-modal/ModalDelPack/DeletePackModal";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {useNavigate} from "react-router-dom";


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

   return (
       <>
       <UpdatePackModal/>
    <NewPackModal/>
    <DeletePackModal/>
      <tr className={s.tr}>         
         <CellCommon cellData={props.cellData.name} />
         <CellCommon cellData={props.cellData.cardsCount} />
         <CellCommon cellData={props.cellData.updated} />
          <CellCommon cellData={props.cellData.user_name} />
         {/*<RatingCell cellData={props.cellData.rating}/>*/}
         <td className={s.td}>
            <div className={s.btnBlock}>
               <TableButton callback={() => showModalDelPackHandler(props.cellData._id)} label="Delete" style={buttonStyle}/>
               <TableButton callback={() => showModalUpdatePackHandler(props.cellData._id)} label="Edit" />
                <TableButton callback={() => startLearnHandler(props.cellData._id)} label="Learn" />
            </div>
         </td>
      </tr>
       </>
   );
}
