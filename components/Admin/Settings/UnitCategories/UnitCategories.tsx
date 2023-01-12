import { useRouter } from "next/router";
import React, { useState } from "react";
import LinkTab from "../../LinkTab";
import Brand from "./Brand/Brand";
import Classification from "./Classification/Classification";
import Inclusion from "./Inclusion/Inclusion";

type Props = {
    currentPage: string;
};

export default function UnitCategories({ currentPage }: Props) {
    const router = useRouter();
    const pageName: any = router.query.page;
    const [isTab, setTab] = useState([
        {
            id: 1,
            title: "Brand",
            active: "brand",
            url: "/admin/settings/unit-categories/brand",
        },
        {
            id: 2,
            title: "Classification",
            active: "classification",
            url: "/admin/settings/unit-categories/classification",
        },
        {
            id: 3,
            title: "Inclusions",
            active: "inclusions",
            url: "/admin/settings/unit-categories/inclusions",
        },
    ]);
    return (
        <div>
            <LinkTab Object={isTab} currentPage={currentPage} />

            {pageName[1] === "brand" && <Brand />}
            {pageName[1] === "classification" && <Classification />}
            {pageName[1] === "inclusions" && <Inclusion />}
        </div>
    );
}
