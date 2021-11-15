/*const myAge = 40;
if (myAge >=18) {
    console.log('please come in');
} else {
    console.log('please stay outside');
}
*/

const isFemale = true;

if (isFemale) {
    console.log("Yes, true!");
} else  {
    console.log("Nope, false!");
}

const driverStatement = "bob";
if (driverStatement == "bob") {
    console.log("you're allowed to drive");
} else {
    console.log("you're not allowed to drive");
}


const myAge = 38;
if (myAge >=18 && myAge <=25) {
    console.log("You get 50% off!")
} else {
    console.log("You don't!")
}

const firstName = "Bram";
if (firstName == "Sarah" || firstName == "Bram") {
    console.log("You get free beer!")
} else {
    console.log("You don't!")
}

const totalAmount = 200;
if (totalAmount <=50) {
    console.log("You get free bitterballen");
} else if (totalAmount >50 && totalAmount <100) {
    console.log("You get free nachos!");
} else if (totalAmount >=100) {
    console.log("You get free champagne!");
}