function mouseover_meniu(z){
    z.style.backgroundColor = "#C8C8C8";
}

function mouseout_meniu(z){
    z.style.backgroundColor = "initial";
}
document.getElementById("MyTitle").style.textDecoration = "underline";

function buttonBackground(){
    document.getElementById("container").style.backgroundImage = "url('Images/about_background1.jpg')";
}
function buttonBackground2(){
    document.getElementById("container").style.backgroundImage = "url('Images/kristopher-roller-zepnJQycr4U-unsplash.jpg')";
}

document.getElementById("winner").addEventListener("click",winnerFunction);
function winnerFunction(){
    alert("Congrats! You have just won a M&G ticket!");
}

var t1 = document.createElement("p");
var n1 = document.createTextNode("Keep an eye on the website!");
t1.appendChild(n1);
var about = document.getElementById("about");
about.appendChild(t1);

t1.setAttribute("id","t1");
document.getElementById("t1").style.fontFamily = "Bradley Hand, cursive";

var changeB = document.getElementById("changeB");
changeB.style.background = "pink";
changeB.style.borderRadius = "6px";
changeB.style.padding = "2px";
changeB.style.marginBottom = "2px";
changeB.addEventListener("mouseover", changeColor);
changeB.addEventListener("mouseout", changeColorBack);
function changeColor(){
    changeB.style.backgroundImage = "linear-gradient(45deg, #87adfe, #ff77cd)";
    changeB.style.cursor = "pointer";
}
function changeColorBack(){
    changeB.style.backgroundImage = "initial";
}
var undoB = document.getElementById("undoB");
undoB.style.background = "pink";
undoB.style.borderRadius = "6px";
undoB.style.padding = "2px";
undoB.addEventListener("mouseover", changeColor2);
undoB.addEventListener("mouseout", changeColorBack2);
document.body.addEventListener('keyup', e =>{
    console.log(e);
    if(e.key == 'u'){
        document.getElementById("container").style.backgroundImage = "url('Images/kristopher-roller-zepnJQycr4U-unsplash.jpg')";
    }
    else
    {
        //e.preventDefault();
        alert("Sorry! " + e.key + " is incorrect. Try again!");
    }
})

function changeColor2(){
    undoB.style.backgroundImage = "linear-gradient(45deg, #87adfe, #ff77cd)";
    undoB.style.cursor = "pointer";
}
function changeColorBack2(){
    undoB.style.backgroundImage = "initial";
}