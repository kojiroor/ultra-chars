import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../layout/Footer';

describe('Footer', () => {
  it('renders copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/2026 Ultra Character Viewer/)).toBeInTheDocument();
  });

  it('has GitHub link', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: 'GitHub' });
    expect(link).toHaveAttribute('href', 'https://github.com/jiroor/ultra-character-viewer');
  });
});
