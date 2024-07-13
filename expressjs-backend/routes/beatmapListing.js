const express = require('express');
const router = express.Router();

const beatmap_list1 = {
    beatmap_info: 
        [
            {
                id : 1,
                songName : 'Celtic Whispers Ballad',
                artist : 'Folklore Minstrel',
                beatmap_artist : 'Folklore Minstrel',
                songCoverImg: 'cover1',
                artistImg: 'artist2Image',
                releaseDate: '2024-05-18',
                difficultyLink : ['Easy', 'Normal', 'Hard'],
                playCount: 0,
                likeCount: 0,
                songDuration: '3:45',
                bpm : 145,
                noteCount: 1000,
                sliderCount: 50,
                source: "Folklore Chronicles World",
                tags: ['Celtic', 'Folklore', 'Traditional', 'World'],
                description: 'Embark on a folkloric journey with "Celtic Whispers Ballad." Folklore Minstrel, both artist and beatmap creator, weaves traditional tunes into an immersive experience. Each note carries the essence of a rich musical adventure.'
            },
            {
                id : 2,
                songName : 'Neon Pulse Symphony',
                artist : 'Techo Maestro',
                beatmap_artist : 'Techo Maestro',
                songCoverImg: 'cover2',
                artistImg: 'artist1Image',
                releaseDate: '2024-05-18',
                difficultyLevels : ['Easy', 'Normal', 'Hard'],
                playCount: 0,
                likeCount: 0,
                songDuration: '2:30',
                bpm : 150,
                noteCount: 800,
                sliderCount: 61,
                source: "Techno Adventures World",
                tags: ['Neon', 'Synthwave'],
                description : 'Dive into the cutting-edge realm of Techno Adventures World, where futuristic technology meets thrilling escapades. Explore cyber landscapes, master advanced gadgets, and overcome digital challenges in this electrifying journey through the next frontier.'
            },
            {
                id : 3,
                songName : 'Celestial Echoes',
                artist : 'Celestial Harmonics',
                beatmap_artist : 'StarNavigator',
                songCoverImg: 'cover3',
                artistImg: 'artist3Image',
                releaseDate: '2024-05-18',
                difficultyLink : ['Easy', 'Normal'],
                playCount: 0,
                likeCount: 0,
                songDuration: '1:55',
                bpm : 220,
                noteCount: 780,
                sliderCount: 43,
                source: "Celestial Harmonics Universe",
                tags: ['Night', 'Starry'],
                description: "Immerse yourself in the ethereal beauty of the Celestial Harmonics Universe. This cosmic odyssey blends astral melodies with interstellar exploration, creating a symphony of wonder and discovery among the stars. Let the harmonies guide you through the celestial expanse."

            },
            {
                id : 4,
                songName : 'Nocturnal Pursuit',
                artist : 'ShadowWeaver',
                beatmap_artist : 'ShadowWeaver',
                songCoverImg: 'cover4',
                artistImg: 'artist1Image',
                releaseDate: '2024-05-18',
                difficultyLink : ['Easy', 'Normal'],
                playCount: 0,
                likeCount: 0,
                songDuration: '4:03',
                bpm : 120,
                noteCount: 607,
                sliderCount: 76,
                source: "ShadowWeaver Mysteries",
                tags: ['Dark', 'Mystery'],
                description : 'Embark on a shadowy journey through the enigmatic world of ShadowWeaver Mysteries. Unravel secrets, solve riddles, and uncover hidden truths in this mysterious realm. Each note is a clue, each beat a step closer to the truth.'
            }
        ]
} 

var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-west-1" });

// Create the DynamoDB service object

var ddb = new AWS.DynamoDB.DocumentClient()

var item;

// Call DynamoDB to read the item from the table
ddb.scan({
    TableName: "Virtuosos_Testing",
  })
  .promise()
  .then(data => item = data.Items)
  .catch(console.error)


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  } 
//sleep(2000).then(() => { console.log("Item:", item) });
var beatmap_list;
var beatmap_info = [];
sleep(2000).then(() => { for(let i = 0; i < item.length; i++){
    beatmap_info.push(item[i])
}});

sleep(3000).then(() => {beatmap_list = {
        beatmap_info : beatmap_info
}});


sleep(4000).then(() => {console.log("Beatmap List:", beatmap_list)
    console.log("Beatmap List2:", beatmap_list1)
});


router.get('/', (req, res) => {
    const id = req.query.id;
    const title = req.query.title;
    const searchTerm = req.query.search;
    console.log("searchTerm:", res)
    console.log("id:", id)
    console.log("title:", title)
    if(id != undefined){
        let result = findSongByID(id);
        console.log("result:", result)
        result = {beatmap_info: result};
        res.send(result);
    } else if (title != undefined) {
        let result = findSongByTitle(title);
        result = {beatmap_info: result};
        res.send(result);
    } else if (searchTerm != undefined) {
        let result = findSong(searchTerm.toLowerCase());
        result = {beatmap_info: result};
        res.send(result);
    } else{
        res.send(beatmap_list);
    }
    
    }
);
const findSong = (searchTerm) => {
    return beatmap_list['beatmap_info'].filter((beatmap) =>
        beatmap['songName'].toLowerCase().includes(searchTerm) || beatmap['artist'].toLowerCase().includes(searchTerm));
}

const findSongByTitle = (title) => {
    return beatmap_list['beatmap_info'].filter((beatmap) =>
        beatmap['songName'] === title);
}

const findSongByID = (id) => {
    return beatmap_list['beatmap_info'].filter((beatmap) =>
        beatmap['id'].toString() == id);
}

router.get('/:id', (req, res) => {
    const id = req.params.id;
    let result = findSongByID(id);
    // console.log("result:", result)
    if(result === undefined || result.length < 1) {
        console.log("NOT FOUND")
        res.status(404).send('Song not found');
    }else{
        result = {beatmap_info: result};
        res.send(result);
    }
});

// router.get('/:title', (req, res) => {
//     const title = req.params.title;
//     let result = findSongByTitle(id);
//     if(result === undefined || result.length < 1) {
//         res.status(404).send('Song Title not found');
//     }else{
//         result = {beatmap_info: result};
//         res.send(result);
//     }
// });

module.exports = router;