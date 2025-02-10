import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import store from "../redux/store";
import {isAuth} from "../utils/auth";

export default function AuthLayout() {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth())
            navigate('/')

        store.subscribe(() => {
            if (isAuth())
                navigate('/')
        })
    }, [isAuth]);

    return (
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500 to-cyan-300">
            <Outlet/>
        </div>
    );
}
