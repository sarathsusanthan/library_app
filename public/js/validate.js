// add book form validation
function validate(){
    var title=document.getElementById("title");
    var author=document.getElementById("author");
    var genre=document.getElementById("genre");
    var image=document.getElementById("image");
    var error=document.getElementById("error");
if(title.value.trim()==""||author.value.trim()==""||genre.value.trim()==""){
    error.innerHTML="Fields can not be empty";
    error.style.color="red";
    if(title.value.trim()==""&&author.value.trim()==""&&genre.value.trim()==""){
        title.style.border="2px solid red";
        author.style.border="2px solid red";
        genre.style.border="2px solid red";
        return false;
    }

    return false;
}
if(title.value.trim()==""){ title.style.border="2px solid red"; return false;}
if(author.value.trim()==""){ author.style.border="2px solid red"; return false;}
if(genre.value.trim()==""){genre.style.border="2px solid red"; return false;}
if(image.files.length==0){
    alert("Choose an image");
    return false;
}
alert("you have successfully added the book");
return true;
}
function key(){
    if(title.value.trim()!=""){  title.style.border="";}
if(author.value.trim()!=""){  author.style.border="";}
if(genre.value.trim()!=""){  genre.style.border="";}
if(title.value.trim()!=""&&author.value.trim()!=""&&genre.value.trim()!=""){
    error.innerHTML="";
}
}

// add author form validation

function check(){
    var nam=document.getElementById("nam");
    var born=document.getElementById("born");
    var gen=document.getElementById("gen");
    var works=document.getElementById("works");
    var pic=document.getElementById("pic");
    var er=document.getElementById("er");
if(nam.value.trim()==""||born.value.trim()==""||gen.value.trim()==""){
    er.innerHTML="Fields can not be empty";
    er.style.color="red";
    if(nam.value.trim()==""&&born.value.trim()==""&&gen.value.trim()==""){
        nam.style.border="2px solid red"; 
        born.style.border="2px solid red";
        gen.style.border="2px solid red";
    }
    if(works.value.trim()==""){er.innerHTML="Fields can not be empty";
                    er.style.color="red"; 
                    works.style.border="2px solid red"; return false;}
                    return false;
}
if(works.value.trim()==""){er.innerHTML="Fields can not be empty";
er.style.color="red"; 
works.style.border="2px solid red"; return false;}
    if(nam.value.trim()==""){ nam.style.border="2px solid red"; return false;}
if(born.value.trim()==""){ born.style.border="2px solid red"; return false;}
if(gen.value.trim()==""){gen.style.border="2px solid red"; return false;}


if(pic.files.length==0){
    alert("Choose an image");
    return false;
}
alert("You have added the author successfully");
return true;
}

function upkey(){
    if(nam.value.trim()!=""){  nam.style.border="";}
    else{nam.style.border="2px solid red"}
if(born.value.trim()!=""){  born.style.border="";}
else{born.style.border="2px solid red"}
if(gen.value.trim()!=""){  gen.style.border="";}
else{gen.style.border="2px solid red"}
if(works.value.trim()!=""){  works.style.border="";}
else{works.style.border="2px solid red"}
if(nam.value.trim()!=""&&born.value.trim()!=""&&gen.value.trim()!=""&&works.value.trim()!=""){
    er.innerHTML="";
}
}
// login form validation
function  logcheck(){
    var user=document.getElementById("user").value;
    var pwd= document.getElementById("pwd").value;
    var loger=document.getElementById("loger");
    if(user.trim()==""||pwd.trim()==""){
        loger.innerHTML="Fields Can Not Be Empty";
        loger.style.color="red";
        loger.style.backgroundColor="black";
        return false;
    }
    if(user.trim()!=""&&pwd.trim()!=""){
        loger.innerHTML="";
        if(user=="admin" && pwd=="1234"){
            return true;
        }
        else{
            loger.innerHTML="User name/Password is incorrect";
            loger.style.color="red";
            loger.style.backgroundColor="black";
            return false;
        }
    }
}
// signup form validation
var n=0;
var e=0;
var p=0;
var r=0;
function signcheck(){
    var signer=document.getElementById("signer");
    var first=document.getElementById("first").value;
    var last=document.getElementById("last").value;
    var em=document.getElementById("em").value;
    var pw=document.getElementById("pw").value;
    var rpw=document.getElementById("rpw").value;
    namcheck();
    emcheck();
    pascheck();
    cofmcheck();
    if(first!=""&&last!=""&&em!=""&&pw!=""&&rpw!=""){
        signer.innerHTML="";
    }
if(n==1&&e==1&&p==1&&r==1){
    
    return true;
}else{
    return false;
}
}
function namcheck(){
    var signer=document.getElementById("signer");
    var first=document.getElementById("first").value;
    var last=document.getElementById("last").value;
    if(first.trim()==""||last.trim()==""){
        signer.innerHTML="Fields can not be blank";
        signer.style.color="red";
        signer.style.backgroundColor="black";
        return n=0;
    }
    else{
        return n=1;
    }
}
function emcheck(){
    var signer=document.getElementById("signer");
    var em=document.getElementById("em").value;
    var noem=document.getElementById("noem");
    var email=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(em.trim()==""){
        signer.innerHTML="Fields can not be blank";
        signer.style.color="red";
        signer.style.backgroundColor="black";

        return e=0;
    }else{
        if(email.test(em)){
            noem.innerHTML="";
            return e=1;
        }else{
            noem.innerHTML="Email is invalid";
            noem.style.color="red";
            noem.style.backgroundColor="black";
            return e=0;
        }
    }
}
function pascheck(){
    var signer=document.getElementById("signer");
    var pw=document.getElementById("pw").value;
    var nopw=document.getElementById("nopw");
    var paswd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(pw.trim()==""){
        signer.innerHTML="Fields can not be blank";
        signer.style.color="red";
        signer.style.backgroundColor="black";
        return p=0;
    }else{
        if(paswd.test(pw)){
            nopw.innerHTML="";
            return p=1;
        }else{
            nopw.innerHTML="Password must contain 8 characters (atleast one number one uppercase and one lowercase)";
            nopw.style.color="red";
            nopw.style.backgroundColor="black";
            return p=0;
        }
    }
}
function cofmcheck(){
    var signer=document.getElementById("signer");
    var norpw=document.getElementById("norpw");
    var rpw=document.getElementById("rpw").value;
    var pw=document.getElementById("pw").value;
    if(rpw==""){
        signer.innerHTML="Fields can not be blank";
        signer.style.color="red";
        signer.style.backgroundColor="black";
        return r=0;
    }else{
        if(pw==rpw){
            
            norpw.innerHTML="";
            return r=1;
        }
        else{
            norpw.innerHTML="Passwords not matching";
            norpw.style.color="red";
            norpw.style.backgroundColor="black";
            return r=0;
        }
    }
}
function msg(){
    if(n==1&&e==1&&p==1&&r==1){
        alert("You are successfully created an account.Login to continue");
        
    }
}