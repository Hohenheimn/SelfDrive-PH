import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { HiMenuAlt4 } from "react-icons/hi";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    const router = useRouter();
    const [isToggle, setToggle] = useState(false);
    if (router.asPath.includes("admin")) {
        return (
            <ul className="w-full flex relative">
                <li
                    className={` transition-all duration-1000 ease-in-out z-10 h-full w-[300px] bg-ThemeOrange 820px:fixed ${
                        isToggle
                            ? "820px:top-0 820px:left-0"
                            : "820px:top-0 820px:left-[-100%]"
                    }`}
                >
                    <Sidebar />
                </li>
                <li className=" w-full p-10">
                    <aside
                        onClick={() => setToggle(!isToggle)}
                        className={`absolute top-[20px] right-[20px] h-8 w-8 ${
                            isToggle
                                ? "bg-white text-ThemeOrange"
                                : "bg-ThemeOrange text-white"
                        } flex justify-center items-center rounded-full shadow-lg`}
                    >
                        <HiMenuAlt4 />
                    </aside>
                    <main>{children}</main>
                </li>
            </ul>
        );
    }
    return (
        <>
            <Header />

            <main>{children}</main>
        </>
    );
}
