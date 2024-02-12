import { setCart } from "../store/clices/DataSlice";
import { calcSubPrice, calcTotalPrice } from "./cartFunctions";

// получение данных из localStorage
export const getCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        products: [],
        totalPrice: 0,
      })
    );
  } else {
    return cart;
  }
};

// добавление даннх в localStorage
export const addProductToLoaclStorage = (product, dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = { products: [], totalPrice: 0 };
  }
  let newProduct = {
    item: product,
    count: 1,
    subPrice: +product.price,
  };
  let productToFind = cart.products.filter(
    (elem) => elem.item.id === product.id
  );

  if (productToFind.length === 0) {
    cart.products.push(newProduct);
  } else {
    cart.products = cart.products.filter((elem) => elem.item.id != product.id);
  }

  cart.totalPrice = calcTotalPrice(cart.products);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(setCart(cart));
};

//изменение количества товара и перерасчет стоимости
export const changeProductCount = (count, id, dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  cart.products = cart.products.map((product) => {
    if (product.item.id == id) {
      product.count = count;
      product.subPrice = calcSubPrice(product);
    }
    return product;
  });
  cart.totalPrice = calcTotalPrice(cart.products);

  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(setCart(cart));
};

// удаление товара
export const deleteCartProduct = (id, dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  cart.products = cart.products.filter((elem) => elem.item.id !== id);

  cart.totalPrice = calcTotalPrice(cart.products);

  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(setCart(cart));
};
