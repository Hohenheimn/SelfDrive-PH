import React from "react";

type Props = {
    children: string;
};
export default function PageTitle({ children }: Props) {
    return (
        <h1 className="text-ThemeOrange mb-5 text-[24px] font-bold">
            {children}
        </h1>
    );
}
