import { useRouter } from "next/router";
import React, { useState } from "react";
import Pagination from "../../../../Pagination";
import FormDetail, { Payload } from "./FormDetail";
import Modify from "./Modify";
import { Delete, Display, Update } from "./Query";

type dataItem = {
    description: string;
    name: string;
    location: string;
    id: number;
};

export default function Classification() {
    const [isID, setID] = useState<null | number>(null);
    const [isSearch, setSearch] = useState("");
    const [isAdd, setAdd] = useState(false);
    const [PageNumber, setPageNumber] = useState(1);
    const [isModify, setModify] = useState(false);

    const { isLoading, data, isError } = Display(PageNumber, isSearch);

    const Default: Payload = {
        name: "",
        description: "",
        default_value: "",
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
                <FormDetail
                    DefaultValue={Default}
                    type="add"
                    setToggle={setAdd}
                />
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
                    Add Inclusion
                </button>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>INCLUSIONS</th>
                            <th>DESCRIPTION</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isLoading &&
                            data?.data?.data?.data.map(
                                (item: dataItem, index: number) => (
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
    itemData: dataItem;
    setToggle: Function;
    Deletehandler: (id: any) => void;
};

const List = ({ setID, itemData, setToggle, Deletehandler }: ListProps) => {
    const router = useRouter();

    return (
        <tr className="cursor-pointer hover:bg-gray-100">
            <td
                className=" font-bold"
                onClick={() => {
                    setID(itemData.id);
                    setToggle(true);
                }}
            >
                {itemData.name}
            </td>
            <td
                onClick={() => {
                    setID(itemData.id);
                    setToggle(true);
                }}
            >
                {itemData.location}
            </td>
            <td
                onClick={() => {
                    setID(itemData.id);
                    setToggle(true);
                }}
            >
                {itemData.description}
            </td>
            <td className="flex justify-center">
                <button
                    className=" bg-red-400 text-white px-2 py-2 rounded-md hover:bg-red-500"
                    onClick={() => Deletehandler(itemData.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};
