import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className=" bg-ThemeOrange min-h-screen flex justify-center items-center">
            <ul className="w-[90%] max-w-[1000px] h-[500px] flex flex-wrap">
                <li className="relative w-5/12 h-full 480px:w-full 480px:h-[200px]">
                    <Image
                        src="/images/Sample.jpg"
                        alt="Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </li>
                <li className=" w-7/12 h-full 480px:h-auto 480px:pb-[100px] bg-white p-5 flex flex-col items-center justify-center relative 480px:w-full">
                    <aside className="absolute top-[20px] right-[20px] h-10 w-10 rounded-full overflow-hidden mb-10">
                        <Image
                            alt="Logo"
                            src="/images/Logo.jpg"
                            layout="fill"
                            objectFit="contain"
                        />
                    </aside>
                    <div className=" w-full max-w-[500px]">
                        <h1 className=" font-bold text-ThemeOrange text-[24px] mb-5">
                            Selfdrive Philippines - Login
                        </h1>
                        <form action="" className="flex flex-col items-start">
                            <input
                                type="email"
                                className="mb-5 w-full "
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mb-5"
                            />
                            <ul className="flex w-full justify-between">
                                <li className="flex flex-col">
                                    <Link
                                        href="#"
                                        className="text-[12px] hover:underline text-gray-500 font0-bold"
                                    >
                                        forgot password?
                                    </Link>
                                </li>
                                <li>
                                    <button className="ThemeButton">
                                        Sign In
                                    </button>
                                </li>
                            </ul>
                            <div>
                                <Link
                                    href="/sign-up"
                                    className="text-[12px] hover:underline font0-bold text-ThemeOrange font-medium"
                                >
                                    Sign Up
                                </Link>
                            </div>
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
Login.getLayout = function getLayout(page: any) {
    return <>{page}</>;
};
