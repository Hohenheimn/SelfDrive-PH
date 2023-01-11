import React from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

type Pagination = {
    setTablePage: Function;
    TablePage: number;
    PageNumber: number;
    CurrentPage: number;
};

export default function Pagination({
    setTablePage,
    TablePage,
    PageNumber,
    CurrentPage,
}: Pagination) {
    const SelectPage = (page: number) => {
        const SelectedPage = page + 1;
        setTablePage(SelectedPage);
    };
    return (
        <div className=" w-full flex justify-end">
            <ul className=" flex items-center">
                <li>
                    <button
                        className="flex items-center"
                        disabled={1 === TablePage && true}
                        onClick={() => setTablePage((page: number) => page - 1)}
                    >
                        <RiArrowLeftSLine className=" text-[32px] text-ThemeOrange cursor-pointer" />
                    </button>
                </li>

                <li className=" border-2 border-white flex items-center text-gray-400">
                    {Array.from(Array(PageNumber), (e, index) => {
                        return (
                            <div
                                onClick={() => SelectPage(index)}
                                key={index}
                                className={`${
                                    CurrentPage === index + 1
                                        ? "text-white bg-ThemeOrange"
                                        : "text-ThemeOrange bg-[#eeeff2]"
                                } font-bold h-8 w-8 480px:w-6 480px:h-6 480px:text-[12px] flex justify-center items-center border-r border-white cursor-pointer`}
                            >
                                {index + 1}
                            </div>
                        );
                    })}
                </li>

                <li>
                    <button
                        className="flex items-center"
                        onClick={() => setTablePage((page: number) => page + 1)}
                        disabled={CurrentPage === PageNumber}
                    >
                        <RiArrowRightSLine className=" text-[32px] text-ThemeOrange cursor-pointer" />
                    </button>
                </li>
            </ul>
        </div>
    );
}
