// // // // EX 1
// // // class Shape {
// // //   constructor(name, side, sideLength) {
// // //     this.name = name;
// // //     this.side = side;
// // //     this.sideLength = sideLength;
// // //   }
// // //   calcPerimeter() {
// // //     let perimeter = this.side * this.sideLength;
// // //     console.log(`the perimeter of the shape is ${perimeter}`);
// // //   }
// // // }
// // // let triangle = new Shape("triangle", 3, 3);
// // // triangle.calcPerimeter();

// // // class Square extends Shape {
// // //   constructor(name, side, sideLength) {
// // //     super(name, side);
// // //     this.sideLength = sideLength;
// // //   }
// // //   calcArea() {
// // //     let area = this.sideLength * this.sideLength;
// // //     console.log(`the area of the square is ${area}`);
// // //   }
// // // }

// // // let square = new Square("square", 4, 6);
// // // square.calcPerimeter();
// // // square.calcArea();

// // // // EX 2
// // // class Circle {
// // //   static PI = 3.14;
// // //   constructor(radius) {
// // //     this.radius = radius;
// // //   }
// // //   Area() {
// // //     let area = Circle.PI * this.radius * this.radius;
// // //     console.log("circle area = " + area);
// // //   }
// // // }
// // // let circle = new Circle(3);
// // // circle.Area();

// // // class Account {
// // //   static create(name) {
// // //     return new Account(0, name);
// // //   }
// // //   constructor(balance, owner) {
// // //     this.balance = balance;
// // //     this.owner = owner;
// // //   }
// // // }

// // // Account.create("john");

// // // console.log(Account.create("john"));

// // // EX 3
// // // class Person {
// // //   constructor(name) {
// // //     this.fname = name;
// // //   }
// // //   get upperCase() {
// // //     return this.fname;
// // //   }
// // //   set upperCase(name) {
// // //     this.fname = name;
// // //     return this.fname;
// // //   }
// // // }
// // // const person1 = new Person();
// // // person1.name = "john";
// // // console.log(person1.name.toUpperCase());

// // // class Product {
// // //   constructor(name, price) {
// // //     this.name = name;
// // //     this.pri = price;
// // //   }
// // //   get price() {
// // //     return this.pri;
// // //   }
// // //   set price(price) {
// // //     this.pri = price;
// // //     return this.pri;
// // //   }
// // // }

// // // const product1 = new Product("milk", 1.1234);
// // // product1.price = Math.round(product1.price);
// // // console.log(product1.price);

// // // // EX 4
// // // class Circle {
// // //   #radius;
// // //   constructor(radius) {
// // //     this.#radius = radius;
// // //   }
// // //   get diameter() {
// // //     return this.#radius * 2;
// // //   }
// // // }

// // // const circle1 = new Circle(6);
// // // console.log(circle1.diameter);
// // // EX 5

// // class Person {
// //   #firstName;
// //   #lastName;
// //   #age;
// //   constructor(first, last, num) {
// //     this.#firstName = first;
// //     this.#lastName = last;
// //     this.#age = num;
// //   }
// //   displayInfo() {
// //     return (
// //       this.#firstName + " " + this.#lastName + " is " + this.#age + "years old"
// //     );
// //   }
// //   get age() {
// //     return this.#age;
// //   }
// //   set age(num) {
// //     if (num < 0) {
// //       this.#age = num;
// //       console.log(`invalid age`);
// //     }
// //   }
// // }
// // const person1 = new Person("john", "bob", 30);
// // console.log(person1.displayInfo());
// // person1.age = -30;
// // console.log(person1.age);
// // // EX 6
// // class BankAccount {
// //   constructor(accountNumber, accountHolder, accountBalance) {
// //     this.accountNumber = accountNumber;
// //     this.accountHolder = accountHolder;
// //     this.accountBalance = accountBalance;
// //   }
// //   deposit(amount) {
// //     this.accountBalance = this.accountBalance + amount;
// //     return this.accountBalance;
// //   }
// //   withdraw(amount) {
// //     this.accountBalance = this.accountBalance - amount;
// //     return this.accountBalance;
// //   }
// //   checkBalance() {
// //     console.log(this.accountBalance);
// //   }
// // }

// // const myAccount = new BankAccount("123456", "John Doe", 100);
// // console.log(myAccount.checkBalance());
// // myAccount.deposit(50);
// // console.log(myAccount.checkBalance());
// // myAccount.withdraw(25);
// // myAccount.checkBalance();

// // // EX 7
// // class Animal {
// //   constructor(name, species) {
// //     this.name = name;
// //     this.species = species;
// //   }
// //   makeSound() {
// //     console.log(this.name + "make a sound");
// //   }
// // }
// // class Dogs extends Animal {
// //   constructor(name, species) {
// //     super(name, species);
// //   }
// //   bark() {
// //     console.log("the dog is barking");
// //   }
// // }
// // class Cats extends Animal {
// //   constructor(name, species) {
// //     super(name, species);
// //   }
// //   meow() {
// //     console.log("the cat is meowing");
// //   }
// // }
// /**=====================================================================s */
// // PART 2
// // ex 1

// class Person {
//   constructor(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   getFullName() {
//     return this.name + " " + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(name, lastName, age, id) {
//     super(name, lastName, age);
//     this.id = id;
//   }
//   getDetails() {
//     return this.getFullName() + " " + this.age + " " + this.id;
//   }
// }

// const student1 = new Student("john", "bob", 12, 123456);
// console.log(student1.getDetails());

// // EX 2

// class BankAccount {
//   _balance;
//   deposit(value) {
//     return (this._balance += value);
//   }
//   get balance() {
//     return this._balance;
//   }
//   set balance(balance) {
//     this._balance = balance;
//   }
// }
// const account = new BankAccount();
// account.balance = 250;
// account.deposit(100);
// console.log(`Balance: ${account.balance}`);

// // EX 3

// class Car {
//   #make;
//   #model;
//   #year;
//   constructor(make, model, year) {
//     this.#make = make;
//     this.#model = model;
//     this.year = year;
//   }
//   get details() {
//     return `${this.#make}, ${this.#model}, ${this.#year}`;
//   }
//   set setMake(make) {
//     this.#model = model;
//   }
//   set setModel(model) {
//     this.#make = make;
//   }
//   set setYear(year) {
//     this.#year = year;
//   }
//   getDetails(make, model, year) {
//     this.#make = make;
//     this.#model = model;
//     this.#year = year;
//     return `${this.#make}, ${this.#model}, ${this.#year}`;
//   }
// }
// const car1 = new Car();
// car1.make = "toyota";
// car1.model = "yaris";
// car1.year = 2020;
// console.log(car1.getDetails());

// // EX 4
class BankAccount {
  #balance;
  #owner;
  #transaction;
  constructor(balance, owner) {
    this.#balance = balance;
    this.#owner = owner;
    this.#transaction = [];
  }
  deposit(value) {
    this.#transaction.push(value);
    return (this.#balance += value);
  }
  withdraw(value) {
    this.#transaction.push(value);
    return (this.#balance -= value);
  }
  getBalance() {
    return this.#balance;
  }
  getTransactions() {
    return this.#transaction;
  }
}
const bankAccount1 = new BankAccount(100, "john");
console.log(bankAccount1.deposit(100));
console.log(bankAccount1.getBalance());
console.log(bankAccount1.withdraw(50));
console.log(bankAccount1.getBalance());
console.log(bankAccount1.getTransactions());

// ex 5
class Animals {
  speed = 0;
  constructor(name) {
    this.name = name;
  }
  run(speed) {
    console.log(`the ${this.name} run ${speed} units `);
  }
  stop() {
    this.speed = 0;
    console.log(`the ${this.name} is now standing`);
  }
}

class Rabbit extends Animals {
  constructor(name) {
    super(name);
  }
  hide() {
    console.log(`${this.name} is hiding`);
  }
  stop() {
    super.stop();
    this.hide();
  }
}

const rabbit = new Rabbit("White Rabbit");
rabbit.stop();
rabbit.run(5);

// ex 6
class Calculator {
  add(num1, num2 = 0) {
    return num1 + num2;
  }
}

const sum = new Calculator();
console.log(sum.add());

// ex7

const formatString = (text, options = {}) => {
  if (options.uppercase) return text.toUpperCase();
  else if (options.lowercase) return text.toLowerCase();
  return text;
};
console.log(formatString("Hello World!"));
console.log(formatString("Hello World!", { uppercase: true }));
console.log(formatString("Hello World!", { lowercase: true }));

// EX 8
class Employee {
  constructor(salary) {
    if (this.constructor == Employee) {
      throw new Error("Object of Abstract Class cannot be created");
    }
    this.salary = salary;
  }
  getSalary(salary) {
    return this.salary;
  }
  getMonthlyBonus() {
    return console.error("Object of Abstract Class cannot be created");
  }
}

class Manager extends Employee {
  constructor(salary) {
    super(salary);
  }
  getMonthlyBonus() {
    return this.salary * 0.1;
  }
}
class Developer extends Employee {
  constructor(salary) {
    super(salary);
  }
  getMonthlyBonus() {
    return this.salary * 0.05;
  }
}

const manager = new Manager(50000);
console.log(manager.getSalary());
console.log(manager.getMonthlyBonus());
const developer = new Developer(40000);
console.log(developer.getSalary());
console.log(developer.getMonthlyBonus());
const emp = new Employee();
