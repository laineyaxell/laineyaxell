function conditional(){
    alert("Use inspect to see the code");
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    }   else if (currentHour < 18) {
        alert("Good day!");
    }   else {
        alert("Good evening!");
    }
}