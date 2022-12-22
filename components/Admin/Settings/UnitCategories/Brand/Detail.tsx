import React, { useState, useEffect } from "react";
import ModalTemp from "../../../../ModalTemp";

type Props = {
    setID: Function;
    isID: number;
};

export default function Detail({ setID, isID }: Props) {
    const [isRole, setRole] = useState({
        name: "TOYOTA",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ducimus!",
    });

    useEffect(() => {
        if (isID < 0) {
            setRole({
                name: "",
                description: "",
            });
        }
    });

    return (
        <ModalTemp>
            <form action="">
                <ul className="flex flex-wrap justify-between">
                    <li className="w-full mb-5">
                        <label htmlFor="">Name:</label>
                        <input
                            type="text"
                            value={isRole.name}
                            className="w-full font-medium"
                            onChange={(e) =>
                                setRole({
                                    ...isRole,
                                    name: e.target.value,
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
                            value={isRole.description}
                            onChange={(e) =>
                                setRole({
                                    ...isRole,
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
