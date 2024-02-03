export interface SearchResponse<T> {
  [key: string]: {
    total: number;
    items: T[];
  };
}
