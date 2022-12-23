import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
    return (
        <div className=" bg-ThemeOrange min-h-screen flex justify-center items-center">
            <ul className="w-[90%] max-w-[1000px] h-[500px] flex flex-wrap shadow-lg">
                <li className="relative w-5/12 h-full 480px:w-full 480px:h-[200px] bg-ThemeOrange">
                    <Image
                        src="/images/loginBG.jpg"
                        alt="Image"
                        fill
                        className=" object-cover"
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
                            Selfdrive Philippines - Register
                        </h1>
                        <form action="" className="flex flex-col items-start">
                            <ul className="flex flex-wrap w-full justify-between">
                                <li className="flex flex-col w-[48%] mb-5">
                                    <label>Email</label>
                                    <input type="email" />
                                </li>
                                <li className="flex flex-col w-[48%] mb-5">
                                    <label>Name</label>
                                    <input type="text" />
                                </li>
                                <li className="flex flex-col w-[48%] mb-5">
                                    <label>Address</label>
                                    <input type="text" />
                                </li>
                                <li className="flex flex-col w-[48%] mb-10">
                                    <label>Gender</label>
                                    <select name="" id="">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </li>

                                <li className="flex justify-between items-center w-full">
                                    <p className="text-[12px] text-gray-500 font0-bold">
                                        Already have an account?
                                        <Link
                                            href="/login"
                                            className="text-[12px] hover:underline  font0-bold ml-2 text-ThemeOrange"
                                        >
                                            login here
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
SignUp.getLayout = function getLayout(page: any) {
    return <>{page}</>;
};
