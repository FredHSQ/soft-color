import { AnswerType } from "../../@Types/answer";

interface GameFunctionsProps {
    setRightColor: React.Dispatch<React.SetStateAction<string>>;
    setColorArray: React.Dispatch<React.SetStateAction<string[]>>;
    rightColor: string;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
    setAnswerArray: React.Dispatch<React.SetStateAction<AnswerType[]>>
}

export const GameFunctions = ({ setRightColor, setColorArray, rightColor, setCurrentScore, setAnswerArray }: GameFunctionsProps) => {

    function createOptions() {
        let provisionalColor1: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
        let provisionalColor2: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
        let provisionalColor3: string = "#" + Math.floor(Math.random() * 16777215).toString(16);

        setRightColor(provisionalColor1);

        let provisionalColorArray: string[] = [provisionalColor1, provisionalColor2, provisionalColor3];

        setColorArray(provisionalColorArray.sort());
    }

    function verifyAnswer(color: string) {
        setAnswerArray(value => [{ rightAnswer: rightColor, yourAnswer: color, timeElapsed: 2 },...value])
        color === rightColor ? setCurrentScore(value => value + 5) : setCurrentScore(value => value - 1);
    }


    return {
        createOptions,
        verifyAnswer
    }
}