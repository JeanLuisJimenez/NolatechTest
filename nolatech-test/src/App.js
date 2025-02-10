import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NotFound from "./pages/Errors/404";
import AuthLayout from "./Layouts/Authentication";
import Login from "./pages/Auth/Login";
import Main from "./Layouts/Main";
import EmployeesTable from "./pages/Employees/View/Table";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {signIn} from "./redux/authSlice";
import SignIn from "./pages/Auth/Signin";
import EmployeeEdit from "./pages/Employees/View/Edit";
import {jwtDecode} from "jwt-decode";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(signIn(jwtDecode(localStorage.getItem("nolatest:auth"))))
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/authentication" Component={AuthLayout}>
                    <Route path="*" Component={NotFound}/>
                    <Route path="/authentication/sign-in" Component={SignIn}/>
                    <Route path="/authentication/login" Component={Login} index={true}/>
                </Route>
                <Route path={"/"} Component={Main}>
                    <Route path="*" Component={NotFound}/>
                    <Route path="/employees" Component={EmployeesTable}/>
                    <Route path="/employees/:id" Component={EmployeeEdit}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
