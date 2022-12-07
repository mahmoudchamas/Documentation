var shoeSize = prompt("enter your shoe size") ;
var birthYear = prompt("enter the seconde number") ;


function multi(shoeSize , birthYear){
    var x = shoeSize * 2 ;
    var y = x + 5 ;
    var a = y * 50;
    var num = a - birthYear ;
    var num2 = num + 1776 ;
    
   return alert(num2);
}


 multi(shoeSize,birthYear);