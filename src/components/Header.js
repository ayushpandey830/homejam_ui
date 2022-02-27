import React from 'react';
import "../App.css";


function Header() {
  return (
    <header className="banner">
      <div className="nav">
        <div className="logo">
          <img src="/img12.png" alt="not available" />
        </div>
        <div className="menu">
          <div className="img1">
            <img src="/search.png" alt="" />
            <p>Search</p>{" "}
          </div>
          <div className="help">
            <p>Help</p>
          </div>
          <div className="account">
            <p>Account</p>
          </div>
          <div className="basket">
            <img src="/Basket.png" alt="" />
          </div>
        </div>
      </div>

      <div className="banner_contents">
        <h1 className="banner_title">Cari Cari</h1>

        <h1 className="banner_description">
          Live from their sofa to yours. Get closer to your favourite artists,
          and never miss out.
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Header