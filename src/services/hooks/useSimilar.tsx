import { useQuery } from "@tanstack/react-query";
import { CategoryType, Movie, Tv } from "../../entities/FetchRes";
import tmdbApi from "../tmdbApi";

type SimilarData<T> = T extends "movie" ? Movie : Tv;
const useSimilar = (type: CategoryType, id: number) => {
  return useQuery({
    queryKey: ["similar", type, id],
    queryFn: () => {
      return tmdbApi
        .similar<SimilarData<typeof type>>(type, id)
        .then((res) => res.data);
    },
    staleTime: 60 * 60 * 24 * 1000,
  });
};
export default useSimilar;
