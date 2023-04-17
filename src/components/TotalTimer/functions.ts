
interface TotalTimerFunctionsProps {
    start: boolean;
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
    totalTime: number;
    setTotalTime: React.Dispatch<React.SetStateAction<number>>
}


export const TotalTimerFunctions = ({
    setStart,
    setTotalTime,
    start,
    totalTime
}:TotalTimerFunctionsProps) => {
    
    function countdownTotalTimer () {
        const timer = (totalTime > 0 && start) ? setInterval(() => setTotalTime(totalTime - 1), 1000) : restartTotalTimer();

        return () => clearInterval(timer ? timer : undefined);
    }

    function restartTotalTimer () {
        setTotalTime(30);
        setStart(false);
    }

    return {
        countdownTotalTimer
    }
}