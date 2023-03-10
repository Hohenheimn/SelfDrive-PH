import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Detail from "./Detail";

export default function Role() {
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
                    Add Role
                </button>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <List setID={setID} />
                        <List setID={setID} />
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
            <td className=" font-bold">Christmass Promo</td>

            <td>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur, ducimus!
            </td>
            <td className="flex justify-center">
                <button className=" bg-red-400 text-white px-2 py-2 rounded-md hover:bg-red-500">
                    Delete
                </button>
            </td>
        </tr>
    );
};
