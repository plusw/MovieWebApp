import { Movie } from "../../entities/FetchRes";
import ApiConfig from "../../services/ApiConfig";
import "./HeroSide.scss";
interface Props {
  item: Movie | undefined;
  className?: string;
}
const HeroSide = ({ item, className }: Props) => {
  return (
    <>
      <div
        className="heroAll"
        style={{
          backgroundImage: `url(${ApiConfig.originalImage(
            item ? item.backdrop_path : ""
          )})`,
        }}
      >
        <div className={"all container" + " " + className}>
          <div className="text_area">
            <h2 className="title">{item?.title}</h2>
            <div className="overView">{item?.overview}</div>
            <div className="btns">
              <button className="watch_now btn">Watch now</button>
              <button className="watch_trailer outline_btn">
                Watch trailer
              </button>
            </div>
          </div>
          <div className="poster">
            <img
              src={ApiConfig.w500Image(item ? item.poster_path : "")}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSide;
