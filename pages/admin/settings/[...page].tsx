import React, { useState } from "react";
import LinkTab from "../../../components/Admin/LinkTab";
import CompanyInformation from "../../../components/Admin/Settings/CompanyInformation";
import PromotionalPost from "../../../components/Admin/Settings/PromotionalPost/PromotionalPost";
import MainBranch from "../../../components/Admin/Settings/Branch/MainBranch";
import Role from "../../../components/Admin/Settings/Role/Role";
import UnitCategories from "../../../components/Admin/Settings/UnitCategories/UnitCategories";

export default function Page({ page }: any) {
    const [isTab, setTab] = useState([
        {
            id: 1,
            title: "Company Information",
            active: "company-information",
            url: "/admin/settings/company-information",
        },
        {
            id: 2,
            title: "Promotional Post",
            active: "promotional-post",
            url: "/admin/settings/promotional-post",
        },
        {
            id: 3,
            title: "Branch",
            active: "branch",
            url: "/admin/settings/branch",
        },
        {
            id: 4,
            title: "Role",
            active: "role",
            url: "/admin/settings/role",
        },
        {
            id: 5,
            title: "Unit Categories",
            active: "unit-categories",
            url: "/admin/settings/unit-categories/brand",
        },
    ]);
    return (
        <div>
            <LinkTab Object={isTab} currentPage={page[3]} />
            {page[3] === "company-information" && <CompanyInformation />}
            {page[3] === "promotional-post" && <PromotionalPost />}
            {page[3] === "branch" && <MainBranch />}
            {page[3] === "role" && <Role />}
            {page[3] === "unit-categories" && <UnitCategories />}
        </div>
    );
}

export async function getServerSideProps({ resolvedUrl }: any) {
    const page = resolvedUrl;
    const splitUrl = page.split("/");
    return {
        props: {
            page: splitUrl,
        },
    };
}
