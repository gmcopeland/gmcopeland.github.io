import { render, Render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../pages/Contact';

test ('Checks Contact page', () => {
    render(<App/>)
    const contact = screen.getByText(/GITHUB/i);
    expect(contact).toBeInTheDocument();
})