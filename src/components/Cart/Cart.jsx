import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import { icons } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/clices/DataSlice";
import CartCard from "../CartCard/CartCard";

const Cart = () => {
  const { cart } = useSelector((state) => state.data);
  console.log(cart, "Корзина");
  const dispatch = useDispatch();

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.contorller}>
          <div>
            <img src={icons.menu_buttons} alt="" />
            <span>card</span>
          </div>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(setModal());
            }}
          >
            <img src={icons.cancel} alt="" />
          </button>
        </div>
        <div className={styles.block}>
          <span> {cart.products.length == 0 ? "cart is empty :(" : null} </span>
          {cart?.products.map((elem) => {
            return (
              <CartCard elem={elem} key={elem.id} products={cart.products} />
            );
          })}
        </div>
        <div className={styles.total}>
          <span className={styles.position}>
            {cart.products.length} positions
          </span>
          <span className={styles.totalPrice}>${cart.totalPrice}</span>
        </div>
        <button
          className={styles.product}
          onClick={() => {
            dispatch(setModal());
          }}
        >
          back to products
        </button>
      </div>
    </div>
  );
};

export default Cart;
