const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// allow backend to respond to calls co,ing from a different origin
const cors = require('cors');
app.use(cors());

app.use(express.json());

//get(first parameter is the path, second parameter is the callback function)
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

//Define the routes
const galleryRouter = require('./routes/gallery');
const beatmapListingRouter = require('./routes/beatmapListing');
const musicianListingRouter = require('./routes/musicianListing.js');


app.use('/gallery', galleryRouter);
app.use('/beatmapListing', beatmapListingRouter);
app.use('/musicianListing',musicianListingRouter);

//listen to port

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
    }
);

