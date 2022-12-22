import React, { useState } from "react";
import PageTitle from "../../components/Admin/PageTitle";
import Table from "../../components/Admin/Reservation/Table";
import { useRouter } from "next/router";
import DetailForm from "../../components/Admin/Reservation/DetailForm";

export default function Reservation() {
    const router = useRouter();


    return (
        <>
            {router.query.id !== undefined && <DetailForm />}
            <PageTitle>Reservation</PageTitle>

            <Table />
        </>
    );
}
