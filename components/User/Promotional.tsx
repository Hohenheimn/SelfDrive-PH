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
        autoplay: true,
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
                        <div className=" flex justify-center items-center w-full relative h-[500px] bg-ThemeOrange">
                            <Image
                                src={item}
                                fill
                                className=" object-cover"
                                alt=""
                            />
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
