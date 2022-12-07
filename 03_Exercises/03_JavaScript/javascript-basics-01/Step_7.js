alert("What is your shoe size and your  birthday day")
function result1(){
    var shoe_size , year  ,  result;
     shoe_size= parseInt(document.getElementById("shoe_size").value);
   year  = parseInt(document.getElementById("year").value);
    shoe_size = shoe_size*2 ;
    shoe_size = shoe_size + 5 ;
    shoe_size = shoe_size * 50 ;
     result = shoe_size - year ;
     result = result + 1766
    
    alert("the reminder of division ="+result);
    }