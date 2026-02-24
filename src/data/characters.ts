import type { Character } from '../types';

export const characters: Character[] = [
  {
    id: 'ultraman',
    name: 'ウルトラマン',
    image: '/images/ultraman.png',
    series: 'ウルトラマン',
    height: '40m',
    weight: '3万5千t',
    description: 'M78星雲光の国出身の宇宙警備隊員。',
  },
  {
    id: 'ultraseven',
    name: 'ウルトラセブン',
    image: '/images/ultraseven.png',
    series: 'ウルトラセブン',
    height: '40m',
    weight: '3万5千t',
    description: 'M78星雲光の国の恒星観測員340号。',
  },
  {
    id: 'ultraman-taro',
    name: 'ウルトラマンタロウ',
    image: '/images/ultraman-taro.png',
    series: 'ウルトラマンタロウ',
    height: '53m',
    weight: '5万5千t',
    description: 'ウルトラの母とウルトラの父の実子。',
  },
];

export const getCharacterById = (id: string): Character | undefined => {
  return characters.find((c) => c.id === id);
};

export const getCharacters = (
  page: number = 1,
  pageSize: number = 20
): { items: Character[]; total: number; page: number; pageSize: number; totalPages: number } => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = characters.slice(start, end);

  return {
    items,
    total: characters.length,
    page,
    pageSize,
    totalPages: Math.ceil(characters.length / pageSize),
  };
};
