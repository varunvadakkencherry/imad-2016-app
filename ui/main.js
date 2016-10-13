function myFunction() {
   // counter = counter +1;
   // var spn = document.getElementById('count');
   // spn.innerHTML = counter.toString();
   
   // Create a request
   var request = new XMLHttpRequest();
   
   request.onreadystatechange = function(){
       if (request.readyState === XMLHttpRequest.DONE)
       {
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
       }
   };
   
   // Make a request
   request.open('GET', 'http://varunvadakkencherry.imad.hasura-app.io/counter',true );
   request.send(null);
}

var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById("submit_btn");
submit.onClick = function(){
    var names = ['Name1', 'Name2, 'Name3'];
    var list = '';
    for (var i = 0; i < names.length; i++)
    {
        list += '<li>' + names[i]+ '</li>'
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};