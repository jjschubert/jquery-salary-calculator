$(document).ready(readyNow);
let employeeList = [];
// let employee = {
//     firstName: firstName,
//     lastName: lastName,
//     id: id,
//     title: title,
//     annualSalary: annualSalary,
// };

function readyNow() {
    console.log('jquery running')
    $('#submitEmployee').on('click', addEmployee);
}

function addEmployee() {
    console.log('in add employee function');
    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: Number($('#salaryInput').val()),
    };
    console.log(employee);
    employeeList.push(employee);
    console.log(employeeList);
    appendToTable();
};


function appendToTable() {
    $('#employeeTableData').empty();
    for (let employee in employeeList) {
        console.log($('#firstNameInput').val());
        console.log(employee.lastName);
        $('#displayEmployeeData').append(
            `<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <th>delete button</td>
            </tr>
            `
        );
    }
}

console.log('js connected');


// {/* <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Annual Salary</th>
//             <th></th>
//         </tr> */}

// Jquery/JS
// - submit click handler
// - read form inputs
// - append to DOM table
// - add monthly salary info to monthly cost
// - add red logic for over $20,000 month
// - delete button with each employee
// - clear employee on click