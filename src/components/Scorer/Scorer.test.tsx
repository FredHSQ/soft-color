import { render, screen } from '@testing-library/react';
import { Scorer } from '.';
import '@testing-library/jest-dom';

describe('Renders Scorer', () => {

    test('Should render currentScore and highScore', async () => {
        let highScore = 11
        let currentScore = 10
        localStorage.setItem("highScore", highScore.toString());

        render(<Scorer currentScore={currentScore} setCurrentScore={()=>{}} start={false} />);

        const currentScreenScore = await screen.findByTestId('current-score');
        const highScreenScore = await screen.findByTestId('high-score')

        expect(currentScreenScore.innerHTML).toBe("Current score: " + currentScore);
        expect(highScreenScore.innerHTML).toBe("High score: " + highScore);

    });

});