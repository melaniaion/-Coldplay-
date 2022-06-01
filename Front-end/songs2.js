function mouseover_meniu(z){
    z.style.backgroundColor = "#C8C8C8";
}

function mouseout_meniu(z){
    z.style.backgroundColor = "initial";
}

document.getElementById("change_color").style.color = "purple";
document.getElementById("change_color").style.cursor = "grab";
document.getElementById("change_color").style.textDecoration = "underline";
document.getElementById("change_color").addEventListener("click", MyColor);
function MyColor(){
    var letter = '0123456789ABCDEF';
    var color = '#';
    for(var i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    document.getElementsByClassName("container")[0].style.backgroundColor = color;
}

document.getElementById("updateSong").addEventListener("mouseover",updateButtonF);
function updateButtonF(){
    document.getElementById("updateSong").style.cursor = "pointer";
}

document.getElementById("addSong").addEventListener("mouseover",addButtonF);
function addButtonF(){
    document.getElementById("addSong").style.cursor = "pointer";
}