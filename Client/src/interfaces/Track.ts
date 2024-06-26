import { Album } from "./Album";
import { Artist } from "./Artist";

export interface Track {
  id: string;
  album: Album;
  artists: Artist[];
  name: string;
  type: "track";
  genres?: string[];
  duration_ms: number;
  popularity: number;
  preview: string;
  uri: string;
}
