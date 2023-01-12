import React from "react";

type Props = {
    isSearch: string;
    setSearch: Function;
    toggleAdd: Function;
};

export default function SearchAdd({ isSearch, setSearch, toggleAdd }: Props) {
    return (
        <div className="flex justify-between items-center mb-5">
            <aside>
                <input
                    type="text"
                    placeholder="Search"
                    value={isSearch}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-5 py-2 w-[300px] shadow-md"
                />
            </aside>
            <button
                className="ThemeButton"
                onClick={() => {
                    toggleAdd(true);
                }}
            >
                Add Branch
            </button>
        </div>
    );
}
