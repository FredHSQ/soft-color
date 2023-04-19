import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Game } from './';
import { AnswerType } from '../../@types/answer';

describe('Renders Game', () => {

    let setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
    let setAnswerArray: React.Dispatch<React.SetStateAction<AnswerType[]>>;

    beforeEach(() => {
        setCurrentScore = jest.fn();
        setAnswerArray = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should render the progress bar and color options', () => {
        const currentScore = 0;
        const start = false;

        render(
            <Game
                currentScore={currentScore}
                start={start}
                setCurrentScore={setCurrentScore}
                setAnswerArray={setAnswerArray}
            />
        );

        const progressbarContainer = screen.getByTestId('progressbar-container');
        const options = screen.getByTestId('color-options');
        const option = screen.getAllByTestId('color-option');

        expect(progressbarContainer).toBeInTheDocument();
        expect(options).toBeInTheDocument();
        expect(option).toHaveLength(3);

    });

});
