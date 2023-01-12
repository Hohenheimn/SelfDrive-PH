import Link from "next/link";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import DashboardCalendar from "../../components/DashboardCalendar";

export default function Dashboard() {
    const dashData = [
        {
            title: "Customer",
            value: 15,
        },
        {
            title: "Host",
            value: 15,
        },
        {
            title: "Cars",
            value: 15,
        },
        {
            title: "Reserved",
            value: 15,
        },
        {
            title: "Cancelled",
            value: 15,
        },
        {
            title: "Approval",
            value: 15,
        },
    ];
    return (
        <div className="">
            <ul className="w-full flex justify-between flex-wrap">
                {dashData.map((item, index) => (
                    <li
                        key={index}
                        className={`w-[32%] h-[100px] shadow-md rounded-md p-5 flex justify-center items-center mb-5 ${
                            index % 2
                                ? "bg-lowOrange text-white"
                                : "bg-white text-ThemeBlue"
                        }`}
                    >
                        <div className="w-full flex justify-between items-center">
                            <h2 className="font-medium text-[24px] w-2/4 flex flex-col">
                                <span className="text-[16px]">total</span>
                                {item.title}
                            </h2>
                            <h1 className="text-center font-bold text-[42px]  w-2/4">
                                {item.value}
                            </h1>
                        </div>
                    </li>
                ))}
                <li className="w-[48%]">
                    <Link
                        href="#"
                        className="flex justify-between items-center rounded-md shadow-md p-2 px-5 w-full bg-ThemeYellow hover:bg-lowOrange transition-all duration-300"
                    >
                        <h1 className="font-bold text-[20px] text-ThemeBlue">
                            Host Approval
                        </h1>

                        <BsFillArrowRightCircleFill className="text-ThemeBlue text-[32px]" />
                    </Link>
                </li>
                <li className="w-[48%]">
                    <Link
                        href="#"
                        className="flex justify-between items-center rounded-md shadow-md p-2 px-5 w-full bg-ThemeYellow hover:bg-lowOrange transition-all duration-300"
                    >
                        <h1 className="font-bold text-[20px] text-ThemeBlue">
                            Client Approval
                        </h1>

                        <BsFillArrowRightCircleFill className="text-ThemeBlue text-[32px]" />
                    </Link>
                </li>
                <li className="w-full mt-5">
                    <DashboardCalendar />
                </li>
            </ul>
        </div>
    );
}
