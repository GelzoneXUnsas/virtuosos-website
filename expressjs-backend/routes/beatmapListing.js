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
                playCount: 504,
                likeCount: 145
            },
            {
                id : 2,
                songName : 'Neon Pulse Symphony',
                artist : 'Techo Maestro',
                beatmap_artist : 'Techo Maestro',
                songCoverImg: 'path/to/image',
                difficultyLevels : ['Easy', 'Normal', 'Hard'],
                playCount: 365,
                likeCount: 105
            },
            {
                id : 3,
                songName : 'Celestial Echoes',
                artist : 'Celestial Harmonics',
                beatmap_artist : 'StarNavigator',
                songCoverImg: 'path/to/image',
                difficultyLink : ['Easy', 'Normal'],
                playCount: 698,
                likeCount: 323
            },
            {
                id : 4,
                songName : 'Nocturnal Pursuit',
                artist : 'ShadowWeaver',
                beatmap_artist : 'ShadowWeaver',
                songCoverImg: 'path/to/image',
                difficultyLink : ['Easy', 'Normal'],
                playCount: 500,
                likeCount: 465
            }
        ]
}

router.get('/', (req, res) => {
    const name = req.query.name;
    res.send(beatmap_list);
    }
);

module.exports = router;