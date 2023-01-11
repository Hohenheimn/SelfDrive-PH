import React, { useEffect, useState } from "react";
import { Payload } from "./Type";
import FormDetail from "./FormDetail";
import { ShowBranchDetail } from "../../../../ReactQuery/Setting/QueryBranch";

type Props = {
    id: null | number;
    setToggle: Function;
};
export default function Modify({ id, setToggle }: Props) {
    const { data, isLoading, isError } = ShowBranchDetail(id);
    let Defatult = {
        name: data?.data?.data.name,
        description: data?.data?.data.description,
        location: data?.data?.data.location,
    };

    if (isLoading) {
        return <h1></h1>;
    }

    return (
        <>
            {data && (
                <FormDetail
                    id={id}
                    type="modify"
                    DefaultValue={Defatult}
                    setToggle={setToggle}
                />
            )}
        </>
    );
}
