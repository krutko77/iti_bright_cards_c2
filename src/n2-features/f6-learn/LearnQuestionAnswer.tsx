import s from "./LearnQuestionAnswer.module.scss";
import Subtitle from "../../assets/components/common/subtitle/Subtitle.jsx";
import TableButton from "../../assets/components/table/table-button/TableButton";
import Button from "../../assets/components/common/button/Button";
import {CardType, getCardsTC, updateGradeTC} from "../../n1-main/m2-bll/cardsReducer";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../n1-main/m2-bll/appReducer";
import React, {useEffect, useState} from "react";
import {PackType} from "../../n1-main/m2-bll/packsReducer";
import {setCardsPageCountAC} from "../../n1-main/m2-bll/findAndPaginationReducer";
import { buttonActiveColorBorder } from "./../../n1-main/m1-ui/common/components/styles/inlineVariables";

// стилизация кнопок
const tableButtonStyle1 = {
   '.active': {
       borderWidth: "2px", 
       borderStyle: "solid",
       borderColor: buttonActiveColorBorder
   },
   fontWeight: "400",
   fontSize: "16px",
   width: "150px",
   marginBottom: "12px"
}

const tableButtonStyle2 = {
    width: "124px",
    height: "36px",
    borderRadius: "18px",
    fontWeight: "500",
    fontSize: "16px"
}

const buttonStyle = {
    width: "187px"
}


// grades for ourselves
const grades = ['Wrong', 'Did not know', 'Forgot', 'A lot of thought', 'Knew the answer'];

// clever random
const getCard = (cards: Array<CardType>) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});

    return cards[res.id + 1];
}

export default function LearnQuestionAnswer() {
    const cardsPacksFromLS = localStorage.getItem('cardsPacks')  // get CardPacks from LS to save it while F5

    let cardsPacksFromLSParsed = []
    if (cardsPacksFromLS) cardsPacksFromLSParsed = JSON.parse(cardsPacksFromLS)

    let {packid} = useParams()

    const dispatch: Function = useDispatch();

    const cards = useSelector<AppStoreType, Array<CardType>>(state => state.cards.cards)

    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)
    const appStatus = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)

    const [isFirstRun, setIsFirstRun] = useState<boolean>(true)
    const [card, setCard] = useState<CardType>({
        answer: '',
        answerImg: '',
        answerVideo: '',
        cardsPack_id: '',
        comments: '',
        created: '',
        grade: 0,
        more_id: '',
        question: '',
        questionImg: '',
        questionVideo: '',
        rating: 0,
        shots: 0,
        type: '',
        updated: '',
        user_id: '',
        __v: 0,
        _id: '',
    });
    const [isAnswerHidden, setIsAnswerHidden] = useState(true)

    let selectedCardPack: PackType
    selectedCardPack = cardsPacksFromLSParsed.find((e: PackType) => e._id === packid)

    useEffect(() => {
        if (isLoggedIn && packid) {
            if (isFirstRun) {
                setIsFirstRun(false);
                dispatch(setCardsPageCountAC(selectedCardPack.cardsCount)) // for playing with all cards in pack
                dispatch(getCardsTC(packid!))
            }
            if (cards.length > 0) {
                setCard(getCard(cards))
            }

        }
    }, [isLoggedIn, packid, cards.length])

    let getNextCard = () => {
        setIsAnswerHidden(true)
        setCard(getCard(cards))
    }

    const sandGradeHandler = (grade: number) => {
        dispatch(updateGradeTC(grade, card._id))
            .then(() => {
                // alert(`Grade: ${grade} for cardId: ${card._id} added` )
                getNextCard()
            })
    }

    return (
        <div className={s.contentWrap}>
            <div className={s.title}>
                <Subtitle subtitle={`Learn “${selectedCardPack && selectedCardPack.name}”`}/>
            </div>
            <span className={s.textTop}><strong>Question</strong>: {`“${card.question}”`}</span>

            {isAnswerHidden
                ? <div className={s.btn}><Button onClick={() => setIsAnswerHidden(false)}
                               disabled={appStatus === "loading"} label={'Answer'}/></div>
                : <div className={s.answerBlock}>
                    <span className={s.textBottom}><strong>Answer</strong>: {`“${card.answer}”`}</span>
                    <div className={s.label}>Rate yourself:</div>
                    <div className={s.topButtonBlock}>
                        {grades.map((g, i) => (
                            <TableButton key={i}
                                         style={tableButtonStyle1}
                                         label={g}
                                         onClick={() => (sandGradeHandler(i + 1))}
                                         disabled={appStatus === "loading"}/>

                        ))}
                    </div>
                </div>
            }
            <div className={s.buttonBlock}>
                <NavLink to={`/packs`}>
                    <TableButton onClick = {() => {}} disabled={appStatus === "loading"} label="Cancel" style={tableButtonStyle2}/>
                </NavLink>
                <Button disabled={appStatus === "loading"} label="Next" style={buttonStyle} onClick={getNextCard}/>
            </div>
        </div>
    )
}