import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from '../layout/Footer';

describe('Footer', () => {
  it('renders copyright', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/2026 Ultra Character Viewer/)).toBeInTheDocument();
  });

  it('has GitHub link', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: 'GitHub' });
    expect(link).toHaveAttribute('href', 'https://github.com/kojiroor/ultra-chars');
  });
});
