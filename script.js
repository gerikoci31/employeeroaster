// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data


function collectEmployees() {
  let employees = [];
  let addEmployee = true;

  while (addEmployee) {
      let firstName = prompt("Enter employee's first name:");
      let lastName = prompt("Enter employee's last name:");
      let salaryInput = prompt("Enter employee's salary:");
      let salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);

      employees.push({
          firstName: firstName,
          lastName: lastName,
          salary: salary
      });

      addEmployee = confirm("Do you want to add another employee?");
  }

  return employees;
}

function displayAverageSalary(employees) {
  let totalSalary = 0;

  // Calculate the total sum of salaries
  for (let i = 0; i < employees.length; i++) {
      totalSalary += employees[i].salary;
  }

  // Calculate the average salary
  let averageSalary = totalSalary / employees.length;

  // Display the average salary to the console
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
}

// Collect employee data
let employeesData = collectEmployees();

// Calculate and display the average salary
displayAverageSalary(employeesData);







// Select a random employee
const getRandomEmployee = function(employees) {
  let randomEmployee = getRandomEmployee(employees);
  console.log("Random Employee",randomEmployee);
  
 }


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
