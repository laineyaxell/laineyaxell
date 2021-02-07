function howdy(firstName){
    alert("Howdy " + firstName);
}

function evalNumber(){
    var inputValue = prompt("Enter a 5 digit number")
    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.")
    } else if (inputValue % 2 == 0) {
        alert(inputValue + " is an even number.")
    } else {
        alert(inputValue + " is an odd number.")
    }
}

function getTime(){
var today = New Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}