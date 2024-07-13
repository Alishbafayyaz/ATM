import inquirer from "inquirer";

let myBalance = 30000;
let myPin = 1212;

console.log("WELCOME TO ATM MACHINE");
 let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      message: "Enter your Pin code:",
      type: "number",
    }
  ])
  if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code,Login Successfully!!");
   // console.log(`Current Account Balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
          name: "operation",
          message: "Please Select Option",
          type: "list",
          choices: ["Withdraw", "Check Balance"],
        },
      ])

      if(operationAns.operation === "Withdraw"){
        let amountAns= await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Enter Your Amount to withdraw",
                    type : "number"
                }
            ]
        )
        if(amountAns.amount > myBalance){
            console.log("Insufficien Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw Successfully!!`);
            console.log(`Your remaining Balance is: ${myBalance}`)
        }
      }
      else if(operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance} `);
      }
  }
  else{
    console.log("Pin is incorrect, Try Again!")
  }