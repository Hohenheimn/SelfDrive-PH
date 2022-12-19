import React from "react";

export default function Table() {
    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    className="mb-5 px-3 py-2 shadow-md w-full max-w-[400px]"
                />
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
                            <th>lorem</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>lorem ipsum</td>
                            <td>lorem ipsum</td>
                            <td>lorem ipsum</td>
                            <td>lorem ipsum</td>
                            <td>lorem ipsum</td>
                            <td>lorem ipsum</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
