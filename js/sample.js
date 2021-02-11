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
    var a = document.getElementById("delete");
        a.style.display = "none"
}

function time(){
    var findtime = new Date().getMinutes();
    let selectedElement = document.getElementById("time");
    console.log(selectedElement);
    selectedElement.innerText = findtime;
}


function changeArray(newArray){
    
    let selectedElement = document.getElementById("fruit");
    selectedElement.innerText = newArray.sort();
    console.log(selectedElement);    
}

function deleteFruit(){
    var b = document.getElementById("byefruit");
        b.style.display = "none"
}
