//need to make a one to many connection for map

let measurementName = [[]];

measurementName[0][0]= "corner"
measurementName[0].push("mile")

measurementName.push("mile")
measurementName.push("feet")
measurementName[0].push("feet")

// measurementName[1][1]= "1";

console.log("Test!");
for(let i = 0;  i < measurementName.length; i ++){
  for(let j = 0;  j < measurementName[0].length; j ++){

    console.log(measurementName[i][0-measurementName[0].length])
}
}

//Ex: Car, Length
export class conversionNames {
  //Name of the conversion
  constructor(name) {
    this.name = name;
    this.unitsList = [];
  }
  // //Arry of Units
  // this.unit = unit;
  getName() {
    return this.name;
  }
  getUnitsList() {
    return this.unitsList;
  }
  addUnit(unitValue1, unitName1, unitValue2, unitName2) {
    let addingUnit = new unit(unitValue1, unitName1, unitValue2, unitName2);
    this.unitsList.push(addingUnit);
  }
}
//Ex: Tank, Gallons, Dollar, Miles, Feet, Inches
export default class unit {
  constructor(unitValue1, unitName1, unitValue2, unitName2) {
    console.log("Create new Unit!");
    this.unitValue1 = unitValue1;
    this.unitName1 = unitName1;
    this.unitValue2 = unitValue2;
    this.unitName2 = unitName2;
  }
}


