# employeeroaster
Employee Roaster
Employee roaster is a company software to track your employees salaries.

Installation
Use the package manager to install the software.

function collectEmployees() { let employees = []; let addEmployee = true;

while (addEmployee) { let firstName = prompt("Enter employee's first name:"); let lastName = prompt("Enter employee's last name:"); let salaryInput = prompt("Enter employee's salary:"); let salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);

  employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
  });

  addEmployee = confirm("Do you want to add another employee?");
}

return employees; }


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)