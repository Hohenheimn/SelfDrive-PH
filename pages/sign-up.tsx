import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rergister } from "../ReactQuery/Setting/QueryRegister";
import { MutateError, MutateSuccess } from "../GlobalFunction/MutateMessage";
import ModalTemp from "../components/ModalTemp";
import { ButtonLoader } from "../components/Loader";

const schema = yup.object().shape({
    email: yup.string().email("Must be an email!").required("Required!"),
    password: yup
        .string()
        .required("Required!")
        .min(6, "Must at least 6 characters up!"),
    name: yup.string().required("Required!"),
    confirm_password: yup
        .string()
        .required("Required!")
        .oneOf([yup.ref("password"), null], "Passwords don't match!"),
});

export default function SignUp() {
    const [isSuccess, setSucces] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<{
        email: string;
        password: string;
        name: string;
        confirm_password: string;
    }>({
        resolver: yupResolver(schema),
    });

    const onSuccess = () => {
        setSucces(true);
    };

    const onError = () => {
        MutateError("Something is wrong");
    };

    const { isLoading, isError, mutate } = Rergister(onSuccess, onError);

    const Submit = (data: {
        email: string;
        password: string;
        name: string;
    }) => {
        const Payload = {
            email: data.email,
            password: data.password,
            name: data.name,
        };
        mutate(Payload);
    };
    return (
        <div className=" bg-ThemeOrange min-h-screen flex justify-center items-center">
            {isSuccess && (
                <ModalTemp>
                    <h3 className=" text-center mb-5">
                        Please wait for an Admin to send an email for
                        verification of your account!
                    </h3>
                    <h1 className="text-center text-[24px] font-bold text-ThemeOrange">
                        Thank You !
                    </h1>
                </ModalTemp>
            )}
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
                        <form
                            onSubmit={handleSubmit(Submit)}
                            className="flex flex-col items-start"
                        >
                            <ul className="flex flex-wrap w-full justify-between">
                                <li className="flex flex-col w-[48%] mb-5">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className=" text-red-500 text-[12px] mt-2">
                                            {errors.email?.message}
                                        </p>
                                    )}
                                </li>
                                <li className="flex flex-col w-[48%] mb-5">
                                    <label>Name</label>
                                    <input type="text" {...register("name")} />
                                    {errors.name && (
                                        <p className=" text-red-500 text-[12px] mt-2">
                                            {errors.name?.message}
                                        </p>
                                    )}
                                </li>
                                <li className="flex flex-col w-[48%] mb-5">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        {...register("password")}
                                    />
                                    {errors.password && (
                                        <p className=" text-red-500 text-[12px] mt-2">
                                            {errors.password?.message}
                                        </p>
                                    )}
                                </li>
                                <li className="flex flex-col w-[48%] mb-5">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        {...register("confirm_password")}
                                    />
                                    {errors.confirm_password && (
                                        <p className=" text-red-500 text-[12px] mt-2">
                                            {errors.confirm_password?.message}
                                        </p>
                                    )}
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
                                        {isLoading ? (
                                            <ButtonLoader />
                                        ) : (
                                            "Submit"
                                        )}
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
