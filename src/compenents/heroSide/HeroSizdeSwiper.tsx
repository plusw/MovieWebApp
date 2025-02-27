import SwiperCore, { Autoplay } from "swiper"; // 导入核心功能和模块
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Movie } from "../../entities/FetchRes";
import HeroSide from "./HeroSide";
interface Props {
  movieItems: Movie[] | undefined;
}
const HeroSizdeSwiper = ({ movieItems = [] }: Props) => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div>
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          {movieItems?.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <HeroSide item={item} className={isActive ? "active" : ""} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HeroSizdeSwiper;
