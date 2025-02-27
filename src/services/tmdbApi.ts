import {
  category,
  CategoryType,
  FetchCastRes,
  FetchRes,
  FetchVideosRes,
  Movie,
  movieType,
  MovieType,
  Tv,
  tvType,
  TvType,
} from "../entities/FetchRes";
import ApiClient from "./ApiClient";

export type ParamsType = Record<string, any>;
const tmdbApi = {
  getMoviesList: (type: MovieType, params: ParamsType) => {
    const url = "movie/" + movieType[type];
    return ApiClient.get<FetchRes<Movie>>(url, { params }).then(
      (res) => res.data
    );
  },

  getTvList: (type: TvType, params: ParamsType) => {
    const url = "tv/" + tvType[type];
    return ApiClient.get<FetchRes<Tv>>(url, { params }).then((res) => res.data);
  },

  getVideos: (cate: CategoryType, id: number) => {
    const url = category[cate] + "/" + id + "/videos";
    return ApiClient.get<FetchVideosRes>(url, { params: {} });
  },

  search: (cate: CategoryType, params: ParamsType) => {
    const url = "search/" + category[cate];
    return ApiClient.get<FetchRes<Movie>>(url, { params }).then(
      (res) => res.data
    );
  },
  detail: <T>(cate: CategoryType, id: number, params: ParamsType) => {
    const url = category[cate] + "/" + id;
    return ApiClient.get<T>(url, { params });
  },
  credits: (cate: CategoryType, id: number) => {
    const url = category[cate] + "/" + id + "/credits";
    return ApiClient.get<FetchCastRes>(url, { params: {} });
  },
  similar: <T>(cate: CategoryType, id: number) => {
    const url = category[cate] + "/" + id + "/similar";
    return ApiClient.get<FetchRes<T>>(url, { params: {} });
  },
};
export default tmdbApi;
