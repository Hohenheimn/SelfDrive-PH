import React, { useState, useEffect } from "react";
import ModalTemp from "../../../ModalTemp";
import Image from "next/image";

type Props = {
    setID: Function;
    isID: number;
};

export default function Detail({ setID, isID }: Props) {
    const [isBranch, setBranch] = useState({
        name: "Christmass Promo",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ducimus!",
        location: "GMA Cavite",
    });

    useEffect(() => {
        if (isID < 0) {
            setBranch({
                name: "",
                description: "",
                location: "",
            });
        }
    });

    return (
        <ModalTemp>
            <form action="">
                <ul className="flex flex-wrap justify-between">
                    <li className="w-[48%] mb-5">
                        <label htmlFor="">Name:</label>
                        <input
                            type="text"
                            value={isBranch.name}
                            className="w-full font-medium"
                            onChange={(e) =>
                                setBranch({
                                    ...isBranch,
                                    name: e.target.value,
                                })
                            }
                        />
                    </li>
                    <li className="w-[48%] mb-5">
                        <label htmlFor="">Location:</label>
                        <input
                            type="text"
                            value={isBranch.location}
                            className="w-full font-medium"
                            onChange={(e) =>
                                setBranch({
                                    ...isBranch,
                                    location: e.target.value,
                                })
                            }
                        />
                    </li>

                    <li className="w-full mb-5 flex flex-col">
                        <label htmlFor="">Description</label>
                        <textarea
                            name=""
                            id=""
                            cols={10}
                            rows={5}
                            value={isBranch.description}
                            onChange={(e) =>
                                setBranch({
                                    ...isBranch,
                                    description: e.target.value,
                                })
                            }
                        ></textarea>
                    </li>

                    <li className="w-full justify-between items-center flex">
                        <aside
                            className=" cursor-pointer"
                            onClick={() => setID(null)}
                        >
                            Cancel
                        </aside>
                        <button className=" ThemeButton">Save</button>
                    </li>
                </ul>
            </form>
        </ModalTemp>
    );
}
