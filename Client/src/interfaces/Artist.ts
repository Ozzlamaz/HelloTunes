import { Image } from "./Image";

export interface Artist {
  id: string;
  genres: string[];
  images: Image[];
  name: string;
  type: string;
  popularity: number;
  uri: string;
}

export interface ArtistsResponse {
  total: number;
  items: Artist[];
}
