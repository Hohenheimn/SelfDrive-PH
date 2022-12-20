import React, { useState } from "react";
import PageTitle from "../../components/Admin/PageTitle";
import Table from "../../components/Admin/Reservation/Table";
import Tab from "../../components/Admin/Tab";
import { useRouter } from "next/router";
import DetailForm from "../../components/Admin/Reservation/DetailForm";

export default function Reservation() {
    const router = useRouter();
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
    const ActiveTab = isTab.filter((item) => item.active === true);

    return (
        <>
            {router.query.id !== undefined && <DetailForm />}
            <PageTitle>Reservation</PageTitle>
            <Tab Object={isTab} setObject={setTab} />
            <Table tab={ActiveTab[0].title} />
        </>
    );
}
