import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

import React from "react";

import headerBackground from '../../images/headerBackground.png';

const Homepage = () => {
  const navigate = useNavigate();

  const onLogoIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBeatmapsTextClick = useCallback(() => {
    // Please sync "bm/community" to the project
  }, []);

  const onArtistsTextClick = useCallback(() => {
    // Please sync "bm/artistList" to the project
  }, []);

  const onCommunityTextClick = useCallback(() => {
    // Please sync "community/home" to the project
  }, []);

  const onArtTextClick = useCallback(() => {
    // Please sync "art/screenArt" to the project
  }, []);

  const onForumLinkContainerClick = useCallback(() => {
    // Please sync "community/home" to the project
  }, []);

  const onForumLinkContainer1Click = useCallback(() => {
    // Please sync "community/home" to the project
  }, []);

  const onForumLinkContainer2Click = useCallback(() => {
    // Please sync "community/home" to the project
  }, []);

  const onArtist1ContainerClick = useCallback(() => {
    // Please sync "bm/artistProfile" to the project
  }, []);

  const onImagineAWorldClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutUsSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOURVISIONTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutUsSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.background} />
      <img className={styles.headerIcon} alt="" src='' />
      <div className={styles.footer}>
        <div className={styles.background1} />
        <div className={styles.homeandsocials}>
          <img
            className={styles.logoicon}
            alt=""
            src="/logoicon.svg"
            onClick={onLogoIconClick}
          />
          <img className={styles.igicon} alt="" src="/igicon.svg" />
          <img className={styles.igicon} alt="" src="/xicon.svg" />
          <img className={styles.igicon} alt="" src="/tiktokicon.svg" />
        </div>
        <div className={styles.contactHellogmailcomFor}>
          contact hello@gmail.com for support
        </div>
        <div className={styles.sections}>
          <b className={styles.beatmaps} onClick={onBeatmapsTextClick}>
            Beatmaps
          </b>
          <b className={styles.beatmaps} onClick={onArtistsTextClick}>
            Artists
          </b>
          <b className={styles.beatmaps} onClick={onCommunityTextClick}>
            Community
          </b>
          <b className={styles.beatmaps} onClick={onArtTextClick}>
            Art
          </b>
        </div>
      </div>
      <div className={styles.communitysection}>
        <div className={styles.posts}>
          <div className={styles.forumlink} onClick={onForumLinkContainerClick}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.title}>
              <div className={styles.bg} />
              <b className={styles.excitingUpdateNew}>
                Exciting Update: New levels!
              </b>
            </div>
            <div className={styles.div}>3/4/2024</div>
          </div>
          <div
            className={styles.forumlink1}
            onClick={onForumLinkContainer1Click}
          >
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.title}>
              <div className={styles.bg} />
              <b className={styles.unravelingTheSonic}>
                Unraveling the Sonic Mysteries
              </b>
            </div>
            <div className={styles.div1}>2/17/2024</div>
          </div>
          <div
            className={styles.forumlink2}
            onClick={onForumLinkContainer2Click}
          >
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.title}>
              <div className={styles.bg} />
              <b className={styles.craftingAMusical}>
                Crafting a Musical Odyssey
              </b>
            </div>
            <div className={styles.div2}>1/23/2024</div>
          </div>
        </div>
        <b className={styles.checkOutPopular}>
          Check out popular community posts!
        </b>
      </div>
      <div
        className={styles.aboutussection}
        data-scroll-to="aboutUsSectionContainer"
      >
        <div className={styles.virtuososIsAContainer}>
          <p className={styles.virtuososIsA}>
            Virtuosos is a rhythm game that goes beyond entertainment. We've
            crafted an experience that seamlessly weaves together immersive
            storytelling and game mechanics, placing music at the forefront. But
            we're not stopping there.
          </p>
          <p className={styles.virtuososIsA}>&nbsp;</p>
          <p className={styles.virtuososIsA}>
            Our website platform is a collaborative space where creators can
            share their compositions, their passions, and their stories. With
            the ability to integrate music distribution services right into our
            website, an artist’s creations won't just be confined to the game.
            They'll reach a broader audience, helping them gain the recognition
            they deserve.
          </p>
        </div>
        <b className={styles.aboutUs}>About Us</b>
        <div className={styles.aboutussectionChild} />
      </div>
      <div className={styles.featartistssection}>
        <div className={styles.bg3} />
        <b className={styles.meetOurFeatured}>Meet our Featured Artists!</b>
        <div className={styles.featartistssectionChild} />
        <div className={styles.featartistssectionItem} />
        <div className={styles.artist3}>
          <b className={styles.shadowWeaver}>Shadow Weaver</b>
          <img
            className={styles.artist3Child}
            alt=""
            src="/ellipse-13@2x.png"
          />
          <div className={styles.playcount}>
            <div className={styles.totalPlaycount}>total playcount</div>
            <div className={styles.div3}>497</div>
          </div>
          <div className={styles.soungcount}>
            <div className={styles.totalPlaycount}>songs</div>
            <div className={styles.div4}>20</div>
          </div>
          <img className={styles.spotifyIcon} alt="" src="/spotify-icon.svg" />
          <img
            className={styles.soundcloudIcon}
            alt=""
            src="/soundcloud-icon.svg"
          />
        </div>
        <div className={styles.artist2}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <b className={styles.shadowWeaver}>Folklore Minstrel</b>
          <img
            className={styles.artist3Child}
            alt=""
            src="/ellipse-13@2x.png"
          />
          <div className={styles.playcount}>
            <div className={styles.totalPlaycount}>total playcount</div>
            <div className={styles.div3}>609</div>
          </div>
          <div className={styles.soungcount}>
            <div className={styles.totalPlaycount}>songs</div>
            <div className={styles.div4}>32</div>
          </div>
          <img className={styles.spotifyIcon} alt="" src="/spotify-icon1.svg" />
          <img
            className={styles.soundcloudIcon}
            alt=""
            src="/soundcloud-icon1.svg"
          />
        </div>
        <div className={styles.artist1} onClick={onArtist1ContainerClick}>
          <div className={styles.artist1Child} />
          <div className={styles.info}>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <b className={styles.shadowWeaver}>Techno Maestro</b>
            <img
              className={styles.artist3Child}
              alt=""
              src="/ellipse-13@2x.png"
            />
            <div className={styles.playcount}>
              <div className={styles.totalPlaycount}>total playcount</div>
              <div className={styles.div3}>538</div>
            </div>
            <div className={styles.soungcount}>
              <div className={styles.totalPlaycount}>songs</div>
              <div className={styles.div4}>25</div>
            </div>
            <img
              className={styles.spotifyIcon}
              alt=""
              src="/spotify-icon2.svg"
            />
            <img
              className={styles.soundcloudIcon}
              alt=""
              src="/soundcloud-icon2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.downloadsection}>
        <div className={styles.downloadForFree}>Download for free</div>
        <div className={styles.downloadlinks}>
          <img
            className={styles.appledownloadIcon}
            alt=""
            src="/appledownload.svg"
          />
          <img
            className={styles.googleplaydownloadIcon}
            alt=""
            src="/googleplaydownload@2x.png"
          />
        </div>
      </div>
      <div className={styles.visionsection}>
        <div className={styles.bgimage} />
        <div className={styles.imagineAWorld} onClick={onImagineAWorldClick}>
          Imagine a world where the lines between creator and player blur. Where
          the music you compose is the soundtrack to another’s personal journey.
        </div>
        <b className={styles.ourVision} onClick={onOURVISIONTextClick}>
          OUR VISION
        </b>
      </div>
      
      <div className={styles.menu}>
        <div className={styles.menubtn}>
          <b className={styles.menu1}>MENU</b>
          <img className={styles.menubuttonIcon} alt="" src="/menubutton.svg" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;