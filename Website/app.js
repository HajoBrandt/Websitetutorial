'use strict';

console.log('here\'s a hidden message');

/*let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;*/


var arrayGetallen = ["nulGetal", "eersteGetal", "tweedeGetal", "derdeGetal", "vierdeGetal", "vijfdeGetal"
, "zesdeGetal", "zevendeGetal", "achtsteGetal", "negendeGetal"]
var getal1; //= document.getElementById(arrayGetallen[0]).innerHTML;
var getal2;

var countGetal = 0;
 
//document.getElementById("nulGetal").onclick = setGetal(this.innerHTML);
document.getElementById("eersteGetal").onclick = setGetal;
document.getElementById("tweedeGetal").onclick = setGetal;
document.getElementById("derdeGetal").onclick = setGetal;
document.getElementById("vierdeGetal").onclick = setGetal;
document.getElementById("vijfdeGetal").onclick = setGetal;
document.getElementById("zesdeGetal").onclick = setGetal;
document.getElementById("zevendeGetal").onclick = setGetal;
document.getElementById("zevendeGetal").onclick = setGetal;
document.getElementById("achtsteGetal").onclick = setGetal;
document.getElementById("negendeGetal").onclick = setGetal;
document.getElementById("output").onclick = telOp;

console.log(getal1);

//document.getElementById("output").onclick = telOp();

function setGetal()
{
    if (countGetal > 1)
    {
        countGetal = 0;
        
    }
    else
    {
        if (countGetal == 0)
        {   
        getal1 = parseInt(this.innerHTML) ;
        console.log(getal1);
        document.getElementById("eersteOutput").innerHTML = getal1;
        
        }
        if (countGetal == 1)
        {
        getal2 = parseInt(this.innerHTML);
        document.getElementById("tweedeOutput").innerHTML = getal2;
        
        }
        countGetal++
        if(countGetal > 1)
        {
            countGetal = 0;
        }
    }
    
   
    
   
    
}

function telOp()
{
        
     var output = getal1 + getal2;
     console.log(output)
     document.getElementById("outputTekst").innerHTML = output;
    
}

function outPut()
{
    
}

