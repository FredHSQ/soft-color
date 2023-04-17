
interface ProgressBarFunctionsProps {
    totalTime: number;
    start: boolean;
    setTotalTime: React.Dispatch<React.SetStateAction<number>>;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
}


export const ProgressBarFunctions = ({
    setTotalTime,
    totalTime,
    setCurrentScore,
    start
}: ProgressBarFunctionsProps) => {

    function countdownProgressBar() {
        const timer = (totalTime > 0 && start) ? setInterval(() => setTotalTime(totalTime - 1), 1000) : restartProgressBar(false);

        return () => clearInterval(timer ? timer : undefined);
    }

    function restartProgressBar(answered: boolean) {
        if (answered) {
            setTotalTime(10);
        } else if(start) {
            setTotalTime(10);
            setCurrentScore(value=>value-2);
        } else {
            setCurrentScore(0);
        }
    }

    return {
        countdownProgressBar,
        restartProgressBar
    }
}