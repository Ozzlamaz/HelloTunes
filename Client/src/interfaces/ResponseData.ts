import { Album } from "./Album";
import { Artist } from "./Artist";
import { Track } from "./Track";

export interface ResponseData {
  artists?: {
    href: string;
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
    items: Artist[];
  };
  albums?: {
    href: string;
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
    items: Album[];
  };
  tracks?: {
    href: string;
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
    items: Track[];
  };
}
