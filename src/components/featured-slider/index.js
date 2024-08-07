'use client'

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

export default function featuredSlider(props) {
    const data = props.data;

    if(data){
        return (
            <section className="featured-slider bg-black-50">
                <div className="py-[30px] px-3">
                    <Swiper
                        spaceBetween={50}
                        breakpoints={{
                            992: {
                                slidesPerView: 1.2,
                            },
                        }}
                        centeredSlides={true}
                        loop = {true}
                        >
                        {
                            data.slice(0, 4).map((movie) => (
                                movie.overview = movie.overview.slice(0, 120) + "...",
                                <SwiperSlide key={movie.id}>
                                    <div className="featured-slider__inner relative">
                                        <div className="text-white pt-32 pb-16 px-5 lg:pt-[147px] lg:pb-[72px] lg:ps-[109px] relative z-[1]">
                                            <p className="text-lg text-white text-opacity-70">DESTAQUES</p>
                                            <p className="flex lg:flex-col mb-[14px]">
                                                <span className="font-bold text-xl lg:text-6xl">{movie.title}</span>
                                                <span className="font-medium text-lg lg:text-4xl">{movie.overview}</span>
                                            </p>
                                            <p className="text-2xl text-white text-opacity-70 mb-3 lg:mb-6">{movie.genres}</p>
                                            <a href="#" className="text-2xl text-white text-opacity-70 flex items-center">
                                                <Image src="/play-icon.svg" width="35" height="35" className="mr-[13px]" alt="Slide"></Image>
                                                Watch the trailer
                                            </a>
                                        </div>
                                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  className="heroImage absolute inset-0 object-cover rounded-[10px]" fill alt="image"></Image>
                                        <div className="featured-slider__overlay absolute inset-0"></div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <style>{`
                    .featured-slider__overlay {
                        background: linear-gradient(rgba(7, 41, 86, 0.12) 0%, #020916 100%);
                    }
                `}</style>
            </section>
        )
    }
    else {
        return (
            <section className="featured-slider bg-black-50">
                <div className="py-[30px] px-3">
                    
                    <Swiper
                        spaceBetween={50}
                        breakpoints={{
                            992: {
                                slidesPerView: 1.2,
                            },
                        }}
                        centeredSlides={true}
                        loop = {true}
                        >
                        <SwiperSlide>
                            <div className="featured-slider__inner relative">
                                <div className="text-white pt-32 pb-16 px-5 lg:pt-[147px] lg:pb-[72px] lg:ps-[109px] relative z-[1]">
                                    <p className="text-lg text-white text-opacity-70">DESTAQUES</p>
                                    <p className="flex lg:flex-col mb-[14px]">
                                        <span className="font-bold text-xl lg:text-6xl">John Wick: </span>
                                        <span className="font-medium text-lg lg:text-4xl">Chapter 3 – Parabellum</span>
                                    </p>
                                    <p className="text-2xl text-white text-opacity-70 mb-3 lg:mb-6">Action | Suspense - 2h 12min</p>
                                    <a href="#" className="text-2xl text-white text-opacity-70 flex items-center">
                                        <Image src="/play-icon.svg" width="35" height="35" className="mr-[13px]" alt="Slide"></Image>
                                        Watch the trailer
                                    </a>
                                </div>
                                <Image src="/slide-1.png"  className="heroImage absolute inset-0 object-cover rounded-[10px]" fill alt="image"></Image>
                                <div className="featured-slider__overlay absolute inset-0"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="featured-slider__inner relative">
                                <div className="text-white pt-32 pb-16 px-5 lg:pt-[147px] lg:pb-[72px] lg:ps-[109px] relative z-[1]">
                                    <p className="text-lg text-white text-opacity-70">DESTAQUES</p>
                                    <p className="flex lg:flex-col mb-[14px]">
                                        <span className="font-bold text-xl lg:text-6xl">John Wick: </span>
                                        <span className="font-medium text-lg lg:text-4xl">Chapter 3 – Parabellum</span>
                                    </p>
                                    <p className="text-2xl text-white text-opacity-70 mb-3 lg:mb-6">Action | Suspense - 2h 12min</p>
                                    <a href="#" className="text-2xl text-white text-opacity-70 flex items-center">
                                        <Image src="/play-icon.svg" width="35" height="35" className="mr-[13px]" alt="Slide"></Image>
                                        Watch the trailer
                                    </a>
                                </div>
                                <Image src="/slide-2.png"  className="heroImage absolute inset-0 object-cover rounded-[10px]" fill alt="image"></Image>
                                <div className="featured-slider__overlay absolute inset-0"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="featured-slider__inner relative">
                                <div className="text-white pt-32 pb-16 px-5 lg:pt-[147px] lg:pb-[72px] lg:ps-[109px] relative z-[1]">
                                    <p className="text-lg text-white text-opacity-70">DESTAQUES</p>
                                    <p className="flex lg:flex-col mb-[14px]">
                                        <span className="font-bold text-xl lg:text-6xl">John Wick: </span>
                                        <span className="font-medium text-lg lg:text-4xl">Chapter 3 – Parabellum</span>
                                    </p>
                                    <p className="text-2xl text-white text-opacity-70 mb-3 lg:mb-6">Action | Suspense - 2h 12min</p>
                                    <a href="#" className="text-2xl text-white text-opacity-70 flex items-center">
                                        <Image src="/play-icon.svg" width="35" height="35" className="mr-[13px]" alt="Slide"></Image>
                                        Watch the trailer
                                    </a>
                                </div>
                                <Image src="/slide-3.png"  className="heroImage absolute inset-0 object-cover rounded-[10px]" fill alt="image"></Image>
                                <div className="featured-slider__overlay absolute inset-0"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="featured-slider__inner relative">
                                <div className="text-white pt-32 pb-16 px-5 lg:pt-[147px] lg:pb-[72px] lg:ps-[109px] relative z-[1]">
                                    <p className="text-lg text-white text-opacity-70">DESTAQUES</p>
                                    <p className="flex lg:flex-col mb-[14px]">
                                        <span className="font-bold text-xl lg:text-6xl">John Wick: </span>
                                        <span className="font-medium text-lg lg:text-4xl">Chapter 3 – Parabellum</span>
                                    </p>
                                    <p className="text-2xl text-white text-opacity-70 mb-3 lg:mb-6">Action | Suspense - 2h 12min</p>
                                    <a href="#" className="text-2xl text-white text-opacity-70 flex items-center">
                                        <Image src="/play-icon.svg" width="35" height="35" className="mr-[13px]" alt="Slide"></Image>
                                        Watch the trailer
                                    </a>
                                </div>
                                <Image src="/slide-2.png"  className="heroImage absolute inset-0 object-cover rounded-[10px]" fill alt="image"></Image>
                                <div className="featured-slider__overlay absolute inset-0"></div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <style>{`
                    .featured-slider__overlay {
                        background: linear-gradient(rgba(7, 41, 86, 0.12) 0%, #020916 100%);
                    }
                `}</style>
            </section>
        )
    }
   
}