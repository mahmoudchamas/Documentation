var pass  = document.querySelector('#password');
var conf = document.querySelector('#confirmation');

function clicks() {
    
    if(pass !== conf){
        pass.style.border = "3px red solid";
        conf.style.border = "3px red solid ";
    } else{
        pass.style.border = "unset";
        conf.style.border = "unset";
    }
}

