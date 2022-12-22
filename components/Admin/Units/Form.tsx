import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { DisplayImage } from "../../DisplayImage";
type Props = {
    setState: Function;
};
export default function Form({ setState }: Props) {
    const router = useRouter();
    const [isDetail, setDetail] = useState(false);
    const [ImageCar, setImageCar] = useState("/images/Sample.jpg");
    const defaultImage = "/images/Sample.jpg";
    useEffect(() => {
        if (router.query.id !== undefined) {
            setDetail(true);
        }
    });
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20 bg-[#00000061]">
            <form className="w-[95%] max-w-[600px] bg-white p-10 rounded-md">
                <h1 className="text-[16px] font-bold text-ThemeOrange uppercase mb-5">
                    {isDetail ? "Units Detail" : "Add Units"}
                </h1>
                <ul className=" flex-wrap flex justify-between">
                    <li className="w-full mb-5">
                        <div className="flex flex-col">
                            <label htmlFor="">Image</label>
                            <input
                                type="file"
                                className="mb-4"
                                onChange={(e) => {
                                    DisplayImage(
                                        e,
                                        ImageCar,
                                        setImageCar,
                                        defaultImage
                                    );
                                }}
                            />
                        </div>
                        <aside className="relative h-[150px] w-full">
                            <Image
                                src={ImageCar}
                                alt=""
                                className=" object-contain"
                                fill
                            />
                        </aside>
                    </li>
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Brand</label>
                        <input
                            type="text"
                            className={`${isDetail && "disabled"}`}
                        />
                    </li>
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Model</label>
                        <input
                            type="text"
                            className={`${isDetail && "disabled"}`}
                        />
                    </li>
                    <li className="flex flex-col w-full mb-2">
                        <label htmlFor="">Classification</label>
                        <input
                            type="text"
                            className={`${isDetail && "disabled"}`}
                        />
                    </li>
                    <li className="flex flex-col w-full mb-2">
                        <label htmlFor="">Description</label>
                        <textarea
                            className={`${isDetail && "disabled"}`}
                            name=""
                            id=""
                            cols={20}
                            rows={5}
                        ></textarea>
                    </li>

                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Range from</label>
                        <input
                            type="number"
                            className={`${isDetail && "disabled"}`}
                        />
                    </li>
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Range to</label>
                        <input
                            type="number"
                            className={`${isDetail && "disabled"}`}
                        />
                    </li>
                    {isDetail && (
                        <li className="flex flex-col w-[48%] mb-2">
                            <label htmlFor="">Created By</label>
                            <input
                                type="text"
                                className={`${isDetail && "disabled"}`}
                            />
                        </li>
                    )}

                    <li className="flex justify-end w-full items-center mt-10">
                        <aside
                            className=" cursor-pointer mr-5"
                            onClick={() => {
                                setState(false);
                                router.push("");
                            }}
                        >
                            Cancel
                        </aside>
                        {isDetail ? (
                            <></>
                        ) : (
                            <button className="ThemeButton">Register</button>
                        )}
                    </li>
                </ul>
            </form>
        </div>
    );
}
