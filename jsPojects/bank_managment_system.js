// Bank Management System

let balance = 1000;

// Deposit Function
function deposit(amount) {
    balance = balance + amount;
    console.log("Deposit: ₹" + amount);
    console.log("Balance: ₹" + balance);
    console.log("----------------");
}

// Withdraw Function
function withdraw(amount) {
    if (amount <= balance) {
        balance = balance - amount;
        console.log("Withdraw: ₹" + amount);
        console.log("Balance: ₹" + balance);
    } else {
        console.log("Insufficient Balance");
    }
    console.log("----------------");
}

// Check Balance Function
function checkBalance() {
    console.log("Current Balance: ₹" + balance);
    console.log("----------------");
}

// Menu Function
function bank(choice, amount) {

    switch(choice) {

        case 1:
            deposit(amount);
            break;

        case 2:
            withdraw(amount);
            break;

        case 3:
            checkBalance();
            break;

        default:
            console.log("Invalid Choice");
    }
}

// Function Calls
bank(3);        // Check Balance
bank(1, 500);   // Deposit ₹500
bank(2, 300);   // Withdraw ₹300
bank(2, 1500);  // Withdraw ₹1500
bank(3);        // Final Balance