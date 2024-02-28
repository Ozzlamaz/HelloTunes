import { Artist } from "./Artist";
import { Image } from "./Image";

export interface Album {
  id: string;
  totol_tracks: number;
  genres: string[];
  images: Image[];
  name: string;
  artists: Artist[];
  type: "album";
  popularity: number;
  uri: string;
}

export interface AlbumsResponse {
  total: number;
  items: Album[];
}
