import React from "react";
import Link from "next/link";

type Props = {
    Object: {
        id: number;
        title: string;
        active: boolean;
        url: string;
    }[];
    setObject: Function;
};

export default function LinkTab({ Object, setObject }: Props) {
    const ChangeHandler = (id: number) => {
        const update = Object.map((item) => {
            if (item.id === id) {
                return { ...item, active: true };
            } else {
                return { ...item, active: false };
            }
        });
        setObject(update);
    };
    return (
        <ul className="flex mb-10">
            {Object.map((item, index) => (
                <li key={index} onClick={() => ChangeHandler(item.id)}>
                    <Link
                        href={item.url}
                        className={`mr-5 font-medium cursor-pointer px-2 py-1 ${
                            item.active && "text-ThemeOrange bg-white shadow-md"
                        }`}
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
