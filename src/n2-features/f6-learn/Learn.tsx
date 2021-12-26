import React, {useEffect, useState} from 'react'
import {CardType, getCardsTC} from "../../n1-main/m2-bll/cardsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../n1-main/m2-bll/store";
import {Navigate, NavLink, useParams} from "react-router-dom";
import s from './Learn.module.scss'
import SuperButton from "../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {getPacksTC, PackType} from "../../n1-main/m2-bll/packsReducer";
import {CircularProgress} from "@mui/material";

const grades = ['wrong', 'did not know', 'forgot', 'thought for a long time', 'correct'];

const getCard = (cards: Array<CardType>) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

export const Learn = () => {
    let {packid} = useParams()
    const dispatch: Function = useDispatch();
    const cards = useSelector<AppStoreType, Array<CardType>>(state => state.cards)
    const cardsPack = useSelector<AppStoreType, Array<PackType>>(state => state.packs.cardPacks)

    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)

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

    let selectedCardPack
    if (cardsPack.length) selectedCardPack = cardsPack.find(e => e._id === packid)


    useEffect(() => {
        if (isLoggedIn && packid) {
            dispatch(getPacksTC())
                .then(() => {
                    if (isFirstRun) {
                        dispatch(getCardsTC(packid!))
                        setIsFirstRun(false);
                    }
                    if (cards.length > 0) {
                        debugger
                        setCard(getCard(cards))
                    }
                })
        }
    },[packid, isLoggedIn])

    let getNextCard = () => {
        setIsAnswerHidden(true)
        setCard(getCard(cards))
    }

    const sandGradeHandler = (grade: number) => {
        alert(`I will sent to server grade: ${grade} for cardId: ${card._id}`)
    }

    return <div className={s.learn}>
        {selectedCardPack &&
          <div className={s.status}>
            <div>Selected cards pack: {selectedCardPack.name}</div>
            <div>Cards count: {selectedCardPack.cardsCount}</div>
          </div>
        }

        <div className={s.question}><b>Question:</b> {card.question}</div>

        <div>
            {isAnswerHidden
                ? <SuperButton onClick={() => setIsAnswerHidden(false)}>Answer</SuperButton>
                : <div><b>Answer:</b> {card.answer}</div>}
        </div>

        {!isAnswerHidden &&
          <div className={s.grade}>
              {grades.map((g, i) => (
                  <SuperButton key={i} className={s.gradeBtn}
                               onClick={() => (sandGradeHandler(i + 1))}>{g}</SuperButton>
              ))}
          </div>}

        <div className={s.btn}>
            <NavLink to={`/packs`}><SuperButton>Cancel</SuperButton></NavLink>
            <SuperButton onClick={getNextCard}>Next</SuperButton>
        </div>
    </div>
}