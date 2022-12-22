import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UrlsMain } from "./AdminUrl";
import { useRouter } from "next/router";

export default function Sidebar() {
    const router = useRouter();
    return (
        <div className="w-full flex flex-col items-center py-5 px-2 overflow-y-auto min-h-screen ">
            <Image src="/images/Logo.jpg" height={80} width={80} alt="Logo" />
            <ul className="w-full mt-5">
                <li className="mb-2">
                    <h1 className=" font-bold text-[16px] text-[#ac5c29]">
                        MAIN
                    </h1>
                </li>
                {UrlsMain.map((item, index) => (
                    <li key={index} className="mb-1">
                        <Link
                            href={item.url}
                            className={`hover:text-ThemeOrange hover:bg-white transition-all duration-100 w-full inline-block py-2 px-1 ${
                                router.pathname.includes(item.active)
                                    ? "text-ThemeOrange bg-white"
                                    : "text-white"
                            }`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}

                <li>
                    <button className="text-white hover:text-ThemeOrange hover:bg-white transition-all duration-100 w-full bg-[#f99151] block py-2 px-1">
                        Sign Out
                    </button>
                </li>
            </ul>
        </div>
    );
}
