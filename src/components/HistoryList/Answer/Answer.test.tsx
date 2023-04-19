import { render, screen } from '@testing-library/react';
import { Answer } from '.';
import '@testing-library/jest-dom';
import { AnswerType } from '../../../@types/answer';

describe('Renders Answer', () => {

    
    test('Should render two cards and time elapsed', async () => {
        let answer: AnswerType = {rightAnswer: "#123456", timeElapsed: 2, yourAnswer: "#654321"  }
        render(<Answer answer={answer} />);

        const time = await screen.findByTestId('time');
        const cards = screen.getAllByTestId('answer-card')

        expect(time.innerHTML).toBe(answer.timeElapsed+'s');
        expect(cards).toHaveLength(2);
    });

    test('Should render one card and time elapsed', async () => {
        let answer: AnswerType = {rightAnswer: "#123456", timeElapsed: 2, yourAnswer: "#123456"  }

        render(<Answer answer={answer} />);

        const time = await screen.findByTestId('time');
        const rightAnswer = await screen.findByTestId('rightAnswer');
        const cards = screen.getAllByTestId('answer-card')

        expect(time.innerHTML).toBe(answer.timeElapsed+'s');
        expect(rightAnswer.innerHTML).toBe(answer.yourAnswer);
        expect(rightAnswer.innerHTML).toBe(answer.rightAnswer);
        expect(cards).toHaveLength(1);
    });

});