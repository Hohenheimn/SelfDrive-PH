import React, { useState } from "react";
import LinkTab from "../../../components/Admin/LinkTab";
import { useRouter } from "next/router";
import CompanyInformation from "../../../components/Admin/Settings/CompanyInformation";
import PromotionalPost from "../../../components/Admin/Settings/PromotionalPost/PromotionalPost";
import Branch from "../../../components/Admin/Settings/Branch/Branch";
import Role from "../../../components/Admin/Settings/Role.tsx/Role";
import UnitCategories from "../../../components/Admin/Settings/UnitCategories/UnitCategories";

export default function Page() {
    const router = useRouter();
    const pageName: any = router.query?.page;

    const [isTab, setTab] = useState([
        {
            id: 1,
            title: "Company Information",
            active: true,
            url: "/admin/settings/company-information",
        },
        {
            id: 2,
            title: "Promotional Post",
            active: false,
            url: "/admin/settings/promotional-post",
        },
        {
            id: 3,
            title: "Branch",
            active: false,
            url: "/admin/settings/branch",
        },
        {
            id: 4,
            title: "Role",
            active: false,
            url: "/admin/settings/role",
        },
        {
            id: 5,
            title: "Unit Categories",
            active: false,
            url: "/admin/settings/unit-categories/brand",
        },
    ]);
    return (
        <div>
            <LinkTab Object={isTab} setObject={setTab} />
            {pageName[0] === "company-information" && <CompanyInformation />}
            {pageName[0] === "promotional-post" && <PromotionalPost />}
            {pageName[0] === "branch" && <Branch />}
            {pageName[0] === "role" && <Role />}
            {pageName[0] === "unit-categories" && <UnitCategories />}
        </div>
    );
}
