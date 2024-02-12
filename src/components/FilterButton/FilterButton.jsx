import React from "react";
import styles from "./FilterButton.module.css";
import { icons } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/clices/DataSlice";

const FilterButton = ({ name }) => {
  const { category } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  return (
    <button
      style={
        category === name ? { backgroundColor: "#3625FF", color: "#fff" } : null
      }
      className={styles.button}
      onClick={() => dispatch(setCategory(name))}
    >
      {category === name ? <img src={icons.point} alt="" /> : null}
      <h3>{name}</h3>
    </button>
  );
};

export default FilterButton;
