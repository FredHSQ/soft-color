import { useEffect, useState } from "react";
import { TotalTimerFunctions } from "./functions";
import styles from './styles.module.css';

interface TotalTimerProps {
    start: boolean;
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TotalTimer = ({ start, setStart }: TotalTimerProps) => {

    const [totalTime, setTotalTime] = useState<number>(30);

    const {
        countdownTotalTimer
    } = TotalTimerFunctions({
        setStart,
        setTotalTime,
        start,
        totalTime
    })

    useEffect(() => {
        return countdownTotalTimer();
    }, [totalTime, start]);

    return <div className={styles.totalTimerContainer}>
        <h1 data-testid='total-time'>
            {totalTime}
        </h1>
    </div>
}