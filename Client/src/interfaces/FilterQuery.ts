export interface FilterQuery {
  q: string;
  type: string;
  genre?: string;
  year?: string;
  offset?: number;
}
