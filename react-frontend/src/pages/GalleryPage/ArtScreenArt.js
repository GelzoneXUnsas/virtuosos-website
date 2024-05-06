import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ArtScreenArt.module.css";

import React from "react";

const ArtScreenArt = () => {
  const navigate = useNavigate();

  const onLogoIconClick = useCallback(() => {
    // Please sync "homepage" to the project
  }, []);

  const onLogoIcon2Click = useCallback(() => {
    // Please sync "homepage" to the project
  }, []);

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
    navigate("/");
  }, [navigate]);

  const onMusicCoversTextClick = useCallback(() => {
    // Please sync "art/musicCovers" to the project
  }, []);

  return (
    <div className={styles.artscreenart}>
      <div className={styles.header}>
        <img className={styles.bgimageIcon} alt="" src="/bgimage@2x.png" />
        <div className={styles.background} />
        <div className={styles.darkimgoverlay} />
        <div className={styles.bannertop} />
        <img
          className={styles.logoicon}
          alt=""
          src="/logoicon.svg"
          onClick={onLogoIconClick}
        />
        <div className={styles.title}>
          <b className={styles.pageName}>GALLERY</b>
        </div>
      </div>
      <div className={styles.images}>
        <img className={styles.imagesChild} alt="" src="/rectangle-9@2x.png" />
        <img className={styles.imagesItem} alt="" src="/rectangle-8@2x.png" />
        <img className={styles.imagesInner} alt="" src="/rectangle-7@2x.png" />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-10@2x.png"
        />
        <img
          className={styles.imagesChild1}
          alt=""
          src="/rectangle-11@2x.png"
        />
        <img
          className={styles.imagesChild2}
          alt=""
          src="/rectangle-12@2x.png"
        />
        <img
          className={styles.imagesChild3}
          alt=""
          src="/rectangle-13@2x.png"
        />
        <img className={styles.imagesChild} alt="" src="/rectangle-16@2x.png" />
        <img className={styles.imagesItem} alt="" src="/rectangle-17@2x.png" />
        <img className={styles.imagesInner} alt="" src="/rectangle-18@2x.png" />
        <img className={styles.rectangleIcon} alt="" src="/ingame-art@2x.png" />
        <img
          className={styles.imagesChild1}
          alt=""
          src="/rectangle-20@2x.png"
        />
        <img
          className={styles.imagesChild2}
          alt=""
          src="/rectangle-21@2x.png"
        />
        <img
          className={styles.imagesChild3}
          alt=""
          src="/rectangle-22@2x.png"
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.background1} />
        <div className={styles.homeandsocials}>
          <img
            className={styles.logoicon1}
            alt=""
            src="/logoicon1.svg"
            onClick={onLogoIcon2Click}
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
      <div className={styles.searchbar}>
        <div className={styles.search}>search</div>
        <img className={styles.searchicon} alt="" src="/searchicon.svg" />
      </div>
      <div className={styles.menutabs}>
        <div className={styles.header1}>
          <b className={styles.screenArt}>screen art</b>
          <b className={styles.musicCovers} onClick={onMusicCoversTextClick}>
            music covers
          </b>
        </div>
        <div className={styles.divider} />
        <img className={styles.lineselectIcon} alt="" src="/lineselect.svg" />
      </div>
      <img className={styles.galleryIcon} alt="" src="/gallery@2x.png" />
      <div className={styles.menu}>
        <div className={styles.menubtn}>
          <b className={styles.menu1}>MENU</b>
          <img className={styles.menubuttonIcon} alt="" src="/menubutton.svg" />
        </div>
      </div>
    </div>
  );
};

export default ArtScreenArt;
