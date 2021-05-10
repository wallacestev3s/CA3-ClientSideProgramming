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

_id("password-content").addEventListener("keyup",function(){
    let password = _id("password-content").value;

    if(/[A-Z]/.test(password)){
        _class("policy-uppercase")[0].classList.add("active");
    } else {
        _class("policy-uppercase")[0].classList.remove("active");
    }

    if(/[0-9]/.test(password)){  // maybe need to change that 
        _class("policy-number")[0].classList.add("active");
    } else {
        _class("policy-number")[0].classList.remove("active");
    }

    if(/[^A-Za-z0-9]/.test(password)){
        _class("policy-special")[0].classList.add("active");
    } else {
        _class("policy-special")[0].classList.remove("active");
    }

    if(password.length > 8){
        _class("policy-length")[0].classList.add("active");
    } else {
        _class("policy-length")[0].classList.remove("active");
    }


});