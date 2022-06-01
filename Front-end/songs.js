let currentSongID;
var container2 = document.getElementById("container2");

function fetchSongs() {
    let body = document.getElementsByTagName("body")[0];
    let p = document.createElement('p');
    p.innerText = 'loading...';
    p.setAttribute('id', 'loading');
    body.appendChild(p);

    fetch('http://localhost:3000/songs',
        {
            method:'get'
        }   
    ).then(function(response){
        response.json().then((data)=>{
            if(data.length) {
                console.log(data);
                body.removeChild(p);
            }

            for(let i=0; i<data.length; i++) {
                let image = document.createElement('img');
                image.setAttribute('src', data[i].img);
                image.width=100;
                container2.appendChild(image);

                let h2 = document.createElement('h2');
                h2.innerText=data[i].name;
                container2.appendChild(h2);

                let h3 = document.createElement('h3');
                h3.innerText=data[i].year;
                container2.appendChild(h3);

                let edit = document.createElement('button');
                edit.setAttribute("id","editButton");

                edit.addEventListener("mouseover",editButtonF);
                function editButtonF(){
                    edit.style.cursor = "pointer";
                }
                edit.innerText = 'Edit';
                edit.onclick = function() {
                    document.getElementById('name').value = data[i].name;
                    document.getElementById('year').value = data[i].year;
                    document.getElementById('url').value = data[i].img;
                    currentSongID = data[i].id;
                }
                container2.appendChild(edit);

                let Delete = document.createElement('button');
                Delete.setAttribute("id","deleteButton");
                Delete.addEventListener("mouseover",DeleteButtonF);
                function DeleteButtonF(){
                    Delete.style.cursor = "pointer";
                }
                Delete.innerText = 'Delete';
                Delete.onclick = function() {
                    deleteSong(data[i].id);
                }
                container2.appendChild(Delete);

                let hr = document.createElement('hr');
                container2.appendChild(hr);
            }
        })
    })
}

function addSong() {
    let body = document.getElementsByTagName('body')[0];
    let name = document.getElementById('name').value;
    let year = document.getElementById('year').value;
    let image = document.getElementById('url').value;

    let newSong = {
        name: name,
        year: year,
        img: image
    }

    fetch('http://localhost:3000/songs', 
        {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newSong)
        }).then(function(response) {
            window.location.reload();
        })
}

function updateSong() {
    let name = document.getElementById('name').value;
    let year = document.getElementById('year').value;
    let image = document.getElementById('url').value;
    let newSong = {
        name: name,
        year: year,
        img: image
    }

    fetch('http://localhost:3000/songs/' + currentSongID, 
    {
        method: 'put',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify(newSong)
    }).then(function(response) {
        window.location.reload();
    })
}

function deleteSong(id) {
    let name = document.getElementById('name').value;
    let year = document.getElementById('year').value;
    let image = document.getElementById('url').value;

    fetch('http://localhost:3000/songs/' + id, 
    {
        method: 'delete'
    }).then(function(response) {
        window.location.reload();
    })
}

fetchSongs();

