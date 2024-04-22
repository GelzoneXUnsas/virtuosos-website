const express = require('express');
const app = express();
const port = 5001;

app.use(express.json());

//get(first parameter is the path, second parameter is the callback function)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});