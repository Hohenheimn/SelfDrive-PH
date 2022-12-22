import React, { useState } from "react";
import Image from "next/image";

export default function CompanyInformation() {
    const [isInformation, setInformation] = useState({
        name: "Self Drive Philippines",
        address: "GMA Cavite",
        phone: "09999999999",
        email: "selftDrive@gmail.com",
        profile_photo_path: "/images/Logo.jpg",
    });
    const [isEdit, setEdit] = useState(false);
    return (
        <div className=" w-full flex py-10 px-5">
            <ul className="flex w-full flex-col justify-center items-center">
                <li className=" w-2/4 flex justify-center items-center">
                    <aside className="relative w-[200px] h-[200px] overflow-hidden rounded-full shadow-lg">
                        <Image
                            src={isInformation.profile_photo_path}
                            fill
                            alt=""
                        />
                    </aside>
                </li>
                <li className="w-2/4 py-5 flex justify-center items-center pr-5">
                    <form
                        action=""
                        className={`${
                            !isEdit && "disabled"
                        } w-full flex flex-col`}
                    >
                        <input
                            type="text"
                            value={isInformation.name}
                            className="text-[32px] text-ThemeOrange font-bold mb-5 text-center"
                            onChange={(e) =>
                                setInformation({
                                    ...isInformation,
                                    name: e.target.value,
                                })
                            }
                        />
                        <input
                            type="text"
                            value={isInformation.address}
                            className="text-[16px] text-ThemeBlue font-medium mb-5 text-center"
                            onChange={(e) =>
                                setInformation({
                                    ...isInformation,
                                    address: e.target.value,
                                })
                            }
                        />
                        <input
                            type="text"
                            value={isInformation.phone}
                            className="text-[16px] text-ThemeBlue font-medium mb-5 text-center"
                            onChange={(e) =>
                                setInformation({
                                    ...isInformation,
                                    phone: e.target.value,
                                })
                            }
                        />
                        <input
                            type="text"
                            value={isInformation.email}
                            className="text-[16px] text-ThemeBlue font-medium mb-5 text-center"
                            onChange={(e) =>
                                setInformation({
                                    ...isInformation,
                                    email: e.target.value,
                                })
                            }
                        />
                        <div className="flex justify-end">
                            {!isEdit ? (
                                <aside
                                    className="ThemeButton inline-block cursor-pointer"
                                    onClick={() => setEdit(true)}
                                >
                                    Edit
                                </aside>
                            ) : (
                                <button
                                    className="ThemeButton inline-block"
                                    onClick={() => setEdit(false)}
                                >
                                    Save
                                </button>
                            )}
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    );
}
