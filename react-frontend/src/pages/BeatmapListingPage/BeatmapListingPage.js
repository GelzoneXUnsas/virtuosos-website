import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./BeatmapListingPage.module.css";

import React from "react";
import axios from "axios";

import headerBackground from '../../assets/images/headerBackground.png';
import searchIcon from '../../assets/icons/searchIcon.svg';


import bmDiffIcon from '../../assets/icons/bmDifficultyIcon.svg';
import easyDiffIcon from '../../assets/icons/easyCircleIcon.svg';
import normalDiffIcon from '../../assets/icons/normalCircleIcon.svg';
import hardDiffIcon from '../../assets/icons/hardCircleIcon.svg';
import playIcon from '../../assets/icons/playIcon.svg';
import heartIcon from '../../assets/icons/heartIcon.svg';


//images for beatmap covers 
import cover1 from '../../assets/images/musicCovers/celticwhispersballad.png';
import cover2 from '../../assets/images/musicCovers/neonpulsesym.png';
import cover3 from '../../assets/images/musicCovers/celestialechoes.png';
import cover4 from '../../assets/images/musicCovers/nocturnalpursuit.png';

const albumCovers = [cover1, cover2, cover3, cover4];

// const BACKEND_URL = 'http://localhost:5001';
const BACKEND_URL = 'http://api-virtuosos.us-west-1.elasticbeanstalk.com';

function BeatmapListingPage() {
    const [beatmapList, setBeatmapList] = useState([]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    const [query, setQuery] = useState(searchQuery || '');
    // const [results, setResults] = useState([]);

    async function fetchAll() {
        try {
            const route = BACKEND_URL + '/beatmapListing/' + (searchQuery? ('?search=' + searchQuery) : '');
            console.log('ROUTE', route);
            const response = await axios.get(route);
            console.log(response.data);
            return response.data.beatmap_info;
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
                setBeatmapList(result);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        console.log('Query:', query);

        updateList(query);
        // Perform any additional logic or API calls here
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        console.log('input', e.target.value);
    };
    
    async function makeGetCall(keyword) {
        try {
            const route = BACKEND_URL + '/beatmapListing';
            const response = await axios.get(route, keyword);
            return response;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    //make get call everytime a user searches for a beatmap
    function updateList(keyword) {
        makeGetCall(keyword).then( result => {
            if (result && result.status === 200)
                setBeatmapList([...beatmapList, keyword]);
        });
    }

    return (
        <div className={styles.beatmaplistingPage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
                <div className={styles.titleText}>BEATMAPS</div>
            </div>
            <div className={styles.gallerySearchContainer}>
                <div className= {styles.beatmapListingSearchItem}>
                        <form action="" className={styles.beatmapListingSearchItem}>
                                <input name="search" type="text" value={query} onChange={handleInputChange} placeholder="song, album, artist" />                           
                                <button type="submit" onSubmit={handleSearch}>
                                <img src={searchIcon} alt="" /></button>
                        </form>
                </div>
                {/* <div className={styles.beatmapListingFilterItem}>
                    <select className={styles.beatmapListingFilterItem} placeholder="sort by">
                        <option value="1">sort by: newest</option>
                        <option value="2">sort by: oldest</option>
                        <option value="3">sort by: most played</option>
                        <option value="4">sort by: least played</option>
                    </select>
                </div> */}
            </div>
            <div className={styles.bmListingDisplayMode}>
                <div className={styles.bmListingDisplayModeContainter}>
                    <div className={styles.bmListinDisplayModeItem}>songs</div>
                    {/* <div className={styles.bmListinDisplayModeItem}>artists</div> */}
                </div>
                <hr></hr>
                    <BeatmapList beatmapList={beatmapList} />
            </div>
        </div>
    );
}


function BeatmapList (props) {
    const navigate = useNavigate();
    
    const rows = props.beatmapList.map((beatmap, index) => {
        return ( 
            <div key={index}>
                <button type="button" className={styles.bmListItem} onClick={() => navigate(`/beatmap?id=${beatmap.id}`)}>
                    <div className={styles.musiccoverIcon}>
                        <img src={albumCovers[beatmap.id-1]} alt="" />
                    </div>
                    <div className={styles.musiccoverInfo}>
                        <div className={styles.songTitleText}>
                            {beatmap.songName}
                        </div>
                        <div className={styles.songArtistText}>
                            {beatmap.artist}
                        </div>
                        <div className={styles.mappedByText}>
                            mapped by {beatmap.beatmap_artist}
                        </div>
                        <div className={styles.gameInfoSection}>
                            <div className={styles.difficultySection}>
                                <img src={bmDiffIcon} alt="" />
                                <img src={easyDiffIcon} alt="" />
                                <img src={normalDiffIcon} alt="" />
                                <img src={hardDiffIcon} alt="" />
                            </div>
                            <div className= {styles.countInfoSection}>
                                <div className={styles.playCountInfo}>
                                    <img src={playIcon} alt="" />
                                    <b>
                                        {beatmap.playCount}
                                    </b>
                                </div>
                                <div className={styles.heartCountInfo}>
                                    <img src={heartIcon} alt="" />
                                    <b>
                                        {beatmap.likeCount}
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        );
    });
    return (
        <div className={styles.bmListContainer}>
            {rows}
        </div>
    );
}

export default BeatmapListingPage;




