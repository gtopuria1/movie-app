import { Movie } from "./movie";

export interface SearchResponse {
  Response: string;
  Search: Movie[];
  totalResults: string;
}

