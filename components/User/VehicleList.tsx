import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function VehicleList() {
    return (
        <div className=" flex flex-col items-center">
            <h1 className=" text-ThemeBlue font-bold text-center text-[24px] py-5 bg-gray-100 w-full">
                Available Vehicles
            </h1>
            <ul className="flex flex-wrap w-full 1440px:w-[95%] py-10">
                <List key={1} />
                <List key={2} />
                <List key={3} />
                <List key={4} />
                <List key={5} />
            </ul>
        </div>
    );
}

const List = () => {
    return (
        <li className="w-[20%] p-2">
            <Link
                href="/vehicle/tmx155"
                className="rounded-md shadow-md w-full block overflow-hidden hover:scale-[1.05] hover:z-20 transition-all duration-500"
            >
                <ul>
                    <li className="relative w-full aspect-square overflow-hidden border border-black">
                        <Image
                            src="/images/Sample.jpg"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </li>
                    <li className="p-2">
                        <h1 className="font-medium text-[16px]">
                            Lorem ipsum dolor sit.
                        </h1>
                        <p className=" text-gray-500 font-thin">
                            Lorem, ipsum.
                        </p>
                        <p className=" text-gray-500 font-thin">Jan 8 - 13</p>
                        <h1 className="font-bold text-[16px]">₱ 15,000 Day</h1>
                    </li>
                </ul>
            </Link>
        </li>
    );
};
