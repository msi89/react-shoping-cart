export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART = "UPDATE_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addToCart(product, state) {
  const newCart = [...state.cart];
  let updatedProduct = newCart.find(
    (prod) => parseInt(prod.id) === parseInt(product.id)
  );
  if (updatedProduct) {
    updatedProduct.qte++;
  } else {
    newCart.push({ ...product, qte: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(newCart));
  return {
    ...state,
    cart: newCart,
  };
}

export function updateCart(product, state) {
  const newCart = [...state.cart];
  let updatedProduct = newCart.find(
    (prod) => parseInt(prod.id) === parseInt(product.id)
  );
  if (updatedProduct) {
    updatedProduct.qte = product.qte;
  }
  localStorage.setItem("cart", JSON.stringify(newCart));
  return {
    ...state,
    cart: newCart,
  };
}

export function removeFromCart(product, state) {
  const newCart = state.cart.filter(
    (prod) => parseInt(prod.id) !== parseInt(product.id)
  );
  localStorage.setItem("cart", JSON.stringify(newCart));
  return {
    ...state,
    cart: newCart,
  };
}
