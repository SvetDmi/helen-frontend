import React from "react";
import CardOfSeries from "./CardOfSeries";
import Vig from "../images/vig.svg";
import { useHistory, useParams } from "react-router-dom";

function Seria({ cards, titleOfSeria, closeSer }) {
  const history = useHistory();
  function handleClose() {
    history.goBack();
    localStorage.removeItem("name");
    closeSer();
  }

  return (
    <section className="page__section">
      <ul className="series">
        <img src={Vig} alt="" className="vignette_top" />
        <h2 className="title title__seria">{`"${titleOfSeria}"`}</h2>
        <img src={Vig} alt="" className="vignette_top" />

        {cards.reverse().map((card) => (
          <CardOfSeries key={card._id} card={card} />
        ))}
        <button
          type=" button"
          className=" button button__morePoems"
          onClick={handleClose}
        >
          Назад{" "}
        </button>
      </ul>
    </section>
  );
}

export default Seria;
