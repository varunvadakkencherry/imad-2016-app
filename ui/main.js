counter = 0;
function myFunction() {
    counter = counter +1;
    var spn = document.getElementById('count');
    spn.innerHTML = counter.toString();
}
