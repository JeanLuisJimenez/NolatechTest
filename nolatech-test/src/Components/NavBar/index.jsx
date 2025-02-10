import {Link} from "react-router-dom";

export default function NavBar() {
    return <div className={"grid h-24 w-full bg-blue-500 absolute top-0 left-0 p-4 grid-cols-5 items-center"}>
        <div className={"text-3xl font-semibold text-white"}>
            Logo
        </div>
        <div className={"col-span-3"}>
            <ul className={"flex gap-4 text-xl font-semibold justify-around text-white"}>
                <li className={"cursor-pointer"}>
                    <Link to={"/employees"} className={"hover:underline underline-offset-2"}>Employees</Link>
                </li>
                <li className={"cursor-pointer"}>
                    <Link to={"/evaluations"} className={"hover:underline underline-offset-2"}>Evaluations</Link>
                </li>
                <li className={"cursor-pointer"}>
                    <Link to={"/reports"} className={"hover:underline underline-offset-2"}>Reports</Link>
                </li>
            </ul>
        </div>
        <div></div>
    </div>
}