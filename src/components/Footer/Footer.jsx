import React from "react";
import styles from "./Footer.module.css";
import { icons } from "../../assets";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <span>nonameshop©2024</span>
      <img src={icons.star} alt="" />
      <span>made in red collar</span>
    </div>
  );
};

export default Footer;
