import React, { useEffect, useState } from "react";
import { ShowBranchDetail } from "../../../../ReactQuery/Setting/QueryBranch";
import Detail, { Payload } from "./Detail";
import { ShowDetail } from "./Query";

type Props = {
    id: null | number;
    setToggle: Function;
};
export default function Modify({ id, setToggle }: Props) {
    const { data, isLoading, isError } = ShowDetail(id);
    let Defatult: Payload = {
        name: data?.data?.data.name,
        description: data?.data?.data.description,
        photo_path: data?.data?.data.photo_path,
        start_date: data?.data?.data.start_date,
        end_date: data?.data?.data.end_date,
        visible: data?.data?.data.visible,
    };

    if (isLoading) {
        return <h1></h1>;
    }

    return (
        <>
            {data && (
                <Detail
                    id={id}
                    type="modify"
                    DefaultValue={Defatult}
                    setToggle={setToggle}
                />
            )}
        </>
    );
}
