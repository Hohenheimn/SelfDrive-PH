import Link from "next/link";
import React from "react";

export default function DetailForm() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20 bg-[#00000061]">
            <form className="w-[95%] max-w-[600px] bg-white p-10 rounded-md">
                <h1 className="text-[16px] font-bold text-ThemeOrange uppercase mb-5">
                    Reservation Detail
                </h1>
                <ul className=" flex-wrap flex justify-between">
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Unit</label>
                        <h1 className=" text-ThemeBlue font-medium">TMX 155</h1>
                    </li>
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Client/Customer name</label>
                        <h1 className=" text-ThemeBlue font-medium">
                            Jomari Tiu
                        </h1>
                    </li>
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Start Date</label>
                        <h1 className=" text-ThemeBlue font-medium">
                            12/12/2022
                        </h1>
                    </li>
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">End Date</label>
                        <h1 className=" text-ThemeBlue font-medium">
                            12/15/2022
                        </h1>
                    </li>
                    <li className="flex flex-col w-full mb-2">
                        <label htmlFor="">Notes</label>
                        <p className=" text-ThemeBlue">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vero neque sed mollitia dolorem. Nobis
                            quibusdam velit non, recusandae necessitatibus rerum
                            soluta ipsam vitae vero similique nemo facere
                            asperiores ratione consequuntur!
                        </p>
                    </li>
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Pickup location</label>
                        <h1 className=" text-ThemeBlue font-medium">
                            san Jose GMA Cavite
                        </h1>
                    </li>
                    <li className="flex flex-col w-[48%] mb-2">
                        <label htmlFor="">Destination</label>
                        <h1 className=" text-ThemeBlue font-medium">
                            Taguig City
                        </h1>
                    </li>
                    <li className="flex justify-end w-full items-center mt-10">
                        <Link className=" cursor-pointer mr-5" href="">
                            Back
                        </Link>
                        <button className="ThemeButton mr-3">Pending</button>
                        <button className="ThemeButton mr-3">Approve</button>
                        <button className="ThemeButton">Cancel</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
