import store from "../redux/store";
import {jwtDecode} from "jwt-decode";

export function isAuth() {
    return (store.getState().auth.userInfo || jwtDecode(localStorage.getItem("nolatest:auth")))?.exp * 1000 > new Date().valueOf()
}