import { useRouter } from "next/router";
import React, { useState } from "react";
import LinkTab from "../../LinkTab";
import Brand from "./Brand/Brand";
import Classification from "./Classification/Classification";
import Inclusion from "./Inclusion/Inclusion";

export default function UnitCategories() {
    const router = useRouter();
    const pageName: any = router.query.page;
    const [isTab, setTab] = useState([
        {
            id: 1,
            title: "Brand",
            active: true,
            url: "/admin/settings/unit-categories/brand",
        },
        {
            id: 2,
            title: "Classification",
            active: false,
            url: "/admin/settings/unit-categories/classification",
        },
        {
            id: 3,
            title: "Inclusions",
            active: false,
            url: "/admin/settings/unit-categories/inclusions",
        },
    ]);
    return (
        <div>
            <LinkTab Object={isTab} setObject={setTab} />

            {pageName[1] === "brand" && <Brand />}
            {pageName[1] === "classification" && <Classification />}
            {pageName[1] === "inclusions" && <Inclusion />}
        </div>
    );
}
