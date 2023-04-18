interface ScorerFunctionsProps {
    highScore: number;
    setHighScore: React.Dispatch<React.SetStateAction<number>>;
    currentScore: number;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
}

export const ScorerFunctions = ({ setHighScore, currentScore, highScore, setCurrentScore }: ScorerFunctionsProps) => {

    function updateScores() {
        if (currentScore > highScore) {
            localStorage.setItem("highScore", currentScore.toString());
            setHighScore(currentScore);
        }
        setCurrentScore(0);
    }

    return {
        updateScores
    }
}