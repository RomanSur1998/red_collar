import React from "react";
import styles from "./Loader.module.css";
import { icons } from "../../assets";

const Loader = () => {
  return (
    <div className={styles.container}>
      <img src={icons.star} alt="" className={styles.loaderIcon} />
      <span>Loading....</span>
    </div>
  );
};

export default Loader;
