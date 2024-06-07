import React from 'react'
import styles from "./pages/GalleryPage/GalleryPage.module.css"; 

import art1 from "../src/assets/images/galleryArt/art1.png";
import art2 from "../src/assets/images/galleryArt/art2.png";
import art3 from "../src/assets/images/galleryArt/art3.png";
import art4 from "../src/assets/images/galleryArt/art4.png";
import art5 from "../src/assets/images/galleryArt/art5.png";
import art6 from "../src/assets/images/galleryArt/art6.png";
import art7 from "../src/assets/images/galleryArt/art7.png";
import art8 from "../src/assets/images/galleryArt/art8.png";

const artImages = [art1, art2, art3, art4, art5, art6, art7, art8];

function GalleryGrid(props) {
    function f(id) { // 100
        document.getElementById(id).style.zIndex = 100;
    }
    function g(id) { // -100
        document.getElementById(id).style.zIndex = -100;
    }
    const rows = props.galleryData.map((image, index) => { 
    return (<>
        {/* <div onClick={() => g(index)} id={index} style={{zIndex:-100, position: 'absolute', left: 0, top: 0, width: "100%", height: "auto"}}>
        <img src={artImages[image.id-1]} alt={image.description} />
        </div> */}
        {/* <div key={index} onClick={() => f(index)}> */}
        <div key={index}>
            <img className={styles.artImage} src={artImages[image.id-1]} alt={image.description} />
        </div>
        </>
    );
    }
    );
    return (
        <div className={styles.imageGrid}>
            {rows}
        </div>
    );
}


export default GalleryGrid;