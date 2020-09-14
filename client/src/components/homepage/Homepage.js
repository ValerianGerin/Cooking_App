import React, { useState, useEffect } from "react";
import Style from "./Homepage.module.css";
import { path } from "../index";

const Homepage = () => {
  const [carroussel, setCarrousel] = useState([]);

  useEffect(() => {
    const fetchCarrousselImg = async () => {
      Promise.all([
        fetch(`${path}image/carroussel1.jpg`),
        fetch(`${path}image/carroussel2.jpg`),
        fetch(`${path}image/carroussel3.jpg`),
      ])

        .then((dataImg) => dataImg.map((img) => img.url))
        .then((urlImg) => setCarrousel(urlImg));
    };

    fetchCarrousselImg();
  }, []);

  const sliderButton = (url) => {
    const img = document.querySelector("img[id=imgSlider]");
    const setImgUrl = img ? img.setAttribute("src", url) : null;
    return setImgUrl;
  };

  return (
    

    <div className={Style.homepageMainContainer}>

        {/*Slider img and buttons */}
      <div>
        <img
          className={Style.imgSlider}
          src={carroussel[0]}
          alt="img homepage"
          id="imgSlider"
        />
        <div className={Style.sliderContainer}>
          {carroussel
            ? carroussel.map((imgUrl, index) => (
                <div
                  key={index}
                  className={Style.sliders}
                  onClick={() => sliderButton(imgUrl)}
                ></div>
              ))
            : null}
        </div>
      </div>

      {/*article and homepage message*/}

      <div className={Style.homeMessage}>
        {/*Homepage message */}

        <h1>Inspirations recettes, bonjour !</h1>
        <p>
          Toujours plus d’inspiration en cuisine grâce à nos recettes faciles,
          rapides et tendances.
        </p>
      </div>

       {/*articles*/}
       <div className={Style.homepageArticlesContainer}>
        <div className={Style.articleContainer}>
          <img
            src={`${path}image/homepageImg1.jpg`}
            className={Style.articleImg}
          />
          <p>Les legumes</p>
        </div>
        <div className={Style.articleContainer}>
          <img
            src={`${path}image/homepageImg2.jpeg`}
            className={Style.articleImg}
          />
          <p>les poissons</p>
        </div>
        <div className={Style.articleContainer}>
          <img
            src={`${path}image/homepageImg3.jpg`}
            className={Style.articleImg}
          />
          <p>les soupes</p>
        </div>
      </div>

     
    </div>
  );
};

export default Homepage;
