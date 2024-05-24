import React from 'react'
import styles from "./pages/GalleryPage/GalleryPage.module.css"; 

import art1 from "../src/assets/images/galleryArt/art1.png";
import art2 from "../src/assets/images/galleryArt/art2.png";
import art3 from "../src/assets/images/galleryArt/art3.png";
// import art4 from "../../assets/images/galleryArt/art4.png";
// import art5 from "../../assets/images/galleryArt/art5.png";
// import art6 from "../../assets/images/galleryArt/art6.png";
// import art7 from "../../assets/images/galleryArt/art7.png";
//import art8 from "../../assets/images/galleryArt/art8.png";

function GalleryGrid(props) {
    const rows = props.galleryData.map((image, index) => { 
    return (
        <div key={index}>
            <img className={styles.artImage} src={image.name} alt={image.description} />
        </div>
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