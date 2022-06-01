var text1 = document.createElement("p");
var node1 = document.createTextNode("My Universe-Coldplay & BTS");
text1.appendChild(node1);
var content = document.getElementById("content");
content.appendChild(text1);

var text2 = document.createElement("p");
var node2 = document.createTextNode("Music of the Spheres:");
text2.appendChild(node2);
var child2 = document.getElementById("p1");
content.insertBefore(text2,child2);

content.removeChild(text1);

text2.setAttribute("id","p2");
text2.style.color = "purple";
text2.style.fontFamily = " Arial, sans-serif";
text2.style.fontSize = "18px";

document.getElementById("arrow1").style.display = "none";
document.getElementById("arrow2").style.display = "none";

let data = ['Alien Choir', 'Let somebody go', 'Music of the Spheres II', 'Infinity Sign' ]; 
let list = document.getElementById("listaMelodii");
  data.forEach((x)=>{
  let li = document.createElement("li");
  li.innerText = x;
  list.appendChild(li);
})
var text4 = document.createElement("p");
var node4 = document.createTextNode("Songs on the album:");
text4.appendChild(node4);
var parent4 = document.getElementById("MyList");
parent4.insertBefore(text4,list);

text4.setAttribute("id","p4");
document.getElementById("p4").style.backgroundColor = "#d98cb3";
document.getElementById("p4").style.textAlign = "center";
document.getElementById("p4").style.textDecoration = "underline";
document.getElementById("p4").style.fontSize = "18px";


document.getElementById("listaMelodii").style.backgroundColor = "#755ca3";
document.getElementById("listaMelodii").style.textAlign = "center";
list.addEventListener("mouseover",changeBackground);
function changeBackground(){
    list.style.backgroundImage = "url('Images/stars_background.jpg')";  
}
list.addEventListener("mouseout",changeBackgroundBack);
function changeBackgroundBack(){
    list.style.backgroundImage = "initial";
}

function showPlaylist(x){
    x.src = "images/playlist_tour.jpg";
    x.style.height = "340px";
}

function displayPlaylist(x)
{
    x.src = "images/concert.png";
    x.style.height = "initial";

}

function changeText(y){
    y.innerHTML = "Song: My Universe (Coldplay & BTS)";
}

function mouseover_meniu(z){
    z.style.backgroundColor = "#C8C8C8";
}

function mouseout_meniu(z){
    z.style.backgroundColor = "initial";

}
var text3 = document.createElement("p");
var node3 = document.createTextNode("Press 't' to find out how many tickets are left.");
text3.appendChild(node3);
content.appendChild(text3);
text3.setAttribute("id","p3");
document.getElementById("p3").style.color = "#7a0099";

const keyBoard = document.querySelector('.keyboard');
document.body.addEventListener('keyup', e =>{
    console.log(e);
    if(e.key == 't'){
        alert("There are 50 tickets left for tonight's show! Hurry up!");
    }
    else
    {
        //e.preventDefault();
        alert("Sorry! " + e.key + " is incorrect. Try again!");
    }
})


