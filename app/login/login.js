var domain = ""

window.onload = function()
{    
    console.log("DOM LOADED");    
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");
    var loginform = document.getElementById("loginform");
    var registerform = document.getElementById("registerform");
}

registerBtn.onclick= function() {
    registerform.style.left='0px';
    registerform.style.opacity='1';
    loginform.style.left='-500px';
    loginform.style.opacity='0';
    forgot.style.left='-500px';
    forgot.style.opacity='0';
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');

}

loginBtn.onclick= function() {
    loginform.style.left='0px';
    loginform.style.opacity='1';
    forgot.style.left='0px';
    forgot.style.opacity='1';
    registerform.style='500px';
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    registerform.style.opacity='0';
}

    var xhttp = new XMLHttpRequest(); 
    var url = domain+"/confirmlogin"+"?name="+n+"&pwd="+p;            
    console.log(url)
    xhttp.open("GET", url , true);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.responseType = 'json';
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200) {  
            console.log(this.response)
            if(this.response["status"]=="success")
            {
                console.log(this.response)
            }            
        }
    }  
    xhttp.send();
}