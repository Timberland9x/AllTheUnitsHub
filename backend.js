console.log("Running backend");

import {
  measurementName,
  addNewmeasurementName,
  convert,
} from "./CreateConversion.js";
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
const unitsSelector = document.getElementById("unitsSelector");
const newNumInput1 = document.getElementById("newNumInput1");
const newNumInput2 = document.getElementById("newNumInput2");
const unitInput1 = document.getElementById("unitInput1");
const unitInput2 = document.getElementById("unitInput2");
const datalist1 = document.getElementById("unit1");
const dataList2 = document.getElementById("unit2");
const createConvEl = document.getElementById("createConvBut");
const allInputsWrapper = document.getElementById("allInputsWrapper");

// const errorDiv = document.getElementById("errorDiv");

//key up from input will change
// input1.addEventListener("keyup", function () {
//   //convertion factor (ex ft -> in)
//   if (input1.value != "") input2.value = input1.value * 12;
//   else input2.value = "";
// });

// input2.addEventListener("keyup", function () {
//   if (input2.value != "") input1.value = input2.value / 12;
//   else input1.value = "";
// });
allInputsWrapper.addEventListener("submit", (e) => {
  console.log("Running submit!");
  e.preventDefault();
  let allGood = true;
  const newNumInput1Val = newNumInput1.value.trim();
  const newNumInputVal2 = newNumInput1.value.trim();
  const unitInputVal1 = unitInput1.value.trim();
  const unitInputVal2 = unitInput1.value.trim();

  if (newNumInput1Val === "" || newNumInput1Val == null) {
    setError(newNumInput1, "Enter a number");
    allGood = false;
  } else {
    setSuccess(newNumInput1);
  }
  if (newNumInputVal2 === "" || newNumInputVal2 == null) {
    setError(newNumInput2, "Enter a number");
    allGood = false;
  } else {
    setSuccess(newNumInput2);
  }
  if (unitInputVal1 === "" || unitInputVal1 == null) {
    setError(unitInput1, "Enter a Unit name");
    allGood = false;
  } else {
    setSuccess(unitInput1);
  }
  if (unitInputVal2 === "" || unitInputVal2 == null) {
    setError(unitInput2, "Enter a Unit name");
    allGood = false;
  } else {
    setSuccess(unitInput2);
  }
  if (allGood) {
    errorDiv.classList.add("success");
    errorDiv.innerText =
      "Successfully added: " +
      newNumInput1Val +
      " " +
      unitInputVal1 +
      " = " +
      unitInputVal2 +
      " " +
      newNumInputVal2;

    addNewmeasurementName(
      unitInputVal1,
      newNumInput1Val,
      unitInputVal2,
      newNumInputVal2
    );
  }
  console.log(measurementName);
});

const setError = (element, message) => {
  const inputControl = element;
  const errorDiv = document.getElementById("errorDiv");

  errorDiv.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element;
  const errorDiv = document.getElementById("errorDiv");

  errorDiv.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
//Adding new custom convertion
function addCustomOption() {}
const createConvButt = document.querySelector(".createConv");
// createConvButt.addEventListener("click", addNewmeasurementName);

const unitsSelectorDropDown = document.querySelector(".unitsSelector");
// // Populate dropdown with units
// function populateDropdown() {
//   unitsSelectorDropDown.innerHTML = ""; // Clear old options
//   for (const [key] of measurementName) {
//     const option = document.createElement("option");
//     option.value = key;
//     option.textContent = key;
//     unitsSelectorDropDown.appendChild(option);
//   }
// }
