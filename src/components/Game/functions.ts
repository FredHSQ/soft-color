import { AnswerType } from "../../@types/answer";

interface GameFunctionsProps {
    setRightColor: React.Dispatch<React.SetStateAction<string>>;
    setColorArray: React.Dispatch<React.SetStateAction<string[]>>;
    rightColor: string;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
    setAnswerArray: React.Dispatch<React.SetStateAction<AnswerType[]>>;
    totalTime: number;
}

export const GameFunctions = ({
    setRightColor,
    setColorArray,
    rightColor,
    setCurrentScore,
    setAnswerArray,
    totalTime
}: GameFunctionsProps) => {

    function createOptions() {
        let provisionalColor1: string = colorRandomizer();
        let provisionalColor2: string = colorRandomizer();
        let provisionalColor3: string = colorRandomizer();

        setRightColor(provisionalColor1);

        let provisionalColorArray: string[] = [provisionalColor1, provisionalColor2, provisionalColor3];

        setColorArray(provisionalColorArray.sort());
    }

    function colorRandomizer() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    function verifyAnswer(color: string) {
        setAnswerArray(value => [{ rightAnswer: rightColor, yourAnswer: color, timeElapsed: 10 - totalTime }, ...value])
        color === rightColor ? setCurrentScore(value => value + 5) : setCurrentScore(value => value - 1);
    }

    return {
        createOptions,
        verifyAnswer
    }
}