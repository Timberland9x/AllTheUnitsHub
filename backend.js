console.log("Running backend");
import {
  measurementName,
  addNewmeasurementName,
  convert,
  saveMeasurementsToLocalStorage,
} from "./CreateConversion.js";
// // import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://agbvtuxcuamqtmqqwstx.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// localStorage.setItem("measurementName", measurementNameLocal);
// console.log(measurementName.values().next());

function loadMeasurementsFromLocalStorage() {
  const storedData = localStorage.getItem("measurements");

  if (storedData) {
    // Parse the JSON data stored in localStorage
    const measurementsArray = JSON.parse(storedData);

    // Clear the current Map before repopulating it
    measurementName.clear();

    // Recreate the Map structure from the array
    measurementsArray.forEach(([unitName, unitMap]) => {
      // Convert the array back to a Map
      const unitMapObj = new Map(unitMap);
      measurementName.set(unitName, unitMapObj);
    });

    console.log("Loaded measurements from localStorage:", measurementName);
  } else {
    console.log("No measurements found in localStorage.");
  }
}

saveMeasurementsToLocalStorage();

// Refresh or reload the page, then:
loadMeasurementsFromLocalStorage();
let storedData = localStorage.getItem("measurements");

// Populate dropdowns with unit names
function populateDropdowns() {
  const unit1Select = document.getElementById("unit1");
  const unit2Select = document.getElementById("unit2");

  // Populate unit1 and unit2 dropdowns
  measurementName.forEach((value, unitName1) => {
    const option1 = document.createElement("option");
    option1.value = unitName1;
    option1.textContent = unitName1;
    unit1Select.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = unitName1;
    option2.textContent = unitName1;
    unit2Select.appendChild(option2);
  });
}
// Check if there's data stored in localStorage
if (storedData) {
  // Parse the stringified JSON data
  let measurementsArray = JSON.parse(storedData);

  // Print the data to the console
  console.log(measurementsArray);
} else {
  console.log("No data found in localStorage.");
}
// console.log("values: " + measurementName.values());
//output button
// measurementName.forEach((value, key) => {
//   console.log(`Key: ${key}, Value: ${value}`);
// });
// console.log(
//   "This is local storage: " + localStorage.getItem("measurementName")
// );

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

var unit1List = document.getElementById("unit1");
var unit2List = document.getElementById("unit2");
// const errorDiv = document.getElementById("errorDiv");

const unit1 = document.getElementById("unit1");
const unit2 = document.getElementById("unit2");

//key up from input will change
//convert(unitName1, unitValue1, unitName2)
numInput1.addEventListener("keyup", function () {
  //convertion factor (ex ft -> in)
  convert(unit1.value, numInput1.value, unit2.value);
  if (numInput1.value != "") {
    numInput2.value = 0;
    numInput2.value = convert(unit1.value, numInput1.value, unit2.value);
  } else numInput2.value = "";
});

numInput2.addEventListener("keyup", function () {
  if (numInput2.value != "") {
    numInput1.value = 0;
    numInput1.value = convert(unit2.value, numInput2.value, unit1.value);
  } else numInput1.value = "";
});

unit1.addEventListener("click", function () {
  //convertion factor (ex ft -> in)
  convert(unit1.value, numInput1.value, unit2.value);
  if (numInput1.value != "") {
    numInput2.value = convert(unit1.value, numInput1.value, unit2.value);
  } else numInput2.value = "";
});

unit2.addEventListener("click", function () {
  if (numInput2.value != "") {
    numInput1.value = convert(unit2.value, numInput2.value, unit1.value);
  } else numInput1.value = "";
});

if (allInputsWrapper)
  allInputsWrapper.addEventListener("submit", (e) => {
    // console.log("Running submit!");
    e.preventDefault();
    let allGood = true;
    const newNumInput1Val = newNumInput1.value.trim();
    const newNumInputVal2 = newNumInput2.value.trim();
    const unitInputVal1 = unitInput1.value.trim();
    const unitInputVal2 = unitInput2.value.trim();

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
        newNumInputVal2 +
        " " +
        unitInputVal2;

      addNewmeasurementName(
        unitInputVal1,
        newNumInput1Val,
        unitInputVal2,
        newNumInputVal2
      );
      updateDataList(unit1List);
      updateDataList(unit2List);
    }
    // console.log(measurementName);
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

function updateDataList(listName) {
  // console.log(
  //   "Array.from(measurementName.keys())" + Array.from(measurementName.keys())
  // );
  listName.innerHTML = "";
  Array.from(measurementName.keys()).forEach((item) => {
    // console.log("Item: " + item);
    const option = document.createElement("option");
    option.value = item;
    listName.appendChild(option);
  });
}
var unit1Select = document.getElementById("unit1");
var unit2Select = document.getElementById("unit2");
updateList(unit1Select);
updateList(unit2Select);

function updateList(listName) {
  // console.log("running updateList");
  listName.innerHTML = "";
  Array.from(measurementName.keys()).forEach((item) => {
    console.log("Item: " + item);
    const option = document.createElement("option");
    option.value = item;
    option.innerHTML = item;
    listName.appendChild(option);
  });
}

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
