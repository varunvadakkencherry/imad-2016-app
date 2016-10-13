function myFunction() {
   // counter = counter +1;
   // var spn = document.getElementById('count');
   // spn.innerHTML = counter.toString();
   
   // Create a request
   var rqst = new XMLHttpRequest();
   rqst.onreadystatechange = function(){
       if (rqst.readyState === XMLHttpRequest.DONE)
       {
            if(rqst.status === 200){
                var counter = request.responseText;
            };
       };
   };
   
   // Make a request
   rqst.open('GET', 'http://varunvadakkencherry.imad.hasura-app.io/counter',true );
   rqst.send(null);
};
