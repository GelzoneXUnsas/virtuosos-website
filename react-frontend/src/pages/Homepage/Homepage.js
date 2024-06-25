import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";

import React from "react";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import headerBackgroundImg from '../../assets/images/headerBackground.png';
import virtuososTitle from '../../assets/icons/virtuososTitle.svg';

import appleDownloadIcon from "../../assets/icons/appleDownloadIcon.svg";
import googlePlayDownloadIcon from "../../assets/icons/googlePlayDownloadIcon.svg";
import verifiedIcon from "../../assets/icons/verifiedIcon.svg";

import artist1Image from "../../assets/images/featuredArtists/artist1.jpg";
import artist2Image from "../../assets/images/featuredArtists/artist2.jpg";
import artist3Image from "../../assets/images/featuredArtists/artist3.png";
import spotifyIcon from "../../assets/icons/spotifyIcon.svg";
import Demogif from "../../assets/images/Demogif.gif";

const getFeaturedArtists = () => {
  return [{
    name: "Techno Maestro",
    image: artist1Image,
    playcount: 538,
    songcount: 25,
    spotifyLink: "https://open.spotify.com/artist/3w8dJ7f4i1Vb8Qzq5f5K9g",
    soundcloudLink: "https://soundcloud.com/technomaestro",
  },
  {
    name: "The Shadow Weaver",
    image: artist2Image,
    playcount: 538,
    songcount: 25,
    spotifyLink: "https://open.spotify.com/artist/3w8dJ7f4i1Vb8Qzq5f5K9g",
    soundcloudLink: "https://soundcloud.com/technomaestro",
  },
  {
    name: "The Sound Sorcerer",
    image: artist3Image,
    playcount: 538,
    songcount: 25,
    spotifyLink: "https://open.spotify.com/artist/3w8dJ7f4i1Vb8Qzq5f5K9g",
    soundcloudLink: "https://soundcloud.com/technomaestro",
}];
};

const Homepage = () => {
  // let autoPlayDemoVideo = true;
  const appStoreDownloadLink = "https://gelzonexunsas.itch.io/virtuosos";
  const googlePlayDownloadLink = "https://gelzonexunsas.itch.io/virtuosos";
  const [featuredArtists, setFeaturedArtists] = useState([]);

  useEffect(() => {
    setFeaturedArtists(getFeaturedArtists());
  }, []);

  return (
    <>
    {/* <div className="gradient-container">
      <div className="div1">Content of Div 1</div>
      <div className="div2">Content of Div 2</div>
    </div> */}
    <div className={styles.homepage}>
      <div className="gradient-container">
        <div className={styles.titleContainer}>
          {/* <div classNameg= {styles.headerBackgroundDark}/> */}
          <img src={headerBackgroundImg} className={styles.headerBackgroundImg} alt="" />
          <img src= {virtuososTitle} className={styles.virtuososTitle} alt="" />
        </div>
        <div className={styles.visionAndDownloadContainer}> 
          <div className={styles.visionSection}>    
            <div className={styles.visionSectionTitle}>
              OUR VISION
            </div>
            <div className={styles.visionSectionBody}>
              Imagine a world where the lines between creator and player blur. Where
              the music you compose is the soundtrack to another’s personal journey.
            </div>
            <div className={styles.bgimage} />
          </div>
          <div className={styles.demoVideoContainer}>
          <img width="562" height="316" src={Demogif} alt="Game demo gif" />
            {/* <video src={demoVideo} className={styles.demoVideo} autoPlay={autoPlayDemoVideo}/> */}
          </div>
          <div className={styles.signUpNewsLetterTitle}>
            <Button variant="primary" size="lg" onClick={() => window.open("https://forms.gle/pySBHibGemoQsA8J8")}>
              Subscribe to our newsletter!
            </Button>
          </div>
          <div className={styles.downloadSection}>
            <div className={styles.downloadText}>Download for free</div>
            <div className={styles.downloadLinks}>
              <img
                className={styles.downloadIcon}
                alt="Download from the App Store"
                src={appleDownloadIcon}
                onClick={() => {
                  window.open(appStoreDownloadLink, "_blank");
                }}
              />
              <img
                className={styles.downloadIcon}
                alt="Download from the Play Store"
                src={googlePlayDownloadIcon}
                onClick={() => {
                  window.open(googlePlayDownloadLink, "_blank");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featuredArtistsSection}>
        <b className={styles.featuredArtistsSectionTitle}>Meet our Featured Artists!</b>
        {
          featuredArtists.map((artist, index) => {
            return (
              <>
              <div className={styles.featuredArtistDetails}>
                <div className={styles.artistImgAndLinks}>
                  <img className={styles.artistImage} src={artist.image} alt="artist"/>
                  <div className={styles.artistLinks}>
                    <img className={styles.artistLinkIcons} src={spotifyIcon} alt="artist"/>
                    <img className={styles.artistLinkIcons} src={spotifyIcon} alt="artist"/>
                  </div>
                </div>
                <div className={styles.artistRelatedInfo}>
                  <div className={styles.artistTitleContainer}>
                    <div className={styles.artistName}>
                      {artist.name}
                    </div>
                    <img className={styles.verifiedIcon} src={verifiedIcon} alt="verified"/>
                  </div>
                  <div className={styles.artistStatistics}>
                    <div className={styles.artistSongcount}>
                      <div className={styles.songcountText}>songs</div>
                      <div className={styles.songcountValue}>25</div>
                    </div>
                    <div className={styles.artistPlaycount}>
                      <div className={styles.playcountText}>total playcount</div>
                      <div className={styles.playcountValue}>538</div>
                    </div>
                  </div>
                </div>
              </div>
              {index !== featuredArtists.length - 1 ? <hr class="solid"></hr> : null}
              </>
            );
          })
        }

      </div>
      <div className={styles.aboutUsSection}>
        <div className={styles.aboutUsTitle}>
          About Us
        </div>
        <div className={styles.aboutUsDescription}>
          <p>
            Virtuosos is a rhythm game that goes beyond entertainment. We've
            crafted an experience that seamlessly weaves together immersive
            storytelling and game mechanics, placing music at the forefront. But
            we're not stopping there.
          </p>
          <p>
            Our website platform is a collaborative space where creators can
            share their compositions, their passions, and their stories. With
            the ability to integrate music distribution services right into our
            website, an artist’s creations won't just be confined to the game.
            They'll reach a broader audience, helping them gain the recognition
            they deserve.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Homepage;