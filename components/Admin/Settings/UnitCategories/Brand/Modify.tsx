import React, { useEffect, useState } from "react";
import FormDetail from "./FormDetail";
import { ShowBrandDetail } from "../../../../../ReactQuery/Setting/QueryBrand";

type Payload = {
    name: string;
    description: string;
};
type Props = {
    id: null | number;
    setToggle: Function;
};
export default function Modify({ id, setToggle }: Props) {
    const { data, isLoading, isError } = ShowBrandDetail(id);
    let Defatult: Payload = {
        name: data?.data?.data.name,
        description: data?.data?.data.description,
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
