counter = 0;
function myFunction() {
    alert("I am an alert box!");
    counter = counter +1;
    var spn = document.getElementById('count');
    spn.innerHTML = counter.toString();
}
