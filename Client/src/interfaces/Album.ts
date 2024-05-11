import { Artist } from "./Artist";
import { Image } from "./Image";
import { Track } from "./Track";

export interface Album {
  id: string;
  total_tracks: number;
  genres: string[];
  images: Image[];
  name: string;
  release_date: string;
  artists: Artist[];
  tracks: { items: Track[]; total: number };
  type: "album";
  popularity: number;
  uri: string;
}

export interface AlbumsResponse {
  total: number;
  items: Album[];
}
