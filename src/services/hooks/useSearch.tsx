import { useInfiniteQuery } from "@tanstack/react-query";
import { CategoryType } from "../../entities/FetchRes";
import tmdbApi, { ParamsType } from "../tmdbApi";
const useSearch = (type: CategoryType, param: ParamsType) => {
  const shouldFetch = !(Object.keys(param).length === 0 || param.query === "");
  return useInfiniteQuery({
    queryKey: ["search", type, param],
    queryFn: ({ pageParam = 1 }) =>
      tmdbApi.search(type, { ...param, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = lastPage.page;
      const totalPages = lastPage.total_pages;
      return currentPage < totalPages ? allPages.length + 1 : undefined;
    },
    staleTime: 60 * 60 * 24 * 1000,
    initialPageParam: 1,
    enabled: shouldFetch,
  });
};
export default useSearch;
