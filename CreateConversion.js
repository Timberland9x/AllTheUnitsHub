export {
  measurementName,
  addNewmeasurementName,
  convert,
  saveMeasurementsToLocalStorage,
};

//need to make a one to many connection for map
let measurementName = new Map();

function addNewmeasurementName(unitName1, unitValue1, unitName2, unitValue2) {
  console.log("Running addNewmeasurementName");
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
  saveMeasurementsToLocalStorage();
}

// Function to save measurementName to localStorage
function saveMeasurementsToLocalStorage() {
  // First, load existing data from localStorage (if any)
  let storedData = localStorage.getItem("measurements");

  let measurementsArray = [];

  if (storedData) {
    // Parse existing data from localStorage
    measurementsArray = JSON.parse(storedData);
    // Merge the existing data with the current map
    measurementsArray = mergeMaps(measurementsArray, measurementName);
  } else {
    // If no existing data, just convert the current map to an array
    measurementsArray = Array.from(measurementName, ([unitName, unitMap]) => {
      return [unitName, Array.from(unitMap)];
    });
  }

  // Store the merged measurements array back to localStorage
  localStorage.setItem("measurements", JSON.stringify(measurementsArray));
  console.log("Saved to localStorage:", measurementsArray);
}

// Function to merge two Maps (existing data from localStorage and current measurementName)
function mergeMaps(existingData, currentData) {
  existingData.forEach(([unitName, unitMap]) => {
    // Ensure we're merging the unitMap correctly
    if (!currentData.has(unitName)) {
      currentData.set(unitName, new Map(unitMap));
    } else {
      const existingUnitMap = currentData.get(unitName);
      unitMap.forEach(([unitName2, value]) => {
        existingUnitMap.set(unitName2, value);
      });
    }
  });

  // Convert the merged map to an array of arrays
  return Array.from(currentData, ([unitName, unitMap]) => {
    return [unitName, Array.from(unitMap)];
  });
}

//Test input
addNewmeasurementName("Foot", 1, "Inch", 12);
// // addNewmeasurementName("mile", 1, "Foot", 5280);
// addNewmeasurementName("meter", 1, "Foot", 3.28084);
// addNewmeasurementName("mile", 1, "Inch", 63360);

// addNewmeasurementName("mile", 1, "kilometer", 1.60934);

//unit conversion and finds any possilbe conversion connection (find unitValue2)

function convert(unitName1, unitValue1, unitName2, visited = new Set()) {
  // console.log(`Converting ${unitValue1} ${unitName1} to ${unitName2}`);
  // console.log("visited: ", visited);
  if (!measurementName.has(unitName1)) {
    return `No conversion unit: ${unitName1}`;
  }

  if (measurementName.get(unitName1).has(unitName2)) {
    return unitValue1 * measurementName.get(unitName1).get(unitName2);
  }

  visited.add(unitName1);

  for (const [key, value] of measurementName.get(unitName1)) {
    if (!visited.has(key)) {
      let result = convert(key, unitValue1 * value, unitName2, visited);
      if (typeof result === "number") {
        //saves thr unit conversion so its quicker to access next time.
        addNewmeasurementName(key, unitValue1, unitName2, result);
        return result;
      }
    }
  }
  return `No conversion path found between ${unitName1} and ${unitName2}`;
}

// console.log(convert("Inch", 1000, "mile"));
// console.log(convert("Foot", 2, "kilometer"));
console.log(measurementName);

// Function to add custom unit to dropdown and map

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
    // console.log("Create new Unit!");
    this.unitValue1 = unitValue1;
    this.unitName1 = unitName1;
    this.unitValue2 = unitValue2;
    this.unitName2 = unitName2;
  }
}
