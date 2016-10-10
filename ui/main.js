console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML ="New HTML";
//move image
var img = document.getElementById("modi");
img.onClick = function(){
    img.style.marginLeft = '100px';
};
