import Table from "../../../Components/Table";
import {useState} from "react";
import {deleteEmployee, getEmployees} from "../../../api/employees";
import {BiPencil, BiTrash} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

export default function EmployeesTable() {
    const [rows, setRows] = useState([]);

    const navigate = useNavigate();

    const update = ({page, limit, search}) => {
        return getEmployees(page, limit, search).then(setRows)
    }

    return <div className={""}>
        <Table
            headers={{
                firstname: {title: 'Name'},
                lastname: {title: 'Last Name'},
                email: {title: 'email'},
                actions: {title: 'Options'},
            }}
            rows={rows}
            update={update}
            actions={[
                {
                    icon: (size) => <BiTrash size={size}/>,
                    action: async (row) => {
                        await deleteEmployee(row._id)
                    }
                },
                {
                    icon: (size) => <BiPencil size={size}/>,
                    action: (row) => {
                        navigate(`/employees/${row._id}`)
                    }
                }]}/>
    </div>
}