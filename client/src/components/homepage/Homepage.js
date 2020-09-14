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
      <div>
        <img
          className={Style.imgSlider}
          src={carroussel[0]}
          alt="img homepage"
          id="imgSlider"
        />
      </div>

      <div className={Style.sliderContainer}>
        {carroussel
          ? carroussel.map((imgUrl) => (
              <div
                className={Style.sliders}
                onClick={() => sliderButton(imgUrl)}
              ></div>
            ))
          : null}
      </div>

      <div className={Style.homeMessage}>
        <h1>Inspirations recettes, bonjour !</h1>
        Toujours plus d’inspiration en cuisine grâce à nos recettes faciles,
        rapides et tendances.
      </div>
      <div className={Style.homepageImgContainer}>
        <div>
          <img className={Style.homepageImg} src={`${path}image/homepageImg1.jpg`}/>
        </div>
        <div>
          <img className={Style.homepageImg} src={`${path}image/homepageImg2.jpeg`}/>
        </div>
        <div>
          <img className={Style.homepageImg} src={`${path}image/homepageImg3.jpg`}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
