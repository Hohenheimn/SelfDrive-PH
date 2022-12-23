import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Calendar from "../../components/Calendar";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import ModalTemp from "../../components/ModalTemp";

export default function VehicleName() {
    const router = useRouter();
    return (
        <ul className=" flex flex-wrap py-10">
            <li className="w-full font-bold text-[24px] text-ThemeOrange uppercase px-10 items-center">
                <Link href="/">
                    <div>
                        <IoMdArrowRoundBack className=" cursor-pointer mb-5 text-[32px] hover:text-lowOrange" />
                    </div>
                </Link>
                <h1>Unit Reservation</h1>
            </li>
            <li className="w-2/4 flex justify-center">
                <aside className=" relative w-[90%] aspect-square">
                    <Image
                        src="/images/Sample.jpg"
                        alt=""
                        fill
                        className=" object-contain"
                    />
                </aside>
            </li>
            <li className="w-2/4 p-5">
                <p className=" text-[20px] font-medium text-ThemeBlue uppercase border-b-2 border-ThemeBlue inline">
                    HONDA
                </p>
                <h1 className=" text-[64px] font-bold text-ThemeBlue">
                    TMX 155
                </h1>
                <p className=" font-medium mb-2">Classification</p>
                <h1 className="font-bold mb-2">Inclusions</h1>
                <ul className=" list-disc pl-5 flex flex-wrap mb-5">
                    <li className=" font-medium w-2/4">Inclusions</li>
                    <li className=" font-medium w-2/4">Inclusions</li>
                    <li className=" font-medium w-2/4">Inclusions</li>
                </ul>
                <aside className="flex justify-center py-10">
                    <div className="w-2/4 pr-5">
                        <div className="flex flex-col mb-5">
                            <label htmlFor="">Starts on:</label>
                            <input
                                type="date"
                                className="px-2 py-1 shadow-md mt-2"
                            />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="">Until on:</label>
                            <input
                                type="date"
                                className="px-2 py-1 shadow-md mt-2"
                            />
                        </div>
                        <div>
                            <button className="ThemeButton">Reserve</button>
                        </div>
                    </div>
                    <div className="w-2/4">
                        <Calendar />
                    </div>
                </aside>
            </li>
        </ul>
    );
}

const ModalMessage = () => {
    return (
        <ModalTemp>
            <h1>Reservation successfully registered!</h1>
        </ModalTemp>
    );
};
