// normal function
// let baseSalary, rate, overtime;

// function wages(baseSalary, overtime, rate) {
//   return baseSalary + (overtime * rate);
// }
// console.log(wages(30000, 10, 20));



//Encapsulation --- wrap the variables(properties) and functions(methods) inside the object
let Employee = {
    baseSalary: 30000,
    rate: 20,
    overtime: 10,
    wages: function () {
        return this.baseSalary + (this.overtime * this.rate)
    }
}
console.log(Employee.wages());


