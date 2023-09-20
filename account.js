
const moment = require('moment');




class Account {
  
    #amount;
    #account_id;




    constructor(name, amount, account_id) {
      this.name = name;
      this.#amount = amount;
      this.#account_id = account_id;
    }

    MyBalance(){
        console.log(`your current  balance: ${this.#amount}`);
        return this.#amount;
    }
    withdrawl(amount) {
        if (this.#amount > amount) {
            this.#amount -= amount;
            console.log(`hisobingizdan ${amount} pul yechildi va qoldiq ${this.#amount}`);
         }  else {
                console.log(`your balance is not enough money ${this.#amount}`);
            }
        }
 

   deposit(amaunt) {
    this.#amount += amaunt;
    console.log(`you have  ${this.#amount} $ money`);

   }
   
   Details () {
    console.log(` hello ${this.name}  your balance is ${this.#amount} $`);

    console.log(`your account number is ${this.#account_id}`);
 }
 static aboutClass() {
    console.log("this class used to create account");
 }


 static aboutTime (){
    console.log(` current time:${moment().format('YYYY MM DD HH:')} `);
 }

}


module.exports = Account;
