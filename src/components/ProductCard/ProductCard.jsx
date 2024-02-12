import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { icons } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// import { addProductToCart } from "../../helpers/cartHelper";
import { useDispatch } from "react-redux";
import { addProductInCart } from "../../store/clices/DataSlice";
import { addProductToLoaclStorage } from "../../helpers/cartHelper";
import { getDiscount } from "../../helpers/getDiscount";

const ProductCard = ({
  description,
  images,
  brand,
  discountPercentage,
  rating,
  price,
  title,
  product,
}) => {
  const [isShowFullDescr, setIsShowFullDescr] = useState(false);
  const dispath = useDispatch();

  function getDescriptinLine() {
    if (description?.length > 20 && !isShowFullDescr) {
      return (
        <p className={styles.description}>
          {`${description.slice(0, 30)}... `}{" "}
          <button
            className={styles.moreButton}
            onClick={() => {
              setIsShowFullDescr(true);
            }}
          >
            Read more
          </button>
        </p>
      );
    }
  }
  return (
    <div className={styles.cardContainer}>
      {isShowFullDescr ? (
        <>
          <div className={styles.rating}>
            <img src={icons.star} alt="" />
            <span>{rating}</span>
          </div>
          <h3 className={styles.title}>
            <span>{brand}</span> {title}
          </h3>
          <div className={styles.descriptionAct}>
            {description}
            <div>
              <button
                className={styles.moreButton}
                onClick={() => {
                  setIsShowFullDescr(false);
                }}
              >
                Hide description
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className={styles.discount}>
            <span>{discountPercentage}</span> off sale
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {images.map((image) => {
                return (
                  <SwiperSlide>
                    <img src={image} alt="" className={styles.images} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}

      <div>
        {isShowFullDescr || (
          <div className={styles.rating}>
            <img src={icons.star} alt="" />
            <span>{rating}</span>
          </div>
        )}
        {isShowFullDescr || (
          <h3 className={styles.title}>
            <span>{brand}</span> {title}
          </h3>
        )}

        {getDescriptinLine()}
        <div className={styles.priceContainer}>
          <button
            className={styles.buttonPrice}
            onClick={() => {
              addProductToLoaclStorage(product, dispath);
            }}
          >
            <img src={icons.cart} alt="" /> ${price}
          </button>
          <span>${getDiscount(price, discountPercentage)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
