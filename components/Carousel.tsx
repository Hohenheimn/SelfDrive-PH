import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const Images = [
        "/images/sampleid.jpg",
        "/images/sampleid.jpg",
        "/images/sampleid.jpg",
        "/images/sampleid.jpg",
    ];
    return (
        <div className="mb-10">
            <Slider {...settings}>
                {Images.map((item, index) => (
                    <div key={index}>
                        <div className=" flex justify-center items-center w-full relative h-[200px] bg-ThemeOrange">
                            <Image
                                src={item}
                                fill
                                className=" object-contain"
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
