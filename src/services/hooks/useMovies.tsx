import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieType } from "../../entities/FetchRes";
import tmdbApi from "../tmdbApi";
const useMovies = (movieType: MovieType) =>
  useInfiniteQuery({
    queryKey: ["movie", movieType],
    queryFn: ({ pageParam = 1 }) =>
      tmdbApi.getMoviesList(movieType, { page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = lastPage.page;
      const totalPages = lastPage.total_pages;
      return currentPage < totalPages ? allPages.length + 1 : undefined;
    },
    staleTime: 60 * 60 * 24 * 1000,
    initialPageParam: 1,
  });
export default useMovies;
