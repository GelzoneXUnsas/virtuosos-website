import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";

import React from "react";

import headerBackgroundImg from '../../assets/images/headerBackground.png';
import virtuososTitle from '../../assets/icons/virtuososTitle.svg';

import appleDownloadIcon from "../../assets/icons/appleDownloadIcon.svg";
import googlePlayDownloadIcon from "../../assets/icons/googlePlayDownloadIcon.svg";
import verifiedIcon from "../../assets/icons/verifiedIcon.svg";

import artist1Image from "../../assets/images/featuredArtists/artist1.jpg";
import artist2Image from "../../assets/images/featuredArtists/artist2.jpg";
import artist3Image from "../../assets/images/featuredArtists/artist3.png";
import spotifyIcon from "../../assets/icons/SpotifyIcon1.svg";
import soundcloudIcon from "../../assets/icons/soundCloudIcon.svg";
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
    <div className="homepage flex flex-col w-full bg-page-accent-gray overflow-hidden text-center text-body-overpass-base text-white font-body-overpass">
    <div className="titleContainer relative h-60 z-0 overflow-hidden lg:h-80">
      <div className="bgImgContainer w-full lg:-mt-64">
        <img src={headerBackgroundImg} className="headerBackgroundImg w-full relative object-cover" alt="" />
      </div>
      
      <img src={virtuososTitle} className="virtuososTitle absolute w-full h-20 top-28 bottom-0 z-2 flex justify-center lg:h-[35%] lg:top-[45%]" alt="" />
      <div className="gradientOverlay absolute bottom-0 w-full h-[70%] bg-gradient-overlay z-1"></div>
    </div>
      <div className="visionAndDemoContainer bg-page-accent-gray relative lg:flex-row lg:flex lg:pt-4"> 
        <div className="visionSection overflow-auto flex flex-col lg:justify-center lg:p-20">    
          <div className="visionSectionTitle text-center inline-block m-0 pb-1 font-title-lexend text-title-lexend-large leading-8">
            OUR VISION
          </div>
          <div className="visionSectionBody leading-6 font-medium inline-block p-8 pt-2">
            Imagine a world where the lines between creator and player blur. Where
            the music you compose is the soundtrack to another’s personal journey.
          </div>
          {/* <div className={styles.bgimage} /> */}
        </div>
        <div className="demoVideoContainer w-full h-auto flex justify-center">
          <img className="demoVideo w-[90%] h-auto py-[5vw] rounded-[2.5rem] object-contain 2xl:w-[70%] 2xl:py-0" width="562" height="316" src={Demogif} alt="Game demo gif" />
          {/* <video src={demoVideo} className={styles.demoVideo} autoPlay={autoPlayDemoVideo}/> */}
        </div>
      </div>
      <div className="signupAndDownloadContainer w-full h-auto flex flex-col justify-center z-30">
        <div className="signupContainer pt-8 lg:pt-12">
          <a href="https://forms.gle/pySBHibGemoQsA8J8">
          <button className="SignUpbutton bg-page-background rounded py-2 px-3 text-body-overpass-base font-body-overpass border-none cursor-pointer -mt-4 mb-2 hover:bg-custom-hover-blue transition-all duration-700">Sign Up</button>
          </a>
          <div>Subscribe to our newsletter!</div>
        </div>
        <div className="downloadSection bg-page-accent-gray pt-8 h-24">
          <div className="downloadText leading-6 font-medium pb-2">Download for free</div>
          <div className="downloadLinks flex justify-evenly">
            <img
              className="rounded overflow-hidden object-contain mix-blend-normal"
              alt="Download from the App Store"
              src={appleDownloadIcon}
              onClick={() => {
                window.open(appStoreDownloadLink, "_blank");
              }}
            />
            <img
              className="rounded overflow-hidden object-contain mix-blend-normal"
              alt="Download from the Play Store"
              src={googlePlayDownloadIcon}
              onClick={() => {
                window.open(googlePlayDownloadLink, "_blank");
              }}
            />
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
                    <img className={styles.artistLinkIcons} src={soundcloudIcon} alt="artist"/>
                  </div>
                </div>
                <div className={styles.artistRelatedInfo}>
                  <div className={styles.artistTitleContainer}>
                    <div className={styles.artistNameVerified}>
                      <div className={styles.artistName}>
                        {artist.name}
                      </div>
                      <img className={styles.verifiedIcon} src={verifiedIcon} alt="verified"/>
                    </div>
                  </div>
                  <div className={styles.artistStatistics}>
                    <div className={styles.artistStatLabels}>
                      <div className={styles.songcountText}>songs</div>
                      <div className={styles.playcountText}>total playcount</div>
                    </div>

                    <div className={styles.artistStatValues}>
                      <div className={styles.songcountValue}>25</div>
                      <div className={styles.playcountValue}>538</div>
                    </div>
                  </div>
                </div>
              </div>
              {index !== featuredArtists.length - 1 ? <hr ></hr> : null}
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