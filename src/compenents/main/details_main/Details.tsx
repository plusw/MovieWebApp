import { useParams } from "react-router-dom";
import { Movie } from "../../../entities/FetchRes";
import apiConfig from "../../../services/ApiConfig";
import useCredits from "../../../services/hooks/useCredits";
import useDetails from "../../../services/hooks/useDetails";
import useSimilar from "../../../services/hooks/useSimilar";
import useVideos from "../../../services/hooks/useVideos";
import OneRowCards from "../home_main/OneRowCards";
import "./Details.scss";
import Video_ from "./videos/Video";
const Details = () => {
  // const
  const { type, id } = useParams();
  const movieoOrTvId = id ? parseInt(id, 10) : NaN;
  const { data } = useDetails(type as "movie" | "tv", movieoOrTvId);
  const { data: castRes } = useCredits(type as "movie" | "tv", movieoOrTvId);
  const { data: videosRes } = useVideos(type as "movie" | "tv", movieoOrTvId);
  const { data: similarRes } = useSimilar(type as "movie" | "tv", movieoOrTvId);

  const isMovie = (data: any): data is Movie => {
    return (data as Movie).title !== undefined;
  };
  if (!data) {
    return <div>Loading...</div>; // 或者返回一个合适的 UI
  }
  return (
    <>
      <div className="detailsMain">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${
              data?.backdrop_path
                ? apiConfig.originalImage(data.backdrop_path)
                : ""
            })`,
          }}
        ></div>
        <div className="main container">
          <div className="movie-content__poster">
            <div
              className="movie-content__poster__img"
              style={{
                backgroundImage: `url(${
                  data?.poster_path
                    ? apiConfig.originalImage(data.backdrop_path)
                    : ""
                })`,
              }}
            ></div>
          </div>
          <div className="info">
            <h1 className="title">
              {isMovie(data) ? data?.title : data?.name}
            </h1>
            <div className="genres">
              {data?.genres.map((genre) => (
                <span className="genres__item">{genre.name}</span>
              ))}
            </div>
            <div className="overView">
              <p>{data?.overview}</p>
            </div>

            <div className="cast">
              <div className="section__header">
                <h2>Casts</h2>
              </div>
              <div className="casts">
                {castRes?.cast.slice(0, 5).map((cast) => (
                  <div className="casts__item">
                    <div
                      className="casts__item__img"
                      style={{
                        backgroundImage: `url(${apiConfig.w500Image(
                          cast.profile_path
                        )})`,
                      }}
                    ></div>
                    <p className="name">{cast.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="videos">
          {videosRes?.results.slice(0, 3).map((video) => (
            <div className="oneVideo">
              <Video_ video={video} />
            </div>
          ))}
        </div>
      </div>
      <div className="similarArea">
        <OneRowCards title="Similar" items={similarRes?.results} />
      </div>
    </>
  );
};

export default Details;
