import { Movie, Tv } from "../../../entities/FetchRes";
import "./MainAreaCard.css";
import OneRowCards from "./OneRowCards";
interface Props {
  trendingMovieItems: Movie[] | undefined;
  topRatingMovieItems: Movie[] | undefined;
  trendingTvItems: Tv[] | undefined;
  topRatingTvItems: Tv[] | undefined;
}
const MainAreaCard = ({
  trendingMovieItems = [],
  topRatingMovieItems = [],
  trendingTvItems = [],
  topRatingTvItems = [],
}: Props) => {
  return (
    <>
      <div className="main_area">
        <OneRowCards title="Trending Movies" items={trendingMovieItems} />
        <OneRowCards title="Top Rated Movies" items={topRatingMovieItems} />
        <OneRowCards title="Trending TV" items={trendingTvItems} />
        <OneRowCards title="Top Rated TV" items={topRatingTvItems} />
      </div>
    </>
  );
};

export default MainAreaCard;
