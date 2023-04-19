import { render, screen } from '@testing-library/react';
import { TotalTimer } from '.';
import '@testing-library/jest-dom';

describe('Renders TotalTimer', () => {

    test('Should render 30 when default', async () => {

        render(<TotalTimer start={false} setStart={() => { }} />);

        const title = await screen.findByTestId('total-time');

        expect(title.innerHTML).toBe("30");

    });

});