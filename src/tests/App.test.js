import { render, Render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test ('Checks Header', () => {
    render(<BrowserRouter><App/></BrowserRouter>)
    const header = screen.getByText(/Garrett Copeland/i);
    expect(header).toBeInTheDocument();
})