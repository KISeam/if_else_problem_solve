// 1. Check if the number is even or odd
let number = parseInt(prompt("Enter a number: "));
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 2. Find the largest of three numbers
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
let num3 = parseInt(prompt("Enter third number: "));

if (num1 > num2 && num1 > num3) {
  console.log("Number 1 is largest");
} else if (num2 > num3) {
  console.log("Number 2 is largest");
} else {
  console.log("Number 3 is largest");
}

// 3. Grade determination
let marks = parseInt(prompt("Enter marks (0-100): "));
if (marks >= 80) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else if (marks >= 40) {
  console.log("C");
} else {
  console.log("F");
}

// 4. Leap year determination
let year = parseInt(prompt("Enter a year: "));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

// 5. Check if the number is even and divisible by 5
number = parseInt(prompt("Enter a number: "));
if (number % 2 === 0 && number % 5 === 0) {
  console.log("Even and divisible by 5");
} else {
  console.log("Not both");
}

// 6. Pass or fail determination
marks = parseInt(prompt("Enter exam marks: "));
if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 7. Determine the number of days in a month
let month = prompt("Enter the name of the month: ");
if (
  ["January", "March", "May", "July", "August", "October", "December"].includes(
    month
  )
) {
  console.log("31 days");
} else if (["April", "June", "September", "November"].includes(month)) {
  console.log("30 days");
} else if (month === "February") {
  year = parseInt(prompt("Enter the year: "));
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("29 days");
  } else {
    console.log("28 days");
  }
} else {
  console.log("Invalid month name");
}

// 8. Driving license eligibility check
let age = parseInt(prompt("Enter age: "));
if (age >= 18) {
  console.log("Eligible for driving license");
} else {
  console.log("Not eligible");
}

// 9. Determine if the number is positive, negative, or zero
number = parseInt(prompt("Enter a number: "));
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 10. Check if it's a holiday or a working day
let day = prompt("Enter the day: ");
if (["Saturday", "Sunday"].includes(day)) {
  console.log("Holiday");
} else {
  console.log("Working day");
}

// 11. E-commerce discount system
let price = parseFloat(prompt("Enter the product price: "));
let discount;
if (price > 500) {
  discount = price * 0.2;
} else if (price >= 200) {
  discount = price * 0.1;
} else {
  discount = 0;
}
let finalPrice = price - discount;
console.log(`Discounted price: ${finalPrice}`);

// 12. Password verification
let password = prompt("Enter password: ");
if (password === "") {
  console.log("Password cannot be empty");
} else if (password === "Admin@123") {
  console.log("Login Successful");
} else {
  console.log("Incorrect Password");
}

// 13. ATM cash deposit check
let balance = parseFloat(prompt("Enter account balance: "));
let withdrawal = parseFloat(prompt("Enter withdrawal amount: "));
if (withdrawal < 500) {
  console.log("Minimum withdrawal is 500");
} else if (withdrawal > balance) {
  console.log("Insufficient Balance");
} else {
  console.log("Transaction Successful");
}

// 14. Email and password verification
let email = prompt("Enter email: ");
password = prompt("Enter password: ");
if (email === "user@example.com" && password === "123456") {
  console.log("Welcome User");
} else if (email !== "user@example.com") {
  console.log("Invalid Email");
} else {
  console.log("Invalid Password");
}

// 15. FizzBuzz
for (let number = 1; number <= 100; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
