import { Image } from "./Image";

export interface Artist {
  id: string;
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  images: Image[];
  name: string;
  type: "artist";
  popularity: number;
  uri: string;
}
