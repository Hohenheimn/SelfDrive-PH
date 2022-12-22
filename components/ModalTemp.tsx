import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function ModalTemp({ children }: Props) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-30 bg-fixedBG">
            <div className="w-[95%] max-w-[600px] rounded-md shadow-md p-10 bg-white">
                {children}
            </div>
        </div>
    );
}
