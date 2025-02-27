import { Movie, Tv } from "../../../entities/FetchRes";
import ApiConfig from "../../../services/ApiConfig";
import "./oneCard.scss";

interface Props {
  item: Movie | Tv;
}
const OneCard = ({ item }: Props) => {
  const isMovie = (item: Movie | Tv): item is Movie => {
    return (item as Movie).title !== undefined;
  };
  return (
    <div className="onecard" key={item.id}>
      <div
        key={item.id}
        className="card"
        style={{
          backgroundImage: `url(${ApiConfig.w500Image(item.poster_path)})`,
        }}
      >
        <i className="bx bx-play"></i>
      </div>
      <h3>{isMovie(item) ? item.title : item.name}</h3>
    </div>
  );
};

export default OneCard;
