import {Outlet, useNavigate} from "react-router-dom";
import NavBar from "../Components/NavBar";
import {useEffect} from "react";
import store from "../redux/store";
import {isAuth} from "../utils/auth";

export default function Main() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth())
            navigate('/authentication/login')

        store.subscribe(() => {
            if (!isAuth())
                navigate('/authentication/login')
        })
    }, []);

    return <div className={"flex flex-col items-center justify-center h-full overflow-y-auto overflow-x-hidden"}>
        <NavBar/>
        <div className={"h-full w-full mt-24 p-4"}>
            <Outlet/>
        </div>
    </div>
}