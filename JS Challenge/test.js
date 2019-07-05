var blue = document.getElementById("blue");
var red = document.getElementById("red");
var green = document.getElementById("green");
var colourBox = document.getElementById("bx2");

function ascii (asc2){
    var sumChar = 0;
for (i = 0; i<asc2.length; i++){
    sumChar += asc2.charCodeAt(i);
}
    return sumChar;
}

blue.onclick = function(){
    
    colourBox.style.backgroundColor = "blue";
    colourBox.innerHTML = `hi, my name is blue
ASCII: ` + ascii(blue.innerHTML);
    
        
};

red.onclick = function(){
    
    colourBox.style.backgroundColor = "red";
    colourBox.innerHTML = `hi, my name is red
ASCII: ` + ascii(red.innerHTML);
    
   
};

green.onclick = function(){
    
    colourBox.style.backgroundColor = "green";
    colourBox.innerHTML = `hi, my name is green
ASCII: ` + ascii(green.innerHTML);
    
   
};

