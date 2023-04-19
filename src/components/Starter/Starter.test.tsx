import { render, screen } from '@testing-library/react';
import { Starter } from '.';
import '@testing-library/jest-dom';

describe('Renders Starter', () => {

    test('Should render title "Start" when start prop is false', async () => {

        render(<Starter start={false} setStart={() => { }} />);

        const title = await screen.findByTestId('title-start');

        expect(title.innerHTML).toBe("Start");

    });

    test('Should render title "Restart" when start prop is true', async () => {

        render(<Starter start={true} setStart={() => { }} />);

        const title = await screen.findByTestId('title-start');

        expect(title.innerHTML).toBe("Restart");

    });

});