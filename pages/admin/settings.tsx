import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LinkTab from "../../components/Admin/LinkTab";

export default function Setting() {
    const router = useRouter();
    useEffect(() => {
        router.push("/admin/settings/company-information");
    });
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
}
