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



    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
            return i !== index
        });
        setCharacters(updated);
    }

    function updateList(person) {
        setCharacters([...characters, person]);
    }

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
            <Form handleSubmit={updateList} />
        </div>
    );
}

export default MyApp;