import React, { useState, useEffect } from 'react'
import Table from './Table'
import Form from './Form'
import axios from 'axios';



function MyApp() {
    //start with empty states
    const [characters, setCharacters] = useState([]);

    async function fetchAll() {
        try {
            const response = await axios.get('http://localhost:5001/users');
            return response.data.users_list;
        }
        catch (error) {
            //We're not handling errors. Just logging into the console.
            console.log(error);
            return false;

        }
    }

    useEffect(() => {
        fetchAll().then(result => {
            if (result)
                setCharacters(result);
        });
    }, []);

    async function makePostCall(person) {
        try {
            const response = await axios.post('http://localhost:5001/users', person);
            return response;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
            return i !== index
        });
        setCharacters(updated);
    }

    //make a post call everytime we want to add someone to the table and then if response is sucessful, update the list
    function updateList(person) { 
        makePostCall(person).then( result => {
            if (result && result.status === 200)
                setCharacters([...characters, person]);
        });
    }

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
            <Form handleSubmit={updateList} />
        </div>
    );
}

export default MyApp;