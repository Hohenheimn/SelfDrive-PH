import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Detail from "./Detail";

export default function PromotionalPost() {
    const [isID, setID] = useState<null | number>(null);
    return (
        <div>
            {isID !== null && <Detail setID={setID} isID={isID} />}
            <div className="flex justify-between items-center mb-5">
                <aside>
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-5 py-2 w-[300px] shadow-md"
                    />
                </aside>
                <button
                    className="ThemeButton"
                    onClick={() => {
                        setID(-1);
                    }}
                >
                    Add Promotional
                </button>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <List setID={setID} />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

type ListProps = {
    setID: Function;
};

const List = ({ setID }: ListProps) => {
    const router = useRouter();
    return (
        <tr
            onClick={() => {
                setID(1);
            }}
            className="cursor-pointer hover:bg-gray-100"
        >
            <td className="flex justify-center">
                <aside className="relative w-[200px] 1440px:w-[150px] h-[100px]">
                    <Image
                        src="/images/Sample.jpg"
                        className=" object-cover"
                        fill
                        alt=""
                    />
                </aside>
            </td>
            <td className=" font-bold">Christmass Promo</td>
            <td>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur, ducimus!
            </td>
            <td>12/12/2022</td>
            <td>01/12/2023</td>
            <td>
                <select name="" id="">
                    <option value="Visible">Visible</option>
                    <option value="Not visible">Not visible</option>
                </select>
            </td>
        </tr>
    );
};
