import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";

import { getCardById } from "../utils/api/cardsApi";

function OpenedCard({ openTags }) {
  const { id } = useParams();
  const [card, setCard] = React.useState("");

  const history = useHistory();
  const startRef = React.useRef();

  // React.useEffect(() => {
  //     setCard(selectedCard)
  // }, [selectedCard])

  // React.useEffect(() => {
  //   getCardById(id).then((data) => {
  //     setCard(data);
  //   });
  // }, [id]);

  React.useEffect(() => {
    getCardById(id)
      .then((data) => {
        setCard(data);
        return data;
      })
      .then((data) => {
        startRef.current.scrollIntoView({ behavior: "smooth" });

        window.Ya.share2("ya", {
          theme: {
            services: "vkontakte,odnoklassniki,telegram",
            lang: "ru",
            limit: 0,
            size: "m",
            shape: "round",
            moreButtonType: "long",
            popupDirection: "top",
            popupPosition: "outer",
          },
          content: {
            title: `"${data.title}"`,
            url: `https://helen.spb.ru/poem/${id}`,
            description:
              "Автор: Елена Михайлова (творческий псевдоним: Хелен Кловская)",

            image: "https://helen.spb.ru/seo.jpg",
          },
        });
      });
  }, [id]);

  function handleClose() {
    openTags();
    if (history.action === "POP") {
      history.push("/poems");
    } else {
      history.goBack();
    }
  }

  function createContent() {
    return { __html: card.text };
  }

  const showSeria = (series) => {
    if (series === "---") {
      return null;
    }
    return (
      <Link to="/serieslist">
        <p className="text text5_seria">Из цикла "{card.series}"</p>
      </Link>
    );
  };

  return (
    <>
      <section
        itemscope
        itemtype="CreativeWork"
        className="openedCard"
        ref={startRef}
      >
        <div className="openedCard__top">
          <button
            type=" button"
            className=" button button__close"
            onClick={handleClose}
          />

          <h3 itemprop="name" className=" title title3__poem_full">
            {card.title}
          </h3>
          {showSeria(card.series)}
        </div>
        {/* <div className=" openedCard__poem"> */}
        <p
          itemprop="exampleOfWork"
          className=" text text2__poem_full"
          dangerouslySetInnerHTML={createContent()}
        />
        <p itemprop="dateCreated" className=" title title5__mini">
          {card.wrote}
        </p>
        {/* </div> */}
        <div id="ya" className="ya-share2 openedCard__share"></div>
      </section>
    </>
  );
}

export default OpenedCard;
