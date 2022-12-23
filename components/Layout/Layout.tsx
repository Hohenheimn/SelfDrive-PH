import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { HiMenuAlt4 } from "react-icons/hi";
import Notification from "../Notification";
import Image from "next/image";

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
                    className={` transition-all duration-1000 ease-in-out z-[99] h-full w-[300px] bg-ThemeOrange fixed ${
                        isToggle
                            ? "820px:top-0 820px:left-0"
                            : "820px:top-0 820px:left-[-100%]"
                    }`}
                >
                    <Sidebar />
                </li>
                <li className=" w-full pl-[300px] 820px:pl-0 relative">
                    <aside
                        onClick={() => setToggle(!isToggle)}
                        className={`fixed top-[20px] right-[20px] h-8 w-8 z-[99] ${
                            isToggle
                                ? "bg-white text-ThemeOrange"
                                : "bg-ThemeOrange text-white"
                        } hidden 820px:flex justify-center items-center rounded-full shadow-lg`}
                    >
                        <HiMenuAlt4 />
                    </aside>

                    <main className="p-10 1440px:p-5 relative min-h-screen">
                        <Image
                            src="/images/bgLogo.jpg"
                            alt=""
                            className=" object-cover opacity-[0.3]"
                            fill
                        />
                        <div className=" z-20 relative">
                            <Notification />
                            {children}
                        </div>
                    </main>
                </li>
            </ul>
        );
    }
    return (
        <>
            <Header />
            <main className="w-full flex justify-center">
                <div className="w-[100%] max-w-[1440px] border border-[#ececec] border-b-0 border-t-0 relative">
                    {children}
                </div>
            </main>
            <footer className="w-full bg-ThemeOrange px-5 pb-2">
                <ul className="flex justify-center flex-wrap w-full">
                    <li className="flex justify-center flex-col items-center w-full">
                        <aside className="relative h-[150px] w-[300px]">
                            <Image
                                src="/images/bgLogo.jpg"
                                fill
                                className=" object-contain"
                                alt={""}
                            />
                        </aside>
                        <p className=" font-medium text-white mb-2">
                            Cecelia Havens 456 White Finch St. North Augusta, SC
                            29860
                        </p>
                        <p className=" font-medium text-white mb-2">
                            099999999
                        </p>
                        <p className=" font-medium text-white mb-2">
                            sample@gmail.com
                        </p>
                    </li>
                    <li className="w-full mt-10">
                        <p className="text-end text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquid, neque!
                        </p>
                    </li>
                </ul>
            </footer>
        </>
    );
}
