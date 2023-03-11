import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../util/api";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { MoonLoader } from "react-spinners";
import ScaleLoader from "react-spinners/ScaleLoader";
import { ButtonLoader } from "../components/Loader";

const schema = yup.object().shape({
    email: yup.string().email("Must be a valid email").required("Required"),
    password: yup
        .string()
        .required("Required!")
        .min(6, "Must at least 6 characters"),
});

export default function Login() {
    const router = useRouter();
    const [CheckRemember, setCheckRemember] = useState(false);
    const [inValid, setInvalid] = useState("");
    const [isLoading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<{ email: string; password: string }>({
        resolver: yupResolver(schema),
    });
    // gezrylclarizg@gmail.com
    // password123
    const Submit = async (data: { email: string; password: string }) => {
        setLoading(true);
        try {
            const response = await api.post("/api/login", {
                email: data.email,
                password: data.password,
            });
            const { token } = await response.data;
            if (CheckRemember === true) {
                localStorage.setItem("username", data.email);
                localStorage.setItem("password", data.password);
            }
            setCookie("user", token);
            router.push("/admin/dashboard");
            setLoading(false);
            // router.reload();
        } catch (error: any) {
            setInvalid(error?.response.data.message);
            setLoading(false);
        }
    };

    const RememberMe = (e: any) => {
        if (CheckRemember === true) {
            setCheckRemember(false);
            localStorage.removeItem("password");
            localStorage.removeItem("username");
        }
        if (CheckRemember === false) {
            setCheckRemember(true);
        }
    };

    useEffect(() => {
        setValue("email", localStorage.username);
        setValue("password", localStorage.password);
        if (
            localStorage.username !== undefined &&
            localStorage.password !== undefined
        ) {
            setCheckRemember(true);
        }
    }, []);

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
                            Selfdrive Philippines - Login
                        </h1>
                        <form
                            onSubmit={handleSubmit(Submit)}
                            className="flex flex-col items-start"
                        >
                            <div className=" mb-5 w-full">
                                <input
                                    type="email"
                                    className=" w-full "
                                    placeholder="Email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className=" text-red-500 text-[12px] mt-2">
                                        {errors.email?.message}
                                    </p>
                                )}
                            </div>
                            <div className=" mb-5 w-full">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full "
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <p className=" text-red-500 text-[12px] mt-2">
                                        {errors.password?.message}
                                    </p>
                                )}
                            </div>
                            {inValid && (
                                <p className=" text-[12px] text-red-500 mb-5">
                                    {inValid}
                                </p>
                            )}
                            <ul className="flex w-full justify-between flex-wrap">
                                <li className=" flex items-center w-full mb-5">
                                    <input
                                        type="checkbox"
                                        id="rememberme"
                                        className="mr-1 h-2 w-2 rounded-md after:text-[11px]"
                                        checked={CheckRemember}
                                        onChange={RememberMe}
                                    />

                                    <label
                                        htmlFor="rememberme"
                                        className=" cursor-pointer text-[12px]"
                                    >
                                        Remember me
                                    </label>
                                </li>
                                <li className="flex flex-col w-2/4">
                                    <Link
                                        href="#"
                                        className="text-[12px] hover:underline text-gray-500 font0-bold"
                                    >
                                        forgot password?
                                    </Link>
                                </li>
                                <li className=" w-2/4 flex justify-end">
                                    <button className="ThemeButton">
                                        {isLoading ? (
                                            <ButtonLoader />
                                        ) : (
                                            "Sign In"
                                        )}
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
