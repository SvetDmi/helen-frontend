import React from "react";


export default function CardOfSeries({ card }) {
  function createContent() {
    return { __html: card.text };
  }

  return (
    <li className="cardSer">
      <h3 className="title title3__poem_short">{card.title}</h3>
      <p
        className="text text2__poem_full "
        dangerouslySetInnerHTML={createContent()}
      />
      <div className="vignette_down"></div>
    </li>
  );
}
