import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CharacterCard } from '../character/CharacterCard';
import type { Character } from '../../types';

const mockCharacter: Character = {
  id: 'test-character',
  name: 'Test Character',
  image: '/test-image.png',
  description: 'Test description',
};

describe('CharacterCard', () => {
  it('renders character name', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>
    );
    expect(screen.getByText('Test Character')).toBeInTheDocument();
  });

  it('renders character image', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>
    );
    const img = screen.getByRole('img', { name: 'Test Character' });
    expect(img).toHaveAttribute('src', '/test-image.png');
  });

  it('links to character detail page', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/characters/test-character');
  });
});
