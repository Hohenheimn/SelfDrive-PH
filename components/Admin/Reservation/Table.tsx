import React from "react";
import { useRouter } from "next/router";

type Props = {
    tab: string;
};

export default function Table({ tab }: Props) {
    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    className="mb-5 px-3 py-2 shadow-md w-full max-w-[400px]"
                />
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
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
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
        </tr>
    );
};
