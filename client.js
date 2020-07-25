$(document).ready(readyNow);
let employeeList = [];

function readyNow() {
    console.log('jquery running');
    $('#submitEmployee').on('click', addEmployee);
    $('#displayData').on('click', '#deleteBtn', deleteEmployee);
    //not working b/c '#deleteBtnContainer' not there on page load
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
            <td>${anEmployee.id}</td>
            <td>${anEmployee.title}</td>
            <td>${anEmployee.annualSalary}</td>
            <td id='deleteBtnContainer'><button id='deleteBtn' class="btn btn-secondary">Delete</button></td>
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

function deleteEmployee() {
    console.log('deleteEmployee running')
    $(this).closest('tr').remove();
    //need to delete this object from array - not working as is
    employeeList.filter(function(el){
        return el.firstName != 'Goose';
    })
}


console.log('js connected');



// Jquery/JS
// x - submit click handler
// x - read form inputs
// x - append to DOM table
// x - add monthly salary info to monthly cost
// x - add red logic for over $20,000 month
// x - delete button with each employee
// - clear employee on click
// - update readme