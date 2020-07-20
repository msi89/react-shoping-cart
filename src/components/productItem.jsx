import React, { useContext } from "react";
import { format } from "../helpers";
import { BaseContext } from "../store/context";
import { ADD_TO_CART } from "../store/actions";

const ProductItem = ({ product }) => {
  const context = useContext(BaseContext);

  function addToCart() {
    context.setAction({
      type: ADD_TO_CART,
      payload: product,
    });
  }

  return (
    <section className="card">
      <img src={product.thumb} alt={product.name} />
      <h1>
        <a href={product.url} target="_blank" rel="noopener noreferrer">
          {product.name}
        </a>
      </h1>
      <h2>{format.toRuble(product.price)}</h2>
      <button onClick={addToCart}>Add to Cart</button>
    </section>
  );
};

export default ProductItem;
