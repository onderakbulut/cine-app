"use client";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import React, { useRef, useEffect } from "react";
import { Link } from "next-view-transitions";

function FeaturedMovies(props) {
    const swiperRef = useRef();
    const data = props.data;

    if (data) {
        return (
            <div className="movie-slider bg-black-50 text-white py-8">
                <div className="container mb-5 lg:mb-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-semibold">
                            {props.heading}
                        </h2>
                        <div className="flex lg:gap-x-8">
                            <button
                                className="p-3"
                                onClick={() => swiperRef.current.slidePrev()}
                            >
                                {" "}
                                <Image
                                    src="/chevron-left.svg"
                                    width={12}
                                    height={23}
                                    alt="next"
                                />
                            </button>

                            <button
                                className="p-3"
                                onClick={() => swiperRef.current.slideNext()}
                            >
                                {" "}
                                <Image
                                    src="/chevron-right.svg"
                                    width={12}
                                    height={23}
                                    alt="next"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <Swiper
                    loop={true}
                    breakpoints={{
                        992: {
                            slidesPerView: 6.2,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 6.2,
                            spaceBetween: 30,
                        },
                    }}
                    slidesPerView={3.5}
                    spaceBetween={10}
                    centeredSlides={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {data
                        .filter((movie) => movie.poster_path !== null)
                        .map((movie, index) => (
                            <SwiperSlide key={movie.id}>
                                <Link
                                    href={`/movie/${movie.id}`}
                                >
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        width={250}
                                        height={376}
                                        className={`w-full hover:scale-110 py-4 duration-300`}
                                        alt={movie.title}
                                    ></Image>
                                </Link>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        );
    } else {
        return (
            <div className="bg-black-50 text-white pb-8">
                <div className="container mb-5 lg:mb-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-semibold">
                            {props.heading}
                        </h2>
                        <div className="flex lg:gap-x-8">
                            <button
                                className="p-3"
                                onClick={() => swiperRef.current.slidePrev()}
                            >
                                {" "}
                                <Image
                                    src="/chevron-left.svg"
                                    width={12}
                                    height={23}
                                    alt="next"
                                />
                            </button>

                            <button
                                className="p-3"
                                onClick={() => swiperRef.current.slideNext()}
                            >
                                {" "}
                                <Image
                                    src="/chevron-right.svg"
                                    width={12}
                                    height={23}
                                    alt="next"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <Swiper
                    loop={true}
                    breakpoints={{
                        992: {
                            slidesPerView: 6.2,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 6.2,
                            spaceBetween: 30,
                        },
                    }}
                    slidesPerView={3.5}
                    spaceBetween={10}
                    centeredSlides={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    <SwiperSlide>
                        <Image
                            src="/poster-1.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/poster-2.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/poster-3.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/poster-4.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/poster-5.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/poster-6.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/poster-7.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/poster-8.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/poster-9.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/poster-10.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/poster-11.png"
                            width={250}
                            height={376}
                            className="w-full"
                            alt="poster"
                        ></Image>
                    </SwiperSlide>
                </Swiper>
            </div>
        );
    }
}

export default FeaturedMovies;
