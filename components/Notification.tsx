import Link from "next/link";
import React from "react";

export default function Notification() {
    return (
        <Link
            href="/admin/reservation"
            className="h-[50px] flex items-center w-full rounded-md bg-[#73e573] shadow-md p-5 font-medium text-ThemeBlue mb-5"
        >
            You have a reservation need to approve
            <span className="ml-2 h-5 w-5 bg-red-600 flex justify-center items-center rounded-full text-white">
                2
            </span>
        </Link>
    );
}
