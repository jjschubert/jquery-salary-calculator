$(document).ready(readyNow);
let employeeList = [];

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
    }
    console.log(employee);
    employeeList.push(employee)
    console.log(employeeList)
    appendToTable();
}

function appendToTable() {
 $('#employeeTableData').empty();
    for (let employee in employeeList) {
        console.log(employee.firstName);
        $('#employeeTableData').append(
            `<tr>
            <th>${employee.firstName}</th>
            <th>${employee.lastName}</th>
            <th>${employee.id}</th>
            <th>${employee.title}</th>
            <th>${employee.annualSalary}</th>
            <th>delete button</th>
            </tr>
            `
        )
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