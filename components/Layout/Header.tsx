import React, { useState } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";

export default function Header() {
    const User = true;
    const [isDrop, setDrop] = useState(false);
    return (
        <nav className=" bg-ThemeOrange px-5 flex justify-between items-center py-2">
            <aside>
                <Image
                    alt="Logo"
                    src="/images/Logo.jpg"
                    height={40}
                    width={40}
                />
            </aside>
            {!User ? (
                <aside className="relative flex justify-center items-center text-white text-[24px] cursor-pointer">
                    <div onClick={() => setDrop(!isDrop)}>
                        <CgProfile />
                    </div>
                    {isDrop && (
                        <ul className="absolute right-0 top-full bg-white w-[200px] shadow-md">
                            <li className="">
                                <Link
                                    href="/login"
                                    className="text-black text-[12px] hover:bg-ThemeOrange hover:text-white h-full w-full block px-3 py-2"
                                >
                                    Sign Out
                                </Link>
                            </li>
                        </ul>
                    )}
                </aside>
            ) : (
                <ul className="flex">
                    <li className="text-white font-bold mr-5 hover:underline">
                        <Link href="/login">Sign In</Link>
                    </li>
                    <li className="text-white font-bold mr-5 hover:underline">
                        <Link href="/sign-up">Sign Up</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
