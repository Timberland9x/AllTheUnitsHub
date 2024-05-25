import unit, { conversionNames } from "./CreateConversion.js";
// // import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://agbvtuxcuamqtmqqwstx.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

//output button
function clicked() {
  console.log("Clicked Func");

  var num1 = document.getElementById("numInput").value;
  var num2 = document.getElementById("numInput2").value;

  const outputDiv = document.createElement("div");
  outputDiv.innerHTML = "output: " + (parseFloat(num1) + parseFloat(num2));
  document.body.appendChild(outputDiv);

  console.log(outputDiv);
}
function solve() {
  console.log("Clicked submit");
  var pw = document.getElementById("password").value;
  console.log(pw);
}

// async function signUpNewUser() {
//   const { data, error } = await supabase.auth.signUp({
//     email: "example@email.com",
//     password: "example-password",
//     options: {
//       emailRedirectTo: "https://example.com/welcome",
//     },
//   });
// }

// async function signInWithEmail() {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: "example@email.com",
//     password: "example-password",
//   });
// }

// async function signOut() {
//   const { error } = await supabase.auth.signOut();
// }

//Grab num from user input
var input1 = document.getElementById("numInput1");
var input2 = document.getElementById("numInput2");

//key up from input will change
input1.addEventListener("keyup", function () {
  //convertion factor (ex ft -> in)
  if (input1.value != "") input2.value = input1.value * 12;
  else input2.value = "";
});

input2.addEventListener("keyup", function () {
  if (input2.value != "") input1.value = input2.value / 12;
  else input1.value = "";
});

// console.log(inputValue + " & " + inputValue2);

//Creating a new conversion
var AllConversionNamesList = [];
var createNew = new conversionNames("Car");

AllConversionNamesList.push(createNew.getName());
//this works for arrays, probably diff for objects?
AllConversionNamesList.find((item) => item.name === "Car").addUnit(
  "1",
  "Tank",
  "16",
  "Gallon"
); //userinput
AllConversionNamesList[0].addUnit("40", "Miles", "1", "Gallon"); //userinput

AllConversionNamesList.push(new conversionNames("Length"));
AllConversionNamesList[AllConversionNamesList.length - 1].addUnit(
  "12",
  "Inch",
  "1",
  "Feet"
); //userinput
// console.log("Name of Unit: " + AllConversionNamesList[0].unitName + " and it's " + AllConversionNamesList[0].unitValue);
console.log(AllConversionNamesList);
const newUnit = new conversionNames();
// console.log(AllConversionNamesList[0].getUnitsList())

function oneOfUnit(unitValue1, unitName1, unitValue2, unitName2) {}
