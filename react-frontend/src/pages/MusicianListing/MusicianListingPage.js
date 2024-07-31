import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./MusicianListingPage.module.css";

import React from "react";
import axios from "axios";

import headerBackground from '../../assets/images/headerBackground.png';
import searchIcon from '../../assets/icons/searchIcon.svg';

import artist2Image from "../../assets/images/featuredArtists/artist2.jpg";
import artist1Image from "../../assets/images/featuredArtists/artist1.jpg";
import artist3Image from "../../assets/images/featuredArtists/artist3.png";

//images for beatmap covers
const musicianImages = {'artist1Image': artist1Image, 'artist2Image': artist2Image, 'artist3Image': artist3Image};
 const BACKEND_URL = 'http://localhost:5001';
//const BACKEND_URL = 'http://api-virtuosos.us-west-1.elasticbeanstalk.com';

function MusicianListingPage() {
    const [musicianList, setMusicianList] = useState([]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    const [query, setQuery] = useState(searchQuery || '');
    // const [results, setResults] = useState([]);

    async function fetchAll() {
        try {
            const route = BACKEND_URL + '/musicianListing/' + (searchQuery? ('?search=' + searchQuery) : '');
            console.log('ROUTE', route);
            const response = await axios.get(route);
            console.log(response.data);
            return response.data.musician_infos;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    useEffect(() => {
        fetchAll().then(result => {
            console.log('RESULT', result);
            if (result)
                setMusicianList(result);
        });    },[]);

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        console.log('Query:', query);

        updateList(query);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        console.log('input', e.target.value);
    };
    
    async function makeGetCall(keyword) {
        try {
            const route = BACKEND_URL + '/musicianListing';
            const response = await axios.get(route, keyword);
            return response;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    //make get call everytime a user searches for a musician
    function updateList(keyword) {
        makeGetCall(keyword).then( result => {
            if (result && result.status === 200)
                setMusicianList([...musicianList, keyword]);
        });
    }

    return (
        <div className={styles.musicianlistingPage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
                <div className={styles.titleText}>Musicians</div>
            </div>
            <div className={styles.gallerySearchContainer}>
                <div className= {styles.musicianListingSearchItem}>
                        <form action="" className={styles.musicianListingSearchItem}>
                                <input name="search" type="text" value={query} onChange={handleInputChange} placeholder="song, album, musician" />                           
                                <button type="submit" onSubmit={handleSearch}>
                                <img src={searchIcon} alt="" /></button>
                        </form>
                </div>
                


            </div>
            <div className={styles.musicianListingDisplayMode}>
                <div className={styles.musicianListingDisplayModeContainter}>
                    <div className={styles.musicianListinDisplayModeItem}>musicans</div>
                </div>
                <hr></hr>
                    <MusicianList musicianList={musicianList} />
            </div>
        </div>
    );
}


function MusicianList (props) {
    const navigate = useNavigate();
    const rows = props.musicianList.map((musician, index) => {
        return (
        <div className={styles.musicianssection}>
            
            <div className="musician">
            <button className={styles.button2} onClick={() => navigate(`/musician?id=${musician.id}`)}>
                <img className={styles.musicianpic}src={artist1Image} alt="Profile pictue"/>
                </button>
                <div className={styles.musicianname}>{musician.musicianName}</div>
              <p className={styles.musicianistplays}>{musician.totalSongs} songs | {musician.totalPlaycount} plays</p>
              
            </div>
          </div>);
    });
    return (
        <div className={styles.musicianListContainer}>
            {rows}
        </div>
    );
}

export default MusicianListingPage;