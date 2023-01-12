import { useRouter } from "next/router";
import React, { useState } from "react";
import {
    DeleteBrand,
    DisplayBrand,
} from "../../../../../ReactQuery/Setting/QueryBrand";
import Pagination from "../../../../Pagination";
import FormDetail from "./FormDetail";
import Modify from "./Modify";
import SearchAdd from "../../../../SearchAdd";

type dataItem = {
    description: string;
    name: string;
    id: number;
};
type Payload = {
    name: string;
    description: string;
};

export default function MainBranch() {
    const [isID, setID] = useState<number | null>(null);
    const [isSearch, setSearch] = useState("");
    const [PageNumber, setPageNumber] = useState(1);
    const { isLoading, data, isError } = DisplayBrand(PageNumber, isSearch);
    const [isAdd, setAdd] = useState(false);
    const [isModify, setModify] = useState(false);

    const Default: Payload = {
        name: "",
        description: "",
    };

    const onSuccess = () => {
        alert("Successfully deleted!");
    };
    const onError = () => {
        alert("Something is wrong!");
    };
    const { mutate: deleteMutate } = DeleteBrand(onSuccess, onError);

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

            <SearchAdd
                isSearch={isSearch}
                setSearch={setSearch}
                toggleAdd={setAdd}
            />

            <div className="table-container mb-10">
                <table className="table">
                    <thead>
                        <tr>
                            <th>NAME</th>

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
            {isError && (
                <div className=" w-full flex justify-center">
                    <h1 className=" text-center text-red-500 font-bold py-5">
                        Error Something is Wrong
                    </h1>
                </div>
            )}
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
