import React, { useState } from "react";
import Table from "../../components/Admin/Units/Table";
import PageTitle from "../../components/Admin/PageTitle";
import { useRouter } from "next/router";
import Form from "../../components/Admin/Units/Form";

export default function Units() {
    const router = useRouter();
    const [isSample, setSample] = useState(false);
    return (
        <div>
            {router.query.id !== undefined && <Form setState={setSample} />}
            <PageTitle>Units</PageTitle>
            <Table />
        </div>
    );
}
