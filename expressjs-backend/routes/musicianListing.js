const express = require('express');
const router = express.Router();

// should be used as a redundancey in case the database is down


const Discographys = {
    albums : [
        {
            albumId: 1,
            artistId: 1,
            albumImg: "",
            releasedDate: "2/19/2024",
            playTime: "18:02",
            songIDs:[1,2,3,4]
            
        }

    ]

}
const beatmap_list = {
    beatmap_info: 
        [
            {
                id : 1,
                artistName : 'Celtic Whispers Ballad',
                artist : 'Folklore Minstrel',
                artist_artist : 'Folklore Minstrel',
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
                description: 'Embark on a folkloric journey with "Celtic Whispers Ballad." Folklore Minstrel, both artist and artist creator, weaves traditional tunes into an immersive experience. Each note carries the essence of a rich musical adventure.'
            },
            {
                id : 2,
                artistName : 'Neon Pulse Symphony',
                artist : 'Techo Maestro',
                artist_artist : 'Techo Maestro',
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
                artistName : 'Celestial Echoes',
                artist : 'Celestial Harmonics',
                artist_artist : 'StarNavigator',
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
                artistName : 'Nocturnal Pursuit',
                artist : 'ShadowWeaver',
                artist_artist : 'ShadowWeaver',
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
const musicianList = {
    musician_infos: 
        [
            {
                id : 1,
                musicianName : 'Techno Maestro',
                totalPlaycount: 538,
                totalSongs: 25,
                musicianImg: "artist1Image",
                socials: ["instagram.com","x.com","spotify.com","soundcloud.com"],
                discographyIds:[1],
                description:"As both musician and beatmap creator, Techno Maestro orchestrates a futuristic fusion of techno, cyberpunk, and neon vibes"
            },
            {
                id : 2,
                musicianName : 'Techno sadgerrijhggwe]f',
                totalPlaycount: 400,
                totalSongs: 26,
                musicianImg: "artist1Image",
                socials: ["instagram.com","x.com","spotify.com","soundcloud.com"],
                discographyIds:[1],
                description:"As both artist and beatmap creator, Techno Maestro orchestrates a futuristic fusion of techno, cyberpunk, and neon vibes"
            },     
        ]
}



/*
var AWS = require("aws-sdk");

const {
    DynamoDBDocument,
} = require('@aws-sdk/lib-dynamodb');

const {
    DynamoDB,
} = require('@aws-sdk/client-dynamodb');

// Set the region
// JS SDK v3 does not support global configuration.
// Codemod has attempted to pass values to each service client in this file.
// You may need to update clients outside of this file, if they use global config.
AWS.config.update({ region: "us-west-1" });

// Create the DynamoDB service object

var ddb = DynamoDBDocument.from(new DynamoDB())

var item;

var artistList;
var artist_info = [];

// Call DynamoDB to read the item from the table
async function readItemsFromDynamoDB() {
    try {
        const data = await ddb.scan({
            TableName: "Virtuosos_Testing",
        });
        item = data.Items;
        for(let i = 0; i < item.length; i++){
            artist_info.push(item[i]);}
            {artistList = {
                artist_info : artist_info
        }}
    } catch (error) {
        artistList = artist_list1
        console.error(error);
    }
}

readItemsFromDynamoDB();
*/




router.get('/', (req, res) => {
    const id = req.query.id;
    const title = req.query.title;
    const searchTerm = req.query.search;
    console.log("id:", id)
    console.log("title:", title)
    if(id != undefined){
        let result = findArtistByID(id);
        console.log("result:", result)
        result = {musician_infos: result};
        res.send(result);
    } else if (title != undefined) {
        let result = findArtistByTitle(title);
        result = {musician_infos: result};
        res.send(result);
    } else if (searchTerm != undefined) {
        let result = findArtist(searchTerm.toLowerCase());
        result = {musician_infos: result};
        res.send(result);
    } else{
        res.send(musicianList);
    }
    
    }
);
const findArtist = (searchTerm) => {
    return musicianList['musician_infos'].filter((musician) =>
        musician['musicianName'].toLowerCase().includes(searchTerm) || musician['musician'].toLowerCase().includes(searchTerm));
}

const findArtistByTitle = (title) => {
    return musicianList['musician_infos'].filter((musician) =>
        musician['musicianName'] === title);
}

const findArtistByID = (id) => {
    return musicianList['musician_infos'].filter((musician) =>
        musician['id'].toString() == id);
}


router.get('/:id', (req, res) => {
    const id = req.params.id;
    let result = findArtistByID(id);
    // console.log("result:", result)
    if(result === undefined || result.length < 1) {
        console.log("NOT FOUND")
        res.status(404).send('Song not found');
    }else{
        result = {musician_infos: result};
        res.send(result);
    }
});

// router.get('/:title', (req, res) => {
//     const title = req.params.title;
//     let result = findArtistByTitle(id);
//     if(result === undefined || result.length < 1) {
//         res.status(404).send('Song Title not found');
//     }else{
//         result = {artist_info: result};
//         res.send(result);
//     }
// });

module.exports = router;