const express = require('express');
const app = express();
const port = 5001;

app.use(express.json());

//get(first parameter is the path, second parameter is the callback function)
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);

const users = {
    users_list:
        [
            {
                id: 'xyz789',
                name: 'CharlieXCX',
                job: 'Janitor',

            },
            {
                id: 'abc123',
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                id: 'ppp222',
                name: 'Mac',
                job: 'Professor',
            },
            {
                id: 'yat999',
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                id: 'zap555',
                name: 'Dennis',
                job: 'Bartender',
            }
        ]
}

const findUserByName = (name) => {
    return users['users_list'].filter((user) =>
        user['name'] === name);
}

app.get('/users', (req, res) => {
    const name = req.query.name;
    if (name != undefined) {
        let result = findUserByName(name);
        result = {users_list: result};
        res.send(result);
    }else{
        res.send(users);
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    let result = findUserById(id);
    if(result === undefined || result.length < 1) {
        res.status(404).send('User not found');
    }else{
        result = {user_list: result};
        res.send(result);
    }
});



function findUserById(id){
    // find() returns the first match; in this case use find bc all ids are unique
    // filter() returns all matches
    return users['users_list'].find( (user) =>
        user['id'] === id);
}