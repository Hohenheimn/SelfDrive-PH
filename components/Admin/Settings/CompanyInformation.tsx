import React, { useState } from "react";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "react-query";
import api from "../../../util/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type CIPayload = {
    name: string;
    address: string;
    phone: string;
    email: string;
};
const schema = yup.object().shape({
    name: yup.string().required("Required!"),
    address: yup.string().required("Required!"),
    phone: yup.string().required("Required!"),
    email: yup.string().email("Invalid email format").required("Required!"),
});

export default function CompanyInformation() {
    const { isLoading, isError, data } = useQuery("company-information", () => {
        return api.get("/api/company-information");
    });
    const DefaultValue: CIPayload = {
        name: data?.data.data.name,
        address: data?.data.data.address,
        phone: data?.data.data.phone,
        email: data?.data.data.email,
    };
    return (
        <div className=" w-full flex py-10 px-5">
            <ul className="flex w-full flex-col justify-center items-center">
                <li className=" w-2/4 flex justify-center items-center">
                    <aside className="relative w-[200px] h-[200px] overflow-hidden rounded-full shadow-lg">
                        <Image src="/images/Logo.jpg" fill alt="" />
                    </aside>
                </li>
                {!isLoading && <CompanyForm DefaultValue={DefaultValue} />}
            </ul>
        </div>
    );
}

type CompanyForm = {
    DefaultValue: CIPayload;
};

const CompanyForm = ({ DefaultValue }: CompanyForm) => {
    const queryClient = useQueryClient();
    const { isLoading: LoadingMutate, mutate } = useMutation(
        (data: CIPayload) => {
            return api.post("/api/company-information", data);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("company-information");
                alert("Company information successfully update!");
                setEdit(false);
            },
            onError: () => {
                alert("Error Something is wrong!");
            },
        }
    );
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CIPayload>({
        resolver: yupResolver(schema),
        defaultValues: DefaultValue,
    });
    const Submit = (data: CIPayload) => {
        mutate(data);
        console.log(data);
    };
    const [isEdit, setEdit] = useState(false);

    return (
        <li className="w-2/4 py-5 flex justify-center items-center pr-5">
            <form
                onSubmit={handleSubmit(Submit)}
                className={`${!isEdit && "disabled"} w-full flex flex-col`}
            >
                <input
                    type="text"
                    className="bigletter text-ThemeOrange font-bold mt-5 text-center"
                    {...register("name")}
                />
                {errors.name && (
                    <p className=" text-red-500 text-[12px] mt-2">
                        {errors.name?.message}
                    </p>
                )}
                <input
                    type="text"
                    {...register("address")}
                    className="text-[16px] text-ThemeBlue font-medium mt-5 text-center"
                />
                {errors.address && (
                    <p className=" text-red-500 text-[12px] mt-2">
                        {errors.address?.message}
                    </p>
                )}
                <input
                    type="text"
                    {...register("phone")}
                    className="text-[16px] text-ThemeBlue font-medium mt-5 text-center"
                />
                {errors.phone && (
                    <p className=" text-red-500 text-[12px] mt-2">
                        {errors.phone?.message}
                    </p>
                )}
                <input
                    type="text"
                    {...register("email")}
                    className="text-[16px] text-ThemeBlue font-medium mt-5 text-center"
                />
                {errors.email && (
                    <p className=" text-red-500 text-[12px] mt-2">
                        {errors.email?.message}
                    </p>
                )}
                <div className="flex justify-end mt-5">
                    {!isEdit ? (
                        <aside
                            className="ThemeButton inline-block cursor-pointer"
                            onClick={() => setEdit(true)}
                        >
                            Edit
                        </aside>
                    ) : (
                        <button
                            className="ThemeButton inline-block"
                            type="submit"
                        >
                            Save
                        </button>
                    )}
                </div>
            </form>
        </li>
    );
};
