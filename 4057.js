// CODE :1
function calculator(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        default:
            return 'Invalid operator';
    }
}
console.log("CODE-1 OUTPUT:")
console.log("simple calculator calculations are:")
console.log(calculator(9, 6, '-')); 
console.log(calculator(10, 0, '/'));
console.log(calculator(7, 2, '%')); 

// CODE :2 
function sumEN(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log("CODE-2 OUTPUT:")
console.log("Sum of even numbers is:")
console.log(sumEN([2, 1, 4, 3, 5, 6])); 
console.log(sumEN([2, 1, 4, 9, 2, 6])); 

// CODE :3 
const Person = {
    firstName: 'Sumanth',
    lastName: 'Rayankula',
    age: 20,
    getFullName() {
        return ${this.firstName} ${this.lastName};
    },
    incrementAge() {
        this.age += 1;
    }
};

console.log("CODE-3 OUTPUT:");
console.log("Name and age:");
console.log(Person.getFullName()); 
Person.incrementAge();
console.log(Person.age);