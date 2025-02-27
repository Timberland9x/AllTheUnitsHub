//need to make a one to many connection for map

let measurementName = new Map();

function addNewmeasurementName(unitName1, unitValue1, unitName2, unitValue2) {
  if (measurementName.get(unitName1)) {
    measurementName.get(unitName1).set(unitName2, unitValue2 / unitValue1);
  } else {
    measurementName.set(
      unitName1,
      new Map([[unitName2, unitValue2 / unitValue1]])
    );
  }
  if (measurementName.get(unitName2)) {
    measurementName.get(unitName2).set(unitName1, unitValue1 / unitValue2);
  } else {
    measurementName.set(
      unitName2,
      new Map([[unitName1, unitValue1 / unitValue2]])
    );
  }
}
addNewmeasurementName("mile", 1, "Foot", 5280);
addNewmeasurementName("mile", 1, "kilometer", 1.60934);
addNewmeasurementName("Foot", 1, "Inch", 12);

//find unitValue2
function convert(unitName1, unitValue1, unitName2) {
  if (measurementName.get(unitName1)) {
    // console.log(measurementName.get(unitName1))
    if (measurementName.get(unitName1).get(unitName2)) {
      return unitValue1 * measurementName.get(unitName1).get(unitName2);
    } else {
      console.log("Coverting last resort!");
      // console.log(convert(measurementName.get(unitName1).entries().next().value[0], unitValue1 * measurementName.get(unitName1).entries().next().value[1], unitName2))
      // console.log(measurementName.get(unitName1))
      console.log(measurementName.get(unitName1));

      for (const [key, value] of measurementName.get(unitName1)) {
        console.log(
          key + " = " + measurementName.get(unitName1).entries().next().value[0]
        );
        if (key != measurementName.get(unitName1).entries().next().value[0]) {
          return convert(key, unitValue1 * value, unitName2);
        }
      }
      return "No conversion unit inbetween: " + unitName2;
    }
  } else {
    return "No conversion unit: " + unitName1;
  }
}
// console.log(convert("mile" , 5, "Inch"));
// let allUnits = measurementName.get("mile").get("Foot")
console.log(convert("mile", 5, "Inch"));
// console.log(measurementName)
// for (const [key, value] of measurementName.get("mile" )) {
//   console.log(key, value);
// }
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
