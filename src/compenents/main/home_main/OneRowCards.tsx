import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie, Tv } from "../../../entities/FetchRes";
import ApiConfig from "../../../services/ApiConfig";

interface Props {
  items: (Movie | Tv)[] | undefined;
  title: string;
}
const OneRowCards = ({ items = [], title }: Props) => {
  // 类型守卫函数，用来判断是否为 Movie 类型
  const isMovie = (item: Movie | Tv): item is Movie => {
    return (item as Movie).title !== undefined;
  };

  return (
    <>
      <div className="main OneRowCards">
        <div className="container">
          <h2 className="movie_title">{title}</h2>
          <div className="cardList">
            <Swiper
              grabCursor={true}
              spaceBetween={10}
              slidesPerView={"auto"}
              breakpoints={{
                320: {
                  slidesPerView: 1, // 小屏幕时只显示一张卡片
                },
                768: {
                  slidesPerView: 3, // 中等屏幕时显示三张卡片
                },
                1024: {
                  slidesPerView: 6, // 大屏幕时显示六张卡片
                },
              }}
            >
              {items.map((item) => (
                <SwiperSlide>
                  <Link
                    to={
                      "/details/" +
                      (isMovie(item) ? "movie" : "tv") +
                      "/" +
                      item.id
                    }
                  >
                    <div className="onecard" key={item.id}>
                      <div
                        key={item.id}
                        className="card"
                        style={{
                          backgroundImage: `url(${ApiConfig.w500Image(
                            item.poster_path
                          )})`,
                        }}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                      <h3>{isMovie(item) ? item.title : item.name}</h3>
                      {/* 使用类型守卫 */}
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneRowCards;
