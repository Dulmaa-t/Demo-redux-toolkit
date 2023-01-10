import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Hero from "../../public/coverpic.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { getTopBannerItems } from "../../redux/feature/mainPageSlice";
import { useRouter } from "next/router";

const Banner = () => {
    SwiperCore.use([Autoplay]);
    const containerRef = useRef(null);
    const dispatch = useDispatch();

    const { locale } = useRouter();
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
            getTopBannerItems({
                params: locale === "en" ? { lang: locale } : {},
            })
        );
    }, [dispatch, locale]);

    const [containerWidth, setContainerWidth] = useState();

    const setWidth = useCallback((event) => {
        // containerRef
        // console.log(event)
        setContainerWidth(containerRef.current?.clientWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", setWidth);
        return () => window.removeEventListener("resize", setWidth);
    }, [setWidth]);

    useEffect(() => {
        if (window.innerWidth >= 1536) {
            setContainerWidth(1536);
        } else if (window.innerWidth > 1536 && window.innerWidth >= 1280) {
            setContainerWidth(1280);
        } else if (window.innerWidth < 1280 && window.innerWidth >= 1024) {
            setContainerWidth(1024);
        } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
            setContainerWidth(768);
        } else if (window.innerWidth < 768 && window.innerWidth >= 640) {
            setContainerWidth(640);
        } else {
            setContainerWidth("full");
        }
    }, []);

    return (
        <section style={{ height: containerWidth === "full" ? "100%" : containerWidth / 3.03 + "px", }} className="container mx-auto flex items-center justify-evenly font-open text-white relative">
            
        </section>
    );
};

export default Banner;
