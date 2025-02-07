import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./pages/Errors/404";
import AuthLayout from "./Layouts/Authentication";
import SignIn from "./pages/Auth/Signin";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" Component={NotFound} />
        <Route path="/authentication" Component={AuthLayout}>
          <Route path="/authentication/sign-in" Component={SignIn} />
          <Route path="/authentication/login" Component={Login} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
