import React, {useEffect, useState} from 'react'
import {CardType, getCardsTC, updateGradeTC} from "../../n1-main/m2-bll/cardsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../n1-main/m2-bll/store";
import {NavLink, useParams} from "react-router-dom";
import s from './Learn.module.scss'
import SuperButton from "../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {PackType} from "../../n1-main/m2-bll/packsReducer";
import {setCardsPageCountAC} from "../../n1-main/m2-bll/findAndPaginationReducer";

// grades for ourselves
const grades = ['wrong', 'did not know', 'forgot', 'thought for a long time', 'correct'];

// clever random
const getCard = (cards: Array<CardType>) => {
    debugger
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});

    return cards[res.id + 1];
}

export const Learn = () => {
    const cardsPacksFromLS = localStorage.getItem('cardsPacks')  // get CardPacks from LS to save it while F5

    let cardsPacksFromLSParsed = []
    if (cardsPacksFromLS) cardsPacksFromLSParsed = JSON.parse(cardsPacksFromLS)

    let {packid} = useParams()

    const dispatch: Function = useDispatch();

    const cards = useSelector<AppStoreType, Array<CardType>>(state => state.cards.cards)

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
        dispatch(updateGradeTC(grade,card._id))
        alert(`Grade: ${grade} for cardId: ${card._id} added` )
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