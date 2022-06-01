let express = require('express')
let router = express.Router();

const songService = require('../service/songService');

// Create
router.post("/songs", (req, res) => {
    let newSong = songService.addSong(req.body);
    res.status(200).send(newSong);
  });
  
// Read One
router.get("/songs/:id", (req, res) => {
  const songsList = readJSONFile();
});

// Read All
router.get("/songs", (req, res) => {    
  const songsList = songService.getAllSongs();
  if (songsList!==undefined && songsList.length!==0) {
      res.status(200).send(songsList);
  } else {
      res.status(204).send('No song found!');
  }
});

// Update
router.put("/songs/:id", (req, res) => {
  let foundSong = songService.updateSong(req.params.id, req.body.name, req.body.year, req.body.img);
  if (foundSong!==null) res.status(200).send(foundSong);
  else res.status(204).send('No song found!');
});
  
// Delete
router.delete("/songs/:id", (req, res) => {
    let foundSong = songService.removeSong(req.params.id);
    if (foundSong!==null) res.status(200).send(foundSong);
    else res.status(204).send('No song found!');
});
  

module.exports = router;