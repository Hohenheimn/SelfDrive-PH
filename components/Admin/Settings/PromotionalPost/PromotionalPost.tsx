import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Pagination from "../../../Pagination";
import Detail, { Payload } from "./Detail";
import Modify from "./Modify";
import { Delete, Display } from "./Query";

export default function PromotionalPost() {
    const [isID, setID] = useState<null | number>(null);
    const [isSearch, setSearch] = useState("");
    const [isAdd, setAdd] = useState(false);
    const [PageNumber, setPageNumber] = useState(1);
    const [isModify, setModify] = useState(false);

    const { isLoading, data, isError } = Display(PageNumber, isSearch);

    const Default: Payload = {
        name: "",
        description: "",
        photo_path: "",
        start_date: "",
        end_date: "",
        visible: "",
    };
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
            {isAdd && (
                <Detail DefaultValue={Default} type="add" setToggle={setAdd} />
            )}
            {isModify && <Modify setToggle={setModify} id={isID} />}

            <div className="flex justify-between items-center mb-5">
                <aside>
                    <input
                        type="text"
                        placeholder="Search"
                        value={isSearch}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-5 py-2 w-[300px] shadow-md"
                    />
                </aside>
                <button
                    className="ThemeButton"
                    onClick={() => {
                        setAdd(true);
                    }}
                >
                    Add Promotional
                </button>
            </div>
            <div className="table-container mb-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>STATUS</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isLoading &&
                            data?.data?.data?.data.map(
                                (item: Payload, index: number) => (
                                    <List
                                        setID={setID}
                                        itemData={item}
                                        key={index}
                                        setToggle={setModify}
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
    setID: Function;
    itemData: Payload;
    setToggle: Function;
    Deletehandler: (id: any) => void;
};

const List = ({ setID, itemData, setToggle, Deletehandler }: ListProps) => {
    return (
        <tr className="cursor-pointer hover:bg-gray-100">
            <td
                className="flex justify-center"
                onClick={() => {
                    setID(itemData.id);
                    setToggle(true);
                }}
            >
                {/* <aside className="relative w-[200px] 1440px:w-[150px] h-[100px]">
                    <Image
                        src={}
                        className=" object-cover"
                        fill
                        alt=""
                    />
                </aside> */}
            </td>
            <td
                onClick={() => {
                    setID(itemData.id);
                    setToggle(true);
                }}
                className=" font-bold"
            >
                {itemData.name}
            </td>
            <td
                onClick={() => {
                    setID(itemData.id);
                    setToggle(true);
                }}
            >
                {itemData.description}
            </td>
            <td
                onClick={() => {
                    setID(itemData.id);
                    setToggle(true);
                }}
            >
                {itemData.start_date}
            </td>
            <td
                onClick={() => {
                    setID(itemData.id);
                    setToggle(true);
                }}
            >
                {itemData.end_date}
            </td>
            <td
                onClick={() => {
                    setID(itemData.id);
                    setToggle(true);
                }}
            >
                {itemData.visible ? "Visible" : "Not Visible"}
            </td>
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
