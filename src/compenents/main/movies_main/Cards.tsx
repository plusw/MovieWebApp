import { Link } from "react-router-dom";
import { Movie, Tv } from "../../../entities/FetchRes";
import OneCard from "../oneCard/OneCard";

interface Props {
  items: Movie[] | Tv[] | undefined;
}
const Cards = ({ items = [] }: Props) => {
  const isMovie = (items: any): items is Movie[] => {
    return items.length > 0 && (items[0] as Movie).title !== undefined;
  };

  return (
    <>
      <div className="itemCards">
        {items.map((item) => (
          <Link
            to={"/details/" + (isMovie(items) ? "movie" : "tv") + "/" + item.id}
          >
            <div className="oneCard">
              <OneCard item={item} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cards;
