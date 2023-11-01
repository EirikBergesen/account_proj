// This is how you do comments in typescript
// This is a single line comment
/*
This is a multiline comment
*/
/*
var declarations are globally scoped or function scoped.
Can be re-declared and updated
var a = 10;

let declarations are block scoped.
Can be updated but not re-declared

const declarations are block scoped.
Can neither be updated nor re-declared.
*/
/*
Effective solution to be able to have prompts or 'input'
in terminal is to install prompt-sync
npm install prompt-sync
*/
var bank_kontoer = [];
var prompt = require("prompt-sync")({ sigint: true });
for (var i = 0; i < 10; i++) {
    var input = prompt("Enter a command: ");
    if (input == "add") {
        var name_1 = prompt("Enter a name: ");
        var balance = prompt("Enter a balance: ");
        bank_kontoer.push([name_1, parseInt(balance)]);
    }
    else if (input == "print") {
        console.log(bank_kontoer);
    }
    else if (input == "exit") {
        break;
    }
}
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
