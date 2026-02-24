import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../layout/Header';

describe('Header', () => {
  it('renders logo/site name', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Ultra Character Viewer')).toBeInTheDocument();
  });

  it('has link to top page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /ultra character viewer/i });
    expect(link).toHaveAttribute('href', '/');
  });
});
