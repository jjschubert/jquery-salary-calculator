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
    };
    console.log(employee);
    employeeList.push(employee);
    console.log(employeeList);
    appendToTable();
}


function appendToTable() {
    //clear employees from DOM
    $('#displayData').empty();
    console.log(employeeList)
    //add each employee
    for (let anEmployee of employeeList) {
        console.log(anEmployee.lastName);
        $('tbody').append(
            `<tr>
            <td>${anEmployee.firstName}</td>
            <td>${anEmployee.lastName}</td>
            <td>${anEmployee.id}</td>
            <td>${anEmployee.title}</td>
            <td>${anEmployee.annualSalary}</td>
            <td>delete button</td>
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