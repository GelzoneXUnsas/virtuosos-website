// import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./BeatmapPage.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import headerBackground from '../../assets/images/headerBackground.png';


import durationIcon from '../../assets/icons/durationicon.svg';
import bpmIcon from '../../assets/icons/bpmIcon.svg';
import noteCountIcon from '../../assets/icons/notecountIcon.svg';
import sliderCountIcon from '../../assets/icons/bm-slider-icon.svg';
import bm30ValueBar from '../../assets/icons/bm-fill-bar-30.svg';
import bmDifficultyBar from '../../assets/icons/bm-difficultyBar.svg';

import playIcon from '../../assets/icons/playIcon.svg';
import heartIcon from '../../assets/icons/heartIcon.svg';
import verifiedIcon from "../../assets/icons/verifiedIcon.svg";
import easyIcon from "../../assets/icons/bmEasyIcon.svg";

//images for beatmap covers 
import cover1 from '../../assets/images/musicCovers/celticwhispersballad.png';
import cover2 from '../../assets/images/musicCovers/neonpulsesym.png';
import cover3 from '../../assets/images/musicCovers/celestialechoes.png';
import cover4 from '../../assets/images/musicCovers/nocturnalpursuit.png';

//images for artists
import artist2Image from "../../assets/images/featuredArtists/artist2.jpg";
import artist1Image from "../../assets/images/featuredArtists/artist1.jpg";
import artist3Image from "../../assets/images/featuredArtists/artist3.png";

const albumCovers = {'cover1': cover1, 'cover2': cover2, 'cover3': cover3, 'cover4': cover4};
const artistImages = {'artist1Image': artist1Image, 'artist2Image': artist2Image, 'artist3Image': artist3Image};


 const BACKEND_URL = 'http://localhost:5001';
// const BACKEND_URL = 'http://api-virtuosos.us-west-1.elasticbeanstalk.com';


function BeatmapPage() {
    const [beatmap, setBeatmap] = useState([]);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    console.log('ID', id);
    async function fetchAll() {
        try {
            const route = BACKEND_URL + `/beatmapListing?id=${id}`;
            const response = await axios.get(route);
            console.log(response.data.beatmap_info[0]);
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
            if (result && result.length > 0)
                setBeatmap(result[0]);
                console.log('beatmap', beatmap);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.beatmaplistingPage}>
            <div className={styles.titleContainer}>
                <img src={headerBackground} className={styles.headerBackground} alt="" />
                <div className={styles.titleText}>BEATMAP</div>
                <div className={styles.bmContent}>
                    <div className={styles.bmSongInfoSection}>
                        <div className={styles.bmSongName}>
                            {beatmap.songName}
                        </div>
                        <div className= {styles.countInfoSection}>
                            <div className={styles.playCountInfo}>
                                <img src={playIcon} className={styles.infoSvg} alt="" />
                                <b>
                                    {beatmap.playCount}
                                </b>
                            </div>
                            <div className={styles.heartCountInfo}>
                                <img src={heartIcon} className={styles.infoSvg} alt="" />
                                <b>
                                    {beatmap.likeCount}
                                </b>
                            </div>
                        </div>
                        <div className={styles.bmAdditionalInfoSection}>
                            <div className={styles.bmArtistInfoSection}>
                                <div className={styles.artistDetails}>
                                    <img className={styles.artistImage} src={artistImages[beatmap.artistImg]} alt=""/>
                                    <div className={styles.artistTitleContainer}>
                                        <div className={styles.artistName}>
                                            {beatmap.artist}                                        </div>
                                        <img className={styles.verifiedIcon} src={verifiedIcon} alt=""/>
                                    </div>
                                </div>
                                <div className={styles.releaseDate}>
                                    released {beatmap.releaseDate}
                                </div>    
                            </div>
                            <div className={styles.bmDifficultySection}>
                                <div className= {styles.bmDifficultyInfoSection}>
                                    <img src={easyIcon} className={styles.diffIcon} alt=""/>
                                    <div className={styles.difficultyScore}>
                                        2.3  
                                    </div>
                                </div>
                                <div className= {styles.bmDiffBar}>
                                    <img src={bmDifficultyBar} className={styles.diffBar} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.beatmapGameInfoSection}>
                        <div className={styles.beatmapInfo}>
                            <img src={albumCovers[beatmap.songCoverImg]} className={styles.coverImg} alt=""></img>
                            <div className= {styles.bmInfoSection}>
                                <div className={styles.mapperInfo}>
                                    mapped by {beatmap.beatmap_artist}
                                </div>
                                <div className={styles.bmData}>
                                    <div className={styles.bmDataItem}>
                                        <img src={durationIcon} className={styles.bmSvg} alt="" />
                                        <b>
                                            {beatmap.songDuration}
                                        </b>
                                    </div>
                                    <div className={styles.bmDataItem}>
                                        <img className={styles.bmSvg} src={bpmIcon} alt="" />
                                        <b>
                                            {beatmap.bpm}
                                        </b>
                                    </div>
                                    <div className={styles.bmDataItem}>
                                        <img className={styles.bmSvg} src={noteCountIcon} alt="" />
                                        <b>
                                            {beatmap.noteCount}
                                        </b>
                                    </div>
                                    <div className={styles.bmDataItem}>
                                        <img className={styles.bmSvg} src={sliderCountIcon} alt="" />
                                        <b>
                                            61
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bmStatInfo}>
                            <div className={styles.bmStatItem}>
                                <div className={styles.bmStatAttribute}>
                                    HP Drain
                                </div>
                                <div className={styles.valueBar}>
                                    <img src={bm30ValueBar} className={styles.bmValueBar} alt=""/>
                                </div>
                                <div className={styles.bmStatValue}>5</div>
                            </div>
                            <div className={styles.bmStatItem}>
                                <div className={styles.bmStatAttribute}>
                                    Approach Rate
                                </div>
                                <div className={styles.valueBar}>
                                    <img src={bm30ValueBar} className={styles.bmValueBar} alt=""/>
                                </div>
                                <div className={styles.bmStatValue}>7</div>
                            </div>
                            <button type="button" className={styles.downloadButton}>
                                Download
                            </button>
                        </div>
                        <hr></hr>
                        <div className={styles.bmDescription}>
                            {beatmap.description}
                        </div>

                        <div className={styles.tagSection}> 
                            <div className={styles.tagItem}>
                                <div className={styles.tagTitle}>
                                    Source:
                                </div>
                                <div className={styles.tagValues}>
                                    {beatmap.source}
                                </div>
                            </div>
                            <div className={styles.tagItem}>
                                <div className={styles.tagTitle}>
                                    Tags:
                                </div>
                                <div className={styles.tagValues}>
                                    {(beatmap.tags) && (beatmap.tags).join(', ')}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeatmapPage;




