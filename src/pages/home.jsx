import React, { useState, useEffect } from "react";
import Page from "../components/page";
import ProductItem from "../components/productItem";

const HomePage = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/watches")
      .then((response) => response.json())
      .then((data) => {
        setWatches(data);
      });
  }, []);

  return (
    <Page>
      <div className="banner">
        <img
          alt="banner"
          src="https://image-us.samsung.com/SamsungUS/home/mobile/wearables/pf/070220/Galaxy_Watch_Active_PF_Banner_DT_1440x350.jpg?$header-jpg$"
        />
        <div className="banner-description">
          <h1>Reaching your goals never looked so good</h1>
          <p>
            Break into a new world of wellness tracking with select Galaxy Watch
            Active smartwatches. Now starting from only $169.99.
          </p>
          <a href="/cart">Buy now</a>
        </div>
      </div>
      <div style={{ background: "#fff", height: "50px" }}></div>
      <div className="catalog">
        <div className="filter">
          <h1>BRANDS</h1>
          <ul>
            <li>
              <input type="checkbox" />
              <span>Apple</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Nomad</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>X-Doria</span>
            </li>
          </ul>
          <div className="divider"></div>
          <h1>PRICES</h1>
          <ul>
            <li>
              <input type="checkbox" />
              <span>0 - 1 000 ₽</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>1 000 - 5 000 ₽</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>5 000 - 10 000 ₽</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>10 000 - 25 000 ₽</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>25 000 - 50 000 ₽</span>
            </li>
          </ul>
        </div>
        <div className="widgets">
          {watches.map((w, k) => (
            <ProductItem product={w} key={k} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
