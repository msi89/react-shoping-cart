import React, { useContext } from "react";
import { BaseContext } from "../store/context";
import Page from "../components/page";
import { format } from "../helpers";
import { UPDATE_CART, REMOVE_FROM_CART } from "../store/actions";

const CartPage = () => {
  const context = useContext(BaseContext);

  function handleUpdate(e, id) {
    context.setAction({
      type: UPDATE_CART,
      payload: { id: id, qte: e.target.value },
    });
  }

  function handlerClick(product) {
    console.log("removed cart", product);
    context.setAction({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  }

  function total() {
    const reduce = context.cart.reduce((prev, current, index) => {
      if (index > 1) {
        return Number(prev) + Number(current.price);
      }
      return Number(prev.price) + Number(current.price);
    });
    return format.toRuble(reduce);
  }

  return (
    <Page>
      <div
        className="container"
        style={{ background: "#fff", margin: "100px auto" }}
      >
        <table className="cart-table">
          <tbody>
            <tr>
              <td colSpan="3">
                <h2>Total:</h2>
              </td>
              <td colSpan="2">
                <h1 style={{}}>{total()}</h1>
              </td>
            </tr>
            {context.cart.map((c, k) => (
              <tr key={k}>
                <td>
                  <img src={c.thumb} alt="" width="78" />
                </td>
                <td>
                  <span>{c.name}</span>
                </td>
                <td>
                  <h3>{format.toRuble(c.price * c.qte)}</h3>
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    defaultValue={c.qte}
                    onChange={(e) => handleUpdate(e, c.id)}
                  />
                </td>
                <td>
                  <button onClick={() => handlerClick(c)}>Remove</button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3">
                <h2>Total:</h2>
              </td>
              <td colSpan="2">
                <h1 style={{}}>{total()}</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Page>
  );
};

export default CartPage;
