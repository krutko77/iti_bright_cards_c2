import React, {useEffect, useState} from 'react'
import {CardType, getCardsTC} from "../../n1-main/m2-bll/cardsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../n1-main/m2-bll/store";
import {NavLink, useParams} from "react-router-dom";
import s from './Learn.module.scss'
import SuperButton from "../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";

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
    const dispatch = useDispatch();
    const cards = useSelector<AppStoreType, Array<CardType>>(state => state.cards)

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

    useEffect(() => {
        console.log('LearnContainer useEffect');

        if (isFirstRun) {
            if (packid) {
                // dispatch(setPageCountCardsAC(cardsCount))
                dispatch(getCardsTC(packid));
                setIsFirstRun(false);
            }
        }
        if (cards.length > 0) {
            debugger
            setCard(getCard(cards))
        }

    }, [dispatch, packid, cards, isFirstRun]);

    let getNextCard = () => {
        setIsAnswerHidden(true)
        setCard(getCard(cards))
    }

    const submitHandler = (grade: number) => {
        alert('send grade to server')
    }

    return <div className={s.learn}>
        <h4>LearnPage</h4>
        <div>{card.question}</div>

        <div>
            {isAnswerHidden ? <SuperButton onClick={() => setIsAnswerHidden(false)}>Answer</SuperButton> :
                <span>{card.answer}</span>}
        </div>

        {!isAnswerHidden &&
          <div className={s.grade}>
              {grades.map((g, i) => (
                  <SuperButton key={i} className={s.gradeBtn} onClick={() => (submitHandler(i + 1))}>{g}</SuperButton>
              ))}
          </div>}

        <div className={s.btn}>
            <NavLink to={`/table`}><SuperButton>Cancel</SuperButton></NavLink>
            <SuperButton onClick={getNextCard}>Next</SuperButton>
        </div>
    </div>
}