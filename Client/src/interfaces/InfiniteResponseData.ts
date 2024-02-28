export interface InfiniteResponseData<T> {
  [key: string]: {
    href: string;
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
    items: T[];
  };
}
