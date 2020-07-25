$(document).ready(readyNow);
let employeeList = [];

function readyNow() {
    console.log('jquery running');
    $('#submitEmployee').on('click', addEmployee);
    $('#displayData').on('click', '.deleteBtn', deleteEmployee);
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
    let monthlySalarySum = 0;
    //add each employee
    for (let anEmployee of employeeList) {
        console.log(anEmployee.lastName);
        $('tbody').append(
            `<tr>
            <td>${anEmployee.firstName}</td>
            <td>${anEmployee.lastName}</td>
            <td class='employeeId'>${anEmployee.id}</td>
            <td>${anEmployee.title}</td>
            <td>${anEmployee.annualSalary}</td>
            <td id='deleteBtnContainer'><button id=${anEmployee.id} class="btn btn-secondary deleteBtn">Delete</button></td>
            </tr>
            `
        );
        monthlySalarySum += anEmployee.annualSalary / 12;
        $('#totalMonthly').text(` $${monthlySalarySum.toFixed(2)}`);
    }

    if (monthlySalarySum > 20000) {
        $('#totalMonthly').addClass('turnRed')
    };
    $('input').val('');
}

function deleteEmployee(element) {
    console.log('deleteEmployee running')
    console.log(element.target.id);

    //get id of person to be removed
    let toBeRemoved = element.target.id;
    console.log(toBeRemoved);

    //define for later
    let employeeToBeDeleted;
    console.log(employeeToBeDeleted);

    //search array for object via loop
    for (anEmployee of employeeList) {
        if (anEmployee.id == toBeRemoved) {
            //set employeeToBeDeleted to employee object containing the matching id
            employeeToBeDeleted = anEmployee;
        }
    }
    console.log(employeeToBeDeleted);
    //find index of employee obj with matching id
    let indexOfEmployeeToBeDeleted = employeeList.indexOf(employeeToBeDeleted);

    //remove that employee from array
    employeeList.splice(indexOfEmployeeToBeDeleted, 1)
    console.log(employeeList);
    //remove empty row
    $(this).closest('tr').remove();
}


console.log('js connected');



// Jquery/JS
// x - submit click handler
// x - read form inputs
// x - append to DOM table
// x - add monthly salary info to monthly cost
// x - add red logic for over $20,000 month
// x - delete button with each employee
// x - clear employee on click
// x - update readme