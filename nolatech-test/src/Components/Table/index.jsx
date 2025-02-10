import {useEffect, useState} from "react";

export default function Table({headers = {}, rows = [], noPaging, update, actions}) {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(25)

    useEffect(() => {
        update(page, limit)
    }, []);

    return (
        <div className={"p-4 m-2 rounded-xl shadow"}>
            <table className={"w-full"}>
                <thead>
                <tr>
                    {Object.keys(headers).map(header => <th key={`header-${header}`}
                                                            className={"border-collapse [&:not(:last-child)]:border-r-2 p-2"}>{headers[header].title}</th>)}
                </tr>
                </thead>
                <tbody>
                {rows.map((row, index) => <tr key={`row-${index}`} className={"odd:bg-gray-100"}>
                    {Object.keys(headers).map(header => {
                        if (header === 'actions')
                            return <td key={`cell-${header}-${index}`}
                                       className={"flex gap-2 border-collapse [&:not(:last-child)]:border-r-2 p-2 justify-around"}>
                                {actions.map(({icon, action}, id) => {
                                    return <button key={`action-${index}-${id}`}
                                                   className={"bg-transparent border-none"}
                                                   onClick={() => action(row)}>
                                        {icon(20)}
                                    </button>
                                })}
                            </td>

                        return <td key={`cell-${header}-${index}`}
                                   className={"border-collapse [&:not(:last-child)]:border-r-2 p-2"}>{row[header]}</td>
                    })}
                </tr>)}
                </tbody>
            </table>
        </div>)
}