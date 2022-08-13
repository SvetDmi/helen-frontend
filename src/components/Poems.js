import React from "react";
import Card from "./Card";

function Poems({
  isLoggedIn,
  cards,
  onCardDelete,
  closeTags,
  foundCards,
  isSearch,
}) {
  // зависимость от ширины экрана

  const [countCards, setCountCards] = React.useState(12);
  const [countAdd, setCountAdd] = React.useState(3);
  const [windowWidth, setWindowWidth] = React.useState(undefined);

  function setCount(num, count, cardsNum) {
    setCountAdd(num);
    if (sessionStorage.count) {
      setCountCards(count);
    } else {
      setCountCards(cardsNum);
    }
  }

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);

      let count = sessionStorage.getItem("count");

      if (windowWidth > 940) {
        setCount(3, count, 12);
      } else if (windowWidth > 640 && windowWidth <= 940) {
        setCount(2, count, 8);
      } else {
        setCount(1, count, 1);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  function handleMoreCards() {
    let newCount = +countCards + countAdd;
    setCountCards(newCount);
    sessionStorage.setItem("count", newCount);
  }

  return (
    <section className="page__section poems">
      <ul className="cards">
        {!isSearch
          ? cards
              .slice(0, countCards)
              .map((card) => (
                <Card
                  key={card._id}
                  isLoggedIn={isLoggedIn}
                  card={card}
                  closeTags={closeTags}
                  onCardDelete={onCardDelete}
                />
              ))
          : foundCards.map((card) => (
              <Card
                key={card._id}
                isLoggedIn={isLoggedIn}
                card={card}
                closeTags={closeTags}
                onCardDelete={onCardDelete}
              />
            ))}
      </ul>

      <button
        className={`${
          cards.length > countCards
            ? "button__morePoems"
            : "button__morePoems_hidden"
        }`}
        type="button"
        onClick={handleMoreCards}
      >
        Ещё
      </button>
    </section>
  );
}

export default Poems;
