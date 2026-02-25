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
    expect(screen.getByText('ウルトラマン図鑑')).toBeInTheDocument();
  });

  it('has link to top page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /ウルトラマン図鑑/ });
    expect(link).toHaveAttribute('href', '/');
  });
});
