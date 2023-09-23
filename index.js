
// module package core

// let number = 0;
// setInterval(function ()  {
//     console.log("hisobla: ", number);
//     number++;
// }, 2000);


// const fs = require("fs");
// const { networkInterfaces } = require("os");
// const data = fs.readFileSync("./input.txt", "utf-8");
// console.log(data);


// fs.writeFileSync("./input.txt", `${data} \n\t\t  by Bekshoh`);
// const new_data = fs.readFileSync("./input.txt", "utf-8");
// console.log(new_data);


///////////////////////////////////////////////////////////////////////////////////////////////////
// external modullar


// const moment = require("moment");
// //const time = moment().format();
// //console.log(time);


// setInterval(() => {
//     const time = moment().format();
//     console.log(` current time ${time}`);  
// }, 2000)

// const inquirer = require('inquirer');
// inquirer
// .prompt([{type:'input', name: 'raqam', message: "raqamni kiriting?"}])
// .then((answer) => { 
//     console.log('man kiritgan raqam:', answer.raqam);
// })
// .catch((err) => console.log(err));

//const validator = require("validator");
//const test = validator.isInt("200");
//const test = validator.isIP("200.24.4545.23");
//const test = validator.isEmail("bek@gamil.com");
//console.log("test:", test);


// const { v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log(" random:" ,random);


// const chalk = require('chalk');

// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MODULLAR FILE MODULLAR
// 

//hisob.js dagini run qilish

// file modullar


// const { log } = require('console');

// const calculate = require("./hisob.js");

// const natija = calculate.kopaytirish(20,15);
// console.log("natija:", natija);

// console.log("========================");

// const natija2 = calculate.ayrish(20,15);
// console.log("natija:", natija2);

// console.log("========================");

// const natija3 = calculate.ayrish(20,15);
// console.log("natija:", natija3);  
// console.log(require('module').wrapper);
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Account js dan olingan bolim


// const Account = require("./account");
// Account.aboutClass();
// Account.aboutTime();

// console.log("==============================");

// const myAccount = new Account("bek", 2000, 56876536568);
// myAccount.Details();

// myAccount.deposit(2500);
// //ferrarri 210 
// myAccount.withdrawl(9000);