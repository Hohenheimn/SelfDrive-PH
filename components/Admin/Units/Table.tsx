import { useRouter } from "next/router";
import React, { useState } from "react";
import Carousel from "../../Carousel";
import Form from "./Form";

export default function Table() {
    const [isAdd, setAdd] = useState(false);
    return (
        <div>
            {isAdd && <Form setState={setAdd} />}
            <div className=" flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="mb-5 px-3 py-2 shadow-md w-full max-w-[400px]"
                />
                <button className="ThemeButton" onClick={() => setAdd(true)}>
                    Add Units
                </button>
            </div>

            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Classification</th>
                            <th>Type</th>
                            <th>Created By</th>
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
        >
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>Jomari Tiu</td>
        </tr>
    );
};
