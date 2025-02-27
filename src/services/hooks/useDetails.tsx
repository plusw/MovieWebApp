import { useQuery } from "@tanstack/react-query";
import { CategoryType, Movie, Tv } from "../../entities/FetchRes";
import tmdbApi from "../tmdbApi";

type SimilarData<T> = T extends "movie" ? Movie : Tv;
const useDetails = (type: CategoryType, id: number) => {
  return useQuery({
    queryKey: ["useOneMovieOrTv", type, id],
    queryFn: () =>
      tmdbApi
        .detail<SimilarData<typeof type>>(type, id, {})
        .then((res) => res.data),
    staleTime: 60 * 60 * 24 * 1000,
    enabled: !isNaN(id), // 当 movieId 是 NaN 时，不执行查询
  });
};
export default useDetails;
