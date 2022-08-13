import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/poem1.jpg";

//todo функцию для загрузки дефолтных картинок в зависимости от рубрики - как будет работать при нескольких рубриках?

function Card({ isLoggedIn, card, onCardDelete, closeTags }) {
  function onDelete() {
    onCardDelete(card);
  }

  function lineClamp(data) {
    let arr1 = data
      .replace(new RegExp("<br />", "g"), "|" + "<br />")
      .replace(new RegExp("<p>", "g"), "|" + "<p>")
      .split("|");

    let arr2 = arr1
      .filter(function (el) {
        return el !== "";
      })
      .slice(0, 4);

    return { __html: arr2.join("") };
  }

  return (
    <li className="card">
      {isLoggedIn && (
        <div className="card__top">
          <button
            type="button"
            className="button button__delete"
            onClick={onDelete}
          />
          <Link to={`/edit/${card._id}`}>
            <button type="button" className="button button__edit" />
          </Link>
        </div>
      )}
      <img
        src={card.image || defaultImg}
        alt={card.title}
        className="card__img"
      />
      <h3 className="title title3__poem_short">{card.title}</h3>
      <div
        className="text text2__poem_short"
        // dangerouslySetInnerHTML={createContent()}
        dangerouslySetInnerHTML={lineClamp(card.text)}
      />
      <Link to={`/poem/${card._id}`}>
        <button onClick={closeTags} className="button button__link title">
          {" "}
          Читать далее
        </button>
      </Link>
    </li>
  );
}

export default Card;
