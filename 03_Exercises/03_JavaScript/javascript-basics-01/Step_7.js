function rem(){
    var num1 , num2 , reminder;
    num1 = parseInt(document.getElementById("first_number").value);
    num2 = parseInt(document.getElementById("second_number").value);
    reminder= num1%num2;
    
    alert("the reminder of division ="+reminder)
    }