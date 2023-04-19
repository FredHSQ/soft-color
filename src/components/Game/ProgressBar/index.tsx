import { useEffect } from "react";
import styles from './styles.module.css'
import { ProgressBarFunctions } from "./functions";

interface ProgressBarProps {
    start: boolean;
    currentScore: number;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
    totalTime: number;
    setTotalTime: React.Dispatch<React.SetStateAction<number>>;
}

export const ProgressBar = ({ start, setCurrentScore, currentScore, setTotalTime, totalTime }: ProgressBarProps) => {

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
    }, [currentScore]);

    return <div data-testid="progressbar-container" className={styles.progressbarContainer}>
        <div data-testid="progressbar" className={styles.progressbar} style={{ width: `${(totalTime - 1) * 10}%` }} />
    </div>
}