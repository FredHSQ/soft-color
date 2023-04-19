import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { HistoryList } from './';

describe('HistoryList', () => {

    test('renders "Current Game" button by default', () => {

        render(<HistoryList answerArray={[]} start={false} setAnswerArray={() => { }} />);

        const currentGameButton = screen.getByRole('button', { name: 'Current Game' });
        const previousGameButton = screen.getByRole('button', { name: 'Previous Game' });

        expect(currentGameButton).not.toHaveStyle(`background-color: transparent`);
        expect(previousGameButton).toHaveStyle(`background-color: transparent`);
    });

    test('renders "Previous Game" button when clicked', () => {

        render(<HistoryList answerArray={[]} start={false} setAnswerArray={() => { }} />);

        const previousGameButton = screen.getByRole('button', { name: 'Previous Game' });

        userEvent.click(previousGameButton);

        const currentGameButton = screen.getByRole('button', { name: 'Current Game' });

        expect(currentGameButton).toHaveStyle(`background-color: transparent`);
        expect(previousGameButton).not.toHaveStyle(`background-color: transparent`);
    });

});