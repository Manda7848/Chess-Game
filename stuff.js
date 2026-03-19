window.onload = function(){ 
    
    
document.getElementById("wr2").addEventListener("click", Wr2); 

function Wr2() {
    
    // window.alert("A piece Was clicked and I registered it");
    document.getElementById("wr2").style.backgroundColor= "white";
    console.log("White rook 2 was clicked");
    setTimeout(backwr2, 10000);

}

function backwr2() {
document.getElementById("wr2").style.backgroundColor= "var(--p)";
    console.log("wr2 was unselected");

}

document.getElementById("g3").addEventListener("click", ga); 

function ga() {
    document.getElementById("g3").style.backgroundColor= "white";
    console.log("square 47 was clicked");

    setTimeout(backg3, 10000);
    

}

function backg3() {
     document.getElementById("g3").style.backgroundColor= "var(--p)";
    console.log("square 47 was unselected");
}

document.getElementById("wr1").addEventListener("click", Wr1); 

function Wr1() {
    
    // window.alert("A piece Was clicked and I registered it");
    document.getElementById("wr1").style.backgroundColor= "white";
    console.log("White Rook 1 was clicked")

}
}