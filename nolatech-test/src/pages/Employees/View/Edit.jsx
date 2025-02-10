import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEmployee, updateEmployee} from "../../../api/employees";
import TextInput from "../../../Components/Input";
import Toggle from "../../../Components/Toggle";
import {ROLES} from "../../../constants";
import Button from "../../../Components/Button";
import toast, {Toaster} from "react-hot-toast";

export default function EmployeeEdit() {
    const {id} = useParams()

    const navigate = useNavigate()

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [role, setRole] = useState();

    useEffect(() => {
        getEmployee(id).then((employee) => {
            setFirstname(employee.firstname);
            setLastname(employee.lastname);
            setUsername(employee.username);
            setEmail(employee.email);
            setRole(employee.role);
        })
    }, []);

    return <div className={"grid grid-cols-1 gap-4"}>
        <Toaster/>
        <div className={"grid grid-cols-2 gap-4"}>
            <TextInput label={"First Name"} value={firstname} setValue={setFirstname}/>
            <TextInput label={"Last Name"} value={lastname} setValue={setLastname}/>
            <TextInput label={"Username"} value={username} setValue={setUsername}/>
            <TextInput label={"E-mail"} value={email} setValue={setEmail}/>
            <Toggle options={ROLES} selectedOption={role} label={"Role"} selectValue={setRole}/>
        </div>
        <div className={"flex justify-end gap-2"}>
            <Button title={'Cancel'} onClick={() => navigate(-1)} className={"bg-red-600"}/>
            <Button title={'Save'}
                    onClick={() => updateEmployee({
                        firstname,
                        lastname,
                        username,
                        role,
                        email
                    }, id).then(() => {
                        toast("Successfully Saved", {
                            position: "top-center",
                            duration: 3000,
                            style: {
                                backgroundColor: "#48d50b",
                                color: "white",
                            },
                            id: "success-save",
                        });
                    }).catch(() => {
                        toast("Failed to saved the employee, check that data and try again", {
                            position: "top-center",
                            duration: 3000,
                            style: {
                                backgroundColor: "#f91f1f",
                                color: "white",
                            },
                            id: "success-save",
                        });
                    })}/>
        </div>
    </div>
}