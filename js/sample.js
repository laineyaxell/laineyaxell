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

function eliminate(){
    let selectedElement = document.getElementById("delete")
    console.log(selectedElement)
    selectedElement.innerText = "things are changing but not deleting!";
}

function time(){
    var findtime = new Date().getMinutes();
    let selectedElement = document.getElementById("time");
    console.log(selectedElement);
    selectedElement.innerText = findtime;
}

