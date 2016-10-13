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
