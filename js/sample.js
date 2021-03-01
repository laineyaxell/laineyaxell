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

function parseArray() {
    var array = [];
    var a = prompt('Enter your favorite city');
    var b = prompt('Enter your favorite color');
    var c = prompt('Enter your favorite animal');
    var d = prompt('Enter your street name');
    array.push(a);
    array.push(b);
    array.push(c);
    array.push(d);
    let selectedElement = document.getElementById("arraything");
    selectedElement.innerText = array.sort();
    console.log(selectedElement);
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
    selectedElement.innerText = newArray[newArray.length-1]
    console.log(selectedElement);    
}

function deleteFruit(){
    var b = document.getElementById("byefruit");
        b.style.display = "none"
}

function addElements() {
    var valueArray = ['testing', 'the', 'array'];
    for (i in valueArray) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'row');
        newDiv.setAttribute('id', 'div '+i);
        document.getElementById('addElements').appendChild(newDiv);
        newDiv.innerText = valueArray[i]
    };
}