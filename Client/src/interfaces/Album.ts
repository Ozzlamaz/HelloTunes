import { Image } from "./Image";

export interface Album {
  id: string;
  totol_tracks: number;
  genres: string[];
  images: Image[];
  name: string;
  type: string;
  popularity: number;
  uri: string;
}

export interface AlbumsResponse {
  total: number;
  items: Album[];
}
