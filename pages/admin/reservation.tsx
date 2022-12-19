import React, { useState } from "react";
import PageTitle from "../../components/Admin/PageTitle";
import Table from "../../components/Admin/Reservation/Table";
import Tab from "../../components/Admin/Tab";

export default function Reservation() {
    const [isTab, setTab] = useState([
        {
            id: 1,
            title: "Pending",
            active: true,
        },
        {
            id: 2,
            title: "Approved",
            active: false,
        },
        {
            id: 3,
            title: "Cancelled",
            active: false,
        },
    ]);
    return (
        <>
            <PageTitle>Reservation</PageTitle>
            <Tab Object={isTab} setObject={setTab} />
            <Table />
        </>
    );
}
