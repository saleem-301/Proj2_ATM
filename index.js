#! usr/bin/env node
import inquirer from "inquirer";
let balance = 50000;
for (var pinCode = 0; pinCode != 1234;) {
    let pin = await inquirer.prompt({
        name: "code",
        type: "number",
        message: "Enter Your Pin",
    });
    pinCode = pin.code;
    if (pinCode != 1234) {
        console.log('Invalid Pin');
        let query = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "would you like to perform another Transaction",
            choices: ["yes", "No"],
        });
        if (query.opt === "yes") {
            continue;
        }
        else {
            console.log("Thankyou for your Transaction");
        }
        break;
    }
    ;
}
while (pinCode === 1234) {
    let trans = await inquirer.prompt({
        name: "perform",
        type: "list",
        message: "Select the Transaction to Perform",
        choices: [
            "Cash Withdrawal",
            "Balance Enquiry",
            "With draw Rs 1000",
            "With draw Rs 5000",
            "With draw Rs 10000",
        ],
    });
    if (trans.perform === "Cash Withdrawal") {
        let amt = await inquirer.prompt({
            name: "Amount",
            type: "number",
            message: "Enter Amount",
        });
        if (balance >= amt.Amount &&
            amt.Amount >= 0 &&
            typeof (amt.Amount === "number")) {
            balance -= amt.Amount;
            console.log(`Your Current Balance is Rs.${balance}`);
        }
        else if (balance < amt.Amount) {
            console.log("Your Balance is Insufficient");
        }
        else if (amt.Amount < 0 || typeof amt.Amount === "number") {
            console.log("Please Enter Valid Amount");
        }
        let query = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "would you like to perform another Transaction",
            choices: ["yes", "No"],
        });
        if (query.opt === "yes") {
            continue;
        }
        else {
            console.log("Thankyou for your Transaction");
        }
        break;
    }
    else if (trans.perform === "With draw Rs 1000") {
        let amt = 1000;
        if (balance >= amt) {
            balance -= amt;
            console.log(`Your Current Balance is Rs. ${balance}`);
        }
        else if (balance < amt) {
            console.log("Your Balance is Insufficient");
        }
        let query = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "would you like to perform another Transaction",
            choices: ["yes", "No"],
        });
        if (query.opt === "yes") {
            continue;
        }
        else {
            console.log("Thankyou for your Transaction");
        }
        break;
    }
    else if (trans.perform === "With draw Rs 5000") {
        let amt = 5000;
        if (balance >= amt) {
            balance -= amt;
            console.log(`Your Current Balance is Rs. ${balance}`);
        }
        else if (balance < amt) {
            console.log("Your Balance is Insufficient");
        }
        let query = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "would you like to perform another Transaction",
            choices: ["yes", "No"],
        });
        if (query.opt === "yes") {
            continue;
        }
        else {
            console.log("Thankyou for your Transaction");
        }
        break;
    }
    else if (trans.perform === "With draw Rs 10000") {
        let amt = 10000;
        if (balance >= amt) {
            balance -= amt;
            console.log(`Your Current Balance is Rs. ${balance}`);
        }
        else if (balance < amt) {
            console.log("Your Balance is Insufficient");
        }
        let query = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "would you like to perform another Transaction",
            choices: ["yes", "No"],
        });
        if (query.opt === "yes") {
            continue;
        }
        else {
            console.log("Thankyou for your Transaction");
        }
    }
    else {
        console.log(`Your Current Balance is Rs. ${balance}`);
        let query = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "would you like to perform another Transaction",
            choices: ["yes", "No"],
        });
        if (query.opt === "yes") {
            continue;
        }
        else {
            console.log("Thankyou for your Transaction");
        }
        break;
    }
}
