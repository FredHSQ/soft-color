import { useEffect, useState } from "react";
import styles from "./styles.module.css"
import { ScorerFunctions } from "./functions";

interface ScorerProps {
    currentScore: number;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
    start: boolean;
}

export const Scorer = ({ currentScore, start, setCurrentScore }: ScorerProps) => {

    const [highScore, setHighScore] = useState<number>(localStorage.getItem("highScore") ? Number(localStorage.getItem("highScore")) : 0)

    const { updateScores } = ScorerFunctions({
        currentScore,
        highScore,
        setCurrentScore,
        setHighScore
    });

    useEffect(() => {
        updateScores();
    }, [start])

    return <div className={styles.scoreContainer}>
        <p>
            High score: {highScore}
        </p>
        <p>
            Current score: {currentScore}
        </p>
    </div>
}