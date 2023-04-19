import { render, screen } from '@testing-library/react';
import { DataReseter } from '.';
import user from '@testing-library/user-event';

describe('Renders button DataReseter', () => {

  test('Should render title correctly', async () => {
    render(<DataReseter />);
    const button = await screen.findByRole('button')
    expect(button.innerHTML).toBe("Reset All Data");
  });

  test('Should clear localStorage when clicked', async () => {
    render(<DataReseter />);
    localStorage.setItem("test", "1");
    const button = await screen.findByRole('button');
    await user.click(button);
    expect(localStorage.getItem("test")).toEqual(null);
  });

});

