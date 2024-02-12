import React, { useEffect } from "react";
import styles from "./CartCard.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  changeProductCount,
  deleteCartProduct,
} from "../../helpers/cartHelper";

const CartCard = ({ elem }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img src={elem.item.images[0]} className={styles.image} alt="" />
      <div className={styles.block}>
        <div className={styles.textBlock}>
          <span>
            {elem.item.brand} {elem.item.title}
          </span>
          <span>${elem.subPrice}</span>
        </div>
        <div className={styles.buttonBlock}>
          <button
            onClick={() => {
              const newCount = elem.count - 1;
              changeProductCount(newCount, elem.item.id, dispatch);
            }}
          >
            -
          </button>
          <span>
            {elem.count != 0
              ? elem.count
              : deleteCartProduct(elem.item.id, dispatch)}
          </span>
          <button
            onClick={() => {
              const newCount = elem.count + 1;

              changeProductCount(newCount, elem.item.id, dispatch);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
