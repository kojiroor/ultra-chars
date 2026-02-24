export interface Character {
  id: string;
  name: string;
  image: string;
  series?: string;
  height?: string;
  weight?: string;
  description: string;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
