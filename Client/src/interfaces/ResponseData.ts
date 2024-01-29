import { AlbumsResponse } from "./Album";
import { ArtistsResponse } from "./Artist";
import { TracksResponse } from "./Track";

export interface ResponseData {
  albums?: AlbumsResponse;
  artists?: ArtistsResponse;
  tracks?: TracksResponse;
}
