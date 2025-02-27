import { useQuery } from "@tanstack/react-query";
import { CategoryType } from "../../entities/FetchRes";
import tmdbApi from "../tmdbApi";

const useCredits = (type: CategoryType, id: number) => {
  return useQuery({
    queryKey: ["credits", type, id],
    queryFn: () => tmdbApi.credits(type, id).then((res) => res.data),
    staleTime: 60 * 60 * 24 * 1000,
    enabled: !isNaN(id), // 当 movieId 是 NaN 时，不执行查询
  });
};
export default useCredits;
