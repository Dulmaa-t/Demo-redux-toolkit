
import { useState, useRef, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/layout/Container";
import Title from "../components/Navigation/Title";
import Layout from "../components/layout/Layout";
import Template from "../components/Template/Template.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Banner from "../Components/Banner";
import BottomBanner from "../Components/Banner/bottom";
import Service from "../components/layout/Service";
import RecentWork from "../components/layout/RecentWork";
import RecentWorkL from "../Components/Loader/recent";
import TamtamCreator from "../components/layout/tamtamCreator";
import CategoryNav from "../components/layout/CategoryNav";
import Card from "../components/layout/Card";
import { GrNext, GrPrevious } from "react-icons/gr";
import ArtWork from "../pages/mypage/artwork";

SwiperCore.use([Navigation]);
export default function Home() {
  const dispatch = useDispatch();
  const navPrev = useRef(null);
  const navNext = useRef(null);
  const navCatPrev = useRef(null);
  const navCatNext = useRef(null);

  return (
    <div className="w-full container mx-auto">
      <Banner />

      <div className="w-full mt-7">
        <div className="w-full px-8 text-center">
          <Title title="MD Recommended" />
        </div>
        <ArtWork />
      </div>
      <div className="w-full font-open text-center mt-16 md:mt-24 px-8">
        <div className="w-full px-8 text-center">
          <Title title="TAMTAM Creator" />
        </div>
        <div className="w-full h-[30rem] relative">
          <Swiper
            className="w-full h-full"
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              prevEl: navPrev.current,
              nextEl: navNext.current,
            }}
          >
            <SwiperSlide className="shadow-xl rounded-2xl overflow-hidden b"><TamtamCreator /></SwiperSlide>
          </Swiper>
          <button className={`absolute z-30 top-1/2 w-16 h-16 rounded-full bg-gray-100 text-gray-500 flex justify-center items-center -translate-y-1/2 left-0 text-xl -translate-x-1/2`}>
            <GrPrevious />
          </button>
          <button className={`absolute z-30 top-1/2 w-16 h-16 rounded-full bg-gray-100 text-gray-500 flex justify-center items-center -translate-y-1/2 right-0 text-xl -translate-x-1/2`}>
            <GrNext />
          </button>
        </div>
      </div>
      <div className="w-full font-open text-center mt-16 md:mt-24 px-8">
        <div className="w-full px-8 text-center">
          <Title title="Recent Works" />
        </div>
        <CategoryNav />
        <div className="w-full h-[20rem] md:h-[28rem] relative mt-7">
          <Swiper
            className="w-full h-full"
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              prevEl: navPrev.current,
              nextEl: navNext.current,
            }}
          >
            <SwiperSlide><RecentWork /></SwiperSlide>
          </Swiper>
          <button className={`absolute z-30 top-1/2 w-16 h-16 rounded-full bg-gray-100 text-gray-500 flex justify-center items-center -translate-y-1/2 left-0 text-xl -translate-x-1/2`}>
            <GrPrevious />
          </button>
          <button className={`absolute z-30 top-1/2 w-16 h-16 rounded-full bg-gray-100 text-gray-500 flex justify-center items-center -translate-y-1/2 right-0 text-xl -translate-x-1/2`}>
            <GrNext />
          </button>
        </div>
      </div>
      <div className="w-full font-open text-center mt-16 md:mt-24 px-8">
        <div className="w-full text-center">
          <Title title="NFT Service" />
        </div>
        <Service />
      </div>
      <div>
      </div>
    </div>

  )
}
