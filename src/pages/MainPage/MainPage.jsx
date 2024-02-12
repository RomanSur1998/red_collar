import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/Header";
import styles from "./MainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getListCategory,
  getOneCategoryProducts,
  getProductsList,
} from "../../store/actions/DataActions";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";
import { useInView } from "react-intersection-observer";
import { setCart, setSkip } from "../../store/clices/DataSlice";
import Cart from "../../components/Cart/Cart";
import { getCart } from "../../helpers/cartHelper";

const MainPage = () => {
  const dispatch = useDispatch();
  const {
    category,
    productsLists,
    status,
    skipConuter,
    categoryList,
    search,
    total,
    modal,
    cart,
  } = useSelector((state) => state.data);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  console.log(total, "что есть в работе");

  useEffect(() => {
    dispatch(getListCategory());
    dispatch(setCart(getCart()));
  }, []);

  useEffect(() => {
    if (category === "all") {
      dispatch(getProductsList(skipConuter));
    }
    dispatch(getOneCategoryProducts(category));
  }, [category]);

  useEffect(() => {
    if (inView && category == "all" && search == "") {
      dispatch(setSkip());
      dispatch(getProductsList(skipConuter));
    }
  }, [inView]);

  return (
    <>
      <div className={styles.container}>
        {modal ? <Cart /> : null}

        <Header catagoryList={categoryList} />
        <div className={styles.cardContainer}>
          {productsLists?.map((product) => {
            return (
              <ProductCard
                description={product.description}
                images={product.images}
                key={product.id}
                brand={product.brand}
                discountPercentage={product.discountPercentage}
                rating={product.rating}
                price={product.price}
                title={product.title}
                product={product}
              />
            );
          })}
        </div>
        <div ref={ref} className={styles.view}></div>
        {status ? <Loader /> : null}
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
