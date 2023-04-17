import { useEffect, useState } from "react";
import styles from './styles.module.css'
import { ProgressBarFunctions } from "./functions";

interface ProgressBarProps {
    start: boolean;
    currentScore: number;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
}

export const ProgressBar = ({ start, setCurrentScore, currentScore }: ProgressBarProps) => {

    const [totalTime, setTotalTime] = useState<number>(10);

    const { countdownProgressBar, restartProgressBar } = ProgressBarFunctions({
        setTotalTime,
        totalTime,
        setCurrentScore,
        start
    });

    useEffect(() => {
        return countdownProgressBar();
    }, [totalTime, start]);

    useEffect(() => {
        restartProgressBar(true);
    }, [currentScore])

    return <div className={styles.progressbarContainer}>
        <div className={styles.progressbar} style={{ width: `${(totalTime - 1) * 10}%` }} />
    </div>
}