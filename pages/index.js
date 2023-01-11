
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

SwiperCore.use([Navigation]);
export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <Banner />
      <div className="w-full px-8 text-center">
        <Title title="Recent Works" />
      </div>
      <RecentWork />
      <div className="w-full px-8 text-center">
        <Title title="NFT Service" />
      </div>
      <Service />
    </div>
  )
}
