export interface Character {
  id: string;
  name: string;
  image: string;
  series?: string;
  height?: string;
  weight?: string;
  description: string;
}

export interface PaginatedCharacters {
  characters: Character[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}
