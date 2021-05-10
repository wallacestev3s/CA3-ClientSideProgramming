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


_id("password-content").addEventListener("focus",function(){
    _class("password-policies")[0].classList.add("active");
});
_id("password-content").addEventListener("blur",function(){
    _class("password-policies")[0].classList.remove("active");
});