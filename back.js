var noc;
let rand
function start(){
    let pass1=""
    let pass2=""
    let pass3=""
    let pass4=""
    noc=document.getElementById("number").value
    for(let i=1; i<=noc; i=i+1){
        rand=Math.floor(Math.random()*127)
        if(rand<33){
            rand=rand+33
        }
        pass1=pass1+String.fromCharCode(rand);
    }
    for(let i=1; i<=noc; i=i+1){
        rand=Math.floor(Math.random()*127)
        if(rand<33){
            rand=rand+33
        }
        pass2=pass2+String.fromCharCode(rand);
    }
    for(let i=1; i<=noc; i=i+1){
        rand=Math.floor(Math.random()*127)
        if(rand<33){
            rand=rand+33
        }
        pass3=pass3+String.fromCharCode(rand);
    }
    for(let i=1; i<=noc; i=i+1){
        rand=Math.floor(Math.random()*127)
        if(rand<33){
            rand=rand+33
        }
        pass4=pass4+String.fromCharCode(rand);
    }
    document.getElementById("pass1").textContent=pass1
    document.getElementById("pass2").textContent=pass2
    document.getElementById("pass3").textContent=pass3
    document.getElementById("pass4").textContent=pass4
}
function ctca(){
    navigator.clipboard.writeText(document.getElementById("pass1").textContent)
    alert("Copied")
}
function ctcb(){
    navigator.clipboard.writeText(document.getElementById("pass2").textContent)
    alert("Copied")
}
function ctcc(){
    navigator.clipboard.writeText(document.getElementById("pass3").textContent)
    alert("Copied")
}
function ctcd(){
    navigator.clipboard.writeText(document.getElementById("pass4").textContent)
    alert("Copied")
}