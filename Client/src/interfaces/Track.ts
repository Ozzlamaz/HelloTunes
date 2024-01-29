import { Image } from "./Image";

export interface Track {
  id: string;
  images: Image[];
  name: string;
  type: string;
  duration_ms: number;
  popularity: number;
  uri: string;
}

export interface TracksResponse {
  total: number;
  items: Track[];
}
