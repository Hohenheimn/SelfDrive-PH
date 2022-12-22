import React, { useEffect, useState } from "react";
import ModalTemp from "../../../ModalTemp";
import Image from "next/image";

type Props = {
    setID: Function;
    isID: number;
};

export default function Detail({ setID, isID }: Props) {
    const [isPromotional, setPromotional] = useState({
        name: "Christmass Promo",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ducimus!",
        photo_path: "/images/Sample.jpg",
        start_date: "12/12/2022",
        end_date: "01/12/2023",
        visible: "Visible",
    });

    useEffect(() => {
        if (isID < 0) {
            setPromotional({
                name: "",
                description: "",
                photo_path: "/images/Sample.jpg",
                start_date: "",
                end_date: "",
                visible: "",
            });
        }
    });
    return (
        <ModalTemp>
            <form action="">
                <ul className="flex flex-wrap justify-between">
                    <li className="w-full h-[200px] relative mb-5">
                        <Image
                            src={isPromotional.photo_path}
                            alt=""
                            className=" object-contain"
                            fill
                        />
                    </li>
                    <li className="w-[48%] mb-5">
                        <label htmlFor="">Name:</label>
                        <input
                            type="text"
                            value={isPromotional.name}
                            className="w-full font-medium"
                            onChange={(e) =>
                                setPromotional({
                                    ...isPromotional,
                                    name: e.target.value,
                                })
                            }
                        />
                    </li>
                    <li className="w-[48%] mb-5 flex flex-col">
                        <label htmlFor="">Status:</label>
                        <select
                            name=""
                            id=""
                            className="shadow-md px-2 py-1 text-[16px] "
                            value={isPromotional.visible}
                            onChange={(e) =>
                                setPromotional({
                                    ...isPromotional,
                                    visible: e.target.value,
                                })
                            }
                        >
                            <option value="Visible">Visible</option>
                            <option value="Not Visible">Not Visible</option>
                        </select>
                    </li>
                    <li className="w-full mb-5 flex flex-col">
                        <label htmlFor="">Description</label>
                        <textarea
                            name=""
                            id=""
                            cols={10}
                            rows={5}
                            value={isPromotional.description}
                            onChange={(e) =>
                                setPromotional({
                                    ...isPromotional,
                                    description: e.target.value,
                                })
                            }
                        ></textarea>
                    </li>
                    <li className="w-[48%] mb-5">
                        <label htmlFor="">Start Date:</label>
                        <input
                            type="text"
                            value={isPromotional.start_date}
                            className="w-full font-medium"
                            onChange={(e) =>
                                setPromotional({
                                    ...isPromotional,
                                    start_date: e.target.value,
                                })
                            }
                        />
                    </li>
                    <li className="w-[48%] mb-5 flex flex-col">
                        <label htmlFor="">End Date:</label>
                        <input
                            type="text"
                            value={isPromotional.end_date}
                            className="w-full font-medium"
                            onChange={(e) =>
                                setPromotional({
                                    ...isPromotional,
                                    end_date: e.target.value,
                                })
                            }
                        />
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
