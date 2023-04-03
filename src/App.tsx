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
              <div className="flex tile__stars">
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
              <div className="tile__details__capacity">
                182 Zimmer · 12 Tagungsräume
              </div>
              <div className="flex tile__details__ratings">
                <div className="flex flex--gap tile__details__hygiene">
                  <div className="tile__details__hygiene-icon" />
                  <span>Hygiene-Zertifikat</span>
                </div>
                <div className="flex flex--gap tile__details__rating">
                  <div className="tile__details__grade">7,2</div>
                  <span>Sehr gut</span>
                </div>
              </div>
            </div>

            <div className="tile__link-details">
              <a href="#">Details ansehen</a>
            </div>
            <div className="tile__price_details">ab 59€</div>

            <button className="tile__selection-button">
              <span className="tile__selection-button__icon" />
              Auswählen
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
