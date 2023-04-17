import { useEffect, useState } from "react";
import styles from "./styles.module.css"

interface ScorerProps {
    currentScore: number;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
    start: boolean;
}

export const Scorer = ({ currentScore, start, setCurrentScore }: ScorerProps) => {

    const [highScore, setHighScore] = useState<number>(localStorage.getItem("highScore") ? Number(localStorage.getItem("highScore")) : 0)

    useEffect(() => {
        adjustScores();
    }, [start])

    function adjustScores(){
        if(currentScore > highScore) {
            localStorage.setItem("highScore", currentScore.toString());
            setHighScore(currentScore);
        } 
        setCurrentScore(0);
    }

    return <div className={styles.scoreContainer}>
        <p>
            High score: {highScore}
        </p>
        <p>
            Current score: {currentScore}
        </p>
    </div>
}