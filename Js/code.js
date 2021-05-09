function _id(name){
    return document.getElementById(name);
}
function _class(name){
    return document.getElementsByClassName(name);
}
_class("toggle-password")[0].addEventListener("click", function(){
    _class("toggle-password")[0].classList.toggle("active");
    if(_id("password-content").getAttribute("type")=="password"){
        _id("password-content").setAttribute("type","text"); 
    } else{
        _id("password-content").setAttribute("type","password");
    }
});