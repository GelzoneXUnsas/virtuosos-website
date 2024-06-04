const express = require('express');
const router = express.Router();

const beatmap_list = {
    beatmap_info: 
        [
            {
                id : 1,
                songName : 'Celtic Whispers Ballad',
                artist : 'Folklore Minstrel',
                beatmap_artist : 'Folklore Minstrel',
                difficultyLink : ['Easy', 'Normal', 'Hard'],
                playCount: 0,
                likeCount: 0
            },
            {
                id : 2,
                songName : 'Neon Pulse Symphony',
                artist : 'Techo Maestro',
                beatmap_artist : 'Techo Maestro',
                songCoverImg: 'path/to/image',
                difficultyLevels : ['Easy', 'Normal', 'Hard'],
                playCount: 0,
                likeCount: 0
            },
            {
                id : 3,
                songName : 'Celestial Echoes',
                artist : 'Celestial Harmonics',
                beatmap_artist : 'StarNavigator',
                songCoverImg: 'path/to/image',
                difficultyLink : ['Easy', 'Normal'],
                playCount: 0,
                likeCount: 0
            },
            {
                id : 4,
                songName : 'Nocturnal Pursuit',
                artist : 'ShadowWeaver',
                beatmap_artist : 'ShadowWeaver',
                songCoverImg: 'path/to/image',
                difficultyLink : ['Easy', 'Normal'],
                playCount: 0,
                likeCount: 0
            }
        ]
}


router.get('/', (req, res) => {
    const title = req.query.title;
    console.log("title:", title)
    if (title != undefined) {
        let result = findSongByTitle(title);
        result = {beatmap_info: result};
        res.send(result);
    } else{
        res.send(beatmap_list);
    }
    
    }
);

const findSongByTitle = (title) => {
    return beatmap_list['beatmap_info'].filter((beatmap) =>
        beatmap['songName'] === title);
}

module.exports = router;