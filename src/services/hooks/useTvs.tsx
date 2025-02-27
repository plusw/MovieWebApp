import { useInfiniteQuery } from "@tanstack/react-query";
import { TvType } from "../../entities/FetchRes";
import tmdbApi from "../tmdbApi";

const useTvs = (type: TvType) => {
  return useInfiniteQuery({
    queryKey: ["tv", type],
    queryFn: ({ pageParam = 1 }) => {
      return tmdbApi.getTvList(type, { page: pageParam });
    },
    getNextPageParam: (nowPage, allPages) => {
      const currentPage = nowPage.page;
      const totalPage = nowPage.total_pages;
      return currentPage + 1 < totalPage ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 60 * 60 * 24,
  });
};
export default useTvs;
