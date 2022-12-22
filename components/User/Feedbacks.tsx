import React, { useState } from "react";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";

export default function Feedbacks() {
    return (
        <ul className="w-full p-5 flex flex-wrap items-start pb-20">
            <li className="w-full p-5">
                <h1 className=" text-ThemeOrange font-bold text-[32px]">
                    Feedbacks
                </h1>
            </li>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </ul>
    );
}

const List = () => {
    const [isView, setView] = useState(false);
    return (
        <li className={`p-2 ${isView ? "w-full" : "w-[50%]"}`}>
            <div className="rounded-md shadow-md p-5 relative flex">
                <div>
                    <div className="flex mb-2 w-full items-center">
                        <aside className="relative w-11 h-11 overflow-hidden rounded-full shadow-md">
                            <Image src="/images/Sample.jpg" alt="" fill />
                        </aside>
                        <div className="mb-1">
                            <div className="flex">
                                <h1 className=" font-bold ml-5">Jomari Tiu</h1>
                                <p className=" text-gray-500 ml-5 ">
                                    Jan 12 2023
                                </p>
                            </div>
                            <p className="flex items-center ml-5 font-medium">
                                <AiTwotoneStar className=" text-ThemeYellow" />
                                <AiTwotoneStar className=" text-ThemeYellow" />
                                <AiTwotoneStar className=" text-ThemeYellow" />
                                <AiTwotoneStar className=" text-ThemeYellow" />
                                <AiTwotoneStar className=" text-ThemeYellow" />
                            </p>
                        </div>
                    </div>
                    <p className=" text-[14px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam minima nostrum, magnam sit animi magni
                        praesentium aspernatur adipisci voluptatibus, ducimus
                        est cumque, modi cum suscipit nobis minus velit
                        reprehenderit incidunt!
                    </p>
                    <button
                        className=" text-[15px] font-medium mt-5"
                        onClick={() => setView(!isView)}
                    >
                        View Product
                    </button>
                </div>
                {isView && (
                    <ul className="flex py-5 bg-lowOrange text-white w-full z-20 rounded-md px-5 shadow-lg">
                        <li className="w-2/4 pr-5">
                            <aside className="relative w-full aspect-square">
                                <Image src="/images/Sample.jpg" alt="" fill />
                            </aside>
                        </li>
                        <li className="w-2/4">
                            <h1 className="font-bold">Name of Car</h1>
                            <p className=" text-[14px] mb-5">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptates, asperiores.
                            </p>
                            <ul className=" list-disc ml-5 flex flex-wrap">
                                <li className="w-2/4">asda</li>
                                <li className="w-2/4">asda</li>
                                <li className="w-2/4">asda</li>
                                <li className="w-2/4">asda</li>
                            </ul>
                        </li>
                    </ul>
                )}
            </div>
        </li>
    );
};
