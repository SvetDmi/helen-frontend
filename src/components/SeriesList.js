import React from "react";
import { Link, useParams } from "react-router-dom";

import Vig from "../images/2461548.svg";

function SeriesList({ initSeries, onSerList }) {
  function onSer(e) {
    const name = e.target.name;
    localStorage.setItem("name", name);

    onSerList(name);

    console.log(name);
  }

  return (
    <section className="page__section">
      <ul className="seriesList">
        <h2 className="title title1">Поэтические циклы</h2>
        <img src={Vig} alt="" className="vignette_img" />

        {initSeries.map((ser) =>
          ser.myId === 20 ? null : (
            <Link key={ser.myId} to={`/seria/${ser.myId}`}>
              <li className="seriesList_item">
                <button
                  type="button"
                  id={ser.myId}
                  className="title title4 button button__seria"
                  name={ser.value}
                  onClick={onSer}
                >
                  {ser.value}
                </button>
              </li>
            </Link>
          )
        )}
      </ul>
    </section>
  );
}

export default SeriesList;
