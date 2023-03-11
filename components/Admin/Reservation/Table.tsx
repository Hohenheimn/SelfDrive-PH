import React, { useState } from "react";
import { useRouter } from "next/router";
import Pagination from "../../Pagination";
import { Delete, Display } from "./Query";

type Props = {
    tab: string;
};

export default function Table() {
    const [isSearch, setSearch] = useState("");
    const [PageNumber, setPageNumber] = useState(1);
    const { isLoading, data, isError } = Display(PageNumber, isSearch);

    const onSuccess = () => {
        alert("Successfully deleted!");
    };
    const onError = () => {
        alert("Something is wrong!");
    };
    const { mutate: deleteMutate } = Delete(onSuccess, onError);
    const Deletehandler = (id: any) => {
        deleteMutate(id);
    };
    return (
        <div>
            <div className="flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search"
                    value={isSearch}
                    onChange={(e) => setSearch(e.target.value)}
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isLoading &&
                            data?.data?.data?.data.map(
                                (item: any, index: number) => (
                                    <List
                                        itemData={item}
                                        key={index}
                                        Deletehandler={Deletehandler}
                                    />
                                )
                            )}
                    </tbody>
                </table>
            </div>
            <Pagination
                setTablePage={setPageNumber}
                TablePage={PageNumber}
                PageNumber={data?.data.data.last_page}
                CurrentPage={data?.data.data.current_page}
            />
        </div>
    );
}

type ListProps = {
    itemData: any;
    Deletehandler: (id: string | number) => void;
};

const List = ({ itemData, Deletehandler }: ListProps) => {
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
            <td>
                <div className="flex w-full justify-center">
                    <button
                        className=" bg-red-400 text-white px-2 py-2 rounded-md hover:bg-red-500"
                        onClick={() => Deletehandler(itemData.id)}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};
