import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function Promotional() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const Images = [
        "/images/Sample.jpg",
        "/images/Sample.jpg",
        "/images/Sample.jpg",
        "/images/Sample.jpg",
    ];
    return (
        <ul className="relative promotional">
            <Slider {...settings}>
                {Images.map((item, index) => (
                    <div key={index}>
                        <div className=" flex items-center w-full relative h-[500px] bg-ThemeOrange">
                            <Image
                                src={item}
                                fill
                                className=" object-cover"
                                alt=""
                            />
                            <article className="w-2/4 z-20 relative p-10 px-20">
                                <div className="bg-[#ffffffea] p-5 rounded-md shadow-md">
                                    <h1 className=" text-[24px] font-bold text-ThemeBlue">
                                        Christmass Promo
                                    </h1>
                                    <p className="text-[16px] mb-5">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Laudantium rem
                                        obcaecati minus quo animi perspiciatis
                                        illo, a rerum, quos minima ipsa fugiat
                                        quae autem, dolor vitae? Eum dolores
                                        temporibus reprehenderit.
                                    </p>
                                    <div className="flex">
                                        <span className=" font-medium mr-2">
                                            Starts on:
                                        </span>
                                        <p>12/12/2022</p>
                                    </div>
                                    <div className="flex">
                                        <span className=" font-medium mr-2">
                                            Until on:
                                        </span>
                                        <p>12/12/2022</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
            </Slider>
        </ul>
    );
}

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="Next cursor-pointer absolute top-[50%] right-3 h-10 w-10 flex justify-center items-center rounded-full shadow-md text-white bg-ThemeOrange translate-y-[-50%] z-10"
        >
            <BiRightArrow />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="Prev cursor-pointer absolute top-[50%] left-3 h-10 w-10 flex justify-center items-center rounded-full shadow-md text-white bg-ThemeOrange translate-y-[-50%] z-10"
        >
            <BiLeftArrow />
        </div>
    );
}
