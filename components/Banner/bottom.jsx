import { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "../../public/coverpic.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { getBottomBannerItems } from "../../redux/feature/mainPageSlice";
import { useRouter } from "next/router";

const Banner = () => {
  const dispatch = useDispatch();
  const { locale } = useRouter();
  const {
    data: topBannerList,
    loading,
    error,
  } = useSelector((state) => state.bottomBannerState);
  SwiperCore.use([Autoplay]);
  const [type, setType] = useState("SLIDE");
  const [randomIndex, setRandomIndex] = useState(0);
  const params = {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    modules: [Pagination],
  };
  useEffect(() => {
    dispatch(
      getBottomBannerItems({
        params: locale === "en" ? { lang: locale } : {},
      })
    );
  }, [dispatch, locale]);

  return (
    <section className="w-full mt-[65px] lg:mt-[100px] h-[30.3vw] shadow-lg items-center flex justify-evenly font-open text-white relative">
      {loading ? (
        <div className="w-full h-full bg-nogoon animate-pulse bg-opacity-60"></div>
      ) : !error ? (
        topBannerList?.content?.length !== 0 ? (
          topBannerList?.type === "SLIDE" ? (
            topBannerList?.content && (
              <Swiper
                className="w-full h-full"
                {...params}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
              >
                {topBannerList.content?.map((banner, index) => (
                  <SwiperSlide key={`banner-${index}`}>
                    <Link href={banner.bannerLink} passHref>
                      <div className="w-full h-full relative">
                        <Image
                          priority
                          unoptimized
                          layout="fill"
                          objectFit="cover"
                          src={banner.url ? banner.url : Hero}
                          alt=""
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
              </Swiper>
            )
          ) : (
            <div className="w-full h-full flex flex-col relative">
              <Image
                priority
                unoptimized
                layout="fill"
                objectFit="cover"
                src={
                  topBannerList?.content &&
                  topBannerList?.content[
                    Math.floor(Math.random() * topBannerList?.content?.length)
                  ].url
                    ? topBannerList?.content[
                        Math.floor(
                          Math.random() * topBannerList?.content?.length
                        )
                      ].url
                    : Hero
                }
                alt=""
              />
            </div>
          )
        ) : (
          <div className="w-full h-full flex flex-col relative">
            <Image layout="fill" objectFit="cover" src={Hero} alt="" />
          </div>
        )
      ) : (
        <div className="w-full h-full flex flex-col relative">
          <Image layout="fill" objectFit="cover" src={Hero} alt="" />
        </div>
      )}
    </section>
  );
};

export default Banner;
