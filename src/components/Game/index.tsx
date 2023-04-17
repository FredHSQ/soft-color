import { useEffect, useState } from "react";
import { ProgressBar } from "../ProgressBar";
import styles from './styles.module.css';
import { GameFunctions } from "./functions";
import { AnswerType } from "../../@Types/answer";

interface GameProps {
    start: boolean;
    currentScore: number;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
    setAnswerArray: React.Dispatch<React.SetStateAction<AnswerType[]>>
}

export const Game = ({ currentScore, start, setCurrentScore, setAnswerArray }: GameProps) => {

    const [rightColor, setRightColor] = useState<string>("");
    const [colorArray, setColorArray] = useState<string[]>([]);

    const { createOptions, verifyAnswer } = GameFunctions({
        rightColor,
        setColorArray,
        setCurrentScore,
        setRightColor,
        setAnswerArray
    })

    useEffect(() => {
        createOptions();
    }, [start, currentScore])

    return <>
        <ProgressBar currentScore={currentScore} start={start} setCurrentScore={setCurrentScore} />
        <div className={styles.currentColor} style={{ backgroundColor: rightColor }} />
        <div className={styles.options}>
            {colorArray.map(color => {
                return <button onClick={() => verifyAnswer(color)} className={styles.card}>
                    <p>
                        {color}
                    </p>
                </button>
            })}
        </div>
    </>
}