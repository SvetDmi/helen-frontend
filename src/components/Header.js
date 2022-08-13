import React from "react";
import avatar2 from "../images/avatar2.png";
import { initTags } from "../utils/initArray";
import { Link, Redirect } from "react-router-dom";
import MainMenu from "./MainMenu";
import NewsBlock from "./NewsBlock";
import { Search } from "./Search";

export default function Header({
  isLoggedIn,
  onLogout,
  onTagList,
  openTags,
  closeTags,
  showTags,
  onAllList,
  newsblock,
  handleFilterCards,
  handleClearSearch,
  cards,
  closeSer,
}) {
  // const [headerSubtitle, setHeaderSubtitle] = React.useState('');
  // const [isNavClicked, setNavClicked] = React.useState('');
  const [isClicked, setClicked] = React.useState("");

  // const [isShowTags, setShowTags] = React.useState(false);
  // const [isShowSeries, setShowSeries] = React.useState(false);

  function handlePoemsClick(e) {
    // const id = e.target.id;
    openTags();
    // let subtitle = headerSubtitles.find(item => item.id === id);
    // setHeaderSubtitle(subtitle.subtitle);
    onAllList();
    setClicked(null);
    localStorage.setItem("number", null);
    closeSer();
  }

  function handleSeriesClick() {
    closeTags();
    setClicked(40);
    localStorage.setItem("number", 40);
    closeSer();
  }

  function handleAutorClick() {
    closeTags();
    setClicked(20);
    localStorage.setItem("number", 20);
    closeSer();
  }

  function onTag(e) {
    const id = e.target.id;
    setClicked(id);
    onTagList(id);
  }

  React.useEffect(() => {
    const number = localStorage.getItem("number");
    if (number) {
      setClicked(number);
    }
  }, []);

  return (
    <header className={`header header__tag_${isClicked}`}>
      <div className="page__section header__top ">
        <div className="header__top_mainTitles">
          <Link to="/about" className="title title__link">
            <h1 className="title title1">Хелен Кловская</h1>
          </Link>
          <Link to="/" className="title title__link">
            <h2 className="title title2">ПОЭЗИЯ</h2>
          </Link>
        </div>

        {newsblock.name === "newsshow" || isLoggedIn ? null : (
          <img
            src={avatar2}
            alt="Портрет автора"
            className={`header__autor header__autor_${isClicked}`}
          />
        )}

        <div className="header__block">
          {isLoggedIn && (
            <div className="header__block_top">
              <Search
                handleFilterCards={handleFilterCards}
                handleClearSearch={handleClearSearch}
                cards={cards}
              />
              <Link to="/postNewsblock">
                <button className="button button__edit2" type="button" />
              </Link>
              <Link to="/post">
                <button className="button button__edit" type="button" />
              </Link>

              <button
                type="button"
                className="button button__close button__close2"
                onClick={onLogout}
              ></button>
            </div>
          )}
          {newsblock.name === "newsshow" ? (
            <NewsBlock newsblock={newsblock} />
          ) : null}
        </div>
      </div>

      <div className="menu">
        <div className="page__section">
          <MainMenu
            onPoemsClick={handlePoemsClick}
            onSeriesClick={handleSeriesClick}
            onAutorClick={handleAutorClick}
          />

          {showTags === true ? (
            <div
              className={`menu__second_mobile ${
                showTags ? "menu__visible" : ""
              }`}
            >
              <nav
                className={`menu__second ${showTags ? "menu__visible" : ""}`}
              >
                <h3 className="title menu__title">По темам</h3>
                {initTags.map((tag) =>
                  tag.id !== "0" ? (
                    <button
                      key={tag.id}
                      type="button"
                      id={tag.id}
                      className={`button menu__button ${
                        isClicked === tag.id ? "menu__button_active" : ""
                      }`}
                      onClick={onTag}
                    >
                      {tag.name}
                    </button>
                  ) : null
                )}
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
