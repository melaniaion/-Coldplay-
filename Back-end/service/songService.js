const uuid = require("uuid");
const songRepository = require('../repository/songRepository');

module.exports.getAllSongs = () => {
    const songList = songRepository.readJSONFile();
    return songList;
}

module.exports.addSong = (newSong) => {
    const songList = songRepository.readJSONFile();
    newSong.id=uuid.v4.apply();
    songList.push(newSong);
    songRepository.writeJSONFile(songList);
    return newSong;
}

module.exports.updateSong = (songID, songName, songYear, songImg) => {
    const songList = songRepository.readJSONFile();
  
    let foundSong=null;
    for (let i=0; i<songList.length; i++) 
        if (songList[i].id===songID) {
            songList[i].name=songName;
            songList[i].year=songYear;
            songList[i].img=songImg;
            foundSong=songList[i];
            break;
        }
  
    songRepository.writeJSONFile(songList);
    return foundSong;
}

module.exports.removeSong = (id) => {
    const songList = songRepository.readJSONFile();
    
    for (let i=0; i<songList.length; i++) 
        if (songList[i].id===id) {
            songList.splice(i, 1);  //  remove song
            foundSong=songList[i];
            break;
        }
    
    songRepository.writeJSONFile(songList);
    return foundSong;
}