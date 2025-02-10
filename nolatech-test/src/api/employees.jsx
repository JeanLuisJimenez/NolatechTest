import client from "./index";

export async function getEmployees(page = 0, limit = 25, search) {
    const url = `/employees?page=${page}&limit=${limit}`

    if (search)
        url.concat(`&search=${search}`)

    return client.get(url).catch(console.error)
}

export async function deleteEmployee(employeeId) {
    return client.delete(`/employees/${employeeId}`).catch(console.error)
}

export async function getEmployee(employeeId) {
    return client.get(`/employees/${employeeId}`).catch(console.error)
}

export async function updateEmployee(employee, id) {
    return client.put(`/employees/${id}`, employee).catch(console.error)
}
