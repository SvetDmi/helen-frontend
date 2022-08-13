import React from "react";
import {
  Route,
  Switch,
  useHistory,
  withRouter,
  Redirect,
} from "react-router-dom";
import {
  deleteCard,
  editCard,
  getCards,
  postCard,
  getSeries,
} from "../utils/api/cardsApi";
import { adminEnter, checkToken, refreshHeaders } from "../utils/api/adminApi";
import Poems from "./Poems";
import AdminEditor from "./AdminEditor";
import AdminLogin from "./AdminLogin";
import OpenedCard from "./OpenedCard";
import PopupWithLink from "./PopupWIthLink";
import PopupWithoutInputs from "./PopupWIthoutInputs";
import Header from "./Header";
import Seria from "./Seria";
import Autor from "./Autor";
import SeriesList from "./SeriesList";
import ProtectedRoute from "./Details/ProtectRoutes";
import Footer from "./Footer";

import AdminEditorNews from "./AdminEditorNews";
import { postNewsblock, getNewsblock } from "../utils/api/newsApi";

function App({ location }) {
  const history = useHistory();

  //СТЕЙТЫ
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [isSerCards, setSerCards] = React.useState([]);
  const [isSelectedCard, setSelectedCard] = React.useState({});

  const [isEditPopupOpen, setEditPopupOpen] = React.useState(false);
  const [isPostPopupOpen, setPostPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false);

  const [isSerName, setSerName] = React.useState("");
  const [initSeries, setInitSeries] = React.useState([]);
  const [showTags, setShowTags] = React.useState(false);
  const [newsblock, setNewsblock] = React.useState({});
  const [foundCards, setFoundCards] = React.useState([]);
  const [isSearch, setSearch] = React.useState(false);

  //ЭФФЕКТЫ

  //ОТОБРАЖЕНИЕ КАРТОЧЕК
  React.useEffect(() => {
    getCards()
      .then((poemsData) => {
        // localStorage.setItem("localData", JSON.stringify(poemsData));
        // const localData = JSON.parse(localStorage.getItem("localData"));
        // console.log(poemsData);
        setCards(poemsData);
      })
      .catch((err) => {
        console.log(err);
      });
    getSeries()
      .then((data) => {
        setInitSeries(data);
      })
      .catch((err) => {
        console.log(err);
      });
    getNewsblock()
      .then((data) => {
        setNewsblock(data[0]);
        // console.log(data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  //СОЗДАНИЕ НОВОЙ КАРТОЧКИ

  function handlePostCard(card) {
    postCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        setPostPopupOpen(true);
        // console.log(card)
      })
      .catch((err) => {
        if (err === "Ошибка: 413") {
          alert(
            "Картинка слишком большая, нужна до 100 кб, оптимально 333 х 222 px"
          );
        }
        alert(err);
      });
  }

  //Отображение подменю с темами

  const closeTags = () => {
    setShowTags(false);
  };

  const openTags = () => {
    setShowTags(true);
  };

  // function handleSelectedCard(card) {
  //     setSelectedCard({
  //         title: card.title,
  //         text: card.text,
  //         wrote: card.wrote,
  //         year: card.year,
  //         image: card.image,
  //         tags: card.tags,
  //         series: card.series,
  //         _id: card._id
  //     })
  //     // console.log(card._id)
  // }

  // function handleSelectedCard(card) {
  //     getCard(card._id)
  //         .then(data => {
  //             setSelectedCard(data)
  //         })
  //         .catch((err) => {
  //             console.log(err)
  //         });

  //     // console.log(card._id)
  // }

  function handleEditCard(card) {
    console.log(card);
    editCard(card)
      .then((newCard) => {
        const newCards = cards.map((item) =>
          item._id === card._id ? newCard : item
        );
        setCards(newCards);
        setEditPopupOpen(true);
      })
      .catch((err) => {
        if (err === "Ошибка: 413") {
          alert(
            "Картинка слишком большая, нужна до 100 кб, оптимально 333 х 222 px"
          );
        }
        alert(err);
      });
  }

  // УДАЛЕНИЕ КАРТОЧКИ

  function handleDeletePopupOpen(card) {
    setDeletePopupOpen(true);
    setSelectedCard(card);
    console.log(card);
  }

  function handleCardDelete(card) {
    deleteCard(card)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        setDeletePopupOpen(false);
      })
      .catch((err) => {
        console.log(`При удалении карточки: ${err}`);
      });
  }

  // ЗАКРЫТИЕ ПОПАПОВ

  function handlePopupClose() {
    setEditPopupOpen(false);
    setPostPopupOpen(false);
    setDeletePopupOpen(false);
    // setShowPoemOpen(false)
    setSelectedCard({});
  }

  //СОРТИРОВКА КАРТОЧЕК ПО рубрикам меню

  function handleTagList(id) {
    // const localData = JSON.parse(localStorage.getItem("localData"));
    // const newCards = localData.filter((card) => card.tags[id].isChecked === true
    // );
    // setCards(newCards)
    getCards()
      .then((poemsData) => {
        const newCards = poemsData.filter(
          (card) => card.tags[id].isChecked === true
        );
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSerList(name) {
    // const localData = JSON.parse(localStorage.getItem("localData"));
    // const newCards = localData.filter((card) => card.series === name);
    // setSerName(name)
    // setCards(newCards)
    // setSerName(name);

    getCards()
      .then((poemsData) => {
        const newCards = poemsData.filter((card) => card.series === name);
        setSerCards(newCards);
        setSerName(name);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeSeries() {
    setSerCards([]);
    setSerName("");
  }

  function handleAllList() {
    // const localData = JSON.parse(localStorage.getItem("localData"));
    // setCards(localData)
    getCards()
      .then((poemsData) => {
        setCards(poemsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      handleSerList(name);
    }
  }, []);

  //ВХОД ДЛЯ АДМИНА
  const tokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            // console.log(isLoggedIn);
          }
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}. Проблема с токеном`);
          setLoggedIn(false);
        });
    }
  };

  // const tokenCheck = () => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //
  //                 setLoggedIn(true)
  //                 console.log(isLoggedIn)
  //             }
  //
  //        else {
  //                 setLoggedIn(false);
  //             }
  //
  // };

  React.useEffect(() => {
    tokenCheck();
  }, []);

  function handleLogin(login, password) {
    return adminEnter(login, password)
      .then((res) => {
        if (!res) {
          alert("Проверьте правильность введения логина и пароля");
          setLoggedIn(false);
        } else {
          localStorage.setItem("token", res.token);
          tokenCheck();
          refreshHeaders();
          setLoggedIn(true);
          history.push("/poems");
          console.log(isLoggedIn);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}. Пользователь с такими данными не найден`);
        setLoggedIn(false);
      });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    // refreshHeaders();
    history.push("/poems");
  }

  // Добавление и скрытие новости

  function handleSubmitNewsblock(news) {
    console.log(news);
    postNewsblock(news)
      .then((news) => {
        setNewsblock(news);
      })
      .catch((err) => {
        alert(err);
      });
    history.goBack();
  }

  //Поиск

  const handleFilterCards = (cards, searchWord, datatype) => {
    setSearch(true);
    if (!searchWord) {
      setFoundCards([]);
      return;
    } else if (datatype === "text") {
      const filteredData = cards.filter((card) => {
        const fits = card.text.toLowerCase().includes(searchWord.toLowerCase());
        return fits;
      });
      setFoundCards(filteredData);
    } else if (datatype === "title") {
      const filteredData = cards.filter((card) => {
        const fits = card.title
          .toLowerCase()
          .includes(searchWord.toLowerCase());
        return fits;
      });
      setFoundCards(filteredData);
    } else if (datatype === "wrote") {
      const filteredData = cards.filter((card) => {
        const fits = card.wrote
          .toLowerCase()
          .includes(searchWord.toLowerCase());
        return fits;
      });
      setFoundCards(filteredData);
    }
  };

  const handleClearSearch = () => {
    setSearch(false);
  };

  const exclusionArray = [
    "/edit",
    "/post",
    "/postNewsblock",
    "/poem",
    "/admin",
    "/stub",
  ];

  return (
    <div className="page">
      {exclusionArray.indexOf(location.pathname) < 0 && (
        <Header
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          onTagList={handleTagList}
          onAllList={handleAllList}
          openTags={openTags}
          closeTags={closeTags}
          showTags={showTags}
          newsblock={newsblock}
          d
          handleFilterCards={handleFilterCards}
          handleClearSearch={handleClearSearch}
          cards={cards}
          closeSer={closeSeries}
        />
      )}

      <Switch>
        <Redirect exact from="/" to="poems" />

        <Route path="/poems">
          <Poems
            isLoggedIn={isLoggedIn}
            cards={cards}
            closeTags={closeTags}
            onCardDelete={handleDeletePopupOpen}
            foundCards={foundCards}
            isSearch={isSearch}
            // onCardEdit={handleSelectedCard}
          />
        </Route>

        <Route path="/poem/:id">
          <OpenedCard
            openTags={openTags}
            // selectedCard={isSelectedCard}

            // onCardOpen={isShowPoemOpen}
            // onClose={handlePopupClose}
          />
        </Route>

        <Route path="/serieslist">
          <SeriesList initSeries={initSeries} onSerList={handleSerList} />
        </Route>

        <Route path="/seria/:id">
          <Seria
            cards={isSerCards}
            titleOfSeria={isSerName}
            closeSer={closeSeries}
          />
        </Route>

        <Route path="/about">
          <Autor />
        </Route>

        <Route path="/admin">
          {/* {isLoggedIn && <Redirect to="./poems" />} */}
          <AdminLogin onLogin={handleLogin} />
        </Route>

        {/*ФОРМА РЕДАКТИРОВАНИЯ*/}
        <ProtectedRoute path="/edit/:id" loggedIn={isLoggedIn}>
          <AdminEditor
            handleSubmit={handleEditCard}
            // selectedCard={isSelectedCard}
            // cardId={isSelectedCard._id}
          />
        </ProtectedRoute>

        {/*ФОРМА СОЗДАНИЯ*/}
        <ProtectedRoute path="/post" loggedIn={isLoggedIn}>
          <AdminEditor handleSubmit={handlePostCard} />
        </ProtectedRoute>

        <ProtectedRoute path="/postNewsblock" loggedIn={isLoggedIn}>
          <AdminEditorNews handleSubmit={handleSubmitNewsblock} />
        </ProtectedRoute>
      </Switch>

      {exclusionArray.indexOf(location.pathname) < 0 && <Footer />}

      <PopupWithoutInputs
        card={isSelectedCard}
        handleSubmit={handleCardDelete}
        isOpen={isDeletePopupOpen}
        onClose={handlePopupClose}
        formName=" deleteCard"
        formTitle=" Вы уверены? Удаление отменить невозможно!"
        buttonText="Да"
      />

      <PopupWithLink
        isOpen={isPostPopupOpen}
        onClose={handlePopupClose}
        formTitle="Сохранение прошло успешно"
        buttonText="Закрыть"
      />

      <PopupWithLink
        isOpen={isEditPopupOpen}
        onClose={handlePopupClose}
        formTitle="Изменения внесены"
        buttonText="Закрыть"
      />
    </div>
  );
}

export default withRouter(App);
