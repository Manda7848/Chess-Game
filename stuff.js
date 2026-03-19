window.onload = function(){ 
    
    
document.getElementsByClassName("piece").addEventListener("click", Wr2); 

function Wr2() {
    
    // window.alert("A piece Was clicked and I registered it");
    document.getElementById("wr2").style.backgroundColor= "white";
    console.log("White rook 2 was clicked")

}

document.getElementById("wr1").addEventListener("click", Wr1); 

function Wr1() {
    
    // window.alert("A piece Was clicked and I registered it");
    document.getElementById("wr1").style.backgroundColor= "white";
    console.log("White Rook 1 was clicked")

}
}