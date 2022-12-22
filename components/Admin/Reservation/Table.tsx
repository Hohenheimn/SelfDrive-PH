import React from "react";
import { useRouter } from "next/router";

type Props = {
    tab: string;
};

export default function Table() {
    return (
        <div>
            <div className="flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="mb-5 px-3 py-2 shadow-md w-full max-w-[400px]"
                />
                <select
                    name=""
                    id=""
                    className="w-[200px] bg-ThemeOrange text-white"
                >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Unit</th>
                            <th>User</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <List />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const List = () => {
    const router = useRouter();
    return (
        <tr
            onClick={() => {
                router.push("?id=1");
            }}
            className="cursor-pointer hover:bg-gray-100"
        >
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
        </tr>
    );
};
