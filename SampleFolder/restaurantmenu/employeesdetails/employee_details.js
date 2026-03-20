const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, especializacao: 'javascript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, especializacao: 'python'},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, especializacao: 'aws'},
      //... Mais registros de funcionários podem ser adicionados aqui
    ];

// Função para exibir todos os funcionários
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
    }

function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }

function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
    }
    
function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'nenhum funcionário foi encontrado com este ID';
       }
   }

function findEmployeeByEspecializacao(employeeEspecializacao){
    const foundEmployee = employees.find(
        employee => employee.especializacao === employeeEspecializacao
    );

    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.especializacao}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML =
        'Nenhum funcionário foi encontrado com esta especialização';
    }
}


// ✅ Adicionar funcionário (COM MELHORIAS)
function addEmployee() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const department = document.getElementById('department').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const especializacao = document.getElementById('especializacao').value;

    // 🔒 Validação
    if (!name || !age || !department || !salary || !especializacao) {
        alert("Preencha todos os campos!");
        return;
    }

    // 🔢 ID automático
    const newId = employees.length > 0 
        ? employees[employees.length - 1].id + 1 
        : 1;

    const newEmployee = {
        id: newId,
        name,
        age,
        department,
        salary,
        especializacao
    };

    employees.push(newEmployee);

    alert("Funcionário adicionado com sucesso!");

    // 🔄 Atualiza lista
    displayEmployees();

    // 🧹 Limpar campos
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('department').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('especializacao').value = '';
}