import { useEffect, useState } from 'react';
import { AnswerType } from '../../@types/answer';
import styles from './styles.module.css';
import { HistoryListFunctions } from './functions';
import { Answer } from './Answer';

interface HistoryListProps {
    answerArray: AnswerType[];
    setAnswerArray: React.Dispatch<React.SetStateAction<AnswerType[]>>;
    start: boolean;
}

export const HistoryList = ({ answerArray, start, setAnswerArray }: HistoryListProps) => {

    const [previousGame, setPreviousGame] = useState<AnswerType[]>(localStorage.getItem("previousGame") !== null ? JSON.parse(localStorage.getItem("previousGame")!) : [])
    const [changeDisplay, setChangeDisplay] = useState<boolean>(true);

    const { savePreviousGame } = HistoryListFunctions({
        answerArray,
        setAnswerArray,
        setPreviousGame
    })

    useEffect(() => {
        savePreviousGame();
    }, [start]);

    return <div className={styles.historyList}>
        <div className={styles.buttonContainers}>
            <button onClick={() => setChangeDisplay(true)}>
                <h2>
                    Current Game
                </h2>
            </button>
            <button onClick={() => setChangeDisplay(false)}>
                <h2>
                    Previous Game
                </h2>
            </button>
        </div>
        {changeDisplay ?
            answerArray.map((answer) => {
                return <Answer answer={answer} />
            })
            :
            previousGame.map((answer) => {
                return <Answer answer={answer} />

            })
        }
    </div>
}