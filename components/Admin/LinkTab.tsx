import React from "react";
import Link from "next/link";

type Props = {
    Object: {
        id: number;
        title: string;
        active: string;
        url: string;
    }[];
    currentPage: string;
};

export default function LinkTab({ Object, currentPage }: Props) {
    return (
        <ul className="flex mb-10">
            {Object.map((item, index) => (
                <li key={index}>
                    <Link
                        href={item.url}
                        className={`mr-5 font-medium cursor-pointer px-2 py-1 ${
                            item.active === currentPage &&
                            "text-ThemeOrange bg-white shadow-md"
                        }`}
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
