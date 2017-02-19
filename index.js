//Beginning of Document
//$(document).ready(function() {

//Function that will be called when User clicks on Button

$("#calculateButton").click(function() {

//variables from user input and price difference

var cost = $("#Price").val();

var payment = $("#amountPaid").val();

//Calculating the breakdown in change -------dollars/quarters/dimes/nickels/pennies

var changeDue = payment - cost;

var dollars = Math.floor(changeDue);

var centsDue = (changeDue - dollars).toFixed(2);

var quarters = Math.floor(centsDue / .25);
var afterQuarters = (centsDue - (quarters * .25 )).toFixed(2);

var dimes = Math.floor(afterQuarters / .10);
var afterDimes = (afterQuarters - (dimes * .10)).toFixed(2);

var nickels = Math.floor(afterDimes / .05);
var afterNickels = (afterDimes - (nickels * .5)).toFixed(2);

var pennies = Math.floor(afterNickels / .01);
var afterPennies = (afterNickels - (pennies * .01)).toFixed(2);


//Output Breakdown

$("#changeForIdDollars").html(dollars);
$("#changeForIdQuarters").html(quarters);
$("#changeForIdDimes").html(dimes);
$("#changeForIdNickels").html(nickels);
$("#changeforIdPennies").html(pennies);

console.log('hey');





});
 


//});






 






















