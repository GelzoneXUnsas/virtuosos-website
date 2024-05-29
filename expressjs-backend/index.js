const express = require('express');
const app = express();
const port = 8080;

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
const userRouter = require('./routes/users');
const galleryRouter = require('./routes/gallery');
const beatmapListingRouter = require('./routes/beatmapListing');


app.use('/users', userRouter);
app.use('/gallery', galleryRouter);
app.use('/beatmapListing', beatmapListingRouter);


//listen to port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);

