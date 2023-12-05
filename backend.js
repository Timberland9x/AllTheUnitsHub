//output button
function clicked(){
    console.log("Clicked Func");

    var num1 = document.getElementById("numInput").value;
    var num2 = document.getElementById("numInput2").value;
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = "output" + (num1 + num2);
    console.log("output: " + (parseFloat(num1) + parseFloat(num2)));

}