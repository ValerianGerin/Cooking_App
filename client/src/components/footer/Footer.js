import React from "react";
import Style from "./Footer.module.css";
import Logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <div className={Style.footerMainContainer}>
      <div>
        <img className={Style.logo} src={Logo} />
      </div>
      <div className={Style.footerItems}>
        <h2>Entreprise</h2>
        <div>Cook SAS 20 rue Scal,</div>
        <div>Paris SIREN : 804 000 340 RCS de Paris</div>
        <div>Conditions générales d'utilisation</div>{" "}
        <div>Politique d'utilisation des données personnelles</div>
      </div>
      <div className={Style.footerItems}>
        <h2>Contact</h2>
        <div>Vous voulez nous rencontrer ? </div>
        <div>Vous avez une question ?</div>
      </div>
    </div>
  );
};

export default Footer;
