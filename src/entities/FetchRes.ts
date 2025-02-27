export interface FetchRes<T> {
  page: number;
  results: T[];
  total_pages: number;
}
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  id: number;
  genres: Genres[];
}
export interface Genres {
  id: number;
  name: string;
}
export interface FetchCastRes {
  id: number;
  cast: Cast[];
}
export interface FetchVideosRes {
  id: number;
  results: Video[];
}
export interface Cast {
  adult: boolean;
  id: number;
  name: string;
  profile_path: string;
  character: string;
}
export interface Video {
  name: string;
  key: string;
  site: string;
  id: number;
}
export interface Tv {
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  name: string;
  overview: string;
  id: number;
  genres: Genres[];
}

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};
export type TvType = keyof typeof tvType;
export type MovieType = keyof typeof movieType;
export type CategoryType = keyof typeof category;
