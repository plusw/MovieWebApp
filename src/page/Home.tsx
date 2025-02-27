import HeroSizdeSwiper from "../compenents/heroSide/HeroSizdeSwiper";
import MainAreaCard from "../compenents/main/home_main/MainAreaCard";
import useMovies from "../services/hooks/useMovies";
import useTvs from "../services/hooks/useTvs";

const Home = () => {
  const { data: popularMovies } = useMovies("popular");
  const { data: topRatingMovies } = useMovies("top_rated");
  const { data: popularTvs } = useTvs("popular");
  const { data: topRatingTvs } = useTvs("top_rated");

  return (
    <>
      <HeroSizdeSwiper
        movieItems={popularMovies?.pages.flatMap((page) => page.results)}
      />
      <MainAreaCard
        trendingMovieItems={popularMovies?.pages.flatMap(
          (page) => page.results
        )}
        topRatingMovieItems={topRatingMovies?.pages.flatMap(
          (page) => page.results
        )}
        trendingTvItems={popularTvs?.pages.flatMap((page) => page.results)}
        topRatingTvItems={topRatingTvs?.pages.flatMap((page) => page.results)}
      />
    </>
  );
};

export default Home;
