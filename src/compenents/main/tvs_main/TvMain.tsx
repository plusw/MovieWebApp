import bg from "../../../assets/footer-bg.jpg";
import useTvs from "../../../services/hooks/useTvs";
import Button from "../../Button/Button";
import Cards from "../movies_main/Cards";

const TvMain = () => {
  const { data, fetchNextPage, hasNextPage } = useTvs("popular");
  const loadMoreMovies = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return (
    <div className="movieOrPage">
      <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
        <h2 className="title">TV Series</h2>
      </div>
      <div className="container">
        <input type="text" />
        <button>search</button>
        <Cards items={data?.pages.flatMap((page) => page.results)} />
      </div>
      <div className="LoadMoreButton">
        <Button buttonText="Load more" handleClick={loadMoreMovies} />
      </div>
    </div>
  );
};

export default TvMain;
