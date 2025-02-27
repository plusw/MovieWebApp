import { useQuery } from "@tanstack/react-query";
import { CategoryType } from "../../entities/FetchRes";
import tmdbApi from "../tmdbApi";

const useVideos = (type: CategoryType, id: number) => {
  return useQuery({
    queryKey: ["videos", type, id],
    queryFn: () => tmdbApi.getVideos(type, id).then((res) => res.data),
    staleTime: 60 * 60 * 24,
    enabled: !isNaN(id), // 当 movieId 是 NaN 时，不执行查询
  });
};
export default useVideos;
