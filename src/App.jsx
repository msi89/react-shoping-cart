import React, { useReducer } from "react";
import Layout from "./layouts";
import { Router } from "@reach/router";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import { BaseContext } from "./store/context";
import { baseReducer, intialBaseState } from "./store/reducers";

function App() {
  const [state, dispatch] = useReducer(baseReducer, intialBaseState);
  // const [state, setState] = useState({ cart: [] });
  return (
    <BaseContext.Provider value={{ ...state, setAction: dispatch }}>
      <Layout>
        <Router>
          <HomePage path="/" />
          <CartPage path="/cart" />
        </Router>
      </Layout>
    </BaseContext.Provider>
  );
}

export default App;
