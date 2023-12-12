
//Ex: Car, Length
export class conversionNames{
    constructor(name){
    //Name of the conversion
    this.name = name;
    this.unitsList = [];
    }
    // //Arry of Units
    // this.unit = unit;
    getName(){
        return this.name;
    }
    getUnitsList(){
        return this.unitsList;
    }
    addUnit(unitValue1, unitName1, unitValue2, unitName2){
        let addingUnit = new unit(unitValue1, unitName1, unitValue2, unitName2)
        this.unitsList.push(addingUnit);
    }
}
//Ex: Tank, Gallons, Dollar, Miles, Feet, Inches 
export default class unit {
    constructor(unitValue1, unitName1, unitValue2, unitName2){
        this.unitValue1 = unitValue1;
        this.unitName1 = unitName1;
        this.unitValue2 = unitValue2;
        this.unitName2 = unitName2;
    }
}