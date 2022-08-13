import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCardById, getSeries, postSeria } from "../utils/api/cardsApi";

import MyEditor from "./Details/MyEditor";
import FileInput from "./Details/FileInput";
import CheckBox from "./Details/CheckBox";
import { initTags } from "../utils/initArray";

function AdminEditor({ handleSubmit }) {
  const history = useHistory();
  const { id } = useParams();

  const [tags, setTags] = React.useState(initTags);
  const [seria, setSeria] = React.useState("---");
  const [cardId, setId] = React.useState("");

  const [title, setTitle] = React.useState(undefined);
  const [text, setText] = React.useState("");
  const [wrote, setWrote] = React.useState("");
  const [year, setYear] = React.useState("");
  const [image, setImage] = React.useState(undefined);
  const [newSeria, setNewSeria] = React.useState("");
  const [initSeries, setInitSeries] = React.useState([]);

  React.useEffect(() => {
    if (!id) {
      getSeries()
        .then((data) => {
          setInitSeries(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getCardById(id)
        .then((data) => {
          setTitle(data.title);
          setText(data.text);
          setWrote(data.wrote);
          setYear(data.year);
          setImage(data.image);
          setTags(data.tags);
          setSeria(data.series);
          setId(data._id);
        })
        .catch((err) => {
          console.log(err);
        });
      getSeries()
        .then((data) => {
          setInitSeries(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  //ОТСЛЕЖИВАНИЕ ИЗМЕНЕНИЙ В ПОПАПАХ
  function handleTitleChange(e) {
    setTitle(e.target.value || "* * *");
    // console.log(e.target.value)
  }

  function handleWroteChange(e) {
    setWrote(e.target.value);
    // console.log(e.target.value)
  }

  function handleYearChange(e) {
    setYear(e.target.value);
    console.log(e.target.value);
  }

  function handleTextChange(val) {
    setText(val);
  }

  function handleImageChange(e) {
    console.log(e.target.files);
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  let imagePreview = null;

  if (image) {
    imagePreview = (
      <img className="editor__imgPreview grid7" src={image} alt="" />
    );
  } else {
    imagePreview = (
      <div className="editor__imgNoPreview grid7">Загрузите картинку</div>
    );
  }

  function handleTagsChange(e) {
    const newTags = tags.map((tag) => {
      if (tag.value === e.target.value) {
        return { ...tag, isChecked: e.target.checked };
      }
      return tag;
    });
    setTags(newTags);
    console.log(newTags);
  }

  function handleSeriesChange(e) {
    setSeria(e.target.value || "");
  }

  function handleNewSeriaChange(e) {
    // setNewSeria(e.target.value);
    setNewSeria(e.target.value);
  }

  function handleNewSeriaSubmit(e) {
    e.preventDefault();
    postSeria({ myId: 20 + initSeries.length, value: newSeria, name: newSeria })
      .then((newSer) => {
        setInitSeries([...initSeries, newSer]);
      })
      .then((data) => setNewSeria(""))
      .catch((err) => {
        console.log(err);
      });
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit({
      title: title,
      text: text,
      wrote: wrote,
      year: year,
      image: image,
      tags: tags,
      series: seria,
      _id: cardId,
    });
  }

  return (
    <div className="editor__container page__section">
      <button
        type="button"
        className="button button__close"
        onClick={history.goBack}
      ></button>
      <form
        name="element"
        action="#"
        method="post"
        className="editor__form"
        noValidate
        onSubmit={onSubmit}
      >
        <h3 className="text3">Форма загрузки стихов</h3>

        <div className="editor__block">
          <label className="text_bold  grid1">Название</label>
          <input
            id="inputTitle"
            type="text"
            name="title"
            value={title || ""}
            placeholder="Обязательное поле"
            className="editor__input  grid2"
            // required minLength="1" maxLength="30"
            onChange={handleTitleChange}
          />

          <FileInput
            // grid3 grid4 grid7
            image={image}
            imagePreview={imagePreview}
            onImageChange={handleImageChange}
          />

          <label className="text_bold  grid5">Год создания </label>
          <input
            id="inputYear"
            type="text"
            name="year"
            value={year || ""}
            placeholder="Цифры - ГГГГ"
            className="editor__input  grid6"
            // required minLength="1" maxLength="30"
            onChange={handleYearChange}
          />

          <label className="text_bold  grid8">Дата/место создания </label>
          <input
            id="inputWrote"
            type="text"
            name="wrote"
            value={wrote || ""}
            placeholder="Текст"
            className="editor__input  grid9"
            // required minLength="1" maxLength="30"
            onChange={handleWroteChange}
          />

          <p className="text_bold grid10">Рубрики</p>
          <ul className="editor__checkbox grid11">
            {tags.map((tag) => {
              return (
                <CheckBox
                  key={tag.id}
                  checked={tag.isChecked}
                  value={tag.value}
                  name={tag.name}
                  onCheckboxChange={handleTagsChange}
                />
              );
            })}
          </ul>

          <p className="text_bold grid12">Циклы</p>
          <select
            className="editor__checkbox grid13"
            value={seria}
            onChange={handleSeriesChange}
          >
            {initSeries.map((ser) => {
              return (
                <option key={ser.myId} value={ser.value}>
                  {ser.value || ""}
                </option>
              );
            })}
          </select>

          <label className="text_bold grid14">Добавить цикл </label>
          <input
            id="inputSeria"
            type="text"
            name="seria"
            value={newSeria || ""}
            placeholder="Текст"
            className="editor__input grid15 "
            // required minLength="1" maxLength="30"
            onChange={handleNewSeriaChange}
          />

          <button className="grid16" onClick={handleNewSeriaSubmit}>
            Добавить
          </button>
        </div>

        <MyEditor
          inititalValue=""
          value={text}
          onEditorChange={handleTextChange}
        />

        <button type="submit" className="button button__save">
          {" "}
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default AdminEditor;
