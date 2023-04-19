import { useEffect, useState } from "react";
import styles from './styles.module.css';
import { GameFunctions } from "./functions";
import { ProgressBar } from "./ProgressBar";
import { AnswerType } from "../../@types/answer";

interface GameProps {
    start: boolean;
    currentScore: number;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
    setAnswerArray: React.Dispatch<React.SetStateAction<AnswerType[]>>
}

export const Game = ({ currentScore, start, setCurrentScore, setAnswerArray }: GameProps) => {

    const [rightColor, setRightColor] = useState<string>("");
    const [colorArray, setColorArray] = useState<string[]>([]);
    const [totalTime, setTotalTime] = useState<number>(10);

    const { createOptions, verifyAnswer } = GameFunctions({
        rightColor,
        setColorArray,
        setCurrentScore,
        setRightColor,
        setAnswerArray,
        totalTime
    })

    useEffect(() => {
        createOptions();
    }, [start, currentScore])

    return <>
        <ProgressBar
            setTotalTime={setTotalTime}
            totalTime={totalTime}
            currentScore={currentScore}
            start={start}
            setCurrentScore={setCurrentScore}
        />
        <div className={styles.currentColor} style={{ backgroundColor: rightColor }} />
        <div data-testid="color-options" className={styles.options}>
            {colorArray.map((color,index) => {
                return <button data-testid="color-option" onClick={() => verifyAnswer(color)} className={styles.card}>
                    <p>
                        {color}
                    </p>
                </button>
            })}
        </div>
    </>
}