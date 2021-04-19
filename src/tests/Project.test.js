import { render, Render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../pages/Projects';

test ('Checks Projects page', () => {
    render(<App/>)
    const contact = screen.getByText(/Enigma/i);
    expect(contact).toBeInTheDocument();
});