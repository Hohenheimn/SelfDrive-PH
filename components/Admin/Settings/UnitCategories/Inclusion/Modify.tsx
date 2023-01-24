import React, { useEffect, useState } from "react";
import FormDetail, { Payload } from "./FormDetail";
import { ShowBrandDetail } from "../../../../../ReactQuery/Setting/QueryBrand";
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
        default_value: data?.data?.data.default_value,
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
