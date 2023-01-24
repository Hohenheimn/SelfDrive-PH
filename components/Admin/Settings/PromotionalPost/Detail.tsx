import React, { useEffect, useState } from "react";
import ModalTemp from "../../../ModalTemp";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Add, Update } from "./Query";

type Props = {
    type: string;
    DefaultValue: Payload;
    setToggle: Function;
    id?: number | string | undefined | null;
};
export type Payload = {
    id?: string | number;
    name: string;
    description: string;
    photo_path: string;
    start_date: string;
    end_date: string;
    visible: any;
};

const schema = yup.object().shape({
    name: yup.string().required("Required!"),
    photo_path: yup
        .mixed()
        .test("required", "Please upload a Profile Photo", (value) => {
            return value != null;
        })
        .test("type", "We only support jpeg and jpg format", function (value) {
            return (
                value[0]?.type === "image/jpg" ||
                value[0]?.type === "image/jpeg"
            );
        }),
    description: yup.string().required("Required!"),
    start_date: yup.string().required("Required!"),
    end_date: yup.string().required("Required!"),
});

export default function Detail({ type, DefaultValue, setToggle, id }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Payload>({
        resolver: yupResolver(schema),
        defaultValues: DefaultValue,
    });

    const onSuccess = () => {
        if (type === "add") {
            alert("Successfully registered!");
        }
        if (type === "modify") {
            alert("Successfully updated!");
        }
        setToggle(false);
    };
    const onError = () => {
        alert("Something is wrong!");
    };

    const { mutate: add, isLoading: addLoading } = Add(onSuccess, onError);
    const { mutate: edit, isLoading: editLoading } = Update(
        onSuccess,
        onError,
        id
    );

    const Submit = (data: any) => {
        const Payload: any = {
            name: data.name,
            description: data.description,
            photo_path: data.photo_path[0],
            start_date: data.start_date,
            end_date: data.end_date,
            visible: data.visible ? 1 : 0,
        };

        const formData = new FormData();
        const arrayData: any = [];
        const keys = Object.keys(Payload);

        keys.forEach((key) => {
            arrayData.push({
                key: key,
                keyData: Payload[key],
            });
        });
        arrayData.map(({ key, keyData }: any) => {
            formData.append(key, keyData);
        });

        if (type === "add") {
            add(formData);
        }
        if (type === "modify") {
            edit(formData);
        }
    };
    return (
        <ModalTemp>
            <form onSubmit={handleSubmit(Submit)}>
                <ul className="flex flex-wrap justify-between">
                    {/* <li className="w-full h-[200px] relative mb-5">
                        <Image
                            src={DefaultValue.photo_path}
                            alt=""
                            className=" object-contain"
                            fill
                        />
                    </li> */}
                    <li className="w-[48%] mb-5">
                        <label htmlFor="">Image:</label>
                        <input
                            type="file"
                            className="w-full font-medium"
                            {...register("photo_path")}
                        />
                        {errors.photo_path && (
                            <p className=" text-red-500 text-[12px] mt-2">
                                {errors.photo_path?.message}
                            </p>
                        )}
                    </li>
                    <li className="w-[48%] mb-5">
                        <label htmlFor="">Name:</label>
                        <input
                            type="text"
                            {...register("name")}
                            className="w-full font-medium"
                        />
                        {errors.name && (
                            <p className=" text-red-500 text-[12px] mt-2">
                                {errors.name?.message}
                            </p>
                        )}
                    </li>
                    <li className="w-[48%] mb-5 flex justify-between">
                        <label htmlFor="status">Status:</label>
                        <input
                            type="checkbox"
                            id="status"
                            {...register("visible")}
                        />
                    </li>
                    <li className="w-full mb-5 flex flex-col">
                        <label htmlFor="">Description</label>
                        <textarea
                            id=""
                            cols={10}
                            rows={5}
                            {...register("description")}
                        ></textarea>
                        {errors.description && (
                            <p className=" text-red-500 text-[12px] mt-2">
                                {errors.description?.message}
                            </p>
                        )}
                    </li>
                    <li className="w-[48%] mb-5">
                        <label htmlFor="">Start Date:</label>
                        <input
                            type="date"
                            className="w-full font-medium"
                            {...register("start_date")}
                        />
                        {errors.start_date && (
                            <p className=" text-red-500 text-[12px] mt-2">
                                {errors.start_date?.message}
                            </p>
                        )}
                    </li>
                    <li className="w-[48%] mb-5 flex flex-col">
                        <label htmlFor="">End Date:</label>
                        <input
                            type="date"
                            className="w-full font-medium"
                            {...register("end_date")}
                        />
                        {errors.end_date && (
                            <p className=" text-red-500 text-[12px] mt-2">
                                {errors.start_date?.message}
                            </p>
                        )}
                    </li>
                    <li className="w-full justify-between items-center flex">
                        <aside
                            className=" cursor-pointer"
                            onClick={() => setToggle(false)}
                        >
                            Cancel
                        </aside>
                        <button className=" ThemeButton">Save</button>
                    </li>
                </ul>
            </form>
        </ModalTemp>
    );
}
