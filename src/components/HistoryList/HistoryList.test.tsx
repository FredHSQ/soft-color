import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HistoryList } from './';
import { AnswerType } from '../../@types/answer';

describe('HistoryList Render', () => {

    test('Should render buttons', () => {

        render(<HistoryList answerArray={[]} start={false} setAnswerArray={() => { }} />);

        const currentGameButton = screen.getByTestId('current-game');
        const previousGameButton = screen.getByTestId('previous-game');

        expect(currentGameButton).toBeInTheDocument();
        expect(previousGameButton).toBeInTheDocument();
    });

    test('Should render all itens of list', () => {

        const answers: AnswerType[] = [{
            rightAnswer: 'teste1',
            yourAnswer: 'teste2',
            timeElapsed: 1
        },
        {
            rightAnswer: 'teste3',
            yourAnswer: 'teste4',
            timeElapsed: 2
        }]

        render(<HistoryList answerArray={answers} start={false} setAnswerArray={() => { }} />);

        const awswerArray = screen.getAllByTestId("answer-array");

        expect(awswerArray.length).toBe(answers.length);
    });

});