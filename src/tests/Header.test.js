import { render, Render, screen } from '@testing-library/react';

import App from '../pages/header';

test ('Checks Header', () => {
    render(<App/>)
    const contact = screen.getByText(/Welcome/i);
    expect(contact).toBeInTheDocument();
})