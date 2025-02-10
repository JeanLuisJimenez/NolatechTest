const employeeModel = require("../models/employee");
const userModel = require("../models/user");

function createEmployee(employee) {
    return employeeModel.create(employee);
}

async function getEmployees(page, limit, search) {
    const employees = await employeeModel
        .find({
            $or: [
                {firstname: {$regex: search || "", $options: "i"}},
                {lastname: {$regex: search || "", $options: "i"}},
            ],
        }, {}, {skip: limit * page, limit})

        .exec()

    return Promise.all(employees.map(async (employee) => {
        const user = await userModel.findById(employee.userId)
        delete user._doc.password
        delete user._doc._id

        return {...employee._doc, ...user._doc};
    }));
}

async function getEmployee(id) {
    const employee = await employeeModel.findById(id)
    const user = await userModel.findById(employee.userId)
    delete user._doc.password
    delete user._doc._id
    delete user._doc.__v

    return {...employee._doc, ...user._doc}
}

async function updateEmployee(employee, id) {
    return employeeModel.findByIdAndUpdate(id, {
        firstname: employee.firstname,
        lastname: employee.lastname,
    }).then((updatedEmployee) => userModel.findByIdAndUpdate(updatedEmployee.userId, {
        email: employee.email,
        role: employee.role
    }))
}

module.exports = {
    createEmployee,
    getEmployees,
    getEmployee,
    updateEmployee
};
