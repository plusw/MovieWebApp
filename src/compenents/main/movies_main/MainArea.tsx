import { useState } from "react";
import bg from "../../../assets/footer-bg.jpg";
import useMovies from "../../../services/hooks/useMovies";
import useSearch from "../../../services/hooks/useSearch";
import Button from "../../Button/Button";
import Input from "../input/input";
import Cards from "./Cards";
import "./MainArea.scss";
const MovieMainArea = () => {
  const [searchText, setsearchText] = useState("");
  const { data, fetchNextPage, hasNextPage } = useMovies("upcoming");
  const {
    data: searchData,
    fetchNextPage: searchData_fetchNextPage,
    hasNextPage: searchData_hasNextPage,
  } = useSearch("movie", { query: searchText });

  const loadMoreMovies = () => {
    if (searchData) {
      if (searchData_hasNextPage) {
        searchData_fetchNextPage(); // 触发加载下一页数据
      }
    } else {
      if (hasNextPage) {
        fetchNextPage(); // 触发加载下一页数据
      }
    }
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // 阻止表单默认刷新行为
    setsearchText("big");
  };
  const allMovies = searchData
    ? searchData?.pages.flatMap((page) => page.results)
    : data?.pages.flatMap((page) => page.results);
  return (
    <>
      <div className="movieOrPage">
        <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
          <h2 className="title">Movies</h2>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="search..." value="" />
            <button>search</button>
          </form>
          <Cards items={allMovies} />
          <div className="LoadMoreButton">
            <Button buttonText="Load more" handleClick={loadMoreMovies} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieMainArea;
