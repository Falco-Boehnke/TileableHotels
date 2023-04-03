import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="header"></header>
      <div className="header__title">Mobile</div>
      <main className="content-wrapper">
        <section className="tile-list">
          <div className="tile">
            <div className="tile__image">
              <img src="images/hotel-02.jpg" alt="" />
            </div>
            <div className="tile__title">
              <div className="tile__stars">
                <span className="tile__star" />
                <span className="tile__star" />
                <span className="tile__star" />
              </div>
              <h2>Hotel 2</h2>
              <span className="tile__title__location">
                Köln - 1,2 km entfernt vom Stadtzentrum
              </span>
            </div>
            <div className="tile__details">
              <div>182 Zimmer - 12 Tagungsräume</div>
              <div>
                <span>7,2</span>
                <span>Sehr gut</span>
              </div>
            </div>

            <div>
              <a href="#">Details ansehen</a>
            </div>
            <div>ab 59€</div>

            <button>Auswählen</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
