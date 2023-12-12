import unit, { conversionNames } from './CreateConversion.js';
//output button
function clicked(){
    console.log("Clicked Func");

    var num1 = document.getElementById("numInput").value;
    var num2 = document.getElementById("numInput2").value;

    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = "output: " + (parseFloat(num1) + parseFloat(num2));
    document.body.appendChild(outputDiv);

    console.log(outputDiv);

}

var AllConversionNamesList = [];


AllConversionNamesList.push(new conversionNames("Car"));
AllConversionNamesList[AllConversionNamesList.length-1].addUnit("1", "Tank", "16", "Gallon"); //userinput
AllConversionNamesList[0].addUnit("40", "Miles", "1", "Gallon"); //userinput


AllConversionNamesList.push(new conversionNames("Length"));
AllConversionNamesList[AllConversionNamesList.length-1].addUnit("12", "Inch", "1", "Feet"); //userinput
// console.log("Name of Unit: " + AllConversionNamesList[0].unitName + " and it's " + AllConversionNamesList[0].unitValue);
console.log(AllConversionNamesList);

// console.log(AllConversionNamesList[0].getUnitsList())
