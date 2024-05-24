const express = require('express');
const router = express.Router();


const gallery_images = {
    screenart_list:
        [
            {
                id: '1',
                name: 'art1',
                artType: 'screenart',
                imagePath: '/../assets/images/galleryArt/art1.png',
                description: 'Test Description',
                dateAdded : '2024-05-18'
            },
            {
                id: '2',
                name: 'art2',
                artType: 'screenart',
                imagePath: '../../assets/images/galleryArt/art2.png',
                description: 'Test Description2',
                dateAdded : '2024-05-11'
            },
            {
                id: '3',
                name: 'art3',
                artType: 'screenart',
                imagePath: '/../assets/images/galleryArt/art3.png',
                description: 'Test Description',
                dateAdded : '2024-05-18'
            },
            {
                id: '4',
                name: 'art4',
                artType: 'screenart',
                imagePath: '/../assets/images/galleryArt/art4.png',
                description: 'Test Description',
                dateAdded : '2024-05-18'
            },
            {
                id: '5',
                name: 'art5',
                artType: 'screenart',
                imagePath: '/../assets/images/galleryArt/art5.png',
                description: 'Test Description',
                dateAdded : '2024-05-18'
            },
            {
                id: '6',
                name: 'art6',
                artType: 'screenart',
                imagePath: '/../assets/images/galleryArt/art6.png',
                description: 'Test Description',
                dateAdded : '2024-05-18'
            },
            {
                id: '7',
                name: 'art7',
                artType: 'screenart',
                imagePath: '/../assets/images/galleryArt/art7.png',
                description: 'Test Description',
                dateAdded : '2024-05-18'
            },
            {
                id: '8',
                name: 'art8',
                artType: 'screenart',
                imagePath: '/../assets/images/galleryArt/art8.png',
                description: 'Test Description',
                dateAdded : '2024-05-18'
            }
        ],
        musiccovers_list: [
            {
                id: '3',
                name: 'art3',
                artType: 'musiccovers',
                imagePath: '../../assets/images/galleryArt/art3.png',
                description: 'Test Description3',
                dateAdded : '2024-05-11',

            }
        ]
}

const findArtByType = (type) => {
    return gallery_images['images'].filter((image) =>
        image['artType'] === type);
}

router.get('/', (req, res) => {
    const type = req.query.artType;
    if (type === 'musiccovers') {
        res.send(gallery_images['musiccovers_list']);
    }else{
        // res.send(gallery_images['screenart_list']);
        res.send(gallery_images);
    }
});

module.exports = router;