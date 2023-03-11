import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UrlsMain } from "./AdminUrl";
import { useRouter } from "next/router";
import { getCookie, deleteCookie } from "cookies-next";
import api from "../../util/api";

export default function Sidebar() {
    const router = useRouter();

    const SignOut = async () => {
        try {
            const token = getCookie("user");
            const response = await api.get("/auth/logout", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                deleteCookie("user");
                router.push("/login");
            }
        } catch (error) {
            deleteCookie("user");
            router.push("/login");
        }
    };
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
                    <button
                        onClick={SignOut}
                        className="text-white hover:text-ThemeOrange hover:bg-white transition-all duration-100 w-full bg-[#f99151] block py-2 px-1"
                    >
                        Sign Out
                    </button>
                </li>
            </ul>
        </div>
    );
}
