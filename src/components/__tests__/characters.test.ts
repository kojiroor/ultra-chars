import { describe, it, expect } from 'vitest';
import { getCharacters, getCharacterById } from '../../data/characters';

describe('characters data', () => {
  describe('getCharacters', () => {
    it('returns paginated characters', () => {
      const result = getCharacters(1, 2);
      expect(result.items).toHaveLength(2);
      expect(result.total).toBe(3);
      expect(result.page).toBe(1);
      expect(result.pageSize).toBe(2);
      expect(result.totalPages).toBe(2);
    });

    it('returns correct items for page 2', () => {
      const page1 = getCharacters(1, 2);
      const page2 = getCharacters(2, 2);
      expect(page1.items[0].id).not.toBe(page2.items[0].id);
    });

    it('defaults to page 1 with 20 items', () => {
      const result = getCharacters();
      expect(result.page).toBe(1);
      expect(result.pageSize).toBe(20);
    });
  });

  describe('getCharacterById', () => {
    it('returns character by id', () => {
      const character = getCharacterById('ultraman');
      expect(character).toBeDefined();
      expect(character?.name).toBe('ウルトラマン');
    });

    it('returns undefined for non-existent id', () => {
      const character = getCharacterById('non-existent');
      expect(character).toBeUndefined();
    });
  });
});
