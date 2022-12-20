import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DisplayImage } from "../components/DisplayImage";

export default function Verification() {
    const [isFront, setFront] = useState("/images/sampleid.jpg");
    const [isBack, setBack] = useState("/images/sampleid.jpg");
    const defaultImage = "/images/sampleid.jpg";
    return (
        <div className=" bg-ThemeOrange min-h-screen flex justify-center items-center">
            <ul className="w-[90%] max-w-[1000px] h-[500px] flex flex-wrap">
                <li className="relative w-5/12 h-full 480px:w-full 480px:h-[200px] flex justify-center items-center">
                    <Image
                        src="/images/Sample.jpg"
                        alt="Image"
                        layout="fill"
                        objectFit="cover"
                    />
                    <ul className="relative z-10 bg-white p-5 rounded-md shadow-md">
                        <li>
                            <h1 className="text-ThemeOrange font-bold">
                                Recommended ID
                            </h1>
                        </li>
                        <li>SSS ID</li>
                        <li>Philhealth ID</li>
                        <li>National ID</li>
                        <li>License ID</li>
                        <li>etc. </li>
                    </ul>
                </li>
                <li className=" w-7/12 h-full 480px:h-auto 480px:pb-[100px] bg-white p-5 flex flex-col items-center justify-center relative 480px:w-full">
                    <aside className="absolute top-[20px] right-[20px] h-10 w-10 rounded-full overflow-hidden mb-10">
                        <Image
                            alt="Logo"
                            src="/images/Logo.jpg"
                            layout="fill"
                        />
                    </aside>
                    <div className=" w-full max-w-[500px]">
                        <h1 className=" font-bold text-ThemeOrange text-[24px] mb-5">
                            Selfdrive Philippines - ID Verification
                        </h1>
                        <form action="" className="flex flex-col items-start">
                            <ul className="flex flex-wrap w-full justify-between">
                                <li className="flex flex-col w-[48%] mb-5">
                                    <label htmlFor="front">
                                        Upload Front ID
                                    </label>
                                    <input
                                        type="file"
                                        id="front"
                                        className="hidden"
                                        onChange={(e) => {
                                            DisplayImage(
                                                e,
                                                isFront,
                                                setFront,
                                                defaultImage
                                            );
                                        }}
                                    />
                                    <aside className="relative w-full aspect-square">
                                        <Image
                                            src={isFront}
                                            fill
                                            alt="front"
                                            className=" object-contain"
                                        />
                                    </aside>
                                </li>
                                <li className="flex flex-col w-[48%] mb-5">
                                    <label htmlFor="Back">Upload Back ID</label>
                                    <input
                                        type="file"
                                        id="Back"
                                        className="hidden"
                                        onChange={(e) => {
                                            DisplayImage(
                                                e,
                                                isBack,
                                                setBack,
                                                defaultImage
                                            );
                                        }}
                                    />
                                    <aside className="relative w-full aspect-square">
                                        <Image
                                            src={isBack}
                                            layout="fill"
                                            className=" object-contain"
                                            alt="Back"
                                        />
                                    </aside>
                                </li>

                                <li className="flex justify-between items-center w-full">
                                    <p className="text-[12px] text-gray-500 font0-bold">
                                        <Link
                                            href="#"
                                            className="text-[20px] hover:underline  font0-bold ml-2 text-ThemeOrange"
                                        >
                                            Skip
                                        </Link>
                                    </p>

                                    <button className="ThemeButton">
                                        Submit
                                    </button>
                                </li>
                            </ul>
                        </form>
                        <div className="flex justify-end absolute right-[20px] bottom-[20px] 640px:px-2">
                            <p className=" text-ThemeOrange font-medium text-[14px] 480px:text-[12px]">
                                © 2022 SelfDrive Philippines Systems Corp. All
                                rights reserved.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
Verification.getLayout = function getLayout(page: any) {
    return <>{page}</>;
};
