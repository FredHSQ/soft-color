import { AnswerType } from "../../@types/answer";

interface HistoryListFunctionProps {
    answerArray: AnswerType[];
    setAnswerArray: React.Dispatch<React.SetStateAction<AnswerType[]>>;
    setPreviousGame: React.Dispatch<React.SetStateAction<AnswerType[]>>;
}

export const HistoryListFunctions = ({ answerArray, setAnswerArray, setPreviousGame }: HistoryListFunctionProps) => {

    function savePreviousGame() {
        if (answerArray.length > 0) {
            setPreviousGame(answerArray);
            localStorage.setItem("previousGame", JSON.stringify(answerArray));
            setAnswerArray([]);
        }
    }

    return {
        savePreviousGame
    }
}