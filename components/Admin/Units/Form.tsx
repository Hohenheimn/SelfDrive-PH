import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Carousel from "../../Carousel";
type Props = {
    setState: Function;
};
export default function Form({ setState }: Props) {
    const router = useRouter();
    const [isDetail, setDetail] = useState(false);
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
                    {isDetail && (
                        <li className="w-full">
                            <Carousel />
                        </li>
                    )}
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Branch</label>
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
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Classification</label>
                        <input
                            type="text"
                            className={`${isDetail && "disabled"}`}
                        />
                    </li>
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Type</label>
                        <input
                            type="text"
                            className={`${isDetail && "disabled"}`}
                        />
                    </li>
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
