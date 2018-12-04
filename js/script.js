
function loadfun(){
var req = new XMLHttpRequest();
req.open("GET", "demo.html", true);
req.send();


req.onreadystatechange = function(){
    if(req.readyState == 4 && req.status == 200){
        document.getElementById("chngdata").innerHTML = req.responseText;
    }
}
}