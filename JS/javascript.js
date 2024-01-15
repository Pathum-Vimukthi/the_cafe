function showAlert() {
    var x = document.getElementById("feedback").value;
    if (x == "") {
        document.getElementById("feedback").style.border = "2px solid red";
    }
    else {
        alert('Thank You! Come Again!');
    }
}