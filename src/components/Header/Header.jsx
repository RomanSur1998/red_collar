import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import styles from "./Header.module.css";
import { icons } from "../../assets";
import FilterButton from "../FilterButton/FilterButton";
import { setCategory, setModal, setSearch } from "../../store/clices/DataSlice";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import {
  getProductsList,
  getSearchProducts,
} from "../../store/actions/DataActions";

const Header = ({ catagoryList }) => {
  const dispatch = useDispatch();
  const { search, cart } = useSelector((state) => state.data);
  const [showSearch, setShowSearch] = useState(false);
  const { data, skipConuter } = catagoryList;
  function handleSearchParama(value) {
    dispatch(setSearch(value));
  }
  //* debounce search parameter
  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearchTerm.length > 3) {
      dispatch(getSearchProducts(search));
    } else {
      dispatch(getProductsList(skipConuter));
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <div className={styles.container}>
        <div>
          {showSearch ? (
            <form action="" className={styles.form}>
              <label htmlFor="">
                <button
                  className={styles.show}
                  onClick={() => {
                    setShowSearch(!showSearch);
                  }}
                >
                  <img src={icons.search} alt="" />
                </button>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => {
                    handleSearchParama(e.target.value);
                  }}
                />
              </label>
              <button
                className={styles.cancel}
                onClick={() => {
                  setShowSearch(!showSearch);
                }}
              >
                <img src={icons.cancel} alt="" />
              </button>
            </form>
          ) : (
            <button
              className={styles.show}
              onClick={() => {
                setShowSearch(!showSearch);
              }}
            >
              <img src={icons.search} alt="" />
            </button>
          )}
        </div>

        <Swiper
          slidesPerView={7.5}
          spaceBetween={3}
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode, Pagination]}
          className={styles.cont}
        >
          <SwiperSlide>
            <FilterButton name={"all"} />
          </SwiperSlide>
          {data?.map((category) => {
            return (
              <SwiperSlide>
                <FilterButton name={category} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div>
          <button
            className={styles.card}
            style={
              cart.products.length != 0
                ? {
                    backgroundColor: "#3625FF",
                    color: "#fff",
                  }
                : null
            }
            onClick={() => {
              dispatch(setModal());
            }}
          >
            <img
              src={cart.products.length == 0 ? icons.menu_buttons : icons.cart}
              alt=""
            />
            cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
