import React from "react";
import ModalTemp from "../../../../ModalTemp";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Add, Update } from "./Query";

// Change Payload
// Change Apis

type Props = {
    type: string;
    DefaultValue: Payload;
    setToggle: Function;
    id?: number | string | undefined | null;
};
export type Payload = {
    name: string;
    description: string;
    default_value: string;
};
const schema = yup.object().shape({
    name: yup.string().required("Required!"),
    description: yup.string().required("Required!"),
});

export default function FormDetail({
    type,
    DefaultValue,
    setToggle,
    id,
}: Props) {
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

    const Submit = (data: Payload) => {
        const Payload: Payload = {
            name: data.name,
            description: data.description,
            default_value: data.default_value,
        };
        if (type === "add") {
            add(Payload);
        }
        if (type === "modify") {
            edit(Payload);
        }
    };

    return (
        <ModalTemp>
            <form onSubmit={handleSubmit(Submit)}>
                <ul className="flex flex-wrap justify-between">
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

                    <li className="w-[48%] mb-5">
                        <label htmlFor="">Default Value:</label>
                        <input
                            type="text"
                            {...register("default_value")}
                            className="w-full font-medium"
                        />
                        {errors.default_value && (
                            <p className=" text-red-500 text-[12px] mt-2">
                                {errors.default_value?.message}
                            </p>
                        )}
                    </li>

                    <li className="w-full mb-5 flex flex-col">
                        <label htmlFor="">Description</label>
                        <textarea
                            {...register("description")}
                            id=""
                            cols={10}
                            rows={5}
                        ></textarea>
                        {errors.description && (
                            <p className=" text-red-500 text-[12px] mt-2">
                                {errors.description?.message}
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
