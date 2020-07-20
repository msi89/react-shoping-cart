import React from "react";
import { format } from "../helpers";

const CartItem = ({ product }) => {
  return (
    <section className="cart">
      <img src={product.thumb} alt={product.name} />
      <h1>
        <a href={product.url} target="_blank">
          {product.name}
        </a>
      </h1>
      <h2>{format.toRuble(product.price)}</h2>
      <button>Add to Cart</button>
    </section>
  );
};

export default CartItem;
